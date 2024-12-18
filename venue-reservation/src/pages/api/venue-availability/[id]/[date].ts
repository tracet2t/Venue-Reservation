import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import moment from 'moment';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id, date } = req.query;
    
    if (!id || !date) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const parsedDate = moment(date as string).startOf('day');
    const endDate = moment(parsedDate).endOf('day');

    const [venue, availability, reservations] = await Promise.all([
      prisma.venue.findUnique({
        where: {
          id: parseInt(id as string)
        },
        select: { schedule: true }
      }),
      prisma.venueAvailability.findFirst({
        where: {
          venueId: parseInt(id as string),
          date: {
            gte: parsedDate.toDate(),
            lte: endDate.toDate()
          }
        },
        include: {
          timeSlots: true
        }
      }),
      prisma.reservationTimeSlot.findMany({
        where: {
          date: {
            gte: parsedDate.toDate(),
            lte: endDate.toDate()
          },
          reservation: {
            venueId: parseInt(id as string)
          }
        }
      })
    ]);

    // Send the response with the fetched data
    return res.status(200).json({
      venue,
      availability,
      reservations
    });

  } catch (error) {
    console.error('Error fetching venue availability:', error);
    return res.status(500).json({ error: 'Failed to fetch venue availability' });
  }
} 