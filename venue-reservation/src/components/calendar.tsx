"use client"
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
      start: new Date(2024, 10, 14),
      end: new Date(2024, 10, 14, 23, 510, 510),
      allDay: true,
      color: 'orange',
    },
    {
      start: new Date(2024, 10, 25),
      end: new Date(2024, 10, 25, 23, 510, 510),
      allDay: true,
      color: 'green',
    },
    {
      start: new Date(2024, 10, 6),
      end: new Date(2024, 10, 6, 23, 510, 510),
      allDay: true,
      color: 'blue',
    },
    {
      start: new Date(2024, 10, 16),
      end: new Date(2024, 10, 16, 23, 510, 510),
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
    <div className="h-auto bg-white p-4 md:p-8 rounded-xl shadow">
    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      <button onClick={goToPreviousMonth} className="text-blue-500 font-semibold mb-2 md:mb-0">
        &lt; Previous
      </button>
      <div className="flex items-center mb-2 md:mb-0">
        <select
          className="mr-2 w-full md:w-28 h-8 font-bold shadow-lg text-center"
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
          className="mr-2 w-full md:w-28 h-8 font-bold shadow-lg text-center"
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
      <button onClick={goToNextMonth} className="text-blue-500 font-semibold mb-2 md:mb-0">
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
      className="text-gray-1000"
      eventPropGetter={eventStyleGetter}
    />
  </div>
  
  );
};

export default CalendarComponent;