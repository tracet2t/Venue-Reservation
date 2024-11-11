
"use client"
import React, { useState } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Define a type for the event
/* interface CalendarEvent {
  start: Date;
  end: Date;
  allDay?: boolean;
}
  */
const CalendarComponent = ({ onSelectDate }: { onSelectDate: (date: Date) => void }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    onSelectDate(slotInfo.start); // Pass the selected date to parent
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

  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
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
        events={[]}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}  // Handles the date selection
        date={currentDate}
        onNavigate={handleNavigate}  // Add this line to handle navigation
        toolbar={false}
        views={['month']}
        style={{ height: 600 }}
        className="text-gray-1000"
      />
    </div>
  );
};

export default CalendarComponent;
