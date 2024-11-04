import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Get query parameters for pagination
    const page = parseInt(req.query.page as string) || 1; // Default to page 1
    const limit = parseInt(req.query.limit as string) || 10; // Default to 10 items per page

    const skip = (page - 1) * limit; // Calculate how many records to skip

    // Fetch venues with pagination
    const venues = await prisma.venue.findMany({
      skip: skip,
      take: limit,
    });

    // Fetch total count of venues for pagination metadata
    const totalVenues = await prisma.venue.count();

    return res.status(200).json({
      total: totalVenues,
      page,
      limit,
      venues,
    });
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
