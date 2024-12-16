// src/pages/api/admin-venue-card/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the venue ID from the URL
  const { id } = req.query;

  // Check if the request method is DELETE
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    
    if (!session || !session.user?.email) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Verify the venue belongs to the admin
    const venue = await prisma.venue.findFirst({
      where: {
        id: parseInt(id as string),
        admin: {
          email: session.user.email
        }
      }
    });

    if (!venue) {
      return res.status(404).json({ error: 'Venue not found' });
    }

    // Delete all related records first using a transaction
    await prisma.$transaction(async (tx) => {
      // Delete TimeSlots
      await tx.timeSlot.deleteMany({
        where: {
          venueAvailability: {
            venueId: parseInt(id as string)
          }
        }
      });

      // Delete VenueAvailability records
      await tx.venueAvailability.deleteMany({
        where: {
          venueId: parseInt(id as string)
        }
      });

      // Get all reservations for this venue
      const reservations = await tx.reservation.findMany({
        where: {
          venueId: parseInt(id as string)
        },
        select: {
          reservationId: true
        }
      });

      const reservationIds = reservations.map(r => r.reservationId);

      // Delete ReservationTimeSlots
      await tx.reservationTimeSlot.deleteMany({
        where: {
          reservationId: {
            in: reservationIds
          }
        }
      });

      // Delete ReservationStates
      await tx.reservationState.deleteMany({
        where: {
          reservationId: {
            in: reservationIds
          }
        }
      });

      // Delete Questions related to reservations
      await tx.question.deleteMany({
        where: {
          OR: [
            { venueId: parseInt(id as string) },
            { reservationId: { in: reservationIds } }
          ]
        }
      });

      // Delete Reservations
      await tx.reservation.deleteMany({
        where: {
          venueId: parseInt(id as string)
        }
      });

      // Finally, delete the venue
      await tx.venue.delete({
        where: {
          id: parseInt(id as string)
        }
      });
    });

    return res.status(200).json({ message: 'Venue deleted successfully' });
  } catch (error) {
    console.error('Error deleting venue:', error);
    return res.status(500).json({ error: 'Failed to delete venue' });
  }
}