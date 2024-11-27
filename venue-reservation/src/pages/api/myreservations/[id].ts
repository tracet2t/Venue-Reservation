/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/api/reservations/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'src/dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // Get the reservation ID from the URL

  try {
    const reservation = await prisma.reservation.findUnique({
      where: {
        reservationId: id as string, // Use the reservationId to fetch the reservation
      },
      include: {
        reservationState: true,
        venue: true,
        user: true,
      },
    });

    if (reservation) {
      res.status(200).json(reservation); // Send the reservation data
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reservation details' });
  }
}
