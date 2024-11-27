'use client'; // This tells Next.js that this component is a client-side component

import React, { useEffect, useState } from 'react';
import MyReservationCard from 'src/components/MyReservationCard/page'; // Ensure this import is correct
import Footer from "@/app/layouts/Footer"; // Import the Footer component (adjust path as needed)
interface ReservationData {
  eventName: string;
  startDate: string;
  endDate: string;
  timeMode: string;
  totalDuration: string;
  extraServices: string[];
  purposeOfReservation: string;
  status: string;
  meetingRoom: string;
  customerName: string;
  customerEmail: string;
  customerContactNumber: string;
  soundSystem: string;
}

const MyReservationPage: React.FC = () => {
  const [reservations, setReservations] = useState<ReservationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('/api/myreservation');

        if (!response.ok) {
          throw new Error('Failed to fetch reservations');
        }

        const data = await response.json();
        console.log('Fetched reservations:', data);  // Debugging log to check data

        setReservations(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching reservations:', err);
        setError('Error fetching reservations.');
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
      <div className="space-y-8">
        {/* Heading above reservations list */}
        <h1 className="text-3xl font-bold text-center mb-6">My Reservations</h1>

        {reservations.length === 0 ? (
            <div>No reservations available</div>
        ) : (
            reservations.map((reservation) => (
                <MyReservationCard key={reservation.eventName} {...reservation} />
            ))
        )}

        {/* Add Footer at the bottom of the page */}
        <Footer />
      </div>
  );
};

export default MyReservationPage;
