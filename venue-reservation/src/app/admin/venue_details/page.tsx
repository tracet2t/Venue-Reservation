'use client';
"use cache";

import React, { useState } from 'react';
import VenueDetailCard from '@/components/venue_card/venue_details_card';
import Sidebar from '@/components/side-bar';

interface Location {
  id: number;
  province: string;
  districts: string[];
}

const locations: Location[] = [
  { id: 1, province: "Western Province", districts: ["Colombo", "Gampaha", "Kalutara"] },
  { id: 2, province: "Central Province", districts: ["Kandy", "Matale", "Nuwara Eliya"] },
  { id: 3, province: "Southern Province", districts: ["Galle", "Matara", "Hambantota"] },
  { id: 4, province: "Sabaragamuwa Province", districts: ["Kegalle", "Rathnapura"] },
  { id: 5, province: "Eastern Province", districts: ["Ampara", "Batticaloa", "Trincomalee"] },
  { id: 6, province: "Uva Province", districts: ["Badulla", "Monaragala"] },
  { id: 7, province: "North Western Province", districts: ["Kurunegala", "Puttalam"] },
  { id: 8, province: "North Central Province", districts: ["Anuradhapura", "Polonnaruwa"] },
  { id: 9, province: "Northern Province", districts: ["Jaffna", "Kilinochchi", "Mullaitivu", "Vavuniya", "Mannar"] },
];

const venues = [
  {
    images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'], 
    name: 'Elegant Banquet Hall',
    address: '123 Main Street, Colombo',
    type: 'Banquet Hall',
    capacity: '200 people',
    size: '3000 sq ft',
    timeSchedule: '9:00 AM - 11:00 PM',
    features: ['Air Conditioning', 'Parking', 'Wi-Fi'],
  },
  {
    images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'], // Multiple images for carousel
    name: 'Cozy Conference Room',
    address: '456 Elm Street, Kandy',
    type: 'Conference Room',
    capacity: '50 people',
    size: '1000 sq ft',
    timeSchedule: '8:00 AM - 6:00 PM',
    features: ['Projector', 'Whiteboard', 'Wi-Fi'],
  },
  // Add more venues here...
];

const VenueDetailsPage = () => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedVenueType, setSelectedVenueType] = useState('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggleLocationDropdown = () => setIsLocationDropdownOpen(!isLocationDropdownOpen);

  const handleProvinceCheckboxChange = (province: string) => {
    if (selectedProvince === province) {
      setSelectedProvince(null);
      setSelectedDistricts([]);
    } else {
      setSelectedProvince(province);
      setSelectedDistricts([]);
    }
  };

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredVenues = venues.filter((venue) => {
    const matchesSearchTerm = venue.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedProvince
      ? venue.address.toLowerCase().includes(selectedProvince.toLowerCase())
      : true;
    const matchesType = selectedVenueType
      ? venue.type.toLowerCase() === selectedVenueType.toLowerCase()
      : true;

    return matchesSearchTerm && matchesLocation && matchesType;
  });

  return (
    <div className="flex h-screen">
      {/* Left Side (Sidebar) */}
      <div className="w-1/4 bg-white">
        <Sidebar />
      </div>

      {/* Right Side (Content Area for Venue Cards) */}
      <div className="flex-grow bg-gray-100">
        {/* Header */}
        <div className="z-50">
          {/* Include your header component */}
        </div>

        {/* Main Content */}
        <main className="p-8">
          {/* White Card for Venue Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg h-[600px] overflow-y-auto">
            {/* Venue Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVenues.map((venue, index) => (
                <VenueDetailCard key={index} {...venue} onClick={() => console.log(venue.name)} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VenueDetailsPage;
