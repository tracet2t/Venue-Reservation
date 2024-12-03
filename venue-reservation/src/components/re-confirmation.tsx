import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; 

interface AdminDetails {
  admin: {
    email: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
  };
}

interface ReservationConfirmationProps {
  reservationId: string;
  email: string;
  venueId: number;
  adminDetails?: {
    email: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
  };
}

const ReservationConfirmation: React.FC<ReservationConfirmationProps> = ({ 
  reservationId, 
  venueId,
  adminDetails: initialAdminDetails 
}) => {
  const [adminDetails, setAdminDetails] = useState<AdminDetails['admin'] | null>(initialAdminDetails || null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAdminDetails = async () => {
      if (adminDetails) return;
      
      try {
        const response = await fetch(`/api/venue-admin/${venueId}`);
        const data = await response.json();
        
        if (response.ok && data.admin) {
          setAdminDetails(data.admin);
        } else {
          throw new Error(data.error || 'Failed to fetch admin details');
        }
      } catch (error) {
        console.error('Error fetching admin details:', error);
        setError('Failed to fetch admin details');
      }
    };

    if (!adminDetails && venueId) {
      fetchAdminDetails();
    }
  }, [venueId, adminDetails]);

  return (
    <div className="flex flex-col items-center justify-center mb-4 p-8">
      <h1 className="text-3xl font-bold text-[#584822] mb-4">
        Reservation Confirmation
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 w-[140%] sm:w-[80%] lg:w-[70%] xl:w-[50%] text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Reservation ID: {reservationId}
        </h2>
        
        {error && (
          <div className="text-red-500 mb-4">
            {error}
          </div>
        )}
        
        {adminDetails && (
          <div className="mb-6 text-left bg-[#f5f5f0] p-6 rounded-lg shadow-md border border-[#584822]">
            <h3 className="text-xl font-semibold text-[#584822] mb-4 border-b-2 border-[#584822] pb-2">
              Venue Admin Details
            </h3>
            <div className="space-y-3">
              <p className="text-[#584822] font-medium">
                <span className="text-[#796a4d]">Name:</span> {adminDetails.firstName} {adminDetails.lastName}
              </p>
              <p className="text-[#584822] font-medium">
                <span className="text-[#796a4d]">Email:</span> {adminDetails.email}
              </p>
              {adminDetails.contactNumber && (
                <p className="text-[#584822] font-medium">
                  <span className="text-[#796a4d]">Contact:</span> {adminDetails.contactNumber}
                </p>
              )}
            </div>
          </div>
        )}

        <p className="text-base text-gray-600 mb-2">
          Your reservation is now being processed and you will receive notification.
        </p>
        <p className="text-base text-gray-600 mb-4">
          If you have any additional requests or require further assistance leading up to your event, please don&apos;t hesitate to contact us.
        </p>
        <p className="text-base font-medium text-gray-700 mb-6">
          Thank you for choosing our venue!
        </p>
        
        <div className="flex justify-center">
          <button
            className="bg-[#584822] text-white px-6 py-2 rounded-lg hover:bg-[#4b3a1d]"
            onClick={() => router.push("/")}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmation;