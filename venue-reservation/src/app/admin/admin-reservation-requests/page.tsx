'use client';

import { useState, useEffect } from 'react';

interface ReservationTimeSlot {
  date: string;
  startTime: string;
  endTime: string;
}

interface Reservation {
  reservationId: string;
  venueId: number;
  title: string;
  purposeOfReservation: string;
  createdAt: string;
  timeSlots: ReservationTimeSlot[];
  extraServices: string[];
  questions?: {
    text: string;
    answer: string;
  }[];
  user: {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
  };
  reservationState: {
    status: 'Pending' | 'Accepted' | 'Rejected' | 'Canceled' | 'Done';
  };
  venue: {
    id: number;
    venueId: number;
    name: string;
    type: string;
    capacity: number;
    size: number;
    district: string;
    province: string;
    schedule: string;
    features: string[];
    entireDayTest?: string;
  };
}

export default function AdminReservationRequests() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchReservations = async () => {
    try {
      const response = await fetch('/api/admin-reservation-requests');
      const data = await response.json();
      setReservations(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusUpdate = async (reservationId: string, status: string, adminComments?: string) => {
    try {
      // First update the reservation status
      const statusResponse = await fetch('/api/admin-reservation-requests', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reservationId,
          status,
          adminComments
        }),
      });

      if (!statusResponse.ok) {
        const errorData = await statusResponse.json();
        console.error('Status update failed:', errorData);
        throw new Error(`Failed to update status: ${errorData.error || statusResponse.statusText}`);
      }

      // If the reservation is accepted, update venue availability
      if (status === 'Accepted') {
        const reservation = reservations.find(r => r.reservationId === reservationId);
        
        if (!reservation) {
          throw new Error('Reservation not found');
        }

        // Debug log the entire reservation object
        console.log('Full reservation data:', JSON.stringify(reservation, null, 2));

        // Get venue ID - try all possible paths
        const venueId = reservation.venue?.id || 
                        reservation.venue?.venueId || 
                        reservation.venueId;

        if (!venueId) {
          console.error('Venue data:', reservation.venue);
          throw new Error('No valid venue ID found in reservation data');
        }

        for (const slot of reservation.timeSlots) {
          try {
            const date = new Date(slot.date);
            let bookingStatus = 'PARTIALLY_BOOKED';
            let timeSlots = [{
              startTime: slot.startTime,
              endTime: slot.endTime
            }];

            if (slot.startTime.includes('Full Day')) {
              bookingStatus = 'FULLY_BOOKED';
              timeSlots = [{ startTime: '00:00', endTime: '00:00' }];
            } else if (slot.startTime.includes('Session')) {
              const startTime = slot.startTime.match(/\((\d{2}:\d{2})/)?.[1] || '';
              const endTime = slot.endTime.match(/(\d{2}:\d{2})/)?.[1] || '';
              
              timeSlots = [{
                startTime,
                endTime
              }];
            }
            
            const availabilityData = {
              venueId: parseInt(String(venueId), 10), // Ensure it's a valid number
              date: date.toISOString(),
              status: bookingStatus,
              timeSlots
            };

            // Debug log the data being sent
            console.log('Sending availability data:', availabilityData);

            const availabilityResponse = await fetch('/api/admin-venue-availability', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(availabilityData),
            });

            if (!availabilityResponse.ok) {
              const errorData = await availabilityResponse.json();
              console.error('Error response:', errorData);
              throw new Error(`Failed to update venue availability: ${errorData.message || availabilityResponse.statusText}`);
            }
          } catch (slotError) {
            console.error('Error updating time slot:', slot, slotError);
            throw slotError;
          }
        }
      }

      // Refresh reservations list
      await fetchReservations();
      setSelectedReservation(null);
      
      // Show success message
      alert('Reservation status updated successfully!');
    } catch (error) {
      console.error('Error updating reservation status:', error);
      alert(`Error updating reservation status: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  if (loading) {
    return (
   
        <div className="flex justify-center items-center h-full">
          <p>Loading...</p>
        </div>
   
    );
  }

  return (
    <div className="p-6">
      {/* Header with search */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#584822]">Reservation Approvals</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select className="border rounded-lg px-4 py-2">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Reservation Cards */}
      <div className="space-y-4">
        {reservations.map((reservation) => (
          <div key={reservation.reservationId} 
               className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-2">
              {/* Left Column */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">{reservation.title}</h2>
                
                {/* Venue Information */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Venue Name</span>
                    <span>{reservation.venue.name}</span>
                  </div>
                </div>
                

                {/* Rest of the existing content */}
                <div className="space-y-2">
                  <span className="text-gray-600">Extra Services</span>
                  <div className="flex gap-2">
                    {reservation.extraServices.map((service, index) => (
                      <span key={index} 
                            className="px-4 py-1 bg-[#584822] text-white rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <span className="text-gray-600">Purpose of Reservation</span>
                  <p className="text-sm">{reservation.purposeOfReservation}</p>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Status</span>
                  <span className={getStatusColor(reservation.reservationState.status)}>
                    {reservation.reservationState.status}
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="pl-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">{reservation.venue.name}</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Name</span>
                    <span>{reservation.user.firstName} {reservation.user.lastName}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Email</span>
                    <span>{reservation.user.email}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer Contact Number</span>
                    <span>{reservation.user.contactNumber}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reservation Id</span>
                    <span>{reservation.reservationId}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setSelectedReservation(reservation)}
                className="px-6 py-2 bg-[#584822] text-white rounded-md hover:bg-[#483c1c]"
              >
                See more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      {selectedReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedReservation.title}</h2>
                <button
                  onClick={() => setSelectedReservation(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-8">
                {/* Extra Services */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Extra Services</h3>
                  <div className="flex gap-2">
                    {selectedReservation.extraServices.map((service, index) => (
                      <span key={index} className="px-4 py-2 bg-[#584822] text-white rounded-md">
                        {service.toLowerCase().replace('_', ' ')}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Selected Dates & Times */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Selected Dates & Times</h3>
                  <div className="space-y-2">
                    {selectedReservation.timeSlots.map((slot, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="font-medium">{new Date(slot.date).toLocaleDateString()}</span>
                        <span>{slot.startTime} - {slot.endTime}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Venue Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Venue Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Name</p>
                      <p className="font-medium">{selectedReservation.venue.name}</p>
                    </div>
                  </div>
                </div>

                {/* Purpose of Reservation */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Purpose of Reservation</h3>
                  <p className="text-gray-700">{selectedReservation.purposeOfReservation}</p>
                </div>

                {/* Customer Details */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Customer Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Name</p>
                      <p className="font-medium">
                        {selectedReservation.user.firstName} {selectedReservation.user.lastName}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p className="font-medium">{selectedReservation.user.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Contact Number</p>
                      <p className="font-medium">{selectedReservation.user.contactNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                {selectedReservation.questions && selectedReservation.questions.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
                    <div className="space-y-3">
                      {selectedReservation.questions.map((question, index) => (
                        <div key={index}>
                          <p className="text-gray-600">{question.text}</p>
                          <p className="font-medium">{question.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => handleStatusUpdate(selectedReservation.reservationId, 'Accepted')}
                    className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Accept Reservation
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(selectedReservation.reservationId, 'Rejected')}
                    className="flex-1 bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Reject Reservation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
