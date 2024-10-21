"use client";

import { useState } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[]; // Array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full md:h-80 rounded-xl overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Carousel image ${index}`}
            layout="fill"
            objectFit="cover"  
            className="w-full h-full"
          />
        </div>
      ))}

      {/* Previous and Next buttons */}
      <button 
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105" 
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button 
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105" 
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${currentIndex === index ? 'bg-yellow-900' : 'bg-white'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
