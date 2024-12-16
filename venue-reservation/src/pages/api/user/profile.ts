import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { verify } from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
  try {
    let userEmail: string | undefined;

    // Check all authentication methods
    const session = await getServerSession(req, res, authOptions);
    
    if (session?.user?.email) {
      userEmail = session.user.email;
    } 
    
    // Check magic link token
    else if (req.cookies.token) {
      try {
        const decoded = verify(req.cookies.token, SECRET_KEY) as { email: string };
        userEmail = decoded.email;
      } catch (error) {
        console.error('Magic link token verification failed:', error);
      }
    }
    
    // Check regular auth token
    else if (req.cookies.auth_token) {
      try {
        const decoded = verify(req.cookies.auth_token, SECRET_KEY) as { email: string };
        userEmail = decoded.email;
      } catch (error) {
        console.error('Auth token verification failed:', error);
      }
    }

    if (!userEmail) {
      console.log("No valid authentication found");
      return res.status(401).json({ error: "Not authenticated" });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: {
        userId: true,
        firstName: true,
        lastName: true,
        email: true,
        contactNumber: true,
        address: true,
        userType: true,
        provider: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    return res.status(200).json({ user });

  } catch (error) {
    console.error("Profile API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
} 
  else if (req.method === 'PUT') {
    try {
      let userEmail: string | undefined;

      // Check all authentication methods
      const session = await getServerSession(req, res, authOptions);
      
      if (session?.user?.email) {
        userEmail = session.user.email;
      } 
      
      // Check magic link token
      else if (req.cookies.token) {
        try {
          const decoded = verify(req.cookies.token, SECRET_KEY) as { email: string };
          userEmail = decoded.email;
        } catch (error) {
          console.error('Magic link token verification failed:', error);
        }
      }
      
      // Check regular auth token
      else if (req.cookies.auth_token) {
        try {
          const decoded = verify(req.cookies.auth_token, SECRET_KEY) as { email: string };
          userEmail = decoded.email;
        } catch (error) {
          console.error('Auth token verification failed:', error);
        }
      }
      if (!userEmail) {
        return res.status(401).json({ error: "Not authenticated" });
      }

      const { firstName, lastName, address, contactNumber } = req.body;

      const updatedUser = await prisma.user.update({
        where: { email: userEmail },
        data: {
          firstName,
          lastName,
          address,
          contactNumber,
        },
        select: {
          userId: true,
          firstName: true,
          lastName: true,
          email: true,
          contactNumber: true,
          address: true,
          userType: true,
          provider: true
        }
      });

      return res.status(200).json({ user: updatedUser });
    } catch (error) {
      console.error("Profile update error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}