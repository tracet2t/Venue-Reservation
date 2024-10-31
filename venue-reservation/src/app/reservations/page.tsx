"use client";

import React, { useState } from "react";

interface Location {
  id: number;
  province: string;
  districts: string;
}

interface VenueType {
  id: number;
  type: string;
}
// Dummy data for provinces and districts
const locations: Location[] = [
  {
    id: 1,
    province: "Western Province",
    districts: ["Colombo", "Gampaha", "Kalutara"],
  },
  {
    id: 2,
    province: "Central Province",
    districts: ["Kandy", "Matale", "Nuwara Eliya"],
  },
  {
    id: 3,
    province: "Southern Province",
    districts: ["Galle", "Matara", "Hambantota"],
  },
  {
    id: 4,
    province: "Sabaragamuwa Province",
    districts: ["Kegalle", "Rathnapura"],
  },
  {
    id: 5,
    province: "Eastern Province",
    districts: ["Ampara", "Batticaloa","Trincomalee"],
  },
  {
    id: 6,
    province: "Uva Province",
    districts: ["Badulla", "Monaragala"],
  },
  {
    id: 7,
    province: "North Western Province",
    districts: ["Kurunegala", "Puttalam"],
  },
  {
    id: 8,
    province: "North central Province",
    districts: ["Anuraghapura", "Polonnaruwa"],
  },
  {
    id: 9,
    province: "Northen Province",
    districts: ["Jaffna", "Kilinochchi","Mullaitivu","Vavuniya","Mannar"],
  },
];

export const  Reservations= () => {
    const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
    const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    const [selectedVenueType, setSelectedVenueType] = useState("");
    const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);
  
    const toggleLocationDropdown = () => {
      setIsLocationDropdownOpen(!isLocationDropdownOpen);
    };
  
    const toggleVenueDropdown = () => {
      setIsVenueDropdownOpen(!isVenueDropdownOpen);
    };

     // Select or deselect a district within the selected province
  const handleDistrictCheckboxChange = (district: string) => {
    setSelectedDistricts((prev) =>
      prev.includes(district)
        ? prev.filter((item) => item !== district)
        : [...prev, district]
    );
  };
    // Select or deselect a province and reset districts when deselecting
    const handleProvinceCheckboxChange = (province: string) => {
      if (selectedProvince === province) {
        setSelectedProvince(null);
        setSelectedDistricts([]); // Clear districts when unselecting a province
      } else {
        setSelectedProvince(province);
        setSelectedDistricts([]); // Reset districts for new province selection
      }
    };
  
    const handleVenueTypeChange = (type: string) => {
      setSelectedVenueType(type);
    };
  
    return (
      <div className="flex flex-col sm:flex-col md:flex-row items-center gap-4 p-4 bg-white border rounded-lg shadow-lg max-w-[1400px] mx-auto space-y-4 space-x-0 md:space-x-8">
        {/* Location Filter */}
        <div className="relative z-10 w-full sm:w-full md:w-auto ml-0 md:ml-12">
        <button
          onClick={toggleLocationDropdown}
          className="px-4 py-2 border rounded-lg w-full sm:w-full md:w-72 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]"
        >
          Location
        </button>
        {isLocationDropdownOpen && (
          <div className="absolute mt-2 w-72 bg-white border rounded-lg shadow-lg p-4">
            <div className="ml-4">
              {locations.map((location) => (
                <div key={location.id} className="mb-2">
                  {/* Province Selection */}
                  <label className="font-light block">
                    <input
                      type="checkbox"
                      onChange={() => handleProvinceCheckboxChange(location.province)}
                      checked={selectedProvince === location.province}
                    />
                    <span className="ml-2">{location.province}</span>
                  </label>
                  {/* Display Districts if Province is Selected */}
                  {selectedProvince === location.province && (
                    <div className="ml-6 mt-2">
                      {location.districts.map((district) => (
                        <label key={district} className="block font-light mb-1">
                          <input
                            type="checkbox"
                            onChange={() => handleDistrictCheckboxChange(district)}
                            checked={selectedDistricts.includes(district)}
                          />
                          <span className="ml-2">{district}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
  
        {/* Venue Type Filter */}
        <div className="relative z-10 w-full sm:w-full md:w-auto ml-0 md:ml-12">
          <button
            onClick={toggleVenueDropdown}
            className="px-4 py-2 border rounded-lg w-full sm:w-full md:w-72 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]"
          >
            Venue Type
          </button>
          {isVenueDropdownOpen && (
            <div className="absolute mt-2 w-72 bg-white border rounded-lg shadow-lg p-2">
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
          className="px-4 py-2 border rounded-lg w-full sm:w-full md:w-72 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]"
        />
  
        {/* Search Button */}
        <button className="px-6 py-2 w-full sm:w-full md:w-64 text-white bg-[#584822] rounded-lg hover:bg-[#7b5e34] focus:outline-none">
          Search
        </button>
      </div>
    );
  };
  
  export default Reservations;