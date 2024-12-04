import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../dbclient';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { verify } from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    let userEmail: string | undefined;

    // Check NextAuth session
    const session = await getServerSession(req, res, authOptions);
    if (session?.user?.email) {
      userEmail = session.user.email;
    }

    // Check magic link token
    if (!userEmail && req.cookies.token) {
      try {
        const decoded = verify(req.cookies.token, process.env.JWT_SECRET!) as { email: string };
        userEmail = decoded.email;
      } catch (error) {
        console.error('Magic link verification failed:', error);
      }
    }

    // Check email/password auth token
    if (!userEmail && req.cookies.auth_token) {
      try {
        const decoded = verify(req.cookies.auth_token, process.env.JWT_SECRET!) as { email: string };
        userEmail = decoded.email;
      } catch (error) {
        console.error('Auth token verification failed:', error);
      }
    }

    if (!userEmail) {
      return res.status(401).json({ error: "Authentication required" });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
        
    const {
      venueId,
      title,
      purposeOfReservation,
      extraServices,
      dateTimeSelections,
      timeDuration,
      questions
    } = req.body;

    // Transform dateTimeSelections into the format we need
    const selectedDates = dateTimeSelections.map((dt: { date: string }) => dt.date);
    const selectedTimeSlots = dateTimeSelections.reduce((acc: { [key: string]: string[] }, dt: { date: string; timeSlots: string[] }) => {
      acc[dt.date] = dt.timeSlots;
      return acc;
    }, {});

    // Validate required fields
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    if (!purposeOfReservation) {
      return res.status(400).json({ error: 'Purpose is required' });
    }
    if (!selectedDates?.length) {
      return res.status(400).json({ error: 'Dates are required' });
    }
    if (!selectedTimeSlots) {
      return res.status(400).json({ error: 'Time slots are required' });
    }

    const reservation = await prisma.reservation.create({
      data: {
        userId: user.userId,
        venueId: Number(venueId),
        title,
        purposeOfReservation,
        timeDuration: timeDuration || 1,
        extraServices: extraServices || [],
        timeSlots: {
          create: dateTimeSelections.flatMap((dt: { date: string; timeSlots: string[] }) => 
            dt.timeSlots.map((timeSlot: string) => {
              const startTime = timeSlot.split('-')[0].trim();
              const endTime = timeSlot.split('-')[1].trim();
              
              return {
                date: new Date(dt.date),
                startTime,
                endTime
              };
            })
          )
        },
        questions: {
          create: questions.map((q: { text: string; answer?: string }) => ({
            text: q.text,
            answer: q.answer || ''
          }))
        },
        reservationState: {
          create: {
            status: 'Pending'
          }
        }
      }
    });

    return res.status(200).json({ success: true, reservation });

  } catch (error) {
    console.error('Error creating reservation:', error);
    return res.status(500).json({ error: 'Failed to create reservation' });
  }
} 