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
}

interface Availability {
  date: string;
  status: string;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ onSelectDate, id }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);

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
      alert("Please log in to select a date.");
      router.push('/login');
      return;
    }

    onSelectDate(date);
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
        height: '110px',
        marginTop: '-22px',
        width: '100%',
        marginLeft: '1px',
      }
    };
  };

  if (loading) return <p>Loading calendar data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="h-auto inset-0 p-4 md:p-8 rounded-xl">
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
        style={{ height: 600 }}
        className="text-gray-1000"
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default CalendarComponent;
