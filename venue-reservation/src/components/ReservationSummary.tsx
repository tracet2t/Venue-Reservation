import { useState } from "react";
import { useRouter } from "next/router";
interface ReservationSummaryProps {
  venueName: string;
  venueType: string;
  schedule: string;
  date: string;
  purpose: string;
  amenities: string[];
  userAnswers: Record<string, string>;
  selectedDate: Date | null; // Accept selectedDate as a prop
}

const ReservationSummary: React.FC<ReservationSummaryProps> = (
  {
  venueName,
  venueType,
  schedule,
  date,
  purpose,
  amenities,
  userAnswers,
  selectedDate, // Receive selectedDate as a prop
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleReserveNow = async () => {
    console.log("Received selectedDate:", selectedDate);
    
    // Check if selectedDate is valid
    if (!selectedDate || isNaN(new Date(selectedDate).getTime())) {
      console.error("Selected date is invalid:", selectedDate);
      return;
    }
  
    const reservationDate = new Date(selectedDate);
    console.log("Valid reservation date:", reservationDate);
  
    setLoading(true);
  
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "c68df61d-ba87-423d-9cf8-2f17db345558",
          venueId: "1",
          title: "Venue-Reservation",
          purposeOfReservation: purpose,
          timeDuration: 4,
          extraServices: ["projectors", "sound_system"],
          amenities,
          eventType: "Private",
          specialPermits: false,
          securityRequirements: true,
          mediaCoverage: false,
          auditoriumRules: true,
          reservationDate: reservationDate.toISOString(),
          email: "dviha7@gmail.com",
        }),
      });
  
      if (response.ok) {
        const { reservationId, email } = await response.json();
        router.push({
          pathname: "/reservation-confirmation",
          query: { reservationId, email },
        });
      } else {
        console.error("Failed to create reservation");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center mb-4  p-8">
    {/* Title (Outside Container) */}
    <h1 className="text-3xl font-bold text-[#584822] mb-4">Reservation Summary</h1>
    <div className="max-w-6xl mx-auto my-2 p-2 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg">
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
        <button
            className="w-full bg-[#584822] text-white py-2 px-4 rounded-lg mt-4 hover:bg-[#4d3e20]"
            onClick={handleReserveNow}
            disabled={loading}
          >
            {loading ? "Reserving..." : "Reserve Now"}
          </button>
      </div>
    </div>
    </div>
  );
};

export default ReservationSummary;
