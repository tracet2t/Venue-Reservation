import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../dbclient';

const getVenues = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { provinces, districts, venueType, searchTerm } = req.query;

    // Fetching venues with dynamic filtering
    const venues = await prisma.venue.findMany({
      where: {
        province: provinces ? { in: (provinces as string).split(',') } : undefined,
        district: districts ? { in: (districts as string).split(',') } : undefined,
        type: venueType ? { equals: venueType as string } : undefined,
        name: searchTerm ? { contains: searchTerm as string, mode: 'insensitive' } : undefined,
      },
    });

    // Mapping to the expected structure
    const venueData = venues.map(venue => ({
      id: venue.id,
      name: venue.name,
      street_name: venue.street_name,
      district: venue.district,
      province: venue.province,
      type: venue.type,
      capacity: venue.capacity,
      features: venue.features,
      images: venue.images,
      schedule: venue.schedule,
    }));

    return res.status(200).json(venueData);
  } catch (error) {
    console.error("Error fetching venues:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return await getVenues(req, res);
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
