import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "../../../dbclient";

const SECRET_KEY = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(String(token), SECRET_KEY) as { email: string, userId: string };
    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create auth token
    const authToken = jwt.sign(
      { userId: user.userId, email: user.email },
      SECRET_KEY,
      { expiresIn: '7d' }
    );

    // Set auth token cookie
    res.setHeader('Set-Cookie', 
      `auth_token=${authToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`
    );

    // Create and store session
    await prisma.session.create({
      data: {
        sessionToken: authToken,
        userId: user.userId,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
}
