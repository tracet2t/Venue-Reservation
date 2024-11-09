import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Carousel from '../carousel';

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
  province: string;
  district: string;
  venueType: string | null;
  searchTerm: string;
  currentPage: number;
  venuesPerPage: number;
}

const VenueCard = ({ province, district, venueType, searchTerm, currentPage, venuesPerPage }: VenueCardProps) => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [filteredVenues, setFilteredVenues] = useState<Venue[]>([]);
  const router = typeof window !== 'undefined' ? useRouter() : null;

  useEffect(() => {
    const fetchVenues = async () => {
      const res = await fetch('http://localhost:3000/api/venues');
      const data = await res.json();
      setVenues(data);
    };
    fetchVenues();
  }, []);

  useEffect(() => {
    const filtered = venues.filter((venue) => {
      const matchesProvince = !province || venue.province === province;
      const matchesDistrict = !district || venue.district === district;
      const matchesVenueType = !venueType || venue.type === venueType;
      const matchesSearchTerm = !searchTerm || venue.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesProvince && matchesDistrict && matchesVenueType && matchesSearchTerm;
    });
    setFilteredVenues(filtered);
  }, [venues, province, district, venueType, searchTerm]);

  const startIndex = (currentPage - 1) * venuesPerPage;
  const currentVenues = filteredVenues.slice(startIndex, startIndex + venuesPerPage);

  const handleCardClick = (venueId: number) => {
    if (router) {
      router.push(`/reservation/${venueId}`);
    }
  };

  return (
    <div className="container mx-auto mt-6 p-4">
      {currentVenues.map((venue) => (
        <div
          key={venue.id}
          className="p-4 border border-gray-300 rounded-xl shadow-lg flex flex-col md:flex-row mb-4 cursor-pointer"
          onClick={() => handleCardClick(venue.id)}
        >
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

          <div className="w-full md:w-3/5 p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black-500">{venue.name}</h1>
              <p>{venue.street_name.join(', ')}, {venue.district}, {venue.province}</p>
              <p><strong>Type:</strong> {venue.type}</p>
              <p><strong>Capacity:</strong> {venue.capacity} seated</p>
              <p><strong>Size:</strong> {venue.size} sqft</p>
              <p><strong>Time Schedule:</strong> {venue.schedule}</p>
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
        </div>
      ))}
    </div>
  );
};

export default VenueCard;
