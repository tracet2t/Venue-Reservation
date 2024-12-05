'use client';

import { NextApiRequest, NextApiResponse } from 'next';
import React, { useEffect, useRef, useState } from "react";
import Calendar from "@/components/calendar";
import "/src/app/globals.css";

interface Event {
    start: Date;
    end: Date;
    title: string;
    status: string;
}

const AdminReservationStatus = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [events, setEvents] = useState<Event[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
    const [showTimeSlotPopup, setShowTimeSlotPopup] = useState(false);
    const [partiallyAvailableSlots, setPartiallyAvailableSlots] = useState<string[]>([]);
    const [temporarySlots, setTemporarySlots] = useState<string[]>([]);
    const [reservationStatus, setReservationStatus] = useState<{ [date: string]: { status: string; color: string } }>({});

    const timeSlotPopupRef = useRef<HTMLDivElement>(null);

    const statusColors: { [key: string]: string } = {
        "FULLY_BOOKED": "bg-orange-500",      
        "PARTIALLY_BOOKED": "bg-green-500",  
        "AVAILABLE": "bg-blue-500",       
        "NOT_AVAILABLE": "bg-red-500"          
    };

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
        if (selectedDate && selectedStatus) {
            const dateKey = selectedDate.toISOString().split("T")[0];
            
            // Create end date as the end of the selected day
            const endDate = new Date(selectedDate);
            endDate.setHours(23, 59, 59);

            // Remove any existing events for this date
            const filteredEvents = events.filter(event => {
                const eventDate = event.start.toISOString().split("T")[0];
                return eventDate !== dateKey;
            });

            // Create a new event
            const newEvent = {
                start: selectedDate,
                end: endDate,
                title: selectedStatus,
                status: selectedStatus
            };

            console.log('New event:', newEvent);
            console.log('Saving new event:', newEvent);
            console.log('Current events:', filteredEvents);

            // Update events array with filtered events plus new event
            const updatedEvents = [...filteredEvents, newEvent];
            console.log('Updated events:', updatedEvents);
            setEvents(updatedEvents);
            setEvents(prev => [...prev, newEvent]);
            
            // Update the reservation status
            setReservationStatus((prev) => ({
                ...prev,
                [dateKey]: { 
                    status: selectedStatus, 
                    color: statusColors[selectedStatus] 
                }
            }));
        }
        handleCloseModal();
    };

    const handleStatusChange = (status: string) => {
        setSelectedStatus(status === selectedStatus ? null : status);
        if (status === "PARTIALLY_BOOKED") {
            setTemporarySlots([...partiallyAvailableSlots]);
            setShowTimeSlotPopup(true);
        } else {
            setShowTimeSlotPopup(false);
        }
    };

    const handleSaveTimeSlots = () => {
        setPartiallyAvailableSlots([...temporarySlots]);
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

    const timeSlots = [
        "00.00 - 01.00", "01.00 - 02.00", "02.00 - 03.00", "03.00 - 04.00",
        "04.00 - 05.00", "05.00 - 06.00", "06.00 - 07.00", "07.00 - 08.00",
        "08.00 - 09.00", "09.00 - 10.00", "10.00 - 11.00", "11.00 - 12.00",
        "12.00 - 13.00", "13.00 - 14.00", "14.00 - 15.00", "15.00 - 16.00",
        "16.00 - 17.00", "17.00 - 18.00", "18.00 - 19.00", "19.00 - 20.00",
        "20.00 - 21.00", "21.00 - 22.00", "22.00 - 23.00", "23.00 - 00.00"
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-[#584822]">Reservation Status</h1>
            <div className="border p-4 rounded-lg shadow-md">
                <Calendar onSelectDate={handleSelectDate} id={1} selectedDates={[]} events={events} />
            </div>

            {/* Reservation Status Modal */}
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
                            <label className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="AVAILABLE"
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                        className="mr-2"
                                    />
                                    Available
                                </div>
                                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                            </label>
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

            {/* Time Slot Popup */}
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
