"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";
import Calendar from "@/components/calendar";
import "/src/app/globals.css";
import Question from "@/components/questions"
import moment from 'moment';
import ReservationCarousel from '@/components/re-carousel';

interface VenueInfo {
  id: number;
  name: string;
  type: string;
  schedule: 'EntireDay' | 'SessionTime' | 'HourlyTime';
}

interface DateTimeSelection {
  date: Date;
  timeSlots: string[];
}

const Availability = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [dateTimeSelections, setDateTimeSelections] = useState<DateTimeSelection[]>([]);
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
  const [currentStep, setCurrentStep] = useState(1);

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
            schedule: data.schedule
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

    // Load saved selections from localStorage
    const savedSelectionsStr = localStorage.getItem(`venue-${id}-selections`);
    if (savedSelectionsStr) {
      const saved = JSON.parse(savedSelectionsStr);
      if (saved.dates) {
        setSelectedDates(saved.dates.map((date: string) => new Date(date)));
      }
      if (saved.timeSlots) {
        const timeSlots = Array.isArray(saved.timeSlots) ? saved.timeSlots : [];
        const newDateTimeSelection = {
          date: new Date(saved.dates[0]),
          timeSlots: timeSlots
        };
        setDateTimeSelections([newDateTimeSelection]);
      }
    }
  }, [id]);

  const handleSelectDate = (date: Date) => {
    if (!isLoggedIn) {
      alert("Please log in to select a date.");
      router.push('/login');
      return;
    }
    
    // Check if date is already selected
    const isDateSelected = selectedDates.some(
      selectedDate => moment(selectedDate).isSame(date, 'day')
    );

    if (isDateSelected) {
      // Find existing time selections for this date
      const existingSelection = dateTimeSelections.find(selection => 
        moment(selection.date).isSame(date, 'day')
      );

      // Set the selected date and show modal
      setSelectedDate(date);
      setShowModal(true);

      // Restore previous selections
      if (existingSelection) {
        if (venueInfo?.schedule === 'HourlyTime') {
          // Restore hourly selections
          const hourlySelections: { [key: string]: boolean } = {};
          existingSelection.timeSlots.forEach(slot => {
            hourlySelections[slot] = true;
          });
          setHourlySlots(hourlySelections);
        } else if (venueInfo?.schedule === 'SessionTime') {
          // Restore session selections
          const sessionSelections = {
            morning: false,
            evening: false,
            lateEvening: false,
            earlyMorning: false,
            fullDay: false,
          };
          existingSelection.timeSlots.forEach(slot => {
            switch(slot) {
              case 'Morning Session (08:00 - 12:00)':
                sessionSelections.morning = true;
                break;
              case 'Afternoon Session (12:00 - 20:00)':
                sessionSelections.evening = true;
                break;
              case 'Late Evening Session (20:00 - 00:00)':
                sessionSelections.lateEvening = true;
                break;
              case 'Early Morning Session (00:00 - 08:00)':
                sessionSelections.earlyMorning = true;
                break;
            }
          });
          setAvailability(sessionSelections);
        } else if (venueInfo?.schedule === 'EntireDay') {
          // Restore entire day selection
          setAvailability(prev => ({ 
            ...prev, 
            fullDay: existingSelection.timeSlots.includes('Full Day (00:00 - 23:59)')
          }));
        }
      } else {
        // Reset selections if no existing selections found
        resetTimeSelections();
      }
    } else {
      // Add new date
      setSelectedDates(prev => [...prev, date]);
      setSelectedDate(date);
      setShowModal(true);
      resetTimeSelections();
    }
  };

  const handleCheckboxChange = (timeSlot: keyof typeof availability) => {
    setAvailability(prev => {
      const newAvailability = { ...prev, [timeSlot]: !prev[timeSlot] };
      return newAvailability;
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  const handleSave = () => {
    if (!selectedDate) return;

    let selectedSlots: string[] = [];

    if (venueInfo?.schedule === 'HourlyTime') {
      selectedSlots = Object.entries(hourlySlots)
        .filter(([_, selected]) => selected)
        .map(([slot]) => slot);
    } else if (venueInfo?.schedule === 'SessionTime') {
      if (availability.morning) {
        selectedSlots.push('Morning Session (08:00 - 12:00)');
      }
      if (availability.evening) {
        selectedSlots.push('Afternoon Session (12:00 - 20:00)');
      }
      if (availability.lateEvening) {
        selectedSlots.push('Late Evening Session (20:00 - 00:00)');
      }
      if (availability.earlyMorning) {
        selectedSlots.push('Early Morning Session (00:00 - 08:00)');
      }
    } else if (venueInfo?.schedule === 'EntireDay' && availability.fullDay) {
      selectedSlots = ['Full Day (00:00 - 23:59)'];
    }

    // If no slots are selected, remove the date entirely
    if (selectedSlots.length === 0) {
      setSelectedDates(prev => 
        prev.filter(d => !moment(d).isSame(selectedDate, 'day'))
      );

      setDateTimeSelections(prev => 
        prev.filter(selection => !moment(selection.date).isSame(selectedDate, 'day'))
      );

      // Update localStorage
      const savedSelectionsStr = localStorage.getItem(`venue-${id}-selections`);
      if (savedSelectionsStr) {
        const saved = JSON.parse(savedSelectionsStr);
        const updatedDates = saved.dates.filter((d: string) => 
          !moment(new Date(d)).isSame(selectedDate, 'day')
        );
        const updatedTimeSlots = { ...saved.timeSlots };
        delete updatedTimeSlots[selectedDate.toISOString()];
        
        localStorage.setItem(`venue-${id}-selections`, JSON.stringify({
          dates: updatedDates,
          timeSlots: updatedTimeSlots
        }));
      }

      setShowModal(false);
      return;
    }

    // Update dateTimeSelections with new slots
    setDateTimeSelections(prev => {
      const existingIndex = prev.findIndex(item => 
        moment(item.date).isSame(selectedDate, 'day')
      );

      const newSelection = {
        date: selectedDate,
        timeSlots: selectedSlots
      };

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = newSelection;
        return updated;
      } else {
        return [...prev, newSelection];
      }
    });

    // Save to localStorage
    const formattedSelections = {
      dates: selectedDates.map(d => d.toISOString()),
      timeSlots: {
        [selectedDate.toISOString()]: selectedSlots
      }
    };

    localStorage.setItem(`venue-${id}-selections`, JSON.stringify(formattedSelections));
    setShowModal(false);
  };

  const resetTimeSelections = () => {
    setHourlySlots({});
    setAvailability({
      morning: false,
      evening: false,
      lateEvening: false,
      earlyMorning: false,
      fullDay: false,
    });
  };

  const handleRemoveSelection = (date: Date) => {
    // Remove from selectedDates
    setSelectedDates(prev => 
      prev.filter(d => !moment(d).isSame(date, 'day'))
    );

    // Remove from dateTimeSelections
    setDateTimeSelections(prev => 
      prev.filter(selection => !moment(selection.date).isSame(date, 'day'))
    );

    // Update localStorage
    const savedSelectionsStr = localStorage.getItem(`venue-${id}-selections`);
    if (savedSelectionsStr) {
      const saved = JSON.parse(savedSelectionsStr);
      const updatedDates = saved.dates.filter((d: string) => 
        !moment(new Date(d)).isSame(date, 'day')
      );
      const updatedTimeSlots = { ...saved.timeSlots };
      delete updatedTimeSlots[date.toISOString()];
      
      localStorage.setItem(`venue-${id}-selections`, JSON.stringify({
        dates: updatedDates,
        timeSlots: updatedTimeSlots
      }));
    }
  };

  const handleNext = () => {
    // Get form data from localStorage
    const formDataStr = localStorage.getItem(`venue-${id}-selections`);
    const formData = formDataStr ? JSON.parse(formDataStr) : null;

    if (!formData || !selectedDates.length || !dateTimeSelections.length) {
      alert("Please complete your reservation details before proceeding.");
      return;
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
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
      
      <div className="container mx-auto px-4 py-8 w-full lg:w-19/20">
       {/* Carousel Section - Now outside the container */}
       <div className="w-full bg-gray-50 py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <ReservationCarousel
            id={Number(id)}
            selectedDates={selectedDates}
            dateTimeSelections={dateTimeSelections}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
          />
        </div>
      </div>

        {currentStep === 1 && (
          <>
            <div className="z-0 flex flex-col lg:flex-row justify-between mx-auto mt-10 w-full lg:w-19/20 px-8">
              {/* Calendar */}
              <div className="w-full z-0 lg:w-4/5 mb-4 lg:mb-0">
                <Calendar 
                  onSelectDate={handleSelectDate} 
                  id={Number(id)}
                  selectedDates={selectedDates}
                />
              </div>

              {/* Q&A Box */}
              <div className="w-full lg:w-3/5 lg:ml-8 p-3 bg-white border rounded-xl shadow-lg">
                <Question 
                  selectedDates={selectedDates}
                  dateTimeSelections={dateTimeSelections}
                  onRemoveSelection={handleRemoveSelection}
                  onNext={handleNext}
                  id={Number(id)}
                  venue={venueInfo || { schedule: '' }}
                />
              </div>
            </div>
          </>
        )}
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
                {[...Array(24)].map((_, i) => {
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
                  Afternoon Session (12:00 - 20:00)
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.lateEvening}
                    onChange={() => handleCheckboxChange('lateEvening')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Late Evening Session (20:00 - 00:00)
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.earlyMorning}
                    onChange={() => handleCheckboxChange('earlyMorning')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Early Morning Session (00:00 - 08:00)
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
                  Full Day (00:00 - 11:59)
                </label>
              </div>
            )}

            <div className="flex justify-between">
              <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded-lg">Cancel</button>
              <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Save</button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Availability;
