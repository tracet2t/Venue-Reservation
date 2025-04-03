import React from 'react';
import Carousel from '../carousel';

interface VenueDetailCardProps {
  images: string[];
  name: string;
  address: string;
  type: string;
  capacity: string;
  size: string;
  timeSchedule: string;
  features: string[]; 
  onEdit: () => void;
  onDelete: () => void;
}

const VenueDetailCard: React.FC<VenueDetailCardProps> = ({
  images,
  name,
  address,
  type,
  capacity,
  size,
  timeSchedule,
  features, 
  onEdit,
  onDelete,
}) => {
  return (
    <div className="container mx-auto mt-6 p-4 border border-gray-300 rounded-xl shadow-lg flex flex-col md:flex-row text-[#584822] bg-white">
      {/* Image Section */}
      <div className="w-full h-64 md:h-auto border border-gray-300 rounded-xl shadow-lg md:w-2/5">
        <Carousel
          images={images.map(image => 
            image.startsWith('http') 
              ? image 
              : `https://storage.googleapis.com/foodie-96e94.appspot.com/venues/${image}`
          )}
          width="100%"
          height="100%"
          arrowBgColor="rgba(0, 0, 0, 0.7)"
          arrowFgColor="#fff"
          dotColor="#ccc"
          activeDotColor="#ff6347"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-3/5 p-4 flex flex-col justify-between mt-4 md:mt-0">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{name}</h1>
          <p className="text-sm md:text-base">{address}</p>
          <p className="text-sm md:text-base">
            <strong>Type:</strong> {type}
          </p>
          <p className="text-sm md:text-base">
            <strong>Capacity:</strong> {capacity}
          </p>
          <p className="text-sm md:text-base">
            <strong>Size:</strong> {size}
          </p>
          <p className="text-sm md:text-base">
            <strong>Time Schedule:</strong> {timeSchedule}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Features:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Edit and Delete Buttons */}
        <div className="flex justify-end items-center space-x-4 mt-4">
          <button
            className="bg-[#584822] text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="bg-[#584822] text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueDetailCard;