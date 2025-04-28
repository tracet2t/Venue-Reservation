import React from 'react';
import Carousel from '../carousel';

interface FeatureVenueCardProps {
  images: string[];
  name: string;
  address: string;
  type: string;
  capacity: string;
  size: string;
  timeSchedule: string;
  features: string[];
}

const FeatureVenueCard: React.FC<FeatureVenueCardProps> = ({
  images,
  name,
  address,
  type,
  capacity,
  size,
  timeSchedule,
  features,
}) => {
  return (
    <div className="container mx-auto mt-6 p-4 border border-gray-300 rounded-xl shadow-lg flex flex-col md:flex-row text-[#584822] bg-white">
      {/* Image Section */}
      <div className="w-full h-64 md:h-auto border border-gray-300 rounded-xl shadow-lg md:w-2/5">
        {images && images.length > 0 ? (
          <Carousel
            images={images.map(image => {
              if (image.startsWith('http')) return image;
              const cleanPath = image.replace(/^\/+|\/+$/g, '').replace('/images/', '');
              return `https://storage.googleapis.com/foodie-96e94.appspot.com/venues/${cleanPath}`;
            })}
            width="100%"
            height="100%"
            arrowBgColor="rgba(0, 0, 0, 0.7)"
            arrowFgColor="#fff"
            dotColor="#ccc"
            activeDotColor="#ff6347"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-gray-400">No images available</span>
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="w-full md:w-3/5 p-4 flex flex-col justify-between mt-4 md:mt-0">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{name}</h1>
          <p className="text-sm md:text-base">{address}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm md:text-base">
          <p className="text-sm md:text-base flex items-center gap-x-2">
              <img src="/images/type vector.png" className="w-5 h-5"></img> {type}
            </p>
            <p className="text-sm md:text-base flex items-center gap-x-2">
              <img src="/images/capacity vector.png" className="w-5 h-5"></img> {capacity}
            </p>
            <p className="text-sm md:text-base flex items-center gap-x-2">
              <img src="/images/size vector.png" className="w-5 h-5"></img> {size}
            </p>
            <p className="text-sm md:text-base flex items-center gap-x-2">
              <img src="/images/time vector.png" className="w-5 h-5"></img> {timeSchedule}
            </p>
            </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Features:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureVenueCard;
