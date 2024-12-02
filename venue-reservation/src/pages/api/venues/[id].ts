import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient'; // Ensure Prisma is correctly configured here

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Extract 'id' from the query parameters
  const { id } = req.query;

  // Ensure 'id' exists and is a valid number
  if (typeof id !== 'string' || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Invalid venue ID' });
  }

  const venueId = Number(id); // Convert 'id' to a number

  if (req.method === 'GET') {
    try {
      // Fetch the venue by ID, including availability and time slots
      const venue = await prisma.venue.findUnique({
        where: { id: venueId },
        select: {
          id: true,
          name: true,
          type: true,
          schedule: true,
          availability: {
            include: {
              timeSlots: true,
            }
          }
        }
      });

      // If no venue is found, return a 404 error
      if (!venue) {
        return res.status(404).json({ error: 'Venue not found' });
      }

      // Return the venue data along with its availability and time slots
      return res.status(200).json(venue);
    } catch (error) {
      console.error('Error fetching venue and availability:', error);
      return res.status(500).json({ error: 'Failed to fetch venue data and availability' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
