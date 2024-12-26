import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient';
import { v4 as uuidv4 } from 'uuid';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }


  const { email, firstName } = req.body;

  // Validate input
  if (!email || !firstName) {
    console.log('Missing required fields:', { email, firstName });
    return res.status(400).json({ 
      success: false, 
      message: 'Email and firstName are required' 
    });
  }

  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log('User already exists:', email);
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Create new user
    const user = await prisma.user.create({
      data: {
        firstName,
        email,
        userType: 'Regular',
        provider: 'magic-link',
      },
    });
    // Create verification token
    const token = uuidv4();
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    await prisma.verificationToken.create({
      data: {
        identifier: user.userId,
        email: user.email,
        token,
        expires,
      },
    });

    console.log('Verification token created');

    return res.status(200).json({ 
      success: true, 
      message: 'User registered successfully' 
    });

  } catch (error) {
    console.error('Detailed error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Something went wrong' 
    });
  } finally {
    await prisma.$disconnect();
  }
}
