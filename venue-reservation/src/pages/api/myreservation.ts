import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/dbclient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { verify } from 'jsonwebtoken';

// First, let's define a proper type for the formatted reservation
interface FormattedReservation {
  reservationId: string;
  title: string;
  venue: {
    id: number;
    name: string;
    type: string;
    schedule: string;
    admin?: {
      firstName: string;
      email: string;
      contactNumber?: string;
    }
  };
  dateTimeSelections: {
    [key: string]: string[];
  };
  timeMode: string;
  extraServices: string[];
  purposeOfReservation: string;
  status: string;
  questions: Array<{text: string; answer?: string}>;
  customerName: string;
  customerEmail: string;
  customerContactNumber?: string;
}

type ApiResponse = {
  error?: string;
  details?: string;
  data?: FormattedReservation[];
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let userEmail: string | undefined;

    // Check for auth_token (email/password login)
    const authToken = req.cookies.auth_token;
    if (authToken) {
      try {
        const decoded = verify(authToken, process.env.JWT_SECRET!) as { email: string };
        userEmail = decoded.email;
        console.log("Auth token user:", userEmail);
      } catch (error) {
        console.error('JWT verification failed:', error);
      }
    }

    // Check for magic link token
    const magicToken = req.cookies.token;
    if (!userEmail && magicToken) {
      try {
        const decoded = verify(magicToken, process.env.JWT_SECRET!) as { email: string };
        userEmail = decoded.email;
        console.log("Magic link user:", userEmail);
      } catch (error) {
        console.error('Magic link verification failed:', error);
      }
    }

    // If no other tokens, try NextAuth session (Google login)
    if (!userEmail) {
      const session = await getServerSession(req, res, authOptions);
      userEmail = session?.user?.email || undefined;
      console.log("NextAuth session user:", userEmail);
    }

    if (!userEmail) {
      console.log("No authenticated user found");
      return res.status(401).json({ error: "Authentication required" });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: {
        userId: true,
        email: true
      }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const reservations = await prisma.reservation.findMany({
      where: {
        userId: user.userId
      },
      include: {
        timeSlots: true,
        venue: {
          include: {
            admin: true
          }
        },
        reservationState: true,
        user: true,
        questions: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const formattedReservations = reservations.map(reservation => {
      // Group time slots by date
      const dateTimeSelections = reservation.timeSlots.reduce((acc, slot) => {
        // Format date to match the display format
        const date = new Date(slot.date).toISOString().split('T')[0];
        
        if (!acc[date]) {
          acc[date] = [];
        }
        
        // Combine start and end time
        const timeSlot = `${slot.startTime}-${slot.endTime}`;
        acc[date].push(timeSlot);
        
        // Sort time slots for each date
        acc[date].sort((a, b) => {
          const timeA = a.split('-')[0];
          const timeB = b.split('-')[0];
          return timeA.localeCompare(timeB);
        });
        
        return acc;
      }, {} as { [key: string]: string[] });

      return {
        reservationId: reservation.reservationId,
        title: reservation.title,
        venue: {
          id: reservation.venue.id,
          name: reservation.venue.name,
          type: reservation.venue.type,
          schedule: reservation.venue.schedule,
        },
        dateTimeSelections,
        timeMode: reservation.venue.schedule,
        extraServices: reservation.extraServices || [],
        purposeOfReservation: reservation.purposeOfReservation,
        status: reservation.reservationState?.status || 'Pending',
        questions: reservation.questions.map(q => ({
          text: q.text,
          answer: q.answer || undefined
        })),
        customerName: `${reservation.user.firstName} ${reservation.user.lastName || ''}`.trim(),
        customerEmail: reservation.user.email,
        customerContactNumber: reservation.user.contactNumber || undefined,
      };
    });

    return res.status(200).json({ data: formattedReservations });
  } catch (error) {
    console.error("Failed to fetch reservations:", error);
    return res.status(500).json({ error: "Failed to fetch reservations" });
  }
} 