import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/dbclient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

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
    const session = await getServerSession(req, res, authOptions);
    
    if (!session?.user?.email) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const reservations = await prisma.reservation.findMany({
      where: {
        user: {
          email: session.user.email
        }
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