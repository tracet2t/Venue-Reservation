import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient';

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

      const formattedVenue: VenueWithAdmin = {
        id: venue.id,
        name: venue.name,
        admin: venue.admin ? {
          email: venue.admin.email,
          firstName: venue.admin.firstName,
          lastName: venue.admin.lastName || '',
          contactNumber: venue.admin.contactNumber || undefined
        } : null
      };

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

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
} 