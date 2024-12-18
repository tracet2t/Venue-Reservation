import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../dbclient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    const questions = await prisma.question.findMany({
      where: {
        venueId: parseInt(id as string)
      }
    });

    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Error fetching questions' });
  }
} 