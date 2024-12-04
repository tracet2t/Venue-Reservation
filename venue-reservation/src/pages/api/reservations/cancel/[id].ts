import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/dbclient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { verify } from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let userEmail: string | undefined;

    // Check all authentication methods
    const session = await getServerSession(req, res, authOptions);
    if (session?.user?.email) {
      userEmail = session.user.email;
    } else if (req.cookies.token) {
      const decoded = verify(req.cookies.token, process.env.JWT_SECRET!) as { email: string };
      userEmail = decoded.email;
    } else if (req.cookies.auth_token) {
      const decoded = verify(req.cookies.auth_token, process.env.JWT_SECRET!) as { email: string };
      userEmail = decoded.email;
    }

    if (!userEmail) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { id } = req.query;

    // Check if reservation exists first
    const reservation = await prisma.reservation.findUnique({
      where: { 
        reservationId: String(id),
        user: { email: userEmail }
      }
    });

    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    // Delete reservation and all related data
    await prisma.$transaction(async (tx) => {
      // Delete questions
      await tx.question.deleteMany({
        where: { reservationId: String(id) }
      });

      // Delete time slots
      await tx.reservationTimeSlot.deleteMany({
        where: { reservationId: String(id) }
      });

      // Check if reservation state exists before deleting
      const state = await tx.reservationState.findUnique({
        where: { reservationId: String(id) }
      });

      if (state) {
        await tx.reservationState.delete({
          where: { reservationId: String(id) }
        });
      }

      // Finally delete the reservation
      await tx.reservation.delete({
        where: { reservationId: String(id) }
      });
    });

    return res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.error("Failed to delete reservation:", error);
    return res.status(500).json({ error: "Failed to delete reservation" });
  }
} 