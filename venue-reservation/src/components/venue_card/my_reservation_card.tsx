'use client'
import React, { useState, useEffect } from 'react';
import CancelReservationModal from '../re-cancelation';
import { useRouter } from 'next/navigation';

interface ReservationCardProps {
  reservationId: string;
  eventName: string;
  venue: {
    id: number;
    name: string;
    type: string;
    schedule: string;
    admin?: {
      firstName: string;
      email: string;
      contactNumber?: string;
    };
  };
  dateTimeSelections: {
    [key: string]: string[];
  };
  timeMode: string;
  extraServices: string[];
  purposeOfReservation: string;
  questions: { text: string; answer?: string }[];
  status: 'Pending' | 'Rejected' | 'Accepted' | 'Canceled' | 'Done';
  customerName: string;
  customerEmail: string;
  customerContactNumber?: string;
  additionalQuestions: { text: string; answer?: string }[];
}

const MyReservationCard: React.FC<ReservationCardProps> = ({
  reservationId,
  eventName,
  venue,
  dateTimeSelections,
  timeMode,
  extraServices,
  purposeOfReservation,
  questions = [],
  status,
  customerName,
  customerEmail,
  customerContactNumber,
  additionalQuestions = [],
}) => {
  const router = useRouter();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [adminDetails, setAdminDetails] = useState(venue.admin);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      if (!venue.id || adminDetails) return;
      
      setLoading(true);
      try {
        const response = await fetch(`/api/venue-admin/${venue.id}`);
        const data = await response.json();
        
        if (response.ok && data.admin) {
          setAdminDetails(data.admin);
        }
      } catch (error) {
        console.error('Error fetching admin details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!adminDetails) {
      fetchAdminDetails();
    }
  }, [venue.id, adminDetails]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleCancelClick = () => {
    setShowCancelModal(true);
  };

  const handleConfirmCancel = async () => {
    try {
      const response = await fetch(`/api/reservations/cancel/${reservationId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to cancel reservation');
      
      setShowCancelModal(false);
      router.refresh();
    } catch (error) {
      console.error('Error canceling reservation:', error);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        {/* Header Section */}
        <div className="border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{eventName}</h2>
          
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Extra Services */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Extra Services</h3>
              <div className="flex flex-wrap gap-2">
                {extraServices.map((service, index) => (
                  <span key={index} className="px-3 py-1.5 bg-[#584822] text-white rounded-md text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Selected Dates & Times */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Selected Dates & Times</h3>
              <div className="space-y-3">
                {Object.entries(dateTimeSelections || {}).map(([date, slots], index) => (
                  <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                    <p className="font-medium text-[#584822]">{formatDate(date)}</p>
                    <div className="ml-4 mt-2 space-y-1">
                      {slots.map((slot, timeIndex) => (
                        <p key={timeIndex} className="text-gray-600 flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#584822] rounded-full"></span>
                          {slot}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Venue Details</h3>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-medium">Name:</span> {venue.name}</p>
                <p className="text-gray-700"><span className="font-medium">Type:</span> {venue.type}</p>
                <p className="text-gray-700"><span className="font-medium">Schedule:</span> {timeMode}</p>
                
                {/* Admin Details */}
                {loading ? (
                  <div className="mt-4 bg-white p-3 rounded-md shadow-sm">
                    <p>Loading admin details...</p>
                  </div>
                ) : adminDetails ? (
                  <div className="mt-4 bg-white p-3 rounded-md shadow-sm">
                    <h4 className="text-md font-semibold text-[#584822] mb-2">Admin Contact</h4>
                    <p className="text-gray-600">Name: {adminDetails.firstName}</p>
                    <p className="text-gray-600">Email: {adminDetails.email}</p>
                    {adminDetails.contactNumber && (
                      <p className="text-gray-600">Contact: {adminDetails.contactNumber}</p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Purpose of Reservation */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Purpose of Reservation</h3>
              <p className="text-gray-700">{purposeOfReservation}</p>
            </div>

            {/* Customer Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Customer Details</h3>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-gray-700"><span className="font-medium">Name:</span> {customerName}</p>
                <p className="text-gray-700"><span className="font-medium">Email:</span> {customerEmail}</p>
                {customerContactNumber && (
                  <p className="text-gray-700"><span className="font-medium">Contact:</span> {customerContactNumber}</p>
                )}
              </div>
            </div>

            {/* Questions Section */}
            {questions?.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Additional Information</h3>
                <div className="space-y-3">
                  {questions.map((question) => (
                    <div key={question.text} className="bg-white p-3 rounded-md shadow-sm">
                      <p className="text-gray-600 font-medium">{question.text}</p>
                      <p className="text-gray-700 mt-1">{question.answer || 'No answer provided'}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Questions Section */}
            {additionalQuestions?.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Venue Specific Questions</h3>
                <div className="space-y-3">
                  {additionalQuestions.map((question) => (
                    <div key={question.text} className="bg-white p-3 rounded-md shadow-sm">
                      <p className="text-gray-600 font-medium">{question.text}</p>
                      <p className="text-gray-700 mt-1">{question.answer || 'No answer provided'}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Status:</span>
              <span className={`px-4 py-1.5 rounded-full text-white text-sm font-medium ${
                status === 'Pending' ? 'bg-[#F4A261]' :
                status === 'Accepted' ? 'bg-green-500' :
                status === 'Canceled' ? 'bg-red-500' :
                'bg-gray-500'
              }`}>
                {status}
              </span>
            </div>
            {status === 'Pending' && (
              <button 
                onClick={handleCancelClick}
                className="px-4 py-2 bg-[#584822] text-white rounded-md hover:bg-[#6B5A2B] transition-colors duration-300 text-sm font-medium flex items-center gap-2"
              >
                <span>Cancel Reservation</span>
              </button>
            )}
          </div>
      </div>

      <CancelReservationModal
        showModal={showCancelModal}
        onCancel={() => setShowCancelModal(false)}
        onConfirm={handleConfirmCancel}
      />
    </>
  );
};

export default MyReservationCard;
