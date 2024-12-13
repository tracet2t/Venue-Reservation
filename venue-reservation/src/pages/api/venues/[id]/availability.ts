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

    // Fetch all availability records for the venue
    const availabilityRecords = await prisma.venueAvailability.findMany({
      where: {
        venueId: venueId,
      },
      include: {
        timeSlots: true
      }
    });

    // Format the records to maintain the correct status
    const formattedAvailability = availabilityRecords.map(record => ({
      date: moment(record.date).format('YYYY-MM-DD'),
      status: record.status,
      timeSlots: record.timeSlots.map(slot => ({
        startTime: moment(slot.startTime).format('HH:mm'),
        endTime: moment(slot.endTime).format('HH:mm'),
        status: slot.status
      }))
    }));

    return res.status(200).json(formattedAvailability);
  } catch (error) {
    console.error('Error fetching venue availability:', error);
    return res.status(500).json({ error: 'Failed to fetch venue availability' });
  }
}