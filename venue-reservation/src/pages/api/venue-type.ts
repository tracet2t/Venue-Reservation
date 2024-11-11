// pages/api/venue-types.ts

import { NextApiRequest, NextApiResponse } from 'next';

const venueTypes = [
  "Auditorium",
  "Outdoor",
  "Co-Working Space",
  "Conference Hall",
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return the venue types
    res.status(200).json(venueTypes);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
