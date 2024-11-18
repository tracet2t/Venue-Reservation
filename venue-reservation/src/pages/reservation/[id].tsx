"use cache";
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";
import Calendar from "@/components/calendar";
import "/src/app/globals.css";
import Question from "@/components/questions"

interface VenueInfo {
  id: number;
  name: string;
  type: string;
  schedule: string;
}

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
  });
  const [venueInfo, setVenueInfo] = useState<VenueInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check user authentication status on component mount
    const checkAuthStatus = async () => {
      // Replace with your actual authentication check
      const response = await fetch('/api/auth/status');
      if (response.ok) {
        const { loggedIn } = await response.json();
        setIsLoggedIn(loggedIn);
      }
    };
    checkAuthStatus();

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

  return (
    <div>
      <div className="z-50">
      <Header />
      </div>
      <div className="z-20 flex flex-col lg:flex-row justify-between mx-auto mt-10 w-full lg:w-3/4 px-4">
        {/* Calendar */}
        <div className="w-full z-20 lg:w-1/2 mb-6 lg:mb-0">
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

              <div className="mb-4">
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.morning}
                    onChange={() => handleCheckboxChange('morning')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Morning (8AM - 12PM)
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.evening}
                    onChange={() => handleCheckboxChange('evening')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Evening (12PM - 8PM)
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.lateEvening}
                    onChange={() => handleCheckboxChange('lateEvening')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Late Evening (8PM - 12AM)
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={availability.earlyMorning}
                    onChange={() => handleCheckboxChange('earlyMorning')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Early Morning (12AM - 8AM)
                </label>
              </div>

              <div className="flex justify-between">
                <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded-lg">Cancel</button>
                <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Availability;
