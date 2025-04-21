'use client'
import React, { useState, useEffect } from 'react';
import CancelReservationModal from '../re-cancelation';
import { useRouter } from 'next/navigation';
import { Calendar, MapPin, Clock, Info, User } from "lucide-react";

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
    images: string[];
  };
  dateTimeSelections: {
    [key: string]: string[];
  };
  timeMode: string;
  extraServices: string[];
  purposeOfReservation: string;
  questions: { text: string; answer?: string }[];
  status: string;
  customerName: string;
  customerEmail: string;
  customerContactNumber?: string;
  additionalQuestions: { text: string; answer?: string }[];
  adminComments?: string;
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
  adminComments,
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
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Accepted': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  /* eslint-disable @typescript-eslint/no-unused-vars */
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white rounded-[32px] shadow-xl overflow-hidden max-w-5xl mx-auto">
        {/* Left column Side  */}
        <div className="md:w-1/2 p-6 md:p-10 text-[#5C3A00]">
          {/* Main Topic */}
          <h2 className="text-2xl md:text-3xl font-bold mb-1"> {eventName}</h2>

          {/* Purpose of reservation */}
          <div className="mb-4">
            <span className="font-medium text-gray-900 mb-4">Purpose of reservation : </span> {purposeOfReservation}
          </div>

          {/* Venue Details section */}
          <div className="mb-4"> 
          <div> <span className="font-medium text-gray-900 mb-4">Name : </span> {venue.name}</div>
          <div> <span className="font-medium text-gray-900 mb-4">Type : </span> {venue.type} </div>
          <div> <span className="font-medium text-gray-900 mb-4">Time : </span>{timeMode} </div>
          </div>

          {/* extra services section */}
          <div className="mb-4">
            <h2 className="font-medium text-gray-900 mb-4">Extra Services 
            <div className="flex flex-wrap gap-2">
              {extraServices.map((service, index) => (
              <span key={index} className=" px-3 py-1.5 bg-[#584822] text-white rounded-md text-sm">
                {service}
              </span>
            ))} </div></h2>
          </div>
           

          {/* Time and Date section */}
          <h2 className="font-medium text-gray-900">Selected Date & Time
            {Object.entries(dateTimeSelections || {}).map(([date, slots], index) => (
              <div key={index}>
                <p className="font-medium text-[#584822]">{formatDate(date)}</p>
                <div className="ml-4 mt-2 space-y-1">
                  {slots.map((slot, timeIndex) => (
                    <p key={timeIndex} className="text-[#584822] flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#584822] rounded-full"></span>
                      {slot}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </h2>
          <br></br>

          {/* Admin feedback section */}
          {adminComments && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-900">Admin Feedback</h4>
              <p className="text-[#584822]">{adminComments}</p>
            </div>
          )}

          {/* reservation status section*/}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Status:</span>
              <span className={`px-4 py-1.5 rounded-full text-white text-sm font-medium ${status === 'Pending' ? 'bg-[#F4A261]' :
                status === 'Accepted' ? 'bg-green-500' :
                  status === 'Rejected' ? 'bg-red-500' :
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

        {/* Right Column side*/}
        <div className="md:w-1/2 p-6 md:p-10 text-[#5C3A00]">

          {/* Admin details section */}
          {loading ? (
            <div className="mt-4 bg-white p-3 rounded-md shadow-sm">
              <p>Loading admin details...</p>
            </div>
          ) : adminDetails ? (
            <div className=" mb-4">
              <h4 className="text-md font-semibold text-[#584822] ">Admin Details</h4>
              <p className="text-gray-700"><span className="font-medium">Name:</span> {adminDetails.firstName}</p>
              <p className="text-gray-700"><span className="font-medium">Email:</span>  {adminDetails.email}</p>
              {adminDetails.contactNumber && (
                <p className="text-gray-700"><span className="font-medium">Contact:</span> {adminDetails.contactNumber}</p>
              )}
            </div>
          ) : null}

          {/* Customer details section */}
          <div className=" mb-4">
            <h3 className="text-md font-semibold text-[#584822]">Customer Details</h3>
            <p className="text-gray-700"><span className="font-medium">Name:</span> {customerName}</p>
            <p className="text-gray-700"><span className="font-medium">Email:</span> {customerEmail}</p>
            {customerContactNumber && (
              <p className="text-gray-700"><span className="font-medium">Contact:</span> {customerContactNumber}</p>
            )}
          </div>


           {/* Questions Section */}
           {questions?.length > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-[#584822]">Additional Information</h3>
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
                <h3 className="text-md font-semibold text-[#584822]">Venue Specific Questions</h3>
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
      <CancelReservationModal
        showModal={showCancelModal}
        onCancel={() => setShowCancelModal(false)}
        onConfirm={handleConfirmCancel}
      />
    </>
  );
};

export default MyReservationCard;
