import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {
        userId,
        venueId,
        title,
        purposeOfReservation,
        timeDuration,
        amenities,
        eventType,
        specialPermits,
        securityRequirements,
        mediaCoverage,
        auditoriumRules,
      } = req.body;

      const newReservation = await prisma.reservation.create({
        data: {
          userId,
          venueId,
          title,
          purposeOfReservation,
          timeDuration,
          extraServices: amenities,
          eventType,
          specialPermits,
          securityRequirements,
          mediaCoverage,
          auditoriumRules,
          reservationDate: new Date(),
        },
      });

      return res.status(201).json({ message: 'Reservation created successfully', reservation: newReservation });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
