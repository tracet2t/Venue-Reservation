"use client";

import { useState } from "react";

interface CarouselProps {
  images: React.ReactNode[];
  width?: string;
  height?: string;
  arrowBgColor?: string;
  arrowFgColor?: string;
  dotColor?: string;
  activeDotColor?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  width = "100%",
  height = "300px",
  arrowBgColor = "rgba(0, 0, 0, 0.5)",
  arrowFgColor = "#ffffff",
  dotColor = "#ffffff",
  activeDotColor = "#584822",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="relative overflow-hidden rounded-xl" style={{ width, height }}>
      <div
        className="overflow-y-auto h-full"
        style={{ maxHeight: "100%" }} 
      >
        {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {image}
        </div>
      ))}</div>
      {/* <button
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
      </button> */}
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
