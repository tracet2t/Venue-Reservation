import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient'; // Ensure this matches your setup

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { id } = req.query;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'Invalid venue ID' });
    }

    // Fetch only the `amenments` field from the venue table
    const venue = await prisma.venue.findUnique({
      where: { id: Number(id) },
      select: { amenments: true } 
    });

    if (!venue) {
      return res.status(404).json({ error: 'Venue not found' });
    }

    res.status(200).json(venue.amenments);
  } catch (error) {
    console.error('Error fetching amenities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
