import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import moment from 'moment';

interface TimeSlot {
  startTime: string;
  endTime: string;
  status: string;
  availabilityId: number;
}

interface PrismaTimeSlot {
  id: number;
  startTime: Date;
  endTime: Date;
  status: string;
  availabilityId: number;
}

interface TimeSlotInput {
  startTime: string;
  endTime: string;
}

interface PrismaError extends Error {
  code?: string;
}

function getSlotTime(slot: TimeSlotInput | string, baseDate: Date, type: 'start' | 'end'): Date {
  if (typeof slot === 'string') {
    // Handle session times
    if (slot.includes('Early Morning Session')) {
      // Early Morning Session (00:00 - 08:00)
      return type === 'start' ? 
        moment(baseDate).startOf('day').toDate() : 
        moment(baseDate).set({ hours: 8, minutes: 0 }).toDate();
    } else if (slot.includes('Morning Session')) {
      // Morning Session (08:00 - 12:00)
      return type === 'start' ? 
        moment(baseDate).set({ hours: 8, minutes: 0 }).toDate() : 
        moment(baseDate).set({ hours: 12, minutes: 0 }).toDate();
    } else if (slot.includes('Afternoon Session')) {
      // Afternoon Session (12:00 - 20:00)
      return type === 'start' ? 
        moment(baseDate).set({ hours: 12, minutes: 0 }).toDate() : 
        moment(baseDate).set({ hours: 20, minutes: 0 }).toDate();
    } else if (slot.includes('Late Evening Session')) {
      // Late Evening Session (20:00 - 00:00)
      return type === 'start' ? 
        moment(baseDate).set({ hours: 20, minutes: 0 }).toDate() : 
        moment(baseDate).add(1, 'day').startOf('day').toDate();
    } else if (slot.includes('Full Day')) {
      // Entire Day (00:00 - 23:59)
      return type === 'start' ? 
        moment(baseDate).startOf('day').toDate() : 
        moment(baseDate).endOf('day').toDate();
    } else if (slot.match(/^\d{2}:00-\d{2}:00$/)) {
      // Hourly slots (HH:00-HH:00)
      const [startHour, endHour] = slot.split('-').map(time => parseInt(time.split(':')[0]));
      if (type === 'start') {
        return moment(baseDate).set({ hours: startHour, minutes: 0 }).toDate();
      } else {
        // Handle cases where end time is 00:00 (midnight)
        if (endHour === 0) {
          return moment(baseDate).add(1, 'day').startOf('day').toDate();
        }
        return moment(baseDate).set({ hours: endHour, minutes: 0 }).toDate();
      }
    }
  }
  
  // Handle TimeSlotInput type
  if (typeof slot !== 'string') {
    const time = type === 'start' ? slot.startTime : slot.endTime;
    const [hours, minutes] = time.split(':');
    return moment(baseDate).set({ hours: parseInt(hours), minutes: parseInt(minutes) }).toDate();
  }
  
  // Default return for unexpected cases
  return baseDate;
}

async function checkTimeSlotOverlap(
  prismaClient: typeof prisma,
  venueId: number,
  date: Date,
  startTime: Date,
  endTime: Date
): Promise<boolean> {
  const existingSlots = await prismaClient.timeSlot.findMany({
    where: {
      venueAvailability: {
        venueId: venueId,
        date: date
      }
    }
  });

  return existingSlots.some((slot: PrismaTimeSlot) => {
    const slotStart = new Date(slot.startTime);
    const slotEnd = new Date(slot.endTime);
    return (
      (startTime >= slotStart && startTime < slotEnd) ||
      (endTime > slotStart && endTime <= slotEnd) ||
      (startTime <= slotStart && endTime >= slotEnd)
    );
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handle DELETE request
  if (req.method === 'DELETE') {
    try {
      
      const { venueId, date } = req.query;
      
      if (!venueId || !date) {
        return res.status(400).json({ error: 'Venue ID and date are required' });
      }

      const baseDate = moment(date as string).startOf('day').toDate();

      // Use transaction to ensure both operations complete or none do
      await prisma.$transaction(async (prisma) => {
        // First find the availability record
        const availability = await prisma.venueAvailability.findUnique({
          where: {
            venueId_date: {
              venueId: Number(venueId),
              date: baseDate
            }
          }
        });

        if (availability) {
          // Delete all associated time slots first
          await prisma.timeSlot.deleteMany({
            where: {
              availabilityId: availability.id
            }
          });

          // Then delete the availability record
          await prisma.venueAvailability.delete({
            where: {
              id: availability.id
            }
          });
        }
      });

      return res.status(200).json({ message: 'Availability removed successfully' });
    } catch (error) {
      console.error('Error deleting venue availability:', error);
      // If record doesn't exist, return success anyway
      if ((error as PrismaError).code === 'P2025') {
        return res.status(200).json({ message: 'Availability already removed' });
      }
      return res.status(500).json({ error: 'Failed to delete venue availability' });
    }
  }

  // Handle POST request (keep your existing POST logic)
  if (req.method === 'POST') {
    try {
      const { venueId, date, status, timeSlots } = req.body;
      const baseDate = moment(date).startOf('day').toDate();

      // If status is null or undefined, delete the record
      if (status === null || status === undefined) {
        try {
          await prisma.$transaction(async (prisma) => {
            const availability = await prisma.venueAvailability.findUnique({
              where: {
                venueId_date: {
                  venueId: Number(venueId),
                  date: baseDate
                }
              }
            });

            if (availability) {
              // Delete time slots first
              await prisma.timeSlot.deleteMany({
                where: {
                  availabilityId: availability.id
                }
              });

              // Then delete availability
              await prisma.venueAvailability.delete({
                where: {
                  id: availability.id
                }
              });
            }
          });
          return res.status(200).json({ message: 'Availability removed successfully' });
          
        } catch (error) {
          if ((error as PrismaError).code === 'P2025') {
            return res.status(200).json({ message: 'Availability already removed' });
          }
          throw error;
        }
      }
      // Log incoming request for debugging
      console.log('Saving availability:', { venueId, date, status, timeSlots });

      // For direct status updates (AVAILABLE, NOT_AVAILABLE, FULLY_BOOKED)
      if (status !== 'PARTIALLY_BOOKED') {
        const availability = await prisma.venueAvailability.upsert({
          where: {
            venueId_date: {
              venueId: Number(venueId),
              date: baseDate
            }
          },
          update: {
            status,
            timeSlots: {
              deleteMany: {},
              create: [{
                startTime: moment(baseDate).startOf('day').toDate(),
                endTime: moment(baseDate).endOf('day').toDate(),
                status
              }]
            }
          },
          create: {
            venueId: Number(venueId),
            date: baseDate,
            status,
            timeSlots: {
              create: [{
                startTime: moment(baseDate).startOf('day').toDate(),
                endTime: moment(baseDate).endOf('day').toDate(),
                status
              }]
            }
          }
        });

        // Log saved result
        console.log('Saved availability:', availability);
        return res.status(200).json(availability);
      }

      // For PARTIALLY_BOOKED with time slots
      if (status === 'PARTIALLY_BOOKED' && timeSlots.length > 0) {
        const formattedTimeSlots = timeSlots.map((slot: TimeSlot | string) => ({
          startTime: getSlotTime(slot, baseDate, 'start'),
          endTime: getSlotTime(slot, baseDate, 'end'),
          status: 'PARTIALLY_BOOKED'
        }));

        // Check for overlapping time slots
        for (const slot of formattedTimeSlots) {
          const hasOverlap = await checkTimeSlotOverlap(
            prisma,
            Number(venueId),
            baseDate,
            slot.startTime,
            slot.endTime
          );

          if (hasOverlap) {
            // Merge overlapping slots or update existing ones
            // This is a simplified version - you might want to implement more complex merging logic
            const availability = await prisma.venueAvailability.upsert({
              where: {
                venueId_date: {
                  venueId: Number(venueId),
                  date: baseDate
                }
              },
              update: {
                status: 'FULLY_BOOKED',
                timeSlots: {
                  updateMany: {
                    where: {
                      startTime: {
                        gte: slot.startTime
                      },
                      endTime: {
                        lte: slot.endTime
                      }
                    },
                    data: {
                      status: 'FULLY_BOOKED'
                    }
                  }
                }
              },
              create: {
                venueId: Number(venueId),
                date: baseDate,
                status: 'PARTIALLY_BOOKED',
                timeSlots: {
                  create: formattedTimeSlots
                }
              }
            });

            return res.status(200).json(availability);
          }
        }

        // If no overlaps, create new time slots
        const availability = await prisma.venueAvailability.upsert({
          where: {
            venueId_date: {
              venueId: Number(venueId),
              date: baseDate
            }
          },
          update: {
            status: 'PARTIALLY_BOOKED',
            timeSlots: {
              create: formattedTimeSlots
            }
          },
          create: {
            venueId: Number(venueId),
            date: baseDate,
            status: 'PARTIALLY_BOOKED',
            timeSlots: {
              create: formattedTimeSlots
            }
          }
        });

        return res.status(200).json(availability);
      }

      return res.status(400).json({ error: 'Invalid status or time slots' });
    } catch (error) {
      console.error('Error saving venue availability:', error);
      return res.status(500).json({ error: 'Failed to save venue availability' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}