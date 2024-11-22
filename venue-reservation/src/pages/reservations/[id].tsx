"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";
import CalendarComponent from "@/components/calendar";
import Questions from "@/components/questions";

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "/src/app/globals.css";

const Availability = () => {
  const router = useRouter();
  const { id } = router.query;

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [venueInfo, setVenueInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const [showModal, setShowModal] = useState(false);
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

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchVenueInfo = async () => {
      try {
        const response = await fetch(`/api/venues/${id}`);
        if (response.ok) {
          const data = await response.json();
          setVenueInfo(data);
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to fetch venue details');
        }
      } catch (err) {
        console.error('Error fetching venue info:', err);
        setError('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchVenueInfo();
  }, [id]);

  const handlePreviousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  const handleNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row justify-between mx-auto mt-10 w-full lg:w-3/4 px-4">
        {/* Calendar Component Card */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <button
                className="px-4 py-2 bg-[#584822] rounded-md hover:bg-gray-300 text-white"
                onClick={handlePreviousDay}
              >
                Prev
              </button>
              <div className="text-lg font-semibold">
                {currentDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </div>
              <button
                className="px-4 py-2 bg-[#584822] rounded-md hover:bg-gray-300 text-white"
                onClick={handleNextDay}
              >
                Next
              </button>
            </div>
            <CalendarComponent
              venueId={Number(id)}
              onSelectDate={handleSelectDate}
            />
                  {/* Legend Section */}
    <div className="flex space-x-5 items-center justify-center mt-6">
      <div className="flex items-center space-x-2">
        <div className="w-7 h-6 rounded-full bg-red-500" title="Reserved"></div>
        <span>Reserved</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-7 h-6 rounded-full bg-blue-500" title="Partially Available"></div>
        <span>Partially Available</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-7 h-6 rounded-full bg-green-500" title="Selected Dates"></div>
        <span>Selected Dates</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-7 h-6 rounded-full bg-yellow-500" title="Not Available"></div>
        <span>Not Available</span>
      </div>
    </div>
          </div>
     
        </div>

        {/* Questions Component */}
        <div className="w-full lg:w-1/2">
          <Questions />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Availability;
