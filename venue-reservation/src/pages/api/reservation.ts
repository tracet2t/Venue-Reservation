import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../dbclient';
import { $Enums } from 'database/prisma/generated/client';

export default async function handler(req: { method: string; body: { userId: any; venueId: any; title: any; purposeOfReservation: any; extraServices: any; timeDuration: any; eventType: any; specialPermits: any; securityRequirements: any; mediaCoverage: any; auditoriumRules: any; reservationDate: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; reservation?: { reservationId: string; userId: string; venueId: number; title: string; purposeOfReservation: string; timeDuration: number; extraServices: $Enums.ExtraService[]; eventType: string; specialPermits: boolean; securityRequirements: boolean; mediaCoverage: boolean; auditoriumRules: boolean; reservationDate: Date; createdAt: Date; updatedAt: Date; }; error?: string; }): void; new(): any; }; }; }) {
  if (req.method === "POST") {
    const {
      userId,
      venueId,
      title,
      purposeOfReservation,
      extraServices,
      timeDuration,
      eventType,
      specialPermits,
      securityRequirements,
      mediaCoverage,
      auditoriumRules,
      reservationDate,
    } = req.body;

    try {
      const newReservation = await prisma.reservation.create({
        data: {
          userId,
          venueId,
          title,
          purposeOfReservation,
          timeDuration,
          extraServices,
          eventType,
          specialPermits,
          securityRequirements,
          mediaCoverage,
          auditoriumRules,
          reservationDate,
        },
      });

      res.status(201).json({ success: true, reservation: newReservation });
    } catch (error) {
      console.error("Error creating reservation:", error);
      res.status(500).json({ success: false, error: "Failed to create reservation." });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed." });
  }
}
