import type { NextApiRequest, NextApiResponse } from 'next';
import  prisma from '@/dbclient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get most reserved venue with approved status
    const mostReservedVenue = await prisma.venue.findFirst({
      where: {
        reservations: {
          some: {
            reservationState: {
              status: 'Accepted'
            }
          }
        }
      },
      include: {
        _count: {
          select: {
            reservations: {
              where: {
                reservationState: {
                  status: 'Accepted'
                }
              }
            }
          }
        },
        admin: {
          select: {
            firstName: true,
            email: true,
            contactNumber: true
          }
        }
      },
      orderBy: {
        reservations: {
          _count: 'desc'
        }
      }
    });

    if (!mostReservedVenue) {
      return res.status(404).json({ message: 'No venues found' });
    }

    res.status(200).json({ venue: mostReservedVenue });
  } catch (error) {
    console.error('Error fetching most reserved venue:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
