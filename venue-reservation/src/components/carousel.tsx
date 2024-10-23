"use client";

import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[]; // Array of image URLs
  width?: string; 
  height?: string; 
  arrowBgColor?: string; 
  arrowFgColor?: string; 
  dotColor?: string; 
  activeDotColor?: string;
}

{/*Default Style for Carousel*/}
const Carousel: React.FC<CarouselProps> = ({
  images,
  width = "100%", 
  height = "300px", 
  arrowBgColor = "rgba(0, 0, 0, 0.5)", 
  arrowFgColor = "#ffffff", 
  dotColor = "#ffffff", 
  activeDotColor = "#f59e0b", 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-xl" style={{ width, height }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Carousel image ${index}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority={index === 0} // Load the first image faster
          />
        </div>
      ))}

      {/* Previous and Next buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
        style={{ backgroundColor: arrowBgColor, color: arrowFgColor }}
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
        style={{ backgroundColor: arrowBgColor, color: arrowFgColor }}
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: currentIndex === index ? activeDotColor : dotColor,
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
