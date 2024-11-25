import React from "react";
import router, { useRouter } from "next/router";
interface ReservationSummaryProps {
  venueName: string;
  venueType: string;
  schedule: string;
  date: string;
  purpose: string;
  amenities: string[];
}

const ReservationSummary: React.FC<ReservationSummaryProps> = (
  {
  venueName,
  venueType,
  schedule,
  date,
  purpose,
  amenities,
}) => {
  const handleReserveNow = () => {
    const reservationId = "123"; // Replace with dynamically generated reservation ID
    router.push({
      pathname: "/reservation-confirmation",
      query: { reservationId }, 
    });
  };

  return (
    <div className="max-w-6xl mx-auto my-8 p-4 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg">
      {/* Left Section - Venue Details */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="w-full mb-6 p-4 bg-white border rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-2">{venueName}</h1>
          <div className="text-gray-600">
            <p>Venue Type: {venueType}</p>
            <p>Schedule: {schedule}</p>
          </div>
        </div>
      </div>

      {/* Right Section - Reservation Summary */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#584822]">Summary</h2>
        <p className="text-[#584822]">
          <strong>Title:</strong> {purpose}
        </p>
        <p className="text-[#584822]">
          <strong>Date:</strong> {date}
        </p>
        <p className="text-[#584822]">
          <strong>Time Mode:</strong> {schedule}
        </p>
        <div className="mt-4">
          <strong className="text-[#584822]">Amenities:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {amenities.map((amenity, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-[#584822]">
              By clicking "Reserve Now" you agree to the{" "}
              <a href="#" className="text-blue-600 underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>
        <button className="w-full bg-[#584822] text-white py-2 px-4 rounded-lg mt-4 hover:bg-[#4d3e20]"
          onClick={handleReserveNow}>
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default ReservationSummary;
