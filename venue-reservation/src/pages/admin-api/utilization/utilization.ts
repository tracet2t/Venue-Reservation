import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "../../../dbclient";

// Helper function to calculate utilization
const calculateUtilization = (reservations: any[], totalTimeSlots: any[]) => {
  const totalReservations = reservations.reduce(
    (sum, res) => sum + res.reservationCount,
    0
  );
  const totalAvailableSlots = totalTimeSlots.reduce(
    (sum, slots) => sum + slots.timeSlots.length,
    0
  );
  return (totalReservations / totalAvailableSlots) * 100;
};

// Function to get daily utilization
const getDailyUtilization = async (venueId: number, date: string) => {
  const reservationCount = await prisma.venueDailyReservationCount.findUnique({
    where: {
      venueId_date: {
        venueId,
        date: new Date(date),
      },
    },
  });

  const totalTimeSlots = await prisma.venueAvailability.findFirst({
    where: {
      venueId,
      date: new Date(date),
    },
  });

  if (reservationCount && totalTimeSlots) {
    return calculateUtilization([reservationCount], totalTimeSlots.timeSlots);
  }

  throw new Error('Data not found for the specified date.');
};

// Function to get weekly utilization
const getWeeklyUtilization = async (venueId: number, startDate: string, endDate: string) => {
  const reservations = await prisma.venueDailyReservationCount.findMany({
    where: {
      venueId,
      date: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    },
  });

  const totalTimeSlots = await prisma.venueAvailability.findMany({
    where: {
      venueId,
      date: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    },
  });

  if (reservations.length > 0 && totalTimeSlots.length > 0) {
    return calculateUtilization(reservations, totalTimeSlots);
  }

  throw new Error('Data not found for the specified week.');
};

// Function to get monthly utilization
const getMonthlyUtilization = async (venueId: number, month: string) => {
  const reservations = await prisma.venueDailyReservationCount.findMany({
    where: {
      venueId,
      date: {
        gte: new Date(`${month}-01T00:00:00.000Z`),
        lte: new Date(`${month}-31T23:59:59.999Z`),
      },
    },
  });

  const totalTimeSlots = await prisma.venueAvailability.findMany({
    where: {
      venueId,
      date: {
        gte: new Date(`${month}-01T00:00:00.000Z`),
        lte: new Date(`${month}-31T23:59:59.999Z`),
      },
    },
  });

  if (reservations.length > 0 && totalTimeSlots.length > 0) {
    return calculateUtilization(reservations, totalTimeSlots);
  }

  throw new Error('Data not found for the specified month.');
};

// API handler for utilization requests
const utilizationHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { venueId, date, startDate, endDate, month } = req.query;

  try {
    if (method === 'GET') {
      // Determine what type of utilization request
      if (date) {
        // Daily utilization
        const utilization = await getDailyUtilization(
          parseInt(venueId as string),
          date as string
        );
        return res.status(200).json({ utilization });
      }

      if (startDate && endDate) {
        // Weekly utilization
        const utilization = await getWeeklyUtilization(
          parseInt(venueId as string),
          startDate as string,
          endDate as string
        );
        return res.status(200).json({ utilization });
      }

      if (month) {
        // Monthly utilization
        const utilization = await getMonthlyUtilization(
          parseInt(venueId as string),
          month as string
        );
        return res.status(200).json({ utilization });
      }

      return res.status(400).json({ message: 'Invalid parameters' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

export default utilizationHandler;
