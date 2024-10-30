"use client"
import { useEffect, useState } from 'react';
import Carousel from '../carousel';

// Define an interface for the venue type
interface Venue {
  id: number; 
  name: string;
  address: string;
  type: string;
  capacity: number;
  size: number;
  schedule: string;
  images: string[]; 
  features: string[]; 
}

const VenueCard = () => {
  const [venues, setVenues] = useState<Venue[]>([]); 

  useEffect(() => {
    const fetchVenues = async () => {
      const res = await fetch('http://localhost:3000/api/venues');
      const data = await res.json();
      setVenues(data);
    };
    fetchVenues();
  }, []);

  return (
    <div className="container mx-auto mt-6 p-4">
      {venues.map((venue) => (
        <div
          key={venue.id}
          className="p-4 border border-gray-300 rounded-xl shadow-lg flex flex-col md:flex-row mb-4"
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
          <div className="w-full md:w-3/5 p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black-500">{venue.name}</h1>
              <p>{venue.address}</p>
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
