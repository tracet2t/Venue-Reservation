'use client';

import React, { useEffect, useState } from 'react';
import MyReservationCard from '@/components/venue_card/my_reservation_card';
import Footer from "@/app/layouts/Footer";

interface ReservationData {
  reservationId: string;
  title: string;
  purposeOfReservation: string;
  dateTimeSelections: {
    [key: string]: string[];
  };
  selectedDates: string[];
  venue: {
    id: number;
    name: string;
    type: string;
    schedule: string;
    images: string[];
    admin?: {
      firstName: string;
      email: string;
      contactNumber?: string;
    };
  };
  customerName: string;
  customerEmail: string;
  customerContactNumber?: string;
  status: string;
  reservationState?: {
    status: string;
    adminComments?: string;
  };
  extraServices: string[];
  questions?: Array<{
    text: string;
    answer?: string;
  }>;
}

const MyReservationPage: React.FC = () => {
  const [reservations, setReservations] = useState<ReservationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('/api/myreservation');
        if (!response.ok) throw new Error('Failed to fetch reservations');
        const { data } = await response.json();
        setReservations(data);
      } catch (err) {
        console.error('Error fetching reservations:', err);
        setError('Error fetching reservations.');
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="space-y-8 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">My Reservations</h1>
      
      {reservations.length === 0 ? (
        <div className="text-center p-8">No reservations available</div>
      ) : (
        reservations.map((reservation) => (
          <MyReservationCard
            key={reservation.reservationId}
            reservationId={reservation.reservationId}
            eventName={reservation.title}
            venue={reservation.venue}
            dateTimeSelections={reservation.dateTimeSelections}
            timeMode={reservation.venue.schedule}
            extraServices={reservation.extraServices}
            purposeOfReservation={reservation.purposeOfReservation}
            questions={reservation.questions || []}
            status={reservation.status as 'Pending' | 'Rejected' | 'Accepted' | 'Canceled' | 'Done'}
            adminComments={reservation.reservationState?.adminComments || ''}
            customerName={reservation.customerName}
            customerEmail={reservation.customerEmail}
            customerContactNumber={reservation.customerContactNumber}
            additionalQuestions={[]}
          />
        ))
      )}
      <Footer />
    </div>
  );
};

export default MyReservationPage;