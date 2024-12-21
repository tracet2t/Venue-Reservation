import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const session = await getServerSession(req, res, authOptions);

      if (!session?.user?.email) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const adminUser = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: {
          venues: true
        }
      });

      if (!adminUser || adminUser.userType !== 'Admin') {
        return res.status(403).json({ error: 'Unauthorized access' });
      }

      const adminVenueIds = adminUser.venues.map(venue => venue.id);

      const reservations = await prisma.reservation.findMany({
        where: {
          venueId: {
            in: adminVenueIds
          }
        },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
              contactNumber: true
            }
          },
          venue: {
            select: {
              name: true
            }
          },
          timeSlots: true,
          reservationState: true,
          questions: {
            select: {
              text: true,
              answer: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return res.status(200).json(reservations);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      return res.status(500).json({ error: 'Failed to fetch reservations' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { reservationId, status, adminComments } = req.body;
      
      console.log('Updating reservation:', { reservationId, status, adminComments });

      if (!reservationId || !status) {
        return res.status(400).json({ 
          error: 'Missing required fields: reservationId and status are required' 
        });
      }

      const updatedReservation = await prisma.reservationState.upsert({
        where: { 
          reservationId 
        },
        update: {
          status,
          adminComments: adminComments || null
        },
        create: {
          reservationId,
          status,
          adminComments: adminComments || null
        }
      });

      console.log('Successfully updated reservation:', updatedReservation);
      return res.status(200).json(updatedReservation);
    } catch (error) {
      console.error('Error updating reservation:', error);
      return res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to update reservation' 
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}