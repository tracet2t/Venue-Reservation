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

    // Fetch all blocked slots for the venue
    const availability = await prisma.venueAvailability.findMany({
      where: {
        venueId: venueId,
        OR: [
          { status: 'NOT_AVAILABLE' },
          { status: 'PARTIALLY_BOOKED' }
        ]
      },
      include: {
        timeSlots: true
      }
    });

    // Format the response with exact date matching
    const formattedBlocks = availability.map(block => ({
      date: moment(block.date).format('YYYY-MM-DD'), // Ensure consistent date format
      status: block.status,
      timeSlots: block.timeSlots.map(slot => {
        let startTime = moment(slot.startTime).format('HH:mm');
        let endTime = moment(slot.endTime).format('HH:mm');
        
        // Adjust endTime if it is '00:00' to '24:00'
        if (endTime === '00:00') {
          endTime = '24:00';
        }
        
        // Determine the type of time slot
        if (startTime === '00:00' && endTime === '24:00') {
          return 'Entire Day';
        } else if (startTime === '08:00' && endTime === '12:00') {
          return 'Morning Session (08:00 - 12:00)';
        } else if (startTime === '12:00' && endTime === '20:00') {
          return 'Afternoon Session (12:00 - 20:00)';
        } else if (startTime === '20:00' && endTime === '24:00') {
          return 'Late Evening Session (20:00 - 24:00)';
        } else if (startTime === '00:00' && endTime === '08:00') {
          return 'Early Morning Session (00:00 - 08:00)';
        } else {
          return `${startTime}-${endTime}`; // Hourly time slot
        }
      })
    }));

    return res.status(200).json(formattedBlocks);
  } catch (error) {
    console.error('Error fetching blocked slots:', error);
    return res.status(500).json({ error: 'Failed to fetch blocked slots' });
  }
}