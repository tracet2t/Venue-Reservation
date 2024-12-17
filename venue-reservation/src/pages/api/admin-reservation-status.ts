import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/dbclient';
import { verify } from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        let userEmail: string | undefined;

        // Check all possible authentication methods
        const session = await getServerSession(req, res, authOptions);
        if (session?.user?.email) {
            userEmail = session.user.email;
        } else if (req.cookies.token) {
            try {
                const decoded = verify(req.cookies.token, process.env.JWT_SECRET!) as { email: string };
                userEmail = decoded.email;
            } catch (error) {
                console.error('Token verification failed:', error);
            }
        } else if (req.cookies.auth_token) {
            try {
                const decoded = verify(req.cookies.auth_token, process.env.JWT_SECRET!) as { email: string };
                userEmail = decoded.email;
            } catch (error) {
                console.error('Auth token verification failed:', error);
            }
        }

        if (!userEmail) {
            return res.status(401).json({ error: 'Unauthorized - Please log in' });
        }

        // Check if user is admin
        const user = await prisma.user.findUnique({
            where: { email: userEmail },
            select: {
                userType: true,
                venues: {
                    select: {
                        id: true,
                        name: true,
                        schedule: true,
                    }
                }
            }
        });

        if (!user || user.userType !== 'Admin') {
            return res.status(403).json({ error: 'Unauthorized - Admin access required' });
        }

        // Ensure venues is always an array with proper schedule
        const venues = user.venues || [];

        // Map venues with their time schedules
        const venuesWithTimeSchedule = venues.map(venue => ({
            id: venue.id,
            name: venue.name,
            schedule: venue.schedule,
            timeSchedule: getTimeScheduleForVenue(venue.schedule)
        }));

        return res.status(200).json({ venues: venuesWithTimeSchedule });

    } catch (error) {
        console.error('Error fetching venues:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

function getTimeScheduleForVenue(schedule: string) {
    switch (schedule) {
        case 'EntireDay':
            return ['Full Day (00:00 - 23:59)'];
        case 'SessionTime':
            return [
                'Morning Session (08:00 - 12:00)',
                'Afternoon Session (12:00 - 20:00)',
                'Late Evening Session (20:00 - 00:00)',
                'Early Morning Session (00:00 - 08:00)'
            ];
        case 'HourlyTime':
            return Array.from({ length: 24 }, (_, i) => {
                const currentHour = i.toString().padStart(2, '0');
                const nextHour = ((i + 1) % 24).toString().padStart(2, '0');
                return `${currentHour}:00-${nextHour}:00`;
            });
        default:
            return [];
    }
}