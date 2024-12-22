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

interface BlockedTimeSlot {
  date: string;
  timeSlots: string[];
  status: string []
}

interface VenueAvailability {
  date: string;
  status: 'AVAILABLE' | 'NOT_AVAILABLE' | 'FULLY_BOOKED' | 'PARTIALLY_BOOKED';
  timeSlots: Array<{
    startTime: Date;
    endTime: Date;
    status: 'AVAILABLE' | 'NOT_AVAILABLE' | 'FULLY_BOOKED' | 'PARTIALLY_BOOKED';
  }>;
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
  const [blockedTimeSlots, setBlockedTimeSlots] = useState<BlockedTimeSlot[]>([]);
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [venueAvailability, setVenueAvailability] = useState<VenueAvailability[]>([]);

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
        const [venueResponse, blockedSlotsResponse, /*availabilityResponse*/] = await Promise.all([
          fetch(`/api/venues/${id}`),
          fetch(`/api/venues/${id}/blocked-slots`),
        //  fetch(`/api/venues/${id}/availability`)
        ]);

        if (venueResponse.ok) {
          const data: VenueInfo = await venueResponse.json();
          setVenueInfo({
            id: data.id,
            name: data.name,
            type: data.type,
            schedule: data.schedule
          });
        }

        if (blockedSlotsResponse.ok) {
          const blockedData: BlockedTimeSlot[] = await blockedSlotsResponse.json();
          setBlockedTimeSlots(blockedData);
        }
/*
        if (availabilityResponse.ok) {
          const availabilityData: VenueAvailability[] = await availabilityResponse.json();
          setVenueAvailability(availabilityData);
        }
          */
      } catch (err) {
        console.error("Error fetching data:", err);
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

  useEffect(() => {
    const fetchBlockedSlots = async () => {
      try {
        const response = await fetch(`/api/venues/${id}/blocked-slots`);
        if (response.ok) {
          const data = await response.json();
          setBlockedTimeSlots(data);
        }
      } catch (error) {
        console.error('Error fetching blocked slots:', error);
      }
    };

    if (id) {
      fetchBlockedSlots();
    }
  }, [id]);

  const handleSelectDate = (date: Date) => {
    if (!isLoggedIn) {
      alert("Please log in to select a date.");
      router.push('/login');
      return;
    }
  
    const dateStr = moment(date).format('YYYY-MM-DD');
    const blockedDay = blockedTimeSlots.find(b => b.date === dateStr);

    // Check if the date is fully booked or not available
    if (blockedDay?.status.includes('NOT_AVAILABLE') || blockedDay?.status.includes('FULLY_BOOKED')) {
      alert("This date is not available for booking.");
      return;
    }
  
    // Format date for consistent comparison
    const dayAvailability = venueAvailability.find(a => 
      moment(a.date).format('YYYY-MM-DD') === dateStr
    );
    
    if (dayAvailability?.status === 'NOT_AVAILABLE' || dayAvailability?.status === 'FULLY_BOOKED') {
      alert("This date is not available for booking.");
      return;
    }
    
    // Check if date is already selected using exact date comparison
    const isDateSelected = selectedDates.some(
      selectedDate => moment(selectedDate).format('YYYY-MM-DD') === dateStr
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

  const handleCheckboxChange = (key: keyof typeof availability) => {
    setAvailability(prev => {
      const newAvailability = { ...prev, [key]: !prev[key] };
      
      // Update selectedDates based on checkbox state
      if (newAvailability[key] && selectedDate) {
        setSelectedDates(prev => [...prev, selectedDate]);
      } else {
        setSelectedDates(prev => prev.filter(date => 
          moment(date).format('YYYY-MM-DD') !== moment(selectedDate).format('YYYY-MM-DD')
        ));
      }
      
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
      /* eslint-disable @typescript-eslint/no-unused-vars */
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

  const isTimeSlotBlocked = (date: Date, timeSlot: string) => {
    const dateStr = moment(date).format('YYYY-MM-DD');
    const blockedDay = blockedTimeSlots.find(b => b.date === dateStr);
    return !!(blockedDay?.status.includes('NOT_AVAILABLE') || blockedDay?.status.includes('FULLY_BOOKED'));
  };
/*
  const fetchVenueAvailability = async () => {
    try {
      const response = await fetch(`/api/venues/availability/${id}`);
      if (response.ok) {
        const data: VenueAvailability[] = await response.json();
        // Transform the data to include all status types
        const formattedAvailability = data.map((item) => ({
          date: moment(item.date).format('YYYY-MM-DD'),
          status: item.status,
          timeSlots: item.timeSlots || []
        }));
        setVenueAvailability(formattedAvailability);
      }
    } catch (error) {
      console.error('Error fetching venue availability:', error);
    }
  };
*/
  // Add this function to check if the selected date is fully booked
  const isDateFullyBooked = (date: Date) => {
    const dateStr = moment(date).format('YYYY-MM-DD');
    const blockedDay = blockedTimeSlots.find(b => b.date === dateStr);
    return blockedDay?.status.includes('FULLY_BOOKED') || blockedDay?.status.includes('NOT_AVAILABLE');
  };
/* eslint-disable @typescript-eslint/no-unused-vars */
  const handleRemoveDate = (date: Date) => {
    try {
      // Get saved selections from localStorage
      const saved = JSON.parse(localStorage.getItem(`venue-${id}-selections`) || '{"dates": [], "timeSlots": {}}');
      
      // Format date consistently to avoid invalid date issues
      const dateStr = moment(date).format('YYYY-MM-DD');
      
      // Filter out the removed date
      const updatedDates = saved.dates.filter((d: string) => 
        moment(d).format('YYYY-MM-DD') !== dateStr
      );
      
      // Remove time slots for this date
      const updatedTimeSlots = { ...saved.timeSlots };
      delete updatedTimeSlots[dateStr];
      
      // Save updated selections
      localStorage.setItem(`venue-${id}-selections`, JSON.stringify({
        dates: updatedDates,
        timeSlots: updatedTimeSlots
      }));

      // Update state
      setSelectedDates(updatedDates.map((d: string) => new Date(d)));
      setDateTimeSelections(prev => prev.filter(selection => 
        moment(selection.date).format('YYYY-MM-DD') !== dateStr
      ));
    } catch (error) {
      console.error('Error removing date:', error);
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
                  isDateBlocked={(date: Date) => {
                    const dateStr = moment(date).format('YYYY-MM-DD');
                    const dayAvailability = venueAvailability.find(a => a.date === dateStr);
                    
                    if (!dayAvailability) return false;

                    switch (dayAvailability.status) {
                      case 'FULLY_BOOKED':
                        return 'reserved';
                      case 'PARTIALLY_BOOKED':
                        return 'partial';
                      case 'NOT_AVAILABLE':
                        return 'blocked';
                      case 'AVAILABLE':
                        return false;
                      default:
                        return false;
                    }
                  }}
                  availability={venueAvailability}
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
            
            {selectedDate && (
              <>
                <p>Select availability for {selectedDate?.toLocaleDateString()}</p>

                {/* Show blocked status messages */}
                {(() => {
                  const dateStr = moment(selectedDate).format('YYYY-MM-DD');
                  const blockedDay = blockedTimeSlots.find(b => b.date === dateStr);
                  
                  if (blockedDay?.status.includes('NOT_AVAILABLE')) {
                    return <p className="text-red-500 mb-4">This date is not available</p>;
                  }
                  if (blockedDay?.status.includes('FULLY_BOOKED')) {
                    return <p className="text-orange-500 mb-4">This date is fully booked</p>;
                  }
                  return null;
                })()}

                {/* Session Time Slots */}
                {venueInfo?.schedule === 'SessionTime' && !isDateFullyBooked(selectedDate) && (
                  <div className="mb-4">
                    {[
                      { key: 'morning', label: 'Morning Session (08:00 - 12:00)' },
                      { key: 'evening', label: 'Afternoon Session (12:00 - 20:00)' },
                      { key: 'lateEvening', label: 'Late Evening Session (20:00 - 00:00)' },
                      { key: 'earlyMorning', label: 'Early Morning Session (00:00 - 08:00)' }
                    ].map(({ key, label }) => {
                      const dateStr = moment(selectedDate).format('YYYY-MM-DD');
                      const blockedDay = blockedTimeSlots.find(b => b.date === dateStr);
                      const isSlotBlocked = blockedDay?.timeSlots?.includes(label);

                      return (
                        <label key={key} className={`flex items-center mb-2 ${isSlotBlocked ? 'opacity-50' : ''}`}>
                          <input
                            type="checkbox"
                            checked={availability[key as keyof typeof availability]}
                            disabled={isSlotBlocked}
                            className={`form-checkbox mr-2 ${isSlotBlocked ? 'cursor-not-allowed' : ''}`}
                            onChange={() => !isSlotBlocked && handleCheckboxChange(key as keyof typeof availability)}
                          />
                          {label}
                          {isSlotBlocked && <span className="ml-2 text-red-500 text-sm">(Not Available)</span>}
                        </label>
                      );
                    })}
                  </div>
                )}

                {/* Hourly Time Slots */}
                {venueInfo?.schedule === 'HourlyTime' && !isDateFullyBooked(selectedDate) && (
                  <div className="mb-4 max-h-60 overflow-y-auto">
                    {[...Array(24)].map((_, i) => {
                      const hour = i.toString().padStart(2, '0');
                      const nextHour = ((i + 1) % 24).toString().padStart(2, '0');
                      const timeSlot = `${hour}:00-${nextHour}:00`;
                      
                      const dateStr = moment(selectedDate).format('YYYY-MM-DD');
                      const blockedDay = blockedTimeSlots.find(b => b.date === dateStr);
                      const isSlotBlocked = blockedDay?.timeSlots?.includes(timeSlot);

                      return (
                        <label key={timeSlot} className={`flex items-center mb-2 ${isSlotBlocked ? 'opacity-50' : ''}`}>
                          <input
                            type="checkbox"
                            checked={hourlySlots[timeSlot] || false}
                            disabled={isSlotBlocked}
                            className={`form-checkbox mr-2 ${isSlotBlocked ? 'cursor-not-allowed' : ''}`}
                            onChange={() => !isSlotBlocked && setHourlySlots(prev => ({
                              ...prev,
                              [timeSlot]: !prev[timeSlot]
                            }))}
                          />
                          {`${hour}:00 - ${nextHour}:00`}
                          {isSlotBlocked && <span className="ml-2 text-red-500 text-sm">(Not Available)</span>}
                        </label>
                      );
                    })}
                  </div>
                )}

                {/* Entire Day */}
                {venueInfo?.schedule === 'EntireDay' && (
                  <label className={`flex items-center mb-2 ${isDateFullyBooked(selectedDate) ? 'opacity-50' : ''}`}>
                    <input
                      type="checkbox"
                      checked={availability.fullDay}
                      disabled={isDateFullyBooked(selectedDate)}
                      className={`form-checkbox mr-2 ${isDateFullyBooked(selectedDate) ? 'cursor-not-allowed' : ''}`}
                      onChange={() => !isDateFullyBooked(selectedDate) && handleCheckboxChange('fullDay')}
                    />
                    Full Day (00:00 - 23:59)
                    {isDateFullyBooked(selectedDate) && 
                      <span className="ml-2 text-red-500 text-sm">(Not Available)</span>
                    }
                  </label>
                )}

                <div className="flex justify-between mt-4">
                  <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded-lg">
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    disabled={isDateFullyBooked(selectedDate)}
                    className={`${
                      isDateFullyBooked(selectedDate) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'
                    } text-white py-2 px-4 rounded-lg`}
                  >
                    Save
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Availability;