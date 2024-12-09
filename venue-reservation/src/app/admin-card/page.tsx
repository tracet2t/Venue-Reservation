import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Reservation {
  reservationId: string;
  title: string;
  purposeOfReservation: string;
  status: string;
  customerName: string;
  customerEmail: string;
  customerContactNumber: string;
  date: string;
  venue: string;
}

const ReservationDetail = () => {
  const searchParams = useSearchParams();
  const reservationId = searchParams?.get('id'); 

  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!reservationId) return;

    const fetchReservation = async () => {
      try {
        const response = await fetch(`/api/reservations/${reservationId}`);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: Failed to fetch reservation details`);
        }
        const data: Reservation = await response.json();
        setReservation(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchReservation();
  }, [reservationId]);

  if (!reservationId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Invalid Reservation ID. Please provide a valid ID in the URL.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!reservation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading reservation details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-[800px]">
        <h1 className="text-2xl font-bold mb-4">{reservation.title}</h1>
        <p><strong>Date:</strong> {reservation.date}</p>
        <p><strong>Venue:</strong> {reservation.venue}</p>
        <p><strong>Status:</strong> {reservation.status}</p>
        <p><strong>Customer Name:</strong> {reservation.customerName}</p>
        <p><strong>Email:</strong> {reservation.customerEmail}</p>
        <p><strong>Contact:</strong> {reservation.customerContactNumber}</p>
        <p><strong>Purpose:</strong> {reservation.purposeOfReservation}</p>
      </div>
    </div>
  );
};

export default ReservationDetail;

