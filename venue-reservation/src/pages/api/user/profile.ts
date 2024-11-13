import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const userId = 'USER_ID_HERE'; 

  switch (method) {
    case 'GET':
      try {
        const user = await prisma.user.findUnique({
          where: { userId },
          select: {
            userId: true,
            firstName: true,
            lastName: true,
            address: true,
            contactNumber: true,
            email: true,
          },
        });

        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json({
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
          phoneNumber: user.contactNumber.toString(),
          email: user.email,
        });
      } catch (error) {
        console.error('Error fetching user profile:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

    case 'PUT':
      try {
        const { firstName, lastName, address, phoneNumber } = req.body;

        // Update the user profile in the database
        const updatedUser = await prisma.user.update({
          where: { userId },
          data: {
            firstName,
            lastName,
            address,
            contactNumber: BigInt(phoneNumber), // Convert to BigInt as Prisma expects it
          },
        });

        return res.status(200).json({
          userId: updatedUser.userId,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          address: updatedUser.address,
          phoneNumber: updatedUser.contactNumber.toString(),
          email: updatedUser.email,
        });
      } catch (error) {
        console.error('Error updating user profile:', error);
        return res.status(500).json({ error: 'Failed to update profile' });
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
