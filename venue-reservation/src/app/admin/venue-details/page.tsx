"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function VenueDetails() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="p-4 md:p-8 lg:p-10 max-w-[1400px] mx-auto">
      {/* Header Section */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6">
        {/* Left side - Title */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#584822]">Venue Details</h1>
        
        {/* Mobile Filter Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16m-7 6h7" 
            />
          </svg>
          Filters
        </button>

        {/* Right side - Buttons */}
        <div className={`
          flex flex-col space-y-3
          md:flex-row md:space-y-0 md:space-x-4 lg:space-x-6
          ${isFilterOpen ? 'block' : 'hidden md:flex'}
        `}>
          {/* Add New Venue Button */}
          <Link 
            href="/admin/venue-details/add-new-venue"
            className="
              flex justify-center items-center
              px-6 py-2.5 lg:px-8 lg:py-3 
              border-2 border-[#584822] text-[#584822] rounded-md 
              hover:bg-[#584822] hover:text-white transition-colors
              w-full md:w-auto text-base lg:text-lg
              font-medium
            "
          >
            <svg 
              className="w-5 h-5 lg:w-6 lg:h-6 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 4v16m8-8H4" 
              />
            </svg>
            Add New Venue
          </Link>

          {/* Status Filter Dropdown */}
          <select 
            className="
              px-4 py-2.5 lg:px-6 lg:py-3
              border-2 border-gray-300 rounded-md bg-white
              focus:outline-none focus:ring-1 focus:ring-[#584822]
              w-full md:w-auto text-base lg:text-lg
            "
            defaultValue="status"
          >
            <option value="status" disabled>Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="all">All</option>
          </select>

          {/* Search Input */}
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="
                w-full md:w-auto lg:w-80
                pl-10 pr-4 py-2.5 lg:py-3
                border-2 border-gray-300 rounded-md
                focus:outline-none focus:ring-1 focus:ring-[#584822]
                text-base lg:text-lg
              "
            />
            <svg 
              className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Venue List Content */}
      <div className="
        bg-white rounded-lg shadow-lg p-4 lg:p-6 
        border-2 border-gray-100
        min-h-[calc(100vh-200px)]
        overflow-x-auto
      ">
        {/* Add your venue list table or grid here */}
        <div className="min-w-full">
          {/* Table content will go here */}
        </div>
      </div>
    </div>
  );
}
