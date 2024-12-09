'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


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


  const [formData, setFormData] = useState({
    eventType: 'public',
    permits: 'no',
    security: 'no',
    media: 'no',
    rules: 'no',
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        <p><strong>Contact:</strong> {reservation.customerContactNumber}</p>

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="eventType" className="block text-gray-700">
              Is your event open to the public or private/invitation-only?
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleSelectChange}
              className="w-full mt-2 border border-gray-300 rounded px-4 py-2"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="invitation-only">Invitation-only</option>
            </select>
          </div>
          <div>
            <label htmlFor="permits" className="block text-gray-700">
              Are you aware of any special permits or approvals required for your event?
            </label>
            <select
              id="permits"
              name="permits"
              value={formData.permits}
              onChange={handleSelectChange}
              className="w-full mt-2 border border-gray-300 rounded px-4 py-2"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ReservationDetail;
