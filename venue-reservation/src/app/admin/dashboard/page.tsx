"use client";

import React, { useEffect, useState } from "react";
import UtilizationChart from "@/components/admin/utilization-chart";
import VenueDetailCard from '@/components/venue_card/feature_venue_card';

interface Venue {
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

const AdminHomePage = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [mostReservedVenue, setMostReservedVenue] = useState<Venue | null>(null);

  useEffect(() => {
    const fetchAdminVenues = async () => {
      try {
        const response = await fetch('/api/admin-venue');
        if (!response.ok) throw new Error('Failed to fetch venues');
        const data = await response.json();
        setVenues(data);
        
        // Assuming the API returns venues sorted by reservation count
        // Take the first venue as the most reserved one
        if (data.length > 0) {
          setMostReservedVenue(data[0]);
        }
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };
    fetchAdminVenues();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Utilization Chart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <UtilizationChart/>
      </div>

      <h2 className="text-xl font-bold mb-4">Most Reserved Venue</h2>

      <div className="space-y-6">
        {mostReservedVenue && (
          <VenueDetailCard
            key={mostReservedVenue.id}
            images={mostReservedVenue.images}
            name={mostReservedVenue.name}
            address={`${mostReservedVenue.street_name.join(', ')}, ${mostReservedVenue.district}, ${mostReservedVenue.province}`}
            type={mostReservedVenue.type}
            capacity={`${mostReservedVenue.capacity} people`}
            size={`${mostReservedVenue.size} sq.m`}
            timeSchedule={mostReservedVenue.schedule}
            features={mostReservedVenue.features}
          />
        )}
      </div>
    </div>
  );
};

export default AdminHomePage;