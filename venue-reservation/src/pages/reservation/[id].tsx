"use cache";
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";
import Calendar from "@/components/calendar";
import "/src/app/globals.css";
import Question from "@/components/questions"
import ReservationSummary from "@/components/ReservationSummary";
import ReservationConfirmation from "@/components/ReservationConfirmation";
import VenueCard from '@/components/venue_card/user_venue_card';
import ReservationCarousel from "@/components/reservation-carousel"; 

interface VenueInfo {
  id: number;
  name: string;
  type: string;
  schedule: string;
}
// interface ReservationSummaryProps {
//   venueName: string;
//   selectedDate: Date | null;
//   capacity: number;
//   onConfirm: () => void;
// }


const Availability = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availability, setAvailability] = useState({
    morning: false,
    evening: false,
    lateEvening: false,
    earlyMorning: false,
    fullDay: false,
  });
  const [hourlySlots, setHourlySlots] = useState<{ [key: string]: boolean }>({});
  const [venueInfo, setVenueInfo] = useState<VenueInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsLoggedIn(!!data.user);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkAuth();

    if (!id) return;

    const fetchVenueInfo = async () => {
      try {
        const response = await fetch(`/api/venues/${id}`);
        if (response.ok) {
          const data = await response.json();
          setVenueInfo({
            id: data.id,
            name: data.name,
            type: data.type,
            schedule: data.schedule,
          });
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to fetch venue details');
        }
      } catch (err) {
        console.error("Error fetching venue info:", err);
        setError('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchVenueInfo();
  }, [id]);

  const handleSelectDate = (date: Date) => {
    if (!isLoggedIn) {
      alert("Please log in to select a date.");
      router.push('/login'); // Redirect to login page if not logged in
      return;
    }
    
    setSelectedDate(date);
    setAvailability({
      morning: false,
      evening: false,
      lateEvening: false,
      earlyMorning: false,
      fullDay: false,
    });
    setShowModal(true);
  };

  const handleCheckboxChange = (timeSlot: keyof typeof availability) => {
    setAvailability((prev) => ({ ...prev, [timeSlot]: !prev[timeSlot] }));
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };
//   const handleReserveNow = () => {
//     setShowConfirmation(true); // Show reservation summary
//   };

//   const handleReservationConfirm = () => {
//     console.log('Reservation confirmed!');
//     setShowConfirmation(false); // Hide confirmation after action
//   };

const handleAnswersUpdate = (answers: Record<string, string>) => {
  setUserAnswers(answers); // Capture Q&A responses
};
  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex justify-center items-center h-64">
          <div className="text-xl">Loading venue information...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-red-600">Error: {error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <div className="z-1">
        <Header />
      </div>
      <ReservationCarousel>
      <div className="z-0 flex flex-wrap lg:flex-nowrap justify-between mx-auto mt-10 w-full lg:w-3/4 px-4">
      {/* Calendar */}
        <div className="w-full z-0 lg:w-1/2 mb-6 lg:mb-0">
          <Calendar onSelectDate={handleSelectDate} id={Number(id)}/>
        </div>

        {/* Q&A Box */}
        <div className="w-full lg:w-1/2 lg:ml-8 p-4 bg-white border rounded-lg shadow-lg">
          <Question />
        </div>

        {/* Availability Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Select Availability</h2>
              <p className="text-gray-700 mb-6">Select availability for {selectedDate?.toLocaleDateString()}</p>

               {/* Render different forms based on schedule type */}
              {venueInfo?.schedule === 'HourlyTime' && (
                <div className="max-h-96 overflow-y-auto mb-4">
                  {Array.from({ length: 24 }, (_, i) => {
                    const currentHour = i;
                    const nextHour = (i + 1) % 24;
                    const formattedCurrentHour = currentHour.toString().padStart(2, '0');
                    const formattedNextHour = nextHour.toString().padStart(2, '0');
                    const timeSlot = `${formattedCurrentHour}:00-${formattedNextHour}:00`;
                    
                    return (
                      <label key={timeSlot} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          checked={hourlySlots[timeSlot] || false}
                          onChange={() => {
                            setHourlySlots(prev => ({
                              ...prev,
                              [timeSlot]: !prev[timeSlot]
                            }));
                          }}
                          className="form-checkbox text-blue-500 mr-2"
                        />
                        {`${formattedCurrentHour}:00 - ${formattedNextHour}:00`}
                      </label>
                    );
                  })}
                </div>
              )}

              {venueInfo?.schedule === 'SessionTime' && (
                <div className="mb-4">
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={availability.morning}
                      onChange={() => handleCheckboxChange('morning')}
                      className="form-checkbox text-blue-500 mr-2"
                    />
                    Morning Session (08:00 - 12:00)
                  </label>
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={availability.evening}
                      onChange={() => handleCheckboxChange('evening')}
                      className="form-checkbox text-blue-500 mr-2"
                    />
                    Afternoon Session (12:00 - 0:00)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={availability.lateEvening}
                      onChange={() => handleCheckboxChange('lateEvening')}
                      className="form-checkbox text-blue-500 mr-2"
                    />
                    Late Evening Session (08:00 - 12:00)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={availability.lateEvening}
                      onChange={() => handleCheckboxChange('lateEvening')}
                      className="form-checkbox text-blue-500 mr-2"
                    />
                    Early Morning Session (12:00 - 08:00)
                  </label>
                </div>
              )}

              {venueInfo?.schedule === 'EntireDay' && (
                <div className="mb-4">
                  <label className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={availability.fullDay}
                      onChange={() => handleCheckboxChange('fullDay')}
                      className="form-checkbox text-blue-500 mr-2"
                    />
                    Full Day (00:00 - 24:00)
                  </label>
                </div>
              )}

              <div className="flex justify-between">
                <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded-lg">Cancel</button>
                <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
     
      <div className="z-0">
        <VenueCard />
        {/* Reservation Summary */}
        <ReservationSummary
          venueName={venueInfo?.name || "Unknown"}
          venueType={venueInfo?.type || "Unknown"}
          schedule={venueInfo?.schedule || "Unknown"}
          date={selectedDate?.toLocaleDateString() || ""}
          purpose="Venue Reservation"
          amenities={["Food", "Sound System", "Projector", "Lighting System"]}
          userAnswers={userAnswers} // Pass Q&A responses
        />
      </div>
      {/*Reservation Confirmation */}
      <div className="z-0">
        <ReservationConfirmation />
      </div>
      </ReservationCarousel>

      <Footer />
    </div>
  );
};

export default Availability;
