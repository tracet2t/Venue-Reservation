import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/dbclient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user?.email) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { id } = req.query;

    const reservation = await prisma.reservation.findFirst({
      where: {
        reservationId: String(id),
        user: {
          email: session.user.email
        }
      }
    });

    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    // Update the reservation status to canceled
    await prisma.reservationState.update({
      where: {
        reservationId: String(id)
      },
      data: {
        status: 'Canceled'
      }
    });

    return res.status(200).json({ message: "Reservation canceled successfully" });
  } catch (error) {
    console.error("Failed to cancel reservation:", error);
    return res.status(500).json({ error: "Failed to cancel reservation" });
  }
} 