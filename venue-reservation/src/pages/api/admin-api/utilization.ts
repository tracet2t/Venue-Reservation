import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../dbclient";

const fetchUtilizationData = async (startDate: Date, endDate: Date) => {
  // Fetch total reservations across all venues
  const totalReservations = await prisma.venueDailyReservationCount.aggregate({
    where: { date: { gte: startDate, lte: endDate } },
    _sum: { reservationCount: true },
  });

  const totalReservationCount = totalReservations._sum.reservationCount || 0;

  // Fetch individual reservations per venue
  const venues = await prisma.venue.findMany();

  const utilizationData = await Promise.all(
    venues.map(async (venue) => {
      const reservations = await prisma.venueDailyReservationCount.aggregate({
        where: {
          venueId: venue.id,
          date: { gte: startDate, lte: endDate },
        },
        _sum: { reservationCount: true },
      });

      const venueReservationCount = reservations._sum.reservationCount || 0;

      const utilization =totalReservationCount > 0
      ? ((venueReservationCount / totalReservationCount) * 100).toFixed(2)
      : "0";

      return {
        venueId: venue.id,
        venueName: venue.name,
        utilization: parseFloat(utilization),
      };
          })
        );                                            

  return utilizationData;
};

const utilizationHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { date, startDate, endDate, month } = req.query;

  try {
    if (method === "GET") {
      const today = new Date();
      const startOfToday = new Date(today.toISOString().split("T")[0]);

      const start = date
        ? new Date(date as string)
        : startDate
        ? new Date(startDate as string)
        : month
        ? new Date(`${month}-01T00:00:00Z`)
        : startOfToday;

      const end = date
        ? new Date(date as string)
        : endDate
        ? new Date(endDate as string)
        : month
        ? new Date(`${month}-31T23:59:59Z`)
        : startOfToday;

      const utilizationData = await fetchUtilizationData(start, end);
      return res.status(200).json(utilizationData);
    }

    return res.status(405).json({ message: "Method not allowed." });
  } catch (error) {
    console.error("Error fetching utilization data:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export default utilizationHandler;
