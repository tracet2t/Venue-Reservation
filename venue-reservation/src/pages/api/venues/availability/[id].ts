import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import moment from 'moment';

interface TimeSlot {
    startTime: string;
    endTime: string;
    status: string;
}

interface DayAvailability {
    status: string;
    timeSlots: TimeSlot[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { id } = req.query;
    const venueId = parseInt(id as string);

    try {
        const availability = await prisma.venueAvailability.findMany({
            where: {
                venueId: venueId
            },
            include: {
                timeSlots: true
            }
        });

        const availabilityMap = availability.reduce((acc, day) => {
            const date = moment(day.date).format('YYYY-MM-DD');
            
            // Check the status of all time slots for the day
            const timeSlotStatuses = day.timeSlots.map(slot => slot.status);
            
            let status = day.status;
            
            // Determine the overall status for the day
            if (timeSlotStatuses.includes('NOT_AVAILABLE')) {
                if (timeSlotStatuses.every(s => s === 'NOT_AVAILABLE')) {
                    status = 'NOT_AVAILABLE';
                } else {
                    status = 'PARTIALLY_BOOKED';
                }
            } else if (timeSlotStatuses.includes('FULLY_BOOKED')) {
                if (timeSlotStatuses.every(s => s === 'FULLY_BOOKED')) {
                    status = 'FULLY_BOOKED';
                } else {
                    status = 'PARTIALLY_BOOKED';
                }
            } else if (timeSlotStatuses.length > 0) {
                status = 'PARTIALLY_BOOKED';
            }

            acc[date] = {
                status: status,
                timeSlots: day.timeSlots.map(slot => ({
                    startTime: moment(slot.startTime).format('HH:mm'),
                    endTime: moment(slot.endTime).format('HH:mm'),
                    status: slot.status
                }))
            };
            return acc;
            /* eslint-disable @typescript-eslint/no-unused-vars */
        }, {} as Record<string, DayAvailability>);
/* eslint-disable @typescript-eslint/no-unused-vars */
        return res.json(availabilityMap);

    } catch (error: unknown) {
        const err = error as Error;
        console.error('Error fetching venue availability:', err.message);
        return res.status(500).json({ 
            error: 'Internal Server Error',
            details: err.message 
        });
    }
} 