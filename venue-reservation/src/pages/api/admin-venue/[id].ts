import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  
  if (!session || !session.user?.email) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const venue = await prisma.venue.findFirst({
        where: {
          id: parseInt(id as string),
          admin: {
            email: session.user.email
          }
        },
        include: {
          questions: true,
        }
      });

      if (!venue) {
        return res.status(404).json({ error: 'Venue not found' });
      }

      return res.status(200).json(venue);
    } catch (error) {
      console.error('Error fetching venue:', error);
      return res.status(500).json({ error: 'Failed to fetch venue' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const venueData = req.body;

      // Update venue
      const updatedVenue = await prisma.venue.update({
        where: {
          id: parseInt(id as string)
        },
        data: {
          name: venueData.name,
          street_name: [venueData.streetName],
          district: venueData.district,
          province: venueData.province,
          type: venueData.type,
          capacity: venueData.capacity,
          size: venueData.size,
          schedule: venueData.schedule,
          features: venueData.features,
          images: venueData.images,
        }
      });

      // Update questions
      await prisma.question.deleteMany({
        where: {
          venueId: parseInt(id as string)
        }
      });

      await prisma.question.createMany({
        data: venueData.questions.map((q: any) => ({
          text: q.text,
          answerOptions: q.options,
          venueId: parseInt(id as string)
        }))
      });

      return res.status(200).json(updatedVenue);
    } catch (error) {
      console.error('Error updating venue:', error);
      return res.status(500).json({ error: 'Failed to update venue' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 