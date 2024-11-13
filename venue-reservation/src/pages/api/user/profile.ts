import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const userId = 'a00a0cc5-3c60-4df5-89ff-1c67a140915e'; 

  
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
          contactNumber: user.contactNumber.toString(),
          email: user.email,
        });
      } catch (error) {
        console.error('Error fetching user profile:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

    case 'PUT':
      try {
        const { firstName, lastName, address, contactNumber } = req.body;

        // Update the user profile in the database
        const updatedUser = await prisma.user.update({
          where: { userId },
          data: {
            firstName,
            lastName,
            address,
            contactNumber: BigInt(contactNumber), // Convert to BigInt
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
