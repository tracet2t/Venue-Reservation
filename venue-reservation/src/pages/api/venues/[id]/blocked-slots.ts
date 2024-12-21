import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import moment from 'moment';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    const venueId = Number(id);

    const availability = await prisma.venueAvailability.findMany({
      where: {
        venueId: venueId,
        OR: [
          { status: 'NOT_AVAILABLE' },
          { status: 'PARTIALLY_BOOKED' },
          { status: 'FULLY_BOOKED' }
        ]
      },
      include: {
        timeSlots: true
      }
    });

    const formattedBlocks = availability.map(block => ({
      date: moment(block.date).format('YYYY-MM-DD'),
      status: block.status,
      timeSlots: block.timeSlots.map(slot => {
        const startMoment = moment(slot.startTime);
        const endMoment = moment(slot.endTime);

        // Ensure end time is within the same day
        if (endMoment.isBefore(startMoment)) {
          endMoment.add(1, 'day');
        }

        // Format based on time slot type
        if (startMoment.hour() === 0 && endMoment.hour() === 23) {
          return 'Full Day (00:00 - 23:59)';
        } else {
          const startTime = startMoment.format('HH:mm');
          const endTime = endMoment.format('HH:mm');
          
          // Session time slots
          if (startTime === '08:00' && endTime === '12:00') {
            return 'Morning Session (08:00 - 12:00)';
          } else if (startTime === '12:00' && endTime === '20:00') {
            return 'Afternoon Session (12:00 - 20:00)';
          } else if (startTime === '20:00' && endTime === '00:00') {
            return 'Late Evening Session (20:00 - 00:00)';
          } else if (startTime === '00:00' && endTime === '08:00') {
            return 'Early Morning Session (00:00 - 08:00)';
          }
          
          // Hourly time slots
          return `${startTime}-${endTime}`;
        }
      })
    }));

    return res.status(200).json(formattedBlocks);
  } catch (error) {
    console.error('Error fetching blocked slots:', error);
    return res.status(500).json({ error: 'Failed to fetch blocked slots' });
  }
}