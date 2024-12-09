
import type { NextApiRequest, NextApiResponse } from 'next';


interface Reservation {
  reservationId: string;
  title: string;
  timeMode: string;
  duration: string;
  extraServices: string[];
  purposeOfReservation: string;
  status: string;
  customerName: string;
  customerEmail: string;
  customerContactNumber: string;
  date: string;
  venue: string;
}

const reservations: Reservation[] = [
  {
    reservationId: 'ABC123',
    title: 'Event Booking',
    timeMode: 'Full Day',
    duration: '8 Hours',
    extraServices: ['Food', 'Private Parking'],
    purposeOfReservation: 'Conference',
    status: 'Confirmed',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerContactNumber: '123-456-7890',
    date: '2024-05-16',
    venue: 'Auditorium 1',
  },
  {
    reservationId: 'XYZ456',
    title: 'Wedding Party',
    timeMode: 'Half Day',
    duration: '4 Hours',
    extraServices: ['Decoration', 'Music'],
    purposeOfReservation: 'Wedding',
    status: 'Pending',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    customerContactNumber: '987-654-3210',
    date: '2024-06-20',
    venue: 'Banquet Hall 3',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  
  if (typeof id !== 'string') {
    res.status(400).json({ message: 'Invalid reservation ID' });
    return;
  }


  const reservation = reservations.find((res) => res.reservationId === id);

  if (reservation) {
    res.status(200).json(reservation);
  } else {
    res.status(404).json({ message: 'Reservation not found' });
  }
}
