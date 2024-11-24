import prisma from '../../dbclient';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      try {
        const {
          userId,
          venueId,
          title,
          purposeOfReservation,
          amenities,
          timeDuration,
          eventType,
          specialPermits,
          securityRequirements,
          mediaCoverage,
          auditoriumRules,
          reservationDate,
        } = req.body;
  
        console.log('Request body:', req.body);
  
      
        const user = await prisma.user.findUnique({
          where: { userId },
        });
  
        if (!user) {
          return res.status(400).json({ error: 'User not found or invalid user ID' });
        }
  
     
        const newReservation = await prisma.reservation.create({
          data: {
            userId,
            venueId,
            title,
            purposeOfReservation,
            extraServices: { set: amenities || [] },
            timeDuration,
            eventType,
            specialPermits: specialPermits === 'yes',
            securityRequirements: securityRequirements === 'yes',
            mediaCoverage: mediaCoverage === 'yes',
            auditoriumRules: auditoriumRules === 'yes',
            reservationDate: new Date(reservationDate),
          },
        });
  
        res.status(201).json({ message: 'Reservation created successfully!', reservation: newReservation });
      } catch (error) {
        console.error('Error creating reservation:', error); // Log the error details
        res.status(500).json({ error: 'Failed to create reservation', details: error.message });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }
  