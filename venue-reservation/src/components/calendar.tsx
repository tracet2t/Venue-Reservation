import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';

const localizer = momentLocalizer(moment);

interface Event {
  start: Date;
  end: Date;
  title: string;
  status: string;
}

interface CalendarComponentProps {
  onSelectDate: (date: Date) => void;
  id: number;
  selectedDates?: Date[];
}

interface Availability {
  date: string;
  status: string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onSelectDate, id, selectedDates = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

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
        if (response.ok) {
          const data = await response.json();
          const formattedEvents = data.availability.map((availability: Availability) => ({
            start: new Date(availability.date),
            end: new Date(availability.date),
            title: availability.status,
            status: availability.status,
          }));
          setEvents(formattedEvents);
        } else {
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

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    handleDateClick(slotInfo.start);
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

  const eventStyleGetter = (event: Event) => {
    let backgroundColor;
    switch (event.status) {
      case 'FULLY_BOOKED':
        backgroundColor = 'red';
        break;
      case 'PARTIALLY_BOOKED':
        backgroundColor = 'green';
        break;
      case 'NOT_AVAILABLE':
        backgroundColor = 'red';
        break;
      case 'AVAILABLE':
        backgroundColor = 'blue';
        break;
      default:
        backgroundColor = 'gray';
    }
    return {
      style: {
        backgroundColor,
        borderRadius: '15px',
        opacity: 0.7,
        color: 'white',
        border: '0px',
        display: 'block',
        height: '120px',
        marginTop: '-22px',
        width: '100%',
        marginLeft: '1px',
      }
    };
  };

  const dayPropGetter = (date: Date) => {
    const isSelected = selectedDates.some(
      selectedDate => moment(selectedDate).isSame(date, 'day')
    );

    if (isSelected) {
      return {
        style: {
          backgroundColor: '#1f89b7',
          height: '100%',
          width: '100%',
        },
      };
    }
    return {};
  };

  if (loading) return <p>Loading calendar data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="h-auto p-4 md:p-8 rounded-xl border rounded-xl">
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
        events={events}
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
          <span className="text-sm"> Not Available</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
