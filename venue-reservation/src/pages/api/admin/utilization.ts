import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../dbclient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const fetchUtilizationData = async (startDate: Date, endDate: Date, adminId: string) => {
  // Get only venues created by the admin
  const venues = await prisma.venue.findMany({
    where: {
      adminId: adminId
    },
    include: {
      reservations: {
        where: {
          createdAt: {
            gte: startDate,
            lte: endDate
          },
          reservationState: {
            status: 'Accepted'
          }
        }
      }
    }
  });
  
  const utilizationData = venues.map((venue) => {
    // Calculate total possible slots based on venue schedule
    let dailySlots;
    switch (venue.schedule) {
      case 'HourlyTime':
        dailySlots = 8; // Assuming 8 hours of operation
        break;
      case 'SessionTime':
        dailySlots = 2; // Morning and afternoon sessions
        break;
      case 'EntireDay':
        dailySlots = 1; // One booking per day
        break;
      default:
        dailySlots = 1;
    }

    // Calculate days between start and end date
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    // Calculate maximum possible bookings for the period
    const maxPossibleBookings = days * dailySlots;
    
    // Get actual bookings count
    const actualBookings = venue.reservations.length;
    
    // Calculate utilization percentage
    const utilization = (actualBookings / maxPossibleBookings) * 100;

    return {
      venueId: venue.id,
      venueName: venue.name,
      utilization: parseFloat(utilization.toFixed(2)),
      totalReservations: actualBookings,
      maxPossibleBookings,
      schedule: venue.schedule
    };
  });

  return utilizationData;
};

const utilizationHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { date, startDate, endDate, month, viewMode } = req.query;

  try {
    // Get the current admin session
    const session = await getServerSession(req, res, authOptions);
    
    if (!session || !session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Get admin ID from session
    const admin = await prisma.user.findUnique({
      where: {
        email: session.user.email as string
      }
    });

    if (!admin || admin.userType !== 'Admin') {
      return res.status(403).json({ message: "Forbidden: Admin access required" });
    }

    if (method === "GET") {
      const today = new Date();
      let start: Date;
      let end: Date;

      if (date) {
        // Daily view
        start = new Date(date as string);
        end = new Date(date as string);
      } else if (startDate && endDate) {
        // Weekly view
        start = new Date(startDate as string);
        end = new Date(endDate as string);
      } else if (month) {
        // Monthly view
        const [year, monthNum] = (month as string).split('-');
        start = new Date(parseInt(year), parseInt(monthNum) - 1, 1);
        end = new Date(parseInt(year), parseInt(monthNum), 0);
      } else if (viewMode === "yearly") {
        const year = parseInt(today.getFullYear().toString());
        start = new Date(year, 0, 1); // January 1st
        end = new Date(year, 11, 31); // December 31st
      } else {
        // Default to today
        start = new Date(today.toISOString().split('T')[0]);
        end = new Date(today.toISOString().split('T')[0]);
      }

      const utilizationData = await fetchUtilizationData(start, end, admin.userId);
      return res.status(200).json(utilizationData);
    }

    return res.status(405).json({ message: "Method not allowed." });
  } catch (error) {
    console.error("Error fetching utilization data:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export default utilizationHandler;