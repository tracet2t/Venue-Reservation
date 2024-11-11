// pages/api/venues/[id].tsx

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient'; // Adjust the path if necessary

const getVenueById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  // Validate the id
  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: 'Invalid venue ID' });
  }

  try {
    // Fetch the venue by ID
    const venue = await prisma.venue.findUnique({
      where: { id: Number(id) }, // Ensure ID is a number; adjust if using different data types
    });

    if (!venue) {
      return res.status(404).json({ error: 'Venue not found' });
    }

    // Return the venue data
    return res.status(200).json(venue);
  } catch (error) {
    console.error("Error fetching venue:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return await getVenueById(req, res);
  }

  // Handle unsupported methods
  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
