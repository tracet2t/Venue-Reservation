'use client'
import { useEffect, useState } from 'react';
import Carousel from '../carousel';
import { useRouter } from 'next/navigation';

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
  images: string[];
  features: string[];
}

interface VenueCardProps {
  provinces: string[];
  districts: string[];
  venueType: string;
  searchTerm: string;
  isAuthenticated?: boolean;
}

const VenueCard: React.FC<VenueCardProps> = ({ provinces, districts, venueType, searchTerm, isAuthenticated = false }) => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const queryParams = new URLSearchParams({
          provinces: provinces.join(','),
          districts: districts.join(','),
          venueType,
          searchTerm,
        });
        const response = await fetch(`/api/venues?${queryParams.toString()}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          data.forEach((venue, index) => {
          });
        }

        if (Array.isArray(data)) {
          setVenues(data);
        } else {
          setVenues([]);
        }
      } catch (error) {
        setVenues([]);
      }
    };

    fetchVenues();
  }, [provinces, districts, venueType, searchTerm]);

  const handleCardClick = (venueId: number) => {
    if (router) {
      router.push(`/reservation/${venueId}`);
    }
  };

  return (
    <div className="container mx-auto mt-6 p-4">
      {venues.map((venue) => (
        <div
          key={venue.id}
          className="p-4 border border-gray-300 rounded-xl shadow-lg flex flex-col md:flex-row mb-4 cursor-pointer"
          onClick={() => handleCardClick(venue.id)}
        >
          {/* Image Section */}
          <div className="w-full h-full border border-gray-300 rounded-xl shadow-lg md:w-2/5">
            <Carousel
              images={venue.images}
              width="100%"
              height="340px"
              arrowBgColor="rgba(0, 0, 0, 0.7)"
              arrowFgColor="#fff"
              dotColor="#ccc"
              activeDotColor="#ff6347"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-3/5 p-4 flex flex-col justify-between text-olive">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{venue.name}</h1>
              <p>{venue.street_name.join(', ')}, {venue.district}, {venue.province}</p>
              <p><strong>Type: {venue.type} </strong></p>
              <p><strong>Capacity: {venue.capacity} seated</strong></p>
              <p><strong>Size: {venue.size} sqft</strong></p>
              <p><strong>Time Schedule: {venue.schedule}</strong></p>
            </div>

            <div>
              <h2 className="text-lg font-bold">Features:</h2>
              <ul className="list-disc list-inside">
                {venue.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conditional rendering for edit buttons */}
          {isAuthenticated && (
            <div className="venue-actions">
              <button className="edit-btn">Edit Details</button>
              <button className="edit-calendar-btn">Edit Calendar</button>
            </div>
          )}

          {/* Always visible calendar view */}
          <div className="calendar-view">
            {/* Read-only calendar implementation */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VenueCard;
