import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch all venues
    const venues = await prisma.venue.findMany();
    return res.status(200).json(venues);
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
