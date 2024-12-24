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
  reservationCount?: number;
}

const AdminHomePage = () => {
  const [mostReservedVenue, setMostReservedVenue] = useState<Venue | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMostReservedVenue = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/admin-most-reserved');
        if (!response.ok) {
          throw new Error('Failed to fetch most reserved venue');
        }
        const data = await response.json();
        setMostReservedVenue(data);
      } catch (err) {
        console.error('Error fetching most reserved venue:', err);
        setError('Failed to load most reserved venue data');
      } finally {
        setLoading(false);
      }
    };

    fetchMostReservedVenue();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Utilization Chart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <UtilizationChart/>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          Most Reserved Venue
          {mostReservedVenue?.reservationCount && (
            <span className="text-sm font-normal ml-2 text-gray-600">
              ({mostReservedVenue.reservationCount} accepted reservations)
            </span>
          )}
        </h2>

        {loading && (
          <div className="text-center py-4">
            <p>Loading most reserved venue...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-4 text-red-500">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && mostReservedVenue && (
          <div className="space-y-6">
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
          </div>
        )}

        {!loading && !error && !mostReservedVenue && (
          <div className="text-center py-4 text-gray-500">
            <p>No venue reservations found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHomePage;