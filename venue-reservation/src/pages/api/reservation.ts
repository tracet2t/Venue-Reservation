import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const {
        userId, venueId, title, purposeOfReservation, amenities,
        timeDuration, eventType, specialPermits, securityRequirements,
        mediaCoverage, auditoriumRules, reservationDate
      } = req.body;

  

      const newReservation = await prisma.reservation.create({
        data: {
          userId,
          venueId: Number(venueId), 
          title,
          purposeOfReservation,
          amenities,
          timeDuration: Number(timeDuration),
          eventType,
          specialPermits,
          securityRequirements,
          mediaCoverage,
          auditoriumRules,
          reservationDate: new Date(reservationDate),
        },
      });

      res.status(201).json(newReservation);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create reservation', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
