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
    adminComments?: string;
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
  const [adminComments, setAdminComments] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReservations, setFilteredReservations] = useState<Reservation[]>([]);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'a-z'>('newest');

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

  const getSortedReservations = (reservations: Reservation[]) => {
    const sorted = [...reservations];
    
    switch (sortOption) {
      case 'newest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.timeSlots[0]?.date || a.createdAt);
          const dateB = new Date(b.timeSlots[0]?.date || b.createdAt);
          return dateB.getTime() - dateA.getTime();
        });
        
      case 'oldest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.timeSlots[0]?.date || a.createdAt);
          const dateB = new Date(b.timeSlots[0]?.date || b.createdAt);
          return dateA.getTime() - dateB.getTime();
        });
        
      case 'a-z':
        return sorted.sort((a, b) => 
          a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        );
        
      default:
        return sorted;
    }
  };

  useEffect(() => {
    const filterReservations = () => {
      let filtered = reservations;
      
      if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase();
        filtered = reservations.filter((reservation) => 
          reservation.title.toLowerCase().includes(searchLower) ||
          reservation.venue.name.toLowerCase().includes(searchLower) ||
          reservation.user.firstName.toLowerCase().includes(searchLower) ||
          reservation.user.lastName.toLowerCase().includes(searchLower) ||
          reservation.user.email.toLowerCase().includes(searchLower) ||
          reservation.reservationId.toLowerCase().includes(searchLower)
        );
      }
      
      // Apply sorting
      const sortedAndFiltered = getSortedReservations(filtered);
      setFilteredReservations(sortedAndFiltered);
    };

    filterReservations();
  }, [searchTerm, reservations, sortOption]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Accepted': return 'bg-green-100 text-green-800';
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

      // After successful status update, send email notification
      const emailData = {
        reservationId,
        status,
        adminComments,
        userEmail: selectedReservation?.user.email,
        userName: `${selectedReservation?.user.firstName} ${selectedReservation?.user.lastName}`,
        venueName: selectedReservation?.venue.name,
        reservationDetails: {
          title: selectedReservation?.title,
          timeSlots: selectedReservation?.timeSlots,
        }
      };

      const emailResponse = await fetch('/api/send-status-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!emailResponse.ok) {
        console.error('Failed to send status notification email');
      }

      // Refresh reservations list
      await fetchReservations();
      setSelectedReservation(null);
      
      // Show success message
      alert('Reservation status updated successfully!');
    } catch (error) {
      console.error('Error updating reservation status:', error);
      alert(`Error updating status: ${error instanceof Error ? error.message : 'Unknown error'}`);
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
    <div className="p-4 r-64">
      {/* Header with search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
        <h1 className="text-xl sm:text-2xl font-bold text-[#584822]">Reservation Approvals</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <input
              type="search"
              placeholder="Search reservations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#584822] focus:border-transparent"
            />
            <svg 
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <select 
            className="w-full sm:w-auto border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#584822] focus:border-transparent"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as 'newest' | 'oldest' | 'a-z')}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="a-z">A-Z</option>
          </select>
        </div>
      </div>

      {/* Reservation Cards */}
      <div className="space-y-4">
        {filteredReservations.map((reservation) => (
          <div key={reservation.reservationId} 
               className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700 break-words">{reservation.title}</h2>
                
                {/* Venue Information */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Venue Name</span>
                    <span className="text-sm sm:text-base">{reservation.venue.name}</span>
                  </div>
                </div>
                

                {/* Extra Services */}
                <div className="space-y-2">
                  <span className="text-gray-600 text-sm sm:text-base">Extra Services</span>
                  <div className="flex flex-wrap gap-2">
                    {reservation.extraServices.map((service, index) => (
                      <span key={index} 
                            className="px-3 py-1 bg-[#584822] text-white rounded-full text-xs sm:text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Purpose */}
                <div className="space-y-1">
                  <span className="text-gray-600 text-sm sm:text-base">Purpose</span>
                  <p className="text-xs sm:text-sm break-words">{reservation.purposeOfReservation}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="mt-4 md:mt-0 md:pl-6 border-t md:border-t-0 md:border-l pt-4 md:pt-0">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Details</h3>
                
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Name</span>
                    <span>{reservation.user.firstName} {reservation.user.lastName}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Email</span>
                    <span className="break-all">{reservation.user.email}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Contact</span>
                    <span>{reservation.user.contactNumber}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ID</span>
                    <span className="break-all">{reservation.reservationId}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status and Action Button */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Status:</span>
                <span className={`px-3 py-1 rounded-full text-xs sm:text-sm ${getStatusColor(reservation.reservationState.status)}`}>
                  {reservation.reservationState.status}
                </span>
              </div>
              
              <button
                onClick={() => setSelectedReservation(reservation)}
                className="w-full sm:w-auto px-4 py-2 bg-[#584822] text-white rounded-md hover:bg-[#483c1c] text-sm"
              >
                See more
              </button>
            </div>
          </div>
        ))}
        {filteredReservations.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No reservations found matching your search.
          </div>
        )}
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

                {/* Admin Comments Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Admin Comments</h3>
                  <textarea
                    value={adminComments}
                    onChange={(e) => setAdminComments(e.target.value)}
                    placeholder="Add your feedback or comments here..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#584822] focus:border-transparent"
                    rows={4}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => {
                      handleStatusUpdate(selectedReservation.reservationId, 'Accepted', adminComments);
                      setAdminComments(''); // Clear comments after submission
                    }}
                    className="flex-1 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Accept Reservation
                  </button>
                  <button
                    onClick={() => {
                      handleStatusUpdate(selectedReservation.reservationId, 'Rejected', adminComments);
                      setAdminComments(''); // Clear comments after submission
                    }}
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
