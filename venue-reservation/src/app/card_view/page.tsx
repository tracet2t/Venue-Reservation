// Reservation.tsx
'use client'
import React, { useState, useMemo, memo, useEffect, useRef, useCallback } from 'react';
import VenueCard from '@/components/venue_card/user_venue_card';
import Footer from '@/app/layouts/Footer';
import useDebounce from '@/hooks/useDebounce';
import { useRouter, useSearchParams } from 'next/navigation';

interface Location {
  id: number;
  province: string;
  districts: string[];
}

// Define locations data outside the component
const locationsData: Location[] = [
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

function ReservationPage() {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const router = useRouter();
   /* eslint-disable @typescript-eslint/no-unused-vars */
 const searchParams = useSearchParams(); 
 const initialVenueType = searchParams?.get('venueType') || '';

  // Combine related state into a single object
  const [filters, setFilters] = useState({
    province: null as string | null,
    districts: [] as string[],
    venueType: searchParams?.get('venueType') || '',
    searchTerm: ''
  });

  // Dropdown states
  const [dropdownStates, setDropdownStates] = useState({
    location: false,
    venue: false
  });

  // Loading states
  const [loading, setLoading] = useState({
    filter: false,
    search: false
  });

  const refs = {
    location: useRef<HTMLDivElement>(null),
    venue: useRef<HTMLDivElement>(null)
  };

  // Single effect for handling outside clicks
  useEffect(() => {
    if (!dropdownStates.location && !dropdownStates.venue) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (dropdownStates.location && refs.location.current && !refs.location.current.contains(target)) {
        setDropdownStates(prev => ({ ...prev, location: false }));
      }
      
      if (dropdownStates.venue && refs.venue.current && !refs.venue.current.contains(target)) {
        setDropdownStates(prev => ({ ...prev, venue: false }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownStates.location, dropdownStates.venue]);

  // Memoize handlers
  const toggleDropdown = useCallback((type: 'location' | 'venue') => {
    setDropdownStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  }, []);

  useEffect(() => {
    const venueType = searchParams?.get('venueType');
    if (venueType) {
      setFilters(prev => ({ ...prev, venueType }));
    }
  }, [searchParams]);

  // Use useMemo inside the component
  const locations = useMemo(() => locationsData, []);

  const handleDistrictCheckboxChange = (district: string) => {
    setLoading(prev => ({ ...prev, filter: true }));
    setFilters(prev => ({
      ...prev,
      districts: prev.districts.includes(district) 
        ? prev.districts.filter((item) => item !== district)
        : [...prev.districts, district]
    }));
    setTimeout(() => setLoading(prev => ({ ...prev, filter: false })), 500);
  };

  const handleProvinceCheckboxChange = (provinces: string) => {
    setLoading(prev => ({ ...prev, filter: true }));
    if (filters.province === provinces) {
      setFilters(prev => ({ ...prev, province: null, districts: [] }));
    } else {
      setFilters(prev => ({ ...prev, province: provinces, districts: [] }));
    }
    setTimeout(() => setLoading(prev => ({ ...prev, filter: false })), 500);
  };
  
  const handleVenueTypeChange = (type: string) => {
    setFilters(prev => ({ ...prev, venueType: prev.venueType === type ? '' : type }));
  };
  
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchTerm: e.target.value }));
  };
  
  const debouncedSearchTerm = useDebounce(filters.searchTerm, 300);

  const MemoizedVenueCard = memo(VenueCard);

  useEffect(() => {
    if (debouncedSearchTerm !== undefined) {
      setLoading(prev => ({ ...prev, search: true }));
      // Simulate search delay
      setTimeout(() => {
        setLoading(prev => ({ ...prev, search: false }));
      }, 500); // Adjust timing as needed
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Header */}
      {/*- Hero Section --*/}

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="text-center">
          <h1 className="text-4xl gab-4 p-4 font-bold text-olive text-5xl">Tailored Spaces, <br/>Reserved For You</h1>
          <p className="mt-4 text-2xl text-olive">Instantly discover the best venues for events, meetings, and celebrations.<br/>Start planning your perfect event today</p>
        </div>
        {/* Location and Venue Type Filters */}
        <div className="flex flex-wrap py-2 items-center justify-center mt-5  gap-2 p-4 bg-olive border rounded-lg shadow-lg max-w-[1470px] mx-auto space-y-0 space-x-0 md:space-x-8">
        
          {/* Location Filter */}
          <div className="relative w-full z-30 sm:w-auto md:w-auto ml-0 md:ml-12" ref={refs.location}>
            <button onClick={() => toggleDropdown('location')} 
                className="flex items-center justify-between gap-6 px-7 py-4 border rounded-lg w-full sm:w-full md:w-72 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]">
              <img src="https://img.icons8.com/ios/50/marker--v1.png" 
                alt="Location Icon" 
                className="w-5 h-5" />
              <span style={{ color: "#584822" }}>Location</span>
              <img src="https://img.icons8.com/ios/50/sort-down.png" 
                alt="Dropdown Icon" 
                className="w-4 h-4" />
            </button>
            {dropdownStates.location && (
              <div className="absolute mt-2 w-72 bg-white border rounded-lg shadow-lg p-4">
                <div className="ml-4">
                  {locations.map((location) => (
                    <div key={location.id} className="mb-2">
                      <label className="font-light block">
                        <input
                          type="checkbox"
                          onChange={() => handleProvinceCheckboxChange(location.province)}
                          checked={filters.province === location.province}
                        />
                        <span className="ml-2">{location.province}</span>
                      </label>
                      {filters.province === location.province && (
                        <div className="ml-6 mt-2">
                          {location.districts.map((district) => (
                            <label key={district} className="block font-light mb-1">
                              <input
                                type="checkbox"
                                onChange={() => handleDistrictCheckboxChange(district)}
                                checked={filters.districts.includes(district)}
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
          <div className="relative w-full z-20 sm:w-full md:w-auto ml-0 md:ml-12" ref={refs.venue}>
            <button onClick={() => toggleDropdown('venue')} className="flex items-center justify-between gap-0 px-4 py-4 border rounded-lg w-full sm:w-full md:w-72 bg-white focus:outline-none focus:ring-2 focus:ring-[#584822]">
              <img src="https://img.icons8.com/ios/50/performance.png" 
                alt="Venue Icon" 
                className="w-6 h-6" />
              <span style={{ color: "#584822" }}> Venue Type</span>
              <img src="https://img.icons8.com/ios/50/sort-down.png" 
                alt="Dropdown Icon" 
                className="w-4 h-4" />
            </button>
            {dropdownStates.venue && (
              <div className="absolute mt-2 w-72 bg-white border rounded-lg shadow-lg p-2">
                <div className="ml-4">
                  {["Auditorium", "Conference Hall", "Outdoor", "Banquet Hall", "Co-Working Space"].map((type) => (
                    <label key={type} className="block mb-2 font-light">
                      <input
                        type="checkbox"
                        value={type}
                        onChange={() => handleVenueTypeChange(type)}
                        checked={filters.venueType === type}
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  ))}
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
             value={filters.searchTerm}
             onChange={handleSearchTermChange} 
               />
          </div>
          {/* Search Button */}
        <button className="px-6 py-4 w-full sm:w-full md:w-64 text-white bg-[#584822] rounded-lg hover:bg-[#7b5e34] focus:outline-none">
          Search
        </button>
        </div>

        {/* Venue Card */}
        <div className="h-[800px] mt-8 overflow-y-auto scrollbar-thin scrollbar-thumb-olive scrollbar-track-gray-200">
          {(loading.search || loading.filter) ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#584822]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 max-w-[1470px] mx-auto">
              <MemoizedVenueCard
                provinces={filters.province ? [filters.province] : []}
                districts={filters.districts}
                venueType={filters.venueType}
                searchTerm={debouncedSearchTerm}
              />
            </div>
          )}
        </div>

      </main>

      {/* Footer */}
      
      <Footer />

    </div>
  );
}

export default memo(ReservationPage);
