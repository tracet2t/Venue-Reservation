import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    res.status(400).json({ message: 'Invalid reservation ID' });
    return;
  }

  try {
    const reservation = await prisma.reservation.findUnique({
      where: { reservationId: id },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            contactNumber: true,
            email: true,
          },
        },
        venue: {
          select: {
            name: true,
            street_name: true,
            district: true,
            province: true,
          },
        },
        timeSlots: true,
      },
    });

    if (!reservation) {
      res.status(404).json({ message: 'Reservation not found' });
      return;
    }

    res.status(200).json({
      reservationId: reservation.reservationId,
      title: reservation.title,
      purposeOfReservation: reservation.purposeOfReservation,
      status: reservation.reservationState?.status || 'Unknown',
      customerName: `${reservation.user?.firstName} ${reservation.user?.lastName}`,
      customerEmail: reservation.user?.email,
      customerContactNumber: reservation.user?.contactNumber,
      date: reservation.timeSlots?.[0]?.date.toISOString().split('T')[0] || 'Not Specified',
      venue: reservation.venue?.name || 'Unknown Venue',
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching the reservation details' });
  }
}
