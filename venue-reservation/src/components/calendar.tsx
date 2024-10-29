import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Define a type for the event
interface CalendarEvent {
  start: Date;
  end: Date;
  allDay?: boolean;
  color?: string;
}

const CalendarComponent = ({ onSelectDate }: { onSelectDate: (date: Date) => void }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const events: CalendarEvent[] = [
    {
      start: new Date(2024, 9, 14),
      end: new Date(2024, 9, 14, 23, 59, 59),
      allDay: true,
      color: 'orange',
    },
    {
      start: new Date(2024, 9, 25),
      end: new Date(2024, 9, 25, 23, 59, 59),
      allDay: true,
      color: 'green',
    },
    {
      start: new Date(2024, 9, 6),
      end: new Date(2024, 9, 6, 23, 59, 59),
      allDay: true,
      color: 'blue',
    },
    {
      start: new Date(2024, 9, 16),
      end: new Date(2024, 9, 16, 23, 59, 59),
      allDay: true,
      color: 'red',
    },
    {
      start: new Date(2024, 9, 17),
      end: new Date(2024, 9, 17, 23, 59, 59),
      allDay: true,
      color: 'red',
    },
  ];

  const eventStyleGetter = (event: CalendarEvent) => {
    const backgroundColor = event.color || 'blue';
    const style = {
      backgroundColor,
      borderRadius: '15px',
      opacity: 0.3,
      color: 'white',
      border: '0px',
      display: 'block',
      height: '110px',
      marginTop: "-22px",
      width: "115px",
      marginLeft: "1px",
    };
    return { style };
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    onSelectDate(event.start); 
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

  return (
    <div className="h-500 bg-white p-8 rounded-xl">
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
        onSelectEvent={handleSelectEvent}
        date={currentDate}
        toolbar={false}
        views={['month']}
        style={{ height: 600 }}
        className="text-gray-900"
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default CalendarComponent;
