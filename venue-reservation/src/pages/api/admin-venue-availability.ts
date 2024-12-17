/*
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import moment from 'moment';

interface TimeSlotInput {
  startTime: string;
  endTime: string;
}

function getSlotTime(slot: TimeSlotInput | string, baseDate: Date, type: 'start' | 'end'): Date {
  if (typeof slot === 'string') {
    if (slot.includes('Full Day')) {
      return type === 'start' ? 
        moment(baseDate).startOf('day').toDate() : 
        moment(baseDate).endOf('day').toDate();
    }
    
    let hours = 0;
    if (slot.includes('Morning Session')) {
      hours = type === 'start' ? 8 : 12;
    } else if (slot.includes('Afternoon Session')) {
      hours = type === 'start' ? 12 : 20;
    } else if (slot.includes('Late Evening Session')) {
      hours = type === 'start' ? 20 : 0;
    } else if (slot.includes('Early Morning Session')) {
      hours = type === 'start' ? 0 : 8;
    } else {
      const [start, end] = slot.split('-');
      const time = type === 'start' ? start : end;
      hours = parseInt(time);
    }
    
    return moment(baseDate).set({ hours, minutes: 0 }).toDate();
  }
  
  const time = type === 'start' ? slot.startTime : slot.endTime;
  const [hours, minutes] = time.split(':');
  return moment(baseDate).set({ hours: parseInt(hours), minutes: parseInt(minutes) }).toDate();
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
      if ((error as any).code === 'P2025') {
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
          if ((error as any).code === 'P2025') {
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
        const formattedTimeSlots = timeSlots.map((slot: TimeSlotInput | string) => ({
          startTime: getSlotTime(slot, baseDate, 'start'),
          endTime: getSlotTime(slot, baseDate, 'end'),
          status: 'PARTIALLY_BOOKED'
        }));

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
              deleteMany: {},
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

        // Log saved result
        console.log('Saved partial availability:', availability);
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
*/

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import moment from 'moment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { venueId, date, status, timeSlots } = req.body;
      const baseDate = moment(date).startOf('day').toDate();

      // Delete existing availability and time slots
      await prisma.$transaction([
        prisma.timeSlot.deleteMany({
          where: {
            venueAvailability: {
              venueId: Number(venueId),
              date: baseDate
            }
          }
        }),
        prisma.venueAvailability.deleteMany({
          where: {
            venueId: Number(venueId),
            date: baseDate
          }
        })
      ]);

      // Create new availability with time slots
      const availability = await prisma.venueAvailability.create({
        data: {
          venueId: Number(venueId),
          date: baseDate,
          status: status,
          timeSlots: {
            create: timeSlots.map((slot: string) => {
              let startTime, endTime;

              if (slot.includes('Full Day')) {
                startTime = moment(baseDate).startOf('day');
                endTime = moment(baseDate).endOf('day');
              } else if (slot.includes('Session')) {
                const times = slot.match(/\d{2}:\d{2}/g);
                startTime = moment(baseDate).set('hour', parseInt(times![0].split(':')[0]));
                endTime = moment(baseDate).set('hour', parseInt(times![1].split(':')[0]));
              } else {
                const [start, end] = slot.split('-');
                startTime = moment(baseDate).set('hour', parseInt(start.split(':')[0]));
                endTime = moment(baseDate).set('hour', parseInt(end.split(':')[0]));
              }

              return {
                startTime: startTime.toDate(),
                endTime: endTime.toDate(),
                status: status
              };
            })
          }
        },
        include: {
          timeSlots: true
        }
      });

      return res.status(200).json(availability);
    } catch (error) {
      console.error('Error updating availability:', error);
      return res.status(500).json({ error: 'Failed to update availability' });
    }
  }  else if (req.method === 'DELETE') {
    try {
      const { venueId, date } = req.query;
      
      if (!venueId || !date) {
        return res.status(400).json({ error: 'Venue ID and date are required' });
      }

      const baseDate = moment(date as string).startOf('day').toDate();

      // Delete time slots and availability for the specific date
      await prisma.$transaction([
        prisma.timeSlot.deleteMany({
          where: {
            venueAvailability: {
              venueId: Number(venueId),
              date: baseDate
            }
          }
        }),
        prisma.venueAvailability.deleteMany({
          where: {
            venueId: Number(venueId),
            date: baseDate
          }
        })
      ]);

      return res.status(200).json({ message: 'Time slots deleted successfully' });
    } catch (error) {
      console.error('Error deleting time slots:', error);
      return res.status(500).json({ error: 'Failed to delete time slots' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}


