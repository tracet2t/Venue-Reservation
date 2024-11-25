import { useState } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
}

const ReservationCarousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // // Move to next slide
  // const goToNextSlide = () => {
  //   setCurrentSlide((prev) => Math.min(prev + 1, children.length - 1));
  // };

  // // Move to previous slide
  // const goToPreviousSlide = () => {
  //   setCurrentSlide((prev) => Math.max(prev - 1, 0));
  // };

  // Go to specific slide based on dot click
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full">
      {/* Carousel Content */}
      <div className="flex w-full overflow-hidden">
        {children.map((child, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots for Slide Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-[#584822]' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>

      {/* Previous and Next Buttons (Optional) */}
      {/* <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
      >
        &gt;
      </button> */}
    </div>
  );
};

export default ReservationCarousel;
