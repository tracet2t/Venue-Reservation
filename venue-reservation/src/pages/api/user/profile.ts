import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient'; 
// import * as dotenv from 'dotenv';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
// import 'dotenv/config';

// dotenv.config();

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  region: process.env.AWS_REGION,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const userId = 'a00a0cc5-3c60-4df5-89ff-1c67a140915e'; 
  
  if (!userId) {
    return res.status(400).json({ error: 'UserId is required' });
  }
  
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
        const { firstName, lastName, address, contactNumber, profilePicture } = req.body;

        let imageUrl = null;
        if (profilePicture) {
          console.log('Uploading to S3:', process.env.AWS_S3_BUCKET_NAME);

          const base64Data = Buffer.from(
            profilePicture.replace(/^data:image\/\w+;base64,/, ''),
            'base64'
          );

          const type = profilePicture.split(';')[0].split('/')[1];

          const params = {
            Bucket: process.env.S3_BUCKET_NAME!,
            Key: `${Date.now()}-profile.${type}`,
            Body: base64Data,
            ContentEncoding: 'base64',
            ContentType: `image/${type}`,
          };

          const command = new PutObjectCommand(params);
          const uploadResult = await s3Client.send(command);
          console.log('S3 Upload Result:', uploadResult);
          imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;
        }
        
        // Update the user profile in the database
        const updatedUser = await prisma.user.update({
          where: { userId },
          data: {
            firstName,
            lastName,
            address,
            contactNumber: BigInt(contactNumber), // Convert to BigInt
            profilePicture: imageUrl || profilePicture,
          },
        });

        console.log('Updated User:', updatedUser);

        return res.status(200).json({
          userId: updatedUser.userId,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          address: updatedUser.address,
          phoneNumber: updatedUser.contactNumber.toString(),
          email: updatedUser.email,
          profilePicture: updatedUser.profilePicture,
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
