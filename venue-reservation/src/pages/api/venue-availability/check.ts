import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
import moment from 'moment';

interface Conflict {
    timeSlot: string;
    available: boolean;
    status: 'INVALID_TIME_SLOT' | 'NOT_AVAILABLE' | 'FULLY_BOOKED' | 'AVAILABLE';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { venueId, date, timeSlots } = req.body;
        const parsedDate = moment(date).startOf('day');
        const endDate = moment(parsedDate).endOf('day');

        // Get venue availability and existing reservations
        const [availability, existingReservations] = await Promise.all([
            prisma.venueAvailability.findFirst({
                where: {
                    venueId: Number(venueId),
                    date: {
                        gte: parsedDate.toDate(),
                        lte: endDate.toDate()
                    }
                },
                include: { timeSlots: true }
            }),
            prisma.reservationTimeSlot.findMany({
                where: {
                    date: {
                        gte: parsedDate.toDate(),
                        lte: endDate.toDate()
                    },
                    reservation: {
                        venueId: Number(venueId),
                        reservationState: {
                            status: {
                                in: ['Pending', 'Accepted']
                            }
                        }
                    }
                }
            })
        ]);

        const conflicts = timeSlots.map((slot: string) => {
            const [start, end] = slot.split('-').map(t => t.trim());
            
            // Check if slot is blocked by admin
            const isBlockedByAdmin = availability?.timeSlots.some(blocked => {
                const blockedStart = moment(blocked.startTime).format('HH:mm');
                const blockedEnd = moment(blocked.endTime).format('HH:mm');
                return (
                    blocked.status === 'NOT_AVAILABLE' &&
                    (
                        (start >= blockedStart && start < blockedEnd) ||
                        (end > blockedStart && end <= blockedEnd) ||
                        (start <= blockedStart && end >= blockedEnd)
                    )
                );
            });

            // Check existing reservations
            const hasReservation = existingReservations.some(res => {
                return (
                    (start >= res.startTime && start < res.endTime) ||
                    (end > res.startTime && end <= res.endTime) ||
                    (start <= res.startTime && end >= res.endTime)
                );
            });

            let status: 'NOT_AVAILABLE' | 'FULLY_BOOKED' | 'AVAILABLE' = 'AVAILABLE';
            if (isBlockedByAdmin) status = 'NOT_AVAILABLE';
            else if (hasReservation) status = 'FULLY_BOOKED';

            return {
                timeSlot: slot,
                available: !isBlockedByAdmin && !hasReservation,
                status
            };
        });

        return res.status(200).json({
            available: conflicts.every((c: Conflict) => c.available),
            conflicts
        });

    } catch (error) {
        console.error('Error checking availability:', error);
        return res.status(500).json({ error: 'Failed to check availability' });
    }
}
