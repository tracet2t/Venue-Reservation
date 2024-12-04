'use client';

import React, { useEffect, useRef, useState } from "react";
import Calendar from "@/components/calendar";
import "/src/app/globals.css";

const AdminReservationStatus = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [reservations, setReservations] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [showTimeSlotPopup, setShowTimeSlotPopup] = useState(false);
    const [partiallyAvailableSlots, setPartiallyAvailableSlots] = useState<string[]>([]);
    const [temporarySlots, setTemporarySlots] = useState<string[]>([]); // Temporary slots for time slot selection
    const [reservationStatus, setReservationStatus] = useState<{ [date: string]: string }>({});
  
    const timeSlotPopupRef = useRef<HTMLDivElement>(null);
  
    const handleSelectDate = (date: Date) => {
      setSelectedDate(date);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedStatus(null);
      setPartiallyAvailableSlots([]);
    };
  

  const handleSaveStatus = () => {
    console.log(`Status for ${selectedDate}: ${selectedStatus}`);
    if (selectedStatus === "Partially Available") {
      console.log(`Selected time slots: ${partiallyAvailableSlots.join(", ")}`);
    }
    if (selectedDate && selectedStatus) {
      const dateKey = selectedDate.toISOString().split("T")[0]; // Use date as key
      setReservationStatus((prev) => ({ ...prev, [dateKey]: selectedStatus }));
    }
    handleCloseModal();
  };
  const handleStatusChange = (status: string) => {
    setSelectedStatus(status === selectedStatus ? null : status);
    if (status === "Partially Available") {
        setTemporarySlots([...partiallyAvailableSlots]); // Populate with current slots
        setShowTimeSlotPopup(true);
    } else {
      setShowTimeSlotPopup(false);
    }
  };

  const handleSaveTimeSlots = () => {
    setPartiallyAvailableSlots([...temporarySlots]); // Save the temporary slots
    setShowTimeSlotPopup(false); // Close the popup
  };

  const handleCancelTimeSlots = () => {
    setTemporarySlots([]); // Reset temporary slots
    setShowTimeSlotPopup(false); // Close the popup
  };
  
  // Handle click outside of the time slot popup
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        timeSlotPopupRef.current &&
        !timeSlotPopupRef.current.contains(event.target as Node)
      ) {
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

  const timeSlots = [
    "00.00 - 01.00",
    "01.00 - 02.00",
    "02.00 - 03.00",
    "03.00 - 04.00",
    "04.00 - 05.00",
    "05.00 - 06.00",
    "06.00 - 07.00",
    "07.00 - 08.00",
    "08.00 - 09.00",
    "09.00 - 10.00",
    "10.00 - 11.00",
    "11.00 - 12.00",
    "12.00 - 13.00",
    "13.00 - 14.00",
    "14.00 - 15.00",
    "15.00 - 16.00",
    "16.00 - 17.00",
    "17.00 - 18.00",
    "18.00 - 19.00",
    "19.00 - 20.00",
    "20.00 - 21.00",
    "21.00 - 22.00",
    "22.00 - 23.00",
    "23.00 - 00.00",
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#584822]">Reservation Status</h1>
      <div className="border p-4 rounded-lg shadow-md ">
        <Calendar onSelectDate={handleSelectDate} id={1} />
      </div>
  
      {/* Reservation Status Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-[#584822]">Reservation Status</h2>
            <div className="space-y-2">
              {/* Status options */}
              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Fully Reserved"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="mr-2"
                  />
                  Fully Reserved
                </div>
                <span className="w-4 h-4 rounded-full bg-orange-500"></span>
              </label>
              <label className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Partially Available"
                    onChange={() => handleStatusChange("Partially Available")}
                    className="mr-2"
                  />
                  Partially Available
                </div>
                <span className="w-4 h-4 rounded-full bg-green-500"></span>
              </label>
              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Make Available"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="mr-2"
                  />
                  Make Available
                </div>
                <span className="w-4 h-4 rounded-full  bg-blue-500"></span>
              </label>
              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Not Available"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="mr-2"
                  />
                  Not Available
                </div>
                <span className="w-4 h-4 rounded-full bg-red-500"></span>
              </label>
            </div>
  
           {/* Modal Buttons */}
           <div className="mt-4 flex justify-between">
              <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-200 rounded-md">
                Cancel
              </button>
              <button onClick={handleSaveStatus} className="px-4 py-2 bg-[#584822] text-white rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
  
  {showTimeSlotPopup && (
        <div ref={timeSlotPopupRef} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-[#584822]">Select Time Slots</h2>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {timeSlots.map((slot, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    value={slot}
                    checked={temporarySlots.includes(slot)}
                    onChange={(e) => {
                      const updatedSlots = e.target.checked
                        ? [...temporarySlots, slot]
                        : temporarySlots.filter((s) => s !== slot);
                      setTemporarySlots(updatedSlots);
                    }}
                    className="mr-2"
                  />
                  {slot}
                </label>
              ))}
            </div>

            {/* Time Slot Popup Buttons */}
            <div className="mt-4 flex justify-between">
              <button onClick={handleCancelTimeSlots} className="px-4 py-2 bg-gray-200 rounded-md">
                Cancel
              </button>
              <button onClick={handleSaveTimeSlots} className="px-4 py-2 bg-[#584822] text-white rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReservationStatus;
