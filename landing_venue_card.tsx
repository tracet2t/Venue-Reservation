import { useEffect, useState } from 'react';
import Carousel from '../carousel';
import { useRouter } from 'next/navigation';

interface VenueData {
  id: number;
  name: string;
  street_name: string;
  district: string;
  province: string;
  type: string;
  capacity: string;
  size: string;
  schedule: string;
  features: string[];
  images: string[];
  admin?: {
    firstName: string;
    email: string;
    contactNumber?: string;
  };
}

const LandingVenueCard = () => {
  const router = useRouter();
  const [venue, setVenue] = useState<VenueData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMostReservedVenue = async () => {
      try {
        const response = await fetch('/api/most-reserved-venue');
        if (!response.ok) throw new Error('Failed to fetch venue');
        const data = await response.json();
        setVenue(data.venue);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMostReservedVenue();
  }, []);

  if (loading) {
    return <div className="container mx-auto mt-6 px-4 py-8">Loading...</div>;
  }

  if (!venue) {
    return null;
  }

  const handleReserveClick = () => {
    router.push(`/reservation/${venue.id}`);
  };

  return (
    <div className="container mx-auto mt-6 px-4 py-8 shadow-lg rounded-xl flex flex-col md:flex-row text-[#584822]">
      <div className="w-full h-64 md:h-auto border border-gray-300 rounded-xl shadow-lg md:w-2/5">
        <Carousel
          images={venue.images}
          width="100%"
          height="100%"
          arrowBgColor="rgba(0, 0, 0, 0.7)"
          arrowFgColor="#fff"
          dotColor="#ccc"
          activeDotColor="#ff6347"
        />
      </div>

      <div className="w-full md:w-3/5 p-4 flex flex-col justify-between mt-4 md:mt-0">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{venue.name}</h1>
          <p className="text-sm md:text-base text-gray">
            {venue.street_name}, {venue.district}, {venue.province}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm md:text-base">
            <p className="text-sm md:text-base flex items-center gap-x-2">
              <img src="/images/Auditorium.png" className="w-5 h-5"></img> {venue.type}
            </p>
            <p className="text-sm md:text-base flex items-center gap-x-2">
              <img src="/images/seat.png" className="w-5 h-5"></img> {venue.capacity} seated
            </p>
            <p className="text-sm md:text-base flex items-center gap-x-2">
              <img src="/images/square_feet.png" className="w-5 h-5"></img> {venue.size} sqft
            </p>
            <p className="text-sm md:text-base flex items-center gap-x-2">
              <img src="/images/time.png" className="w-5 h-5"></img> {venue.schedule}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Features:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            {venue.features.map((feature, index) => (
              <li key={index}><span className='text-gray'>{feature}</span></li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end mt-4">
          <button 
            onClick={handleReserveClick}
            className="bg-[#584822] text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold"
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingVenueCard;