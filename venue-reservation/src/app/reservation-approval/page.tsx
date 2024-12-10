'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';


const ReservationPage = () => {
  const reservations = [
    {
      reservationId: '016',
      title: 'Event Booking',
      timeMode: 'Full Day',
      duration: '8 Hours',
      extraServices: ['Food', 'Private Parking'],
      purposeOfReservation: 'Conference',
      status: 'Confirmed',
      customerName: 'Uthpala devaki',
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
      customerName: 'Saduni fernando',
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
      customerName: 'Kavindya perera',
      customerEmail: 'kavindya@gmail.com',
      customerContactNumber: '0771234567',
      date: '2024-05-16',
      venue: 'Auditorium 1',
    },
  ];
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSeeMore = (reservationId: string) => {
    router.push(`/admin-view/${reservationId}`);
  };

  const filteredReservations = reservations
    .filter((reservation) => {
      const lowercasedSearchTerm = searchTerm.trim().toLowerCase();
      return (
        reservation.reservationId.toLowerCase().includes(lowercasedSearchTerm) ||
        reservation.customerContactNumber.includes(lowercasedSearchTerm) ||
        reservation.customerEmail.toLowerCase().includes(lowercasedSearchTerm)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-[1200px] flex flex-col space-y-4 p-4">
        <h1 className="text-2xl font-bold text-[#584822]">Reservation Approvals</h1>
        
        {/* Search and Sort Row */}
        <div className="flex justify-between items-center">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Reservation ID, Contact, or Email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[234px] h-[47.64px] pl-4 pr-10 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-[234px]">
            <select
              title="Sort By"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full h-[47.64px] pl-4 pr-8 appearance-none border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                Sort By
              </option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center space-y-8 p-8 w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 w-[1200px] flex flex-col items-center">
          <div className="grid grid-cols-1 gap-6 p-4 w-full">
            {filteredReservations.map((reservation) => (
              <div
                key={reservation.reservationId}
                className="bg-gray-50 border rounded-lg p-6 flex justify-between"
              >
                {/* Left Column */}
                <div className="w-1/2">
                  <h2 className="font-bold text-black text-2xl mb-4">{reservation.title}</h2>
                  <div className="mb-4">
                    <p className="text-gray-600">Time Mode:</p>
                    <p className="text-gray-800 mt-1">{reservation.timeMode}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600">Total Duration:</p>
                    <p className="text-gray-800 mt-1">{reservation.duration}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600">Extra Services:</p>
                    <div className="flex flex-wrap space-x-2 mt-1">
                      {reservation.extraServices.map((service, index) => (
                        <button
                          key={index}
                          className="bg-[#584822] text-white rounded-full px-3 py-1 mt-1"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600">Purpose of Reservation:</p>
                    <p className="text-gray-800 mt-1">{reservation.purposeOfReservation}</p>
                  </div>
                  <p className="text-orange-500 font-semibold">Status: {reservation.status}</p>
                </div>
                {/* Right Column */}
                <div className="w-1/2 flex flex-col text-left space-y-4">
                  <div>
                    <p className="text-gray-600">Venue:</p>
                    <p className="text-black text-2xl font-bold mt-1">{reservation.venue}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Customer Name:</p>
                    <p className="text-gray-800 mt-1">{reservation.customerName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Email:</p>
                    <p className="text-gray-800 mt-1">{reservation.customerEmail}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Contact:</p>
                    <p className="text-gray-800 mt-1">{reservation.customerContactNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Reservation ID:</p>
                    <p className="text-gray-800 mt-1">{reservation.reservationId}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Reserved Date:</p>
                    <p className="text-gray-800 mt-1">{reservation.date}</p>
                  </div>
                  
                  <button
                    onClick={() => handleSeeMore(reservation.reservationId)}
                    className="mt-4 bg-[#584822] text-white px-4 py-2 rounded-lg self-end"
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReservationPage;
