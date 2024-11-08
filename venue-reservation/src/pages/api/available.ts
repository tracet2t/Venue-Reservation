
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { reservationDate } = req.query;

    if (!reservationDate) {
      return res.status(400).json({ error: "Reservation date is required." });
    }

    try {
      const date = new Date(reservationDate as string);

      
      const availableVenues = await prisma.venue.findMany({
        where: {
          reservations: {
            none: {
              reservationDate: date,
            },
          },
        },
        include: {
          reservations: true,
        },
      });

      return res.status(200).json({
        availableVenues,
      });
    } catch (error) {
      console.error("Error of fetching available venues:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
