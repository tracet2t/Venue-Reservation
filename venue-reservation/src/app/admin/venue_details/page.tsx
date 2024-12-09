import React, { useState, useEffect } from 'react';
import VenueDetailCard from '@/components/venue_card/venue_details_card';

const VenueDetailsPage = () => {
  const [venue, setVenue] = useState(null);
  const [error, setError] = useState(null);

  // Assuming the venue ID is retrieved from router or query
  const { id } = useRouter().query;

  useEffect(() => {
    if (id) {
      const fetchVenueDetails = async () => {
        try {
          const response = await fetch(`/api/venues/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch venue details');
          }
          const data = await response.json();
          setVenue(data);
        } catch (error) {
          setError(error.message);
        }
      };
      fetchVenueDetails();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!venue) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <main className="flex-grow p-8">
        {/* Display venue details here */}
        <VenueDetailCard {...venue} onEdit={() => console.log('Edit')} onDelete={() => console.log('Delete')} />
      </main>
    </div>
  );
};

export default VenueDetailsPage;
