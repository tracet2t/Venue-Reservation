import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { provinces, districts, venueType, searchTerm } = req.query;

      const venues = await prisma.venue.findMany({
        where: {
          AND: [
            {
              province: {
                in: provinces ? (provinces as string).split(',') : undefined,
              },
            },
            {
              district: {
                in: districts ? (districts as string).split(',') : undefined,
              },
            },
            {
              type: venueType ? (venueType as string) : undefined,
            },
            {
              OR: searchTerm
                ? [
                    { name: { contains: searchTerm as string, mode: 'insensitive' } },
                    { district: { contains: searchTerm as string, mode: 'insensitive' } },
                    { province: { contains: searchTerm as string, mode: 'insensitive' } },
                  ]
                : undefined,
            },
          ],
        },
        select: {
          id: true,
          name: true,
          street_name: true,
          district: true,
          province: true,
          type: true,
          capacity: true,
          size: true,
          schedule: true,
          features: true,
          images: true,
        },
      });

      return res.status(200).json(venues);
    } catch (error) {
      console.error('Error fetching venues:', error);
      return res.status(500).json({ error: 'Failed to fetch venues' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
