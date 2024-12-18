import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { verify } from 'jsonwebtoken';


interface ReservationResponse {
  reservationId: string;
  title: string;
  venue: string;
  timeMode: string;
  extraServices: string[];
  purposeOfReservation: string;
  status: string;
  customerName: string;
  customerEmail: string;
  customerContactNumber?: string;
  date: string;
  timeSlots: { startTime: string; endTime: string }[];
  adminComments?: string;
}

type ApiResponse = {
  error?: string;
  data?: ReservationResponse[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let userEmail: string | undefined;

    const authToken = req.cookies.auth_token;
    if (authToken) {
      try {
        const decoded = verify(authToken, process.env.JWT_SECRET!) as { email: string };
        userEmail = decoded.email;
      } catch (error) {
        console.error('JWT verification failed:', error);
      }
    }

    const magicToken = req.cookies.token;
    if (!userEmail && magicToken) {
      try {
        const decoded = verify(magicToken, process.env.JWT_SECRET!) as { email: string };
        userEmail = decoded.email;
      } catch (error) {
        console.error('Magic link verification failed:', error);
      }
    }

    if (!userEmail) {
      const session = await getServerSession(req, res, authOptions);
      userEmail = session?.user?.email || undefined;
    }

    if (!userEmail) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
      select: { userId: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const reservations = await prisma.reservation.findMany({
      where: { userId: user.userId },
      include: {
        venue: true,
        reservationState: true,
        timeSlots: true,
        user: true, 
      },
      orderBy: { createdAt: 'desc' },
    });

    const formattedReservations: ReservationResponse[] = reservations.map((reservation) => ({
      reservationId: reservation.reservationId,
      title: reservation.title,
      venue: reservation.venue.name,
      timeMode: reservation.venue.schedule,
      extraServices: reservation.extraServices || [],
      purposeOfReservation: reservation.purposeOfReservation,
      status: reservation.reservationState?.status || 'Pending',
      adminComments: reservation.reservationState?.adminComments || undefined,
      customerName: `${reservation.user?.firstName || ''} ${reservation.user?.lastName || ''}`.trim(),
      customerEmail: reservation.user?.email || 'N/A',
      customerContactNumber: reservation.user?.contactNumber || 'N/A',
      date: reservation.timeSlots[0]?.date.toISOString().split('T')[0] || '',
      timeSlots: reservation.timeSlots.map((slot) => ({
        startTime: slot.startTime,
        endTime: slot.endTime,
      })),
    }));

    return res.status(200).json({ data: formattedReservations });
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
