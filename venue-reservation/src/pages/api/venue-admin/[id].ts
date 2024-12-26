import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient';
import { Storage } from '@google-cloud/storage';

interface VenueWithAdmin {
  id: number;
  name: string;
  admin: {
    email: string;
    firstName: string;
    lastName: string;
    contactNumber?: string;
  } | null;
}

interface CacheItem {
  data: VenueWithAdmin;
  timestamp: number;
}

const cache: { [key: string]: CacheItem } = {};
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS || '{}')
});
/* eslint-disable @typescript-eslint/no-unused-vars */
const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME!;
const bucket = storage.bucket(bucketName);
/* eslint-disable @typescript-eslint/no-unused-vars */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== 'string' || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Invalid venue ID' });
  }

  const venueId = Number(id);

  if (req.method === 'GET') {
    const cached = cache[venueId];
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return res.status(200).json(cached.data);
    }

    try {
      const venue = await prisma.venue.findUnique({
        where: { id: venueId },
        include: {
          admin: {
            select: {
              email: true,
              firstName: true,
              lastName: true,
              contactNumber: true
            }
          }
        }
      });

      if (!venue) {
        return res.status(404).json({ error: 'Venue not found' });
      }
/* eslint-disable @typescript-eslint/no-unused-vars */
      const formattedVenue: VenueWithAdmin = {
        id: venue.id,
        name: venue.name,
        admin: venue.admin ? {
          email: venue.admin.email,
          firstName: venue.admin.firstName,
          lastName: venue.admin.lastName || '',
          contactNumber: venue.admin.contactNumber || undefined
          /* eslint-disable @typescript-eslint/no-unused-vars */
        } : null
      };
/* eslint-disable @typescript-eslint/no-unused-vars */
      cache[venueId] = {
        data: formattedVenue,
        timestamp: Date.now()
      };

      return res.status(200).json(formattedVenue);
    } catch (error) {
      console.error('Error fetching venue admin:', error);
      return res.status(500).json({ error: 'Failed to fetch venue admin data' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { images, ...venueData } = req.body;

      // Update venue data including images
      const updatedVenue = await prisma.venue.update({
        where: { id: venueId },
        data: {
          ...venueData,
          images: images // Array of image URLs
        },
        include: {
          admin: {
            select: {
              email: true,
              firstName: true,
              lastName: true,
              contactNumber: true
            }
          }
        }
      });

      // Clear cache for this venue
      delete cache[venueId];

      return res.status(200).json(updatedVenue);
    } catch (error) {
      console.error('Error updating venue:', error);
      return res.status(500).json({ error: 'Failed to update venue' });
    }
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
} 