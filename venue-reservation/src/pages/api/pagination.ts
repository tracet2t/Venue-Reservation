// pages/api/pagination.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const skip = (page - 1) * limit;

    // Fetch paginated venues
    const venues = await prisma.venue.findMany({
      skip: skip,
      take: limit,
    });

    // Fetch the total number of venues to calculate total pages
    const totalVenues = await prisma.venue.count();
    const totalPages = Math.ceil(totalVenues / limit);

    return res.status(200).json({
      venues,
      totalPages,
      currentPage: page,
    });
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
