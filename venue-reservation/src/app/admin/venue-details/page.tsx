"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import VenueDetailCard from '@/components/venue_card/admin_venue_card';
import { useRouter } from 'next/navigation';

interface Venue {
  createdAt: string | number | Date;
  id: number;
  name: string;
  street_name: string[];
  district: string;
  province: string;
  type: string;
  capacity: number;
  size: number;
  schedule: string;
  features: string[]; 
  images: string[];
}

export default function VenueDetails() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'a-z'>('newest');
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchVenues();
  }, []);

  useEffect(() => {
    const filterAndSortVenues = () => {
      let filtered = venues;
      
      // Apply search filter
      if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase();
        filtered = venues.filter((venue) => 
          venue.name.toLowerCase().includes(searchLower) ||
          venue.type.toLowerCase().includes(searchLower) ||
          venue.district.toLowerCase().includes(searchLower) ||
          venue.province.toLowerCase().includes(searchLower)
        );
      }
      
      // Apply sorting
      const sorted = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case 'newest':
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          case 'oldest':
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          case 'a-z':
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          default:
            return 0;
        }
      });
      
      setFilteredVenues(sorted);
    };

    filterAndSortVenues();
  }, [venues, searchTerm, sortOption]);

  const fetchVenues = async () => {
    try {
      const response = await fetch('/api/admin-venue');
      if (!response.ok) {
        throw new Error('Failed to fetch venues');
      }
      const data = await response.json();
      setVenues(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (venueId: number) => {
    router.push(`/admin/venue-details/edit/${venueId}`);
  };

  const handleDelete = async (venueId: number) => {
    if (window.confirm('Are you sure you want to delete this venue?')) {
      try {
        const response = await fetch(`/api/admin-venue-card/${venueId}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          // Refresh the venues list
          fetchVenues();
        } else {
          throw new Error('Failed to delete venue');
        }
      } catch (err) {
        console.error('Error deleting venue:', err);
        alert('Failed to delete venue');
      }
    }
  };

  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:gap-6 mb-6">
          {/* Title and Mobile Filter Row */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#584822]">
              Venue Details
            </h1>
            
            <button
              className="sm:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <svg 
                className="w-5 h-5" 
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
            </button>
          </div>

          {/* Controls Section */}
          <div 
            className={`
              grid gap-3
              sm:grid-cols-[auto_1fr_1fr]
              lg:grid-cols-[auto_auto_1fr]
              ${isFilterOpen ? 'block' : 'hidden sm:grid'}
            `}
          >
            {/* Add New Venue Button */}
            <Link 
              href="/admin/venue-details/add-new-venue"
              className="
                flex justify-center items-center
                px-4 py-2 sm:px-6 sm:py-2.5
                border-2 border-[#584822] text-[#584822] rounded-md 
                hover:bg-[#584822] hover:text-white transition-colors
                text-sm sm:text-base whitespace-nowrap
                font-medium
              "
            >
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
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

            {/* Sort Dropdown */}
            <select 
              className="
                px-3 py-2 sm:px-4 sm:py-2.5
                border-2 border-gray-300 rounded-md
                focus:outline-none focus:ring-1 focus:ring-[#584822]
                text-sm sm:text-base bg-white
              "
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as 'newest' | 'oldest' | 'a-z')}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="a-z">A-Z</option>
            </select>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search venues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  w-full
                  pl-9 pr-3 py-2 sm:py-2.5
                  border-2 border-gray-300 rounded-md
                  focus:outline-none focus:ring-1 focus:ring-[#584822]
                  text-sm sm:text-base
                "
              />
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
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
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-gray-200 min-h-[calc(100vh-200px)]">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500">Loading venues...</p>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-red-500">{error}</p>
            </div>
          ) : filteredVenues.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-64 gap-4">
              <p className="text-gray-500">No venues found</p>
              <Link
                href="/admin/venue-details/add-new-venue"
                className="text-[#584822] hover:underline"
              >
                Create your first venue
              </Link>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-6">
              {filteredVenues.map((venue) => (
                <VenueDetailCard
                  key={venue.id}
                  images={venue.images}
                  name={venue.name}
                  address={`${venue.street_name.join(', ')}, ${venue.district}, ${venue.province}`}
                  type={venue.type}
                  capacity={`${venue.capacity} people`}
                  size={`${venue.size} sq.m`}
                  timeSchedule={venue.schedule}
                  features={venue.features}  
                  onEdit={() => handleEdit(venue.id)}
                  onDelete={() => handleDelete(venue.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
