import Carousel from '../Carousel/page';

const VenueCard = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg'
  ];

  return (
    <div className="container align-center mx-auto mt-6 p-4 border border-gray-300 rounded-xl shadow-lg flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-2/5 h-64 mb-2.5">
        <div className="h-full border border-gray-300 rounded-xl shadow-lg">
          <Carousel images={images}/>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-3/5 p-4 flex flex-col justify-between text-yellow-900">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-950">Trace Auditorium</h1>
          <p className="text-yellow-900">Bay 6, Trace Expert City, Maradana, Colombo, Western Province</p>
          <p className="text-yellow-900"><strong>Type:</strong> Auditorium</p>
          <p className="text-yellow-900"><strong>Capacity:</strong> 500 seated</p>
          <p className="text-yellow-900"><strong>Size:</strong> 5000 sqft</p>
          <p className="text-yellow-900"><strong>Time Schedule:</strong> Entire Day</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-yellow-900">Features:</h2>
          <ul className="list-disc list-inside text-left text-yellow-900 font-semibold">
            <div className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-brawn-500 before:font-bold">State-of-the-art acoustics system for enhanced sound quality</div>
            <div className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-brawn-500 before:font-bold">Ergonomic seating for maximum comfort</div>
            <div className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-brawn-500 before:font-bold">Advanced lighting system with customizable ambiance</div>
            <div className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-brawn-500 before:font-bold">High-definition projector and retractable screen</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
