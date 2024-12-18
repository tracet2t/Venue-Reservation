'use client';

import { useRouter } from 'next/router';
import React from 'react';
import "/src/app/globals.css";

const reservations = [
  {
    reservationId: '016',
    title: 'Event Booking',
    timeMode: 'Full Day',
    
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
  const { id } = router.query; 

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
    <div className="bg-white shadow-lg rounded-lg p-6 w-[1200px]">
      <h2 className="font-bold text-black text-2xl mb-4 text-left">{reservation.title}</h2>
      
      {/* Details Section */}
      <div className="grid grid-cols-2 gap-2 pr-28">
        <p className="text-gray-600 font-semibold">Time Mode:</p>
        <p className="text-gray-600">{reservation.timeMode}</p>

        <p className="text-gray-600 font-semibold">Duration:</p>
        <p className="text-gray-600">{reservation.duration}</p>

        <p className="text-gray-600 font-semibold">Extra Services:</p>
        <p className="text-gray-600">{reservation.extraServices.join(', ')}</p>

        <p className="text-gray-600 font-semibold">Purpose of Reservation:</p>
        <p className="text-gray-600">{reservation.purposeOfReservation}</p>

        <p className="text-orange-500 font-semibold">Status:</p>
        <p className="text-orange-500 font-semibold">{reservation.status}</p>

        <p className="text-gray-600 font-semibold">Venue:</p>
        <p className="text-gray-600">{reservation.venue}</p>

        <p className="text-gray-600 font-semibold">Customer Name:</p>
        <p className="text-gray-600">{reservation.customerName}</p>

        <p className="text-gray-600 font-semibold">Email:</p>
        <p className="text-gray-600">{reservation.customerEmail}</p>

        <p className="text-gray-600 font-semibold">Contact Number:</p>
        <p className="text-gray-600">{reservation.customerContactNumber}</p>

        <p className="text-gray-600 font-semibold">Reservation ID:</p>
        <p className="text-gray-600">{reservation.reservationId}</p>

        <p className="text-gray-600 font-semibold">Date:</p>
        <p className="text-gray-600">{reservation.date}</p>
      </div>

      {/* Questions Section */}
      <div className="mt-8 space-y-6">
        <div className="flex items-center justify-between">
          <label className="text-gray-600 font-semibold">Is your event open to the public or private/invitation-only?</label>
          <select className="border-gray-300 rounded px-3 py-2">
          <option value="private"> Select</option>
            <option value="private">Private</option>
            <option value="public">Public</option>
            <option value="invitation-only">Invitation-only</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-600 font-semibold">Are you aware of any special permits or approvals required for your event?</label>
          <select className="border-gray-300 rounded px-3 py-2">
          <option value="private"> Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-600 font-semibold">Are there any special security or safety requirements for your event?</label>
          <select className="border-gray-300 rounded px-3 py-2">
          <option value="private"> Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-600 font-semibold">Do you anticipate any media coverage or external guests?</label>
          <select className="border-gray-300 rounded px-3 py-2">
          <option value="private"> Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-600 font-semibold">Are you aware of the rules and regulations regarding the use of the auditorium?</label>
          <select className="border-gray-300 rounded px-3 py-2">
          <option value="private"> Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <label className="block text-gray-600 font-semibold mb-2">Additional Comments:</label>
        <textarea
          className="w-full border-gray-300 rounded px-3 py-2"
          rows="4"
          placeholder="Add any additional information here..."
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button className="bg-green-700 text-white px-4 py-2 rounded">Approve</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Reject</button>
      </div>

    </div>
  </main>
</div>

  );
};

export default ReservationPage;
