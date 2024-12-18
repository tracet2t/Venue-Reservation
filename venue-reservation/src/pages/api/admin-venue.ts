// app/api/admin/venues/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    
    if (!session || !session.user?.email) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const venues = await prisma.venue.findMany({
      where: {
        admin: {
          email: session.user.email
        }
      },
      include: {
        availability: true,
      }
    });

    return res.status(200).json(venues);
  } catch (error) {
    console.error('Error fetching venues:', error);
    return res.status(500).json({ error: 'Failed to fetch venues' });
  }
}