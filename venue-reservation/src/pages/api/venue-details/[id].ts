import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query;
  const venueId = parseInt(id as string);

  try {
    const venue = await prisma.venue.findUnique({
      where: { id: venueId },
      include: {
        availability: {
          include: {
            timeSlots: true
          }
        },
        questions: {
          select: {
            id: true,
            text: true
          }
        },
        reservations: {
          where: {
            reservationState: {
              status: {
                in: ["Pending", "Accepted"]
              }
            }
          },
          select: {
            timeSlots: true,
            reservationState: {
              select: {
                status: true
              }
            }
          }
        }
      }
    });

    if (!venue) {
      return res.status(404).json({ error: 'Venue not found' });
    }

    const reservedSlots = venue.reservations.reduce((acc, reservation) => {
      if (reservation.timeSlots) {
        reservation.timeSlots.forEach(slot => {
          const dateStr = slot.date.toISOString().split('T')[0];
          if (!acc[dateStr]) {
            acc[dateStr] = [];
          }
          acc[dateStr].push(`${slot.startTime}-${slot.endTime}`);
        });
      }
      return acc;
    }, {} as { [key: string]: string[] });

    const venueDetails = {          
      id: venue.id,
      name: venue.name,
      street_name: venue.street_name[0],
      district: venue.district,
      province: venue.province,
      type: venue.type,
      capacity: `${venue.capacity} seated`,
      size: `${venue.size} sqft`,
      schedule: venue.schedule,
      features: venue.features,
      images: venue.images,
      availability: venue.availability.map(avail => ({
        date: avail.date,
        status: avail.status,
        timeSlots: avail.timeSlots.map(slot => ({
          startTime: slot.startTime,
          endTime: slot.endTime,
          status: slot.status,
          isReserved: reservedSlots[avail.date.toISOString().split('T')[0]]?.includes(`${slot.startTime}-${slot.endTime}`)
        }))
      })),
      questions: venue.questions,
      reservedSlots
    };

    return res.status(200).json(venueDetails);
  } catch (error) {
    console.error('Error fetching venue details:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}