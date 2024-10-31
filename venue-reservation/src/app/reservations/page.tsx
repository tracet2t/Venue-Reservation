"use client";

import React, { useState } from "react";

interface Location {
  id: number;
  province: string;
  city: string;
}

interface VenueType {
  id: number;
  type: string;
}

export const  Reservations= () => {
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    const [selectedVenueType, setSelectedVenueType] = useState("");
    const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);
  
    const toggleLocationDropdown = () => {
      setIsLocationDropdownOpen(!isLocationDropdownOpen);
    };
  
    const toggleVenueDropdown = () => {
      setIsVenueDropdownOpen(!isVenueDropdownOpen);
    };
  
    const handleCheckboxChange = (location: string) => {
      setSelectedLocations((prev) =>
        prev.includes(location)
          ? prev.filter((item) => item !== location)
          : [...prev, location]
      );
    };
  
    const handleVenueTypeChange = (type: string) => {
      setSelectedVenueType(type);
    };
  
    return (
      <div className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-lg max-w-[800px] mx-auto relative">
        {/* Location Filter */}
        <div className="relative z-10">
          <button
            onClick={toggleLocationDropdown}
            className="px-4 py-2 border rounded-lg w-36 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]"
          >
            Location
          </button>
          {isLocationDropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg p-4">
              <div className="ml-4">
                <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Central Province"
                    onChange={() => handleCheckboxChange("Central Province")}
                    checked={selectedLocations.includes("Central Province")}
                  />
                  <span className="ml-2">Central Province</span>
                </label>
                <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Wester Province"
                    onChange={() => handleCheckboxChange("Wester Province")}
                    checked={selectedLocations.includes("Wester Province")}
                  />
                  <span className="ml-2">Wester Province</span>
                  <div className="ml-4">
                  <label className="block mb-2 font-light">
                      <input
                        type="checkbox"
                        value="Colombo"
                        onChange={() => handleCheckboxChange("Colombo")}
                        checked={selectedLocations.includes("Colombo")}
                      />
                      <span className="ml-2">Colombo</span>
                    </label>
                    <label className="block mb-2 font-light">
                      <input
                        type="checkbox"
                        value="Gampaha"
                        onChange={() => handleCheckboxChange("Gampaha")}
                        checked={selectedLocations.includes("Gampaha")}
                      />
                      <span className="ml-2">Gampaha</span>
                    </label>
                    <label className="block mb-2 font-light">
                      <input
                        type="checkbox"
                        value="Kalutara"
                        onChange={() => handleCheckboxChange("Kalutara")}
                        checked={selectedLocations.includes("Kalutara")}
                      />
                      <span className="ml-2">Kalutara</span>
                    </label>
                  </div>
                </label>
                <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Eastern Province"
                    onChange={() => handleCheckboxChange("Eastern Province")}
                    checked={selectedLocations.includes("Eastern Province")}
                  />
                  <span className="ml-2">Eastern Province</span>
                </label>
                <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Uva Province"
                    onChange={() => handleCheckboxChange("Uva Province")}
                    checked={selectedLocations.includes("Uva Province")}
                  />
                  <span className="ml-2">Uva Province</span>
                </label>
                <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Northen Province"
                    onChange={() => handleCheckboxChange("Northen Province")}
                    checked={selectedLocations.includes("Northen Province")}
                  />
                  <span className="ml-2">Northen Province</span>
                </label>
                
              </div>
            </div>
          )}
        </div>
  
        {/* Venue Type Filter */}
        <div className="relative z-10">
          <button
            onClick={toggleVenueDropdown}
            className="px-4 py-2 border rounded-lg w-36 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]"
          >
            Venue Type
          </button>
          {isVenueDropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg p-2">
              <div className="ml-4">
              <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Auditorium"
                    onChange={() => handleVenueTypeChange("Auditorium")}
                    checked={selectedVenueType === "Auditorium"}
                  />
                  <span className="ml-2">Auditorium</span>
                </label>
                <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Outdoor "
                    onChange={() => handleVenueTypeChange("Outdoor ")}
                    checked={selectedVenueType === "Outdoor "}
                  />
                  <span className="ml-2">Outdoor </span>
                </label>
                <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Co-Working Space"
                    onChange={() => handleVenueTypeChange("Co-Working Space")}
                    checked={selectedVenueType === "Co-Working Space"}
                  />
                  <span className="ml-2">Co-Working Space</span>
                </label>
                <label className="block mb-2 font-light">
                  <input
                    type="checkbox"
                    value="Conference Hall"
                    onChange={() => handleVenueTypeChange("Conference Hall")}
                    checked={selectedVenueType === "Conference Hall"}
                  />
                  <span className="ml-2">Conference Hall</span>
                </label>
              </div>
            </div>
          )}
        </div>
  
        {/* Venue Name Input */}
        <input
          type="text"
          placeholder="Venue name"
          className="px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]"
        />
  
        {/* Search Button */}
        <button className="px-6 py-2 text-white bg-[#584822] rounded-lg hover:bg-[#7b5e34] focus:outline-none">
          Search
        </button>
      </div>
    );
  };
  
  export default Reservations;
  