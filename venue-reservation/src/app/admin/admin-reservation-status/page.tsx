'use client';

import React, { useEffect, useRef, useState } from "react";
import Calendar from "@/components/calendar";
import "/src/app/globals.css";
import { toast } from 'react-hot-toast';
import moment from 'moment';

interface Venue {
    id: number;
    name: string;
    schedule: 'EntireDay' | 'SessionTime' | 'HourlyTime';
    timeSchedule: string[];
}

type AvailabilityStatus = 'AVAILABLE' | 'NOT_AVAILABLE' | 'FULLY_BOOKED' | 'PARTIALLY_BOOKED';

interface Event {
    venueId: number;
    start: Date;
    end: Date;
    title: string;
    status: AvailabilityStatus;
}

interface TimeSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (selectedSlots: string[]) => void;
  selectedDate: Date | null;
  venueSchedule: 'EntireDay' | 'SessionTime' | 'HourlyTime';
  initialSlots: string[];
}

interface AvailabilityItem {
    date: string; // Adjust the type based on your actual data structure
    status: string; // Adjust as necessary
    timeSlots? : string[];
    
}
 /* eslint-disable @typescript-eslint/no-unused-vars */
const TimeSlotModal: React.FC<TimeSlotModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  selectedDate,
  venueSchedule,
  initialSlots = []
}) => {
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>(initialSlots);
  const [availability, setAvailability] = useState({
    morning: initialSlots.includes('Morning Session (08:00 - 12:00)'),
    evening: initialSlots.includes('Afternoon Session (12:00 - 20:00)'),
    lateEvening: initialSlots.includes('Late Evening Session (20:00 - 00:00)'),
    earlyMorning: initialSlots.includes('Early Morning Session (00:00 - 08:00)'),
    fullDay: initialSlots.includes('Full Day (00:00 - 23:59)'),
  });

  useEffect(() => {
    if (isOpen) {
      setSelectedTimeSlots(initialSlots);
      setAvailability({
        morning: initialSlots.includes('Morning Session (08:00 - 12:00)'),
        evening: initialSlots.includes('Afternoon Session (12:00 - 20:00)'),
        lateEvening: initialSlots.includes('Late Evening Session (20:00 - 00:00)'),
        earlyMorning: initialSlots.includes('Early Morning Session (00:00 - 08:00)'),
        fullDay: initialSlots.includes('Full Day (00:00 - 23:59)'),
      });
    }
  }, [isOpen, initialSlots]);

  if (!isOpen) return null;

  const handleTimeSlotChange = (timeSlot: string) => {
    setSelectedTimeSlots(prev => {
      if (prev.includes(timeSlot)) {
        return prev.filter(slot => slot !== timeSlot);
      } else {
        return [...prev, timeSlot];
      }
    });
  };

  const handleSessionChange = (session: keyof typeof availability) => {
    setAvailability(prev => ({
      ...prev,
      [session]: !prev[session]
    }));
  };

  const handleSave = () => {
    let slots: string[] = [];
    
    if (venueSchedule === 'HourlyTime') {
      slots = selectedTimeSlots;
    } else if (venueSchedule === 'SessionTime') {
      if (availability.morning) slots.push('Morning Session (08:00 - 12:00)');
      if (availability.evening) slots.push('Afternoon Session (12:00 - 20:00)');
      if (availability.lateEvening) slots.push('Late Evening Session (20:00 - 00:00)');
      if (availability.earlyMorning) slots.push('Early Morning Session (00:00 - 08:00)');
    } else if (venueSchedule === 'EntireDay' && availability.fullDay) {
      slots = ['Full Day (00:00 - 23:59)'];
    }
    
    onSave(slots);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Select Availability</h2>
        <p className="text-gray-600 mb-4">
          Select availability for {moment(selectedDate).format('DD/MM/YYYY')}
        </p>

        <div className="space-y-2">
          {venueSchedule === 'HourlyTime' && (
            [...Array(24)].map((_, i) => {
              const currentHour = i.toString().padStart(2, '0');
              const nextHour = ((i + 1) % 24).toString().padStart(2, '0');
              const timeSlot = `${currentHour}:00-${nextHour}:00`;
              
              return (
                <label key={timeSlot} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedTimeSlots.includes(timeSlot)}
                    onChange={() => handleTimeSlotChange(timeSlot)}
                    className="mr-2"
                  />
                  {`${currentHour}:00 - ${nextHour}:00`}
                </label>
              );
            })
          )}

          {venueSchedule === 'SessionTime' && (
            <>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={availability.morning}
                  onChange={() => handleSessionChange('morning')}
                  className="mr-2"
                />
                Morning Session (08:00 - 12:00)
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={availability.evening}
                  onChange={() => handleSessionChange('evening')}
                  className="mr-2"
                />
                Afternoon Session (12:00 - 20:00)
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={availability.lateEvening}
                  onChange={() => handleSessionChange('lateEvening')}
                  className="mr-2"
                />
                Late Evening Session (20:00 - 00:00)
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={availability.earlyMorning}
                  onChange={() => handleSessionChange('earlyMorning')}
                  className="mr-2"
                />
                Early Morning Session (00:00 - 08:00)
              </label>
            </>
          )}

          {venueSchedule === 'EntireDay' && (
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={availability.fullDay}
                onChange={() => handleSessionChange('fullDay')}
                className="mr-2"
              />
              Full Day (00:00 - 23:59)
            </label>
          )}
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={() => {
              setSelectedTimeSlots([]); // Clear selected time slots
              setAvailability({
                morning: false,
                evening: false,
                lateEvening: false,
                earlyMorning: false,
                fullDay: false,
              }); // Reset availability
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Remove Availability
          </button>
        </div>
      </div>
    </div>
  );
};

const AdminReservationStatus = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [events, setEvents] = useState<Event[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [showTimeSlotPopup, setShowTimeSlotPopup] = useState(false);
    const [temporarySlots, setTemporarySlots] = useState<string[]>([]);
    const [venues, setVenues] = useState<Venue[]>([]);
    const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
    const [dateAvailability, setDateAvailability] = useState<{
        [key: string]: {
            status: AvailabilityStatus;
            timeSlots: string[];
        };
    }>({});

    const timeSlotPopupRef = useRef<HTMLDivElement>(null);

    const statusColors: { [key: string]: string } = {
        "FULLY_BOOKED": "bg-orange-500,width:400px",      
        "PARTIALLY_BOOKED": "bg-green-500,width:400px",  
        "AVAILABLE": "bg-blue-500,width:100%",       
        "NOT_AVAILABLE": "bg-red-500,width:100%"          
    };

    const handleSelectDate = (date: Date) => {
        setSelectedDate(date);
        setIsModalOpen(true);
        
        const existingEvent = events.find(event => 
            event.start.toISOString().split('T')[0] === date.toISOString().split('T')[0] &&
            event.venueId === selectedVenue?.id
        );
        
        if (existingEvent) {
            setSelectedStatus(existingEvent.status);
            if (existingEvent.status === 'PARTIALLY_BOOKED') {
                const existingSlots = dateAvailability[date.toISOString().split('T')[0]]?.timeSlots || [];
                setTemporarySlots(existingSlots);
            } else {
                setTemporarySlots([]);
            }
        } else {
            setSelectedStatus(null);
            setTemporarySlots([]);
        }
    };

    const handleCloseModal = () => {
        setSelectedDate(null);
        setSelectedStatus(null);
        setIsModalOpen(false);
        setTemporarySlots([]); // Reset temporary slots
    };

    const handleSaveStatus = async () => {
        if (selectedDate && selectedStatus && selectedVenue) {
            try {
            //    const dateKey = selectedDate.toISOString().split('T')[0];
                let timeSlots: string[] = [];

                if (selectedStatus === 'PARTIALLY_BOOKED') {
                    timeSlots = temporarySlots;
                }

                const availabilityData = {
                    venueId: selectedVenue.id,
                    date: selectedDate,
                    status: selectedStatus,
                    timeSlots: timeSlots
                };

                const response = await fetch('/api/admin-venue-availability', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(availabilityData)
                });

                if (!response.ok) {
                    throw new Error('Failed to save availability');
                }

                toast.success('Status updated successfully');
                handleCloseModal();
                
                // Reload the entire page
                window.location.reload();

            } catch (error) {
                console.error('Error saving status:', error);
                toast.error('Failed to update status');
            }
        }
    };

    const handleStatusChange = (status: string) => {
        if (status === selectedStatus) {
            // If the same status is clicked, remove it
            setSelectedStatus(null);
            // Call function to remove status from calendar
            removeStatusFromCalendar(selectedDate, selectedVenue?.id ?? null);
        } else {
            setSelectedStatus(status);
            if (status === "PARTIALLY_BOOKED" && selectedVenue) {
                const dateKey = selectedDate?.toISOString().split('T')[0] || '';
                const existingSlots = dateAvailability[dateKey]?.timeSlots || [];
                setTemporarySlots(existingSlots);
                setShowTimeSlotPopup(true);
            } else {
                setShowTimeSlotPopup(false);
                setTemporarySlots([]);
            }
        }
    };

    // New function to remove status from calendar
    const removeStatusFromCalendar = async (date: Date | null, venueId: number | null) => {
        if (!date || !venueId) return;

        const dateKey = date.toISOString().split('T')[0];
        const availabilityData = {
            venueId: venueId,
            date: date,
            status: null, // Indicate removal of status
            timeSlots: [] // Clear time slots
        };

        try {
            const response = await fetch('/api/admin-venue-availability', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(availabilityData)
            });

            if (!response.ok) {
                throw new Error('Failed to remove availability');
            }

            // Update local state to reflect the removal
            setEvents(prev => prev.filter(event => 
                !(event.start.toISOString().split('T')[0] === dateKey && event.venueId === venueId)
            ));

            // Optionally, update dateAvailability state
            const newDateAvailability = { ...dateAvailability };
            delete newDateAvailability[dateKey];
            setDateAvailability(newDateAvailability);

            toast.success('Availability removed successfully');
        } catch (error) {
            console.error('Error removing availability:', error);
            toast.error('Failed to remove availability status');
        }
    };

    const handleSaveTimeSlots = async (selectedSlots: string[]) => {
        if (selectedSlots.length === 0) {
            setSelectedStatus(null);
            if (selectedDate) {
                const dateKey = selectedDate.toISOString().split('T')[0];
                const newDateAvailability = { ...dateAvailability };
                delete newDateAvailability[dateKey];
                setDateAvailability(newDateAvailability);
            }
        } else {
            setSelectedStatus('PARTIALLY_BOOKED');
            if (selectedDate) {
                const dateKey = selectedDate.toISOString().split('T')[0];
                setDateAvailability(prev => ({
                    ...prev,
                    [dateKey]: {
                        status: 'PARTIALLY_BOOKED',
                        timeSlots: selectedSlots
                    }
                }));
            }
        }
        
        setTemporarySlots(selectedSlots);
        setShowTimeSlotPopup(false);
    };

    const handleCancelTimeSlots = () => {
        setTemporarySlots([]);
        setShowTimeSlotPopup(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (timeSlotPopupRef.current && !timeSlotPopupRef.current.contains(event.target as Node)) {
                setShowTimeSlotPopup(false);
            }
        };

        if (showTimeSlotPopup) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showTimeSlotPopup]);

    useEffect(() => {
        const fetchVenues = async () => {
            try {
                const response = await fetch('/api/admin-reservation-status');
                if (!response.ok) {
                    throw new Error('Failed to fetch venues');
                }
                const data = await response.json();
                
                const venuesWithSchedule = data.venues.map((venue: Venue) => ({
                    id: venue.id,
                    name: venue.name,
                    schedule: venue.schedule,
                    timeSchedule: venue.timeSchedule || []
                }));
                
                setVenues(venuesWithSchedule);
                if (venuesWithSchedule.length > 0) {
                    setSelectedVenue(venuesWithSchedule[0]);
                }
            } catch (error) {
                console.error('Error fetching venues:', error);
                toast.error('Failed to load venues');
            }
        };
        
        fetchVenues();
    }, []);

    useEffect(() => {
        const slots = [];
        for (let i = 0; i < 24; i++) {
            const startHour = i.toString().padStart(2, '0');
            const endHour = ((i + 1) % 24).toString().padStart(2, '0');
            slots.push({
                startTime: `${startHour}:00`,
                endTime: `${endHour}:00`,
                status: 'AVAILABLE'
            });
        }
       // setTimeSlots(slots);
    }, []);

    const handleVenueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const venue = venues.find(v => v.id === Number(e.target.value));
        setSelectedVenue(venue || null);
        setSelectedStatus(null);
        setTemporarySlots([]);
        setShowTimeSlotPopup(false);
    };

    useEffect(() => {
        const fetchAvailabilityData = async () => {
            if (!selectedVenue) return;
            
            try {
                const [availabilityRes, blockedSlotsRes] = await Promise.all([
                    fetch(`/api/admin-venue-availability?venueId=${selectedVenue.id}`),
                    fetch(`/api/venues/${selectedVenue.id}/blocked-slots`)
                ]);

                if (!availabilityRes.ok || !blockedSlotsRes.ok) {
                    throw new Error('Failed to fetch data');
                }

                const availabilityData: AvailabilityItem[] = await availabilityRes.json();
                const blockedSlotsData: Array<{date: string, timeSlots: string[]}> = await blockedSlotsRes.json();

                // Combine availability and blocked slots data
                const transformedEvents = availabilityData.map((item: AvailabilityItem) => {
                    return {
                        venueId: selectedVenue.id,
                        start: new Date(item.date),
                        end: new Date(item.date),
                        title: item.status,
                        status: item.status as AvailabilityStatus,
                        className: `status-${item.status.toLowerCase()}`
                    };
                });

                setEvents(transformedEvents);

                // Update dateAvailability state
                const newDateAvailability: { 
                    [key: string]: { status: AvailabilityStatus; timeSlots: string[] } 
                } = {};
                
                availabilityData.forEach((item: AvailabilityItem) => {
                    if (item.status === 'PARTIALLY_BOOKED' || item.status === 'NOT_AVAILABLE') {
                        newDateAvailability[item.date] = {
                            status: item.status,
                            timeSlots: item.timeSlots || []
                        };
                    }
                });

                // Add blocked slots to dateAvailability
                blockedSlotsData.forEach((block) => {
                    const dateKey = block.date;
                    if (newDateAvailability[dateKey]) {
                        newDateAvailability[dateKey].timeSlots = Array.from(
                            new Set([...newDateAvailability[dateKey].timeSlots, ...block.timeSlots])
                        );
                    } else {
                        newDateAvailability[dateKey] = {
                            status: 'NOT_AVAILABLE',
                            timeSlots: block.timeSlots
                        };
                    }
                });

                setDateAvailability(newDateAvailability);

            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error('Failed to load availability data');
            }
        };

        fetchAvailabilityData();
    }, [selectedVenue]);
    
    const handleRemoveStatus = async () => {
        if (selectedDate && selectedVenue) {
            try {
                const response = await fetch(
                    `/api/admin-venue-availability?venueId=${selectedVenue.id}&date=${selectedDate.toISOString()}`,
                    {
                        method: 'DELETE',
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to remove status');
                }

                toast.success('Status removed successfully');
                handleCloseModal();
                
                // Reload the entire page
                window.location.reload();

            } catch (error) {
                console.error('Error removing status:', error);
                toast.error('Failed to remove status');
            }
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-[#584822]">Reservation Status</h1>
            
            <div className="mb-4">
                <select 
                    className="w-full p-2 border rounded-md"
                    value={selectedVenue?.id || ''}
                    onChange={handleVenueChange}
                >
                    <option value="">Select a Venue</option>
                    {venues.map(venue => (
                        <option key={venue.id} value={venue.id}>
                            {venue.name}
                        </option>
                    ))}
                </select>
            </div>

            {selectedVenue && (
                <div className="border p-4 rounded-lg shadow-md">
                    <Calendar 
                        onSelectDate={handleSelectDate} 
                        id={selectedVenue.id} 
                        selectedDates={[]} 
                        events={events}
                        isDateBlocked={() => false}
                    />
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4 text-[#584822]">Reservation Status</h2>
                        <div className="space-y-2">
                            <label className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="FULLY_BOOKED"
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                        className="mr-2"
                                    />
                                    Reserved
                                </div>
                                <span className="w-4 h-4 rounded-full bg-orange-500"></span>
                            </label>
                            {selectedVenue?.schedule !== 'EntireDay' && (
                                <label className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            name="status"
                                            value="PARTIALLY_BOOKED"
                                            onChange={() => handleStatusChange("PARTIALLY_BOOKED")}
                                            className="mr-2"
                                        />
                                        Partially Available
                                    </div>
                                    <span className="w-4 h-4 rounded-full bg-green-500"></span>
                                </label>
                            )}
                            <label className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="NOT_AVAILABLE"
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                        className="mr-2"
                                    />
                                    Not Available
                                </div>
                                <span className="w-4 h-4 rounded-full bg-red-500"></span>
                            </label>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-200 rounded-md">
                                Cancel
                            </button>
                            <button onClick={handleSaveStatus} className="px-4 py-2 bg-[#584822] text-white rounded-md">
                                Save
                            </button>
                            <button onClick={handleRemoveStatus} className="px-4 py-2 bg-red-500 text-white rounded-md">
                                Remove Status
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <TimeSlotModal
                isOpen={showTimeSlotPopup}
                onClose={() => {
                    setShowTimeSlotPopup(false);
                    if (temporarySlots.length === 0) {
                        setSelectedStatus(null);
                    }
                }}
                onSave={handleSaveTimeSlots}
                selectedDate={selectedDate}
                venueSchedule={selectedVenue?.schedule || 'EntireDay'}
                initialSlots={temporarySlots}
            />
        </div>
    );
};

export default AdminReservationStatus;
 /* eslint-disable @typescript-eslint/no-unused-vars */
