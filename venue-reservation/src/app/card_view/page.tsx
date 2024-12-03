// Reservation.tsx
'use client'
import React, { useState } from 'react';
import VenueCard from '@/components/venue_card/user_venue_card';
import Header from '@/app/layouts/Header';
import Footer from '@/app/layouts/Footer';

interface Location {
  id: number;
  province: string;
  districts: string[];
}

//data for provinces and districts
const locations: Location[] = [
  { id: 1, province: "Western Province", districts: ["Colombo", "Gampaha", "Kalutara"] },
  { id: 2, province: "Central Province", districts: ["Kandy", "Matale", "Nuwara Eliya"] },
  { id: 3, province: "Southern Province", districts: ["Galle", "Matara", "Hambantota"] },
  { id: 4, province: "Sabaragamuwa Province", districts: ["Kegalle", "Rathnapura"] },
  { id: 5, province: "Eastern Province", districts: ["Ampara", "Batticaloa","Trincomalee"] },
  { id: 6, province: "Uva Province", districts: ["Badulla", "Monaragala"] },
  { id: 7, province: "North Western Province", districts: ["Kurunegala", "Puttalam"] },
  { id: 8, province: "North Central Province", districts: ["Anuradhapura", "Polonnaruwa"] },
  { id: 9, province: "Northern Province", districts: ["Jaffna", "Kilinochchi","Mullaitivu","Vavuniya","Mannar"] },
];


const Reservation = () => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedVenueType, setSelectedVenueType] = useState("");
  const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);
  const [isSearchTerm, setSearchTerm] = useState<string>("");

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };


  const toggleVenueDropdown = () => {
    setIsVenueDropdownOpen(!isVenueDropdownOpen);
  };

  const handleDistrictCheckboxChange = (district: string) => {
    setSelectedDistricts((prev) => {
      if (prev.includes(district)) {
        return prev.filter((item) => item !== district);
      } else {
        return [...prev, district];
      }
    });
  };

  const handleProvinceCheckboxChange = (provinces: string) => {
    if (selectedProvince === provinces) {
      setSelectedProvince(null);
      setSelectedDistricts([]);
    } else {
      setSelectedProvince(provinces);
      setSelectedDistricts([]);
    }
  };
  
  const handleVenueTypeChange = (type: string) => {
    setSelectedVenueType((prev) => (prev === type ? "" : type));
  };
  
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Header */}
      <div className='z-50'>
      <Header />
      </div>

      {/*- Hero Section --*/}

      {/* Main Content */}
      <main className="flex-grow p-8 mt-16">
        <div className="text-center mt-12">
          <h1 className="text-4xl gab-4 p-4 font-bold text-olive text-5xl">Tailored Spaces, <br/>Reserved For You</h1>
          <p className="mt-4 text-2xl text-olive">Instantly discover the best venues for events, meetings, and celebrations.<br/>Start planning your perfect event today</p>
        </div>
        {/* Location and Venue Type Filters */}
        <div className="flex flex-wrap py-2 items-center justify-center mt-5  gap-2 p-4 bg-olive border rounded-lg shadow-lg max-w-[1470px] mx-auto space-y-0 space-x-0 md:space-x-8">
        
          {/* Location Filter */}
          <div className="relative w-full z-30 sm:w-auto md:w-auto ml-0 md:ml-12">
            <button onClick={toggleLocationDropdown} 
                className="flex items-center justify-between gap-6 px-7 py-4 border rounded-lg w-full sm:w-full md:w-72 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]">
              <img src="https://img.icons8.com/ios/50/marker--v1.png" 
                alt="Location Icon" 
                className="w-5 h-5" />
              <span style={{ color: "#584822" }}>Location</span>
              <img src="https://img.icons8.com/ios/50/sort-down.png" 
                alt="Dropdown Icon" 
                className="w-4 h-4" />
            </button>
            {isLocationDropdownOpen && (
              <div className="absolute mt-2 w-72 bg-white border rounded-lg shadow-lg p-4">
                <div className="ml-4">
                  {locations.map((location) => (
                    <div key={location.id} className="mb-2">
                      <label className="font-light block">
                        <input
                          type="checkbox"
                          onChange={() => handleProvinceCheckboxChange(location.province)}
                          checked={selectedProvince === location.province}
                        />
                        <span className="ml-2">{location.province}</span>
                      </label>
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
          <div className="relative w-full z-20 sm:w-full md:w-auto ml-0 md:ml-12">
            <button onClick={toggleVenueDropdown} className="flex items-center justify-between gap-0 px-4 py-4 border rounded-lg w-full sm:w-full md:w-72 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]">
              <img src="https://img.icons8.com/ios/50/performance.png" 
                alt="Venue Icon" 
                className="w-6 h-6" />
              <span style={{ color: "#584822" }}> Venue Type</span>
              <img src="https://img.icons8.com/ios/50/sort-down.png" 
                alt="Dropdown Icon" 
                className="w-4 h-4" />
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
                      value="Outdoor"
                      onChange={() => handleVenueTypeChange("Outdoor")}
                      checked={selectedVenueType === "Outdoor"}
                    />
                    <span className="ml-2">Outdoor</span>
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
           <div className="relative w-full sm:w-full md:w-72">
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="20"  
                height="20" 
                viewBox="0 0 50 50" 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#584822]">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z M 21 11 C 16.59375 11 13 14.59375 13 19 C 13 19.550781 13.449219 20 14 20 C 14.550781 20 15 19.550781 15 19 C 15 15.691406 17.691406 13 21 13 C 24.308594 13 27 15.691406 27 19 C 27 22.308594 24.308594 25 21 25 C 19.820312 25 18.664063 24.6875 17.65625 24.125 L 16.28125 22.875 C 15.851563 22.527344 15.199219 22.570313 14.875 23 C 14.527344 23.46875 14.570313 24.152344 15 24.5 L 16.375 25.75 C 17.660156 26.570313 19.296875 27 21 27 C 25.40625 27 29 23.40625 29 19 C 29 14.59375 25.40625 11 21 11 Z" />
            </svg>
            <input type="text" className="pl-10 gap-1 pr-4 py-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#584822]" 
             placeholder="Enter Venue Name"
             value={isSearchTerm}
             onChange={handleSearchTermChange} 
               />
          </div>
          {/* Search Button */}
        <button className="px-6 py-4 w-full sm:w-full md:w-64 text-white bg-[#584822] rounded-lg hover:bg-[#7b5e34] focus:outline-none">
          Search
        </button>
        </div>

        {/* Venue Card */}
        <div className="max-h-[1000px] z-0 overflow-y-auto">
          <VenueCard
            provinces={selectedProvince ? [selectedProvince] : []}
            districts={selectedDistricts}
            venueType={selectedVenueType}
            searchTerm={isSearchTerm}
          />
        </div>

      </main>

      {/* Footer */}
      
      <Footer />

    </div>
  );
};
export default Reservation;
