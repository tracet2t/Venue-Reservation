'use client';

import { useRouter } from 'next/router';
import React from 'react';
import "/src/app/globals.css";

const reservations = [
  {
    reservationId: '016',
    title: 'Event Booking',
    timeMode: 'Full Day',
    duration: '8 Hours',
    extraServices: ['Food', 'Private Parking'],
    purposeOfReservation: 'Conference',
    status: 'Confirmed',
    customerName: 'Uthpala Devaki',
    customerEmail: 'udevaki@gmail.com',
    customerContactNumber: '0771234567',
    date: '2024-03-16',
    venue: 'Auditorium 1',
  },
  {
    reservationId: '015',
    title: 'Wedding Ceremony',
    timeMode: 'Half Day',
    duration: '4 Hours',
    extraServices: ['Catering'],
    purposeOfReservation: 'Wedding',
    status: 'Pending',
    customerName: 'Saduni Fernando',
    customerEmail: 'sfernando@gmail.com',
    customerContactNumber: '0771234567',
    date: '2024-04-10',
    venue: 'Auditorium 1',
  },
  {
    reservationId: '056',
    title: 'Business Meeting',
    timeMode: 'Full Day',
    duration: '6 Hours',
    extraServices: ['Food', 'AV Equipment'],
    purposeOfReservation: 'Meeting',
    status: 'Confirmed',
    customerName: 'Kavindya Perera',
    customerEmail: 'kavindya@gmail.com',
    customerContactNumber: '0771234567',
    date: '2024-05-16',
    venue: 'Auditorium 1',
  },
];

const ReservationPage = () => {
  const router = useRouter();
  const { id } = router.query; // Retrieve the dynamic parameter from the URL

  // Find the reservation by ID
  const reservation = reservations.find((res) => res.reservationId === id);

  if (!reservation) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <p className="text-red-500 text-lg">Reservation not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <main className="flex flex-col items-center space-y-8 p-8 w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 w-[600px]">
          <h2 className="font-bold text-black text-2xl mb-4 text-center">{reservation.title}</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Time Mode:</strong> {reservation.timeMode}
            </p>
            <p className="text-gray-600">
              <strong>Duration:</strong> {reservation.duration}
            </p>
            <p className="text-gray-600">
              <strong>Extra Services:</strong> {reservation.extraServices.join(', ')}
            </p>
            <p className="text-gray-600">
              <strong>Purpose of Reservation:</strong> {reservation.purposeOfReservation}
            </p>
            <p className="text-orange-500 font-semibold">
              <strong>Status:</strong> {reservation.status}
            </p>
            <p className="text-gray-600">
              <strong>Venue:</strong> {reservation.venue}
            </p>
            <p className="text-gray-600">
              <strong>Customer Name:</strong> {reservation.customerName}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {reservation.customerEmail}
            </p>
            <p className="text-gray-600">
              <strong>Contact Number:</strong> {reservation.customerContactNumber}
            </p>
            <p className="text-gray-600">
              <strong>Reservation ID:</strong> {reservation.reservationId}
            </p>
            <p className="text-gray-600">
              <strong>Date:</strong> {reservation.date}
            </p>
          </div>
          <button
            onClick={() => router.push('/admin-view')}
            className="mt-4 text-white bg-[#584822] px-4 py-2 rounded"
          >
            Back
          </button>
        </div>
      </main>
    </div>
  );
};

export default ReservationPage;
