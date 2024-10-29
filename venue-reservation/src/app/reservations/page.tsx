'use client';
import { useState } from 'react';
import Calendar from '@/components/calendar';

const ReservationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availability, setAvailability] = useState({
    morning: false,
    evening: false,
    lateEvening: false,
    earlyMorning: false,
  });

  const handleSelectDate = (date: Date) => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Main Content */}
      <main className="flex-grow p-8">
        <Calendar onSelectDate={handleSelectDate} />
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Select Availability</h2>
            <p className="text-gray-700 mb-6">Select availability for {selectedDate?.toLocaleDateString()}</p>

 <div className="mb-4">  <label className="flex items-center mb-2">
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

              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={availability.earlyMorning}
                  onChange={() => handleCheckboxChange('earlyMorning')}
                  className="form-checkbox text-blue-500 mr-2"
                />
                Early Morning (12AM - 8AM)
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={closeModal}
              >
                Choose Availability
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationPage;
