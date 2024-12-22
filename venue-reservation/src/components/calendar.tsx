import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const localizer = momentLocalizer(moment);

interface Event {
  venueId: number;
  start: Date;
  end: Date;
  title: string;
  status: 'AVAILABLE' | 'FULLY_BOOKED' | 'PARTIALLY_BOOKED' | 'NOT_AVAILABLE';
}

interface CalendarProps {
  onSelectDate: (date: Date) => void;
  id: number;
  selectedDates: Date[];
  isDateBlocked: (date: Date) => boolean | 'reserved' | 'partial' | 'blocked';
  availability?: VenueAvailability[];
  events?: Array<{
    venueId: number;
    start: Date;
    end: Date;
    title: string;
    status: 'AVAILABLE' | 'NOT_AVAILABLE' | 'FULLY_BOOKED' | 'PARTIALLY_BOOKED';
  }>;
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

const CalendarComponent: React.FC<CalendarProps> = ({ onSelectDate, id, selectedDates = [], isDateBlocked, events = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [availabilityEvents, setAvailabilityEvents] = useState<Event[]>([]);

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

    const fetchAvailability = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/venues/${id}`);
        if (!response.ok) {
          setError('Failed to fetch availability data');
        }
      } catch (err) {
        console.error('Error fetching availability:', err);
        setError('Error fetching availability data');
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, [id]);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await fetch(`/api/venues/availability/${id}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
          },
        });
        if (response.ok) {
          const data: Record<string, { status: string }> = await response.json(); // Adjust type as per API response
          const formattedEvents = Object.entries(data).map(([date, info]) => ({
            venueId: id,
            start: new Date(date),
            end: new Date(date),
            title: formatEventTitle(info.status),
            status: info.status as 'AVAILABLE' | 'FULLY_BOOKED' | 'PARTIALLY_BOOKED' | 'NOT_AVAILABLE',
          }));
          setAvailabilityEvents(formattedEvents);
        }
      } catch (error) {
        console.error('Error fetching availability:', error);
      }
    };
    

    if (id) {
      fetchAvailability();
    }
  }, [id]);

  const handleSelectSlot = ({ start }: { start: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day

    const selectedDate = new Date(start);
    selectedDate.setHours(0, 0, 0, 0);

    // Check if selected date is in the past
    if (selectedDate < today) {
      return; // Do nothing for past dates
    }

    const formattedDate = moment(start).format('YYYY-MM-DD');
    const isBlocked = availabilityEvents.some((blockedDate: Event) => {
      const blocked = moment(blockedDate.start).format('YYYY-MM-DD');
      return blocked === formattedDate && 
             (blockedDate.status === 'NOT_AVAILABLE' || 
              blockedDate.status === 'FULLY_BOOKED');
    });

    if (!isBlocked) {
      onSelectDate(start);
    }
  };

  const handleSelectEvent = (event: Event) => {
    handleDateClick(event.start);
  };

  const handleDateClick = (date: Date) => {
    if (!isLoggedIn) {
      alert("Please log in to make reservations.");
      router.push('/login');
      return;
    }
    onSelectDate(date);
  };
  const currentYear = moment().year();

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = Number(e.target.value);
    setCurrentDate(moment(currentDate).year(newYear).toDate());
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = Number(e.target.value);
    setCurrentDate(moment(currentDate).month(newMonth).toDate());
  };

  const goToPreviousMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'months').toDate());
  };

  const goToNextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, 'months').toDate());
  };

  const formatEventTitle = (status: string) => {
    switch (status) {
      case 'PARTIALLY_BOOKED':
        return 'Partially Available';
      case 'FULLY_BOOKED':
        return 'Fully Booked';
      case 'NOT_AVAILABLE':
        return 'Not Available';
      case 'AVAILABLE':
        return 'Available';
      default:
        return status;
    }
  };

  const eventStyleGetter = (event: Event) => {
    let backgroundColor;
    switch (event.status) {
      case 'NOT_AVAILABLE':
        backgroundColor = '#ef4444'; // red
        return {
          style: { 
            backgroundColor,
            width: '100%',
            height: '100px'
          }
        };
      case 'FULLY_BOOKED':
        backgroundColor = '#f97316'; // orange
        return {
          style: { 
            backgroundColor,
            width: '100%',
            height: '100px'
          }
        };
        break;
      case 'PARTIALLY_BOOKED':
        backgroundColor = '#22c55e'; // green
        return {
          style: { 
            backgroundColor,
            width: '100%',
            height: '100px'
          }
        };
        break;
      default:
        backgroundColor = '#3b82f6'; // blue
        return {
          style: { 
            backgroundColor,
            width: '100%',
            height: '100px'
          }
        };
    }
    return { style: { backgroundColor } };
  };

  const dayPropGetter = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentDate = new Date(date);
    currentDate.setHours(0, 0, 0, 0);
    const isPastDate = currentDate < today;

    const formattedDate = moment(date).format('YYYY-MM-DD');
    const isBlocked = availabilityEvents.some((blockedDate) => {
      const blocked = moment(blockedDate.start).format('YYYY-MM-DD');
      return blocked === formattedDate && 
             (blockedDate.status === 'NOT_AVAILABLE' || 
              blockedDate.status === 'FULLY_BOOKED');
    });

    // Check for partially available dates
    const isPartiallyAvailable = availabilityEvents.some((blockedDate) => {
      const blocked = moment(blockedDate.start).format('YYYY-MM-DD');
      return blocked === formattedDate && blockedDate.status === 'PARTIALLY_BOOKED';
    });

    return {
      style: {
        cursor: isBlocked ? 'not-allowed' : 'pointer',
        backgroundColor: isBlocked ? '#fee2e2' : 'white'
      },
      className: isPartiallyAvailable ? 'partially-available' : ''
    };
  };

  const allEvents = [...events, ...availabilityEvents];

  const renderDay = (day: Date) => {
    // Convert to ISO string and extract date part for consistent comparison
    const currentDate = moment().startOf('day');
    const dayDate = moment(day).startOf('day');
    const isPast = dayDate.isBefore(currentDate);
    
    // Get day properties with normalized date
    const dayProps = dayPropGetter(dayDate.toDate());
    
    const isBlocked = availabilityEvents.some(blocked => 
      moment(blocked.start).startOf('day').isSame(dayDate) &&
      (blocked.status === 'NOT_AVAILABLE' || blocked.status === 'FULLY_BOOKED')
    );
  
    return (
      <button
        key={dayDate.toISOString()}
        onClick={() => !isPast && !isBlocked && handleSelectDate(dayDate.toDate())}
        disabled={isPast || isBlocked}
        className={`
          w-full h-10 rounded-lg flex items-center justify-center relative
          ${isPast ? 'text-gray-400 cursor-not-allowed' : ''}
          ${dayProps.style?.backgroundColor ? `bg-[${dayProps.style.backgroundColor}]` : ''}
          ${!isPast && !isBlocked ? 'hover:bg-gray-100' : ''}
        `}
      >
        {dayDate.date()}
        {isBlocked && (
          <span className="absolute text-xs -bottom-4 text-red-600">
            Not Available
          </span>
        )}
      </button>
    );
  };

  const handleSelectDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    const eventForDate = allEvents.find(event => 
      event.start.toISOString().split('T')[0] === dateStr
    );

    if (eventForDate?.status === 'NOT_AVAILABLE') {
      toast.error('This date is not available for booking.', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
          height: '200px',
        },
      });
      return;
    }

    if (eventForDate?.status === 'FULLY_BOOKED') {
      toast.error('This date is fully booked.', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#F97316',
          color: 'white',
          padding: '16px',
          borderRadius: '8px',
        },
      });
      return;
    }

    onSelectDate(date);
  };

  const isBlockedDate = (value: boolean | 'reserved' | 'partial' | 'blocked'): boolean => {
    return value === true || value === 'reserved' || value === 'blocked';
  };

  if (loading) return <p>Loading calendar data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="h-auto p-4 md:p-8 rounded-xl border">
      <div className="flex justify-between items-center mb-4">
        <button onClick={goToPreviousMonth} className="text-blue-500 font-semibold">
          &lt; Previous
        </button>
        <div className="flex items-center">
          <select
            className="mr-2 w-28 h-8 font-bold shadow-lg text-center"
            onChange={handleMonthChange}
            value={moment(currentDate).month()}
          >
            {moment.months().map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select
            className="mr-2 w-28 h-8 font-bold shadow-lg text-center"
            onChange={handleYearChange}
            value={moment(currentDate).year()}
          >
            {Array.from({ length: 10 }, (_, index) => currentYear + index).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <button onClick={goToNextMonth} className="text-blue-500 font-semibold">
          Next &gt;
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        date={currentDate}
        onNavigate={setCurrentDate}
        toolbar={false}
        views={['month']}
        style={{ height: 650 }}
        className="text-gray-1000"
        eventPropGetter={eventStyleGetter}
        dayPropGetter={dayPropGetter}
      />

      <div className="mt-4 flex flex-wrap gap-4 justify-center items-center p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
          <span className="text-sm">Fully Booked</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
          <span className="text-sm">Partially Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
          <span className="text-sm">Not Available</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
