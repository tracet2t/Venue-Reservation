import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/dbclient';
export default async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
 if (req.method !== 'GET') {
   return res.status(405).json({ message: 'Method not allowed' });
 }
  try {
   // Find venue with most accepted reservations
   const mostReservedVenue = await prisma.venue.findFirst({
     where: {
       reservations: {
         some: {
           reservationState: {
             status: 'Accepted'  // Status is in ReservationState
           }
         }
       }
     },
     include: {
       _count: {
         select: {
           reservations: {
             where: {
               reservationState: {
                 status: 'Accepted'
               }
             }
           }
         }
       },
       reservations: {
         where: {
           reservationState: {
             status: 'Accepted'
           }
         },
         include: {
           reservationState: true
         }
       }
     },
     orderBy: {
       reservations: {
         _count: 'desc'
       }
     }
   });
    if (!mostReservedVenue) {
     return res.status(404).json({ message: 'No venues with reservations found' });
   }
    // Format the response
   const formattedVenue = {
     id: mostReservedVenue.id,
     name: mostReservedVenue.name,
     street_name: mostReservedVenue.street_name,
     district: mostReservedVenue.district,
     province: mostReservedVenue.province,
     type: mostReservedVenue.type,
     capacity: mostReservedVenue.capacity,
     size: mostReservedVenue.size,
     schedule: mostReservedVenue.schedule,
     features: mostReservedVenue.features,
     images: mostReservedVenue.images,
     reservationCount: mostReservedVenue._count.reservations
   };
    return res.status(200).json(formattedVenue);
 } catch (error: unknown) {
   const err = error as Error;
   console.error('Error fetching most reserved venue:', err.message);
   return res.status(500).json({ error: 'Failed to fetch most reserved venue' });
 }
}
