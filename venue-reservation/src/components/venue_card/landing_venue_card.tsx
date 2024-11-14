import Carousel from '../carousel';

const LandingVenueCard = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg'
  ];

  return (
    <div className="container mx-auto mt-6 px-4 py-8 shadow-lg rounded-xl flex flex-col md:flex-row text-[#584822]">
      {/* Image Section */}
      <div className="w-full h-64 md:h-auto border border-gray-300 rounded-xl shadow-lg md:w-2/5">
        <Carousel
          images={images}
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Trace Auditorium</h1>
          <p className="text-sm md:text-base">Bay 6, Trace Expert City, Maradana, Colombo, Western Province</p>
          <p className="text-sm md:text-base"><strong>Type:</strong> Auditorium</p>
          <p className="text-sm md:text-base"><strong>Capacity:</strong> 500 seated</p>
          <p className="text-sm md:text-base"><strong>Size:</strong> 5000 sqft</p>
          <p className="text-sm md:text-base"><strong>Time Schedule:</strong> Entire Day</p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Features:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            <li>State-of-the-art acoustics system</li>
            <li>Ergonomic seating for maximum comfort</li>
            <li>Advanced lighting system</li>
            <li>High-definition projector and screen</li>
          </ul>
        </div>

        {/* Reserve Now Button */}
        <div className="flex justify-end mt-4">
          <button className="bg-[#584822] text-white px-4 py-2 md:px-6 md:py-2 rounded-lg font-semibold">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingVenueCard;