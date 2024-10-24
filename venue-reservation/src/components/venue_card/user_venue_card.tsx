"use client";

import Carousel from '../carousel';
import { useState, useEffect } from 'react';

interface ImageData {
  name: string;
  base64: string;
}

const VenueCard = () => {
  const [images, setImages] = useState<string[]>([]);

  // Fetch the images from the API route
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        const data = await response.json();

        // Process images and resize them
        const resizedBase64Images = await Promise.all(
          data.images.map((image: ImageData) => resizeImage(image.base64, 600, 400))
        );

        setImages(resizedBase64Images);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    fetchImages();
  }, []);

  // Function to resize the image and return base64
  const resizeImage = async (base64: string, maxWidth: number, maxHeight: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = base64;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate the new dimensions
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const aspectRatio = width / height;
          if (width > height) {
            width = maxWidth;
            height = Math.round(maxWidth / aspectRatio);
          } else {
            height = maxHeight;
            width = Math.round(maxHeight * aspectRatio);
          }
        }

        // Set canvas dimensions and draw the image
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);

        // Get the resized image as base64
        const resizedBase64 = canvas.toDataURL('image/jpeg'); 
        resolve(resizedBase64);
      };

      img.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="container mx-auto mt-6 p-4 border border-gray-300 rounded-xl shadow-lg flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full h-full border border-gray-300 rounded-xl shadow-lg md:w-2/5">
        <Carousel
          images={images}
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
          <h1 className="text-3xl md:text-4xl font-bold font-blue-500">Trace Auditorium</h1>
          <p>Bay 6, Trace Expert City, Maradana, Colombo, Western Province</p>
          <p><strong>Type:</strong> Auditorium</p>
          <p><strong>Capacity:</strong> 500 seated</p>
          <p><strong>Size:</strong> 5000 sqft</p>
          <p><strong>Time Schedule:</strong> Entire Day</p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Features:</h2>
          <ul className="list-disc list-inside">
            <li>State-of-the-art acoustics system</li>
            <li>Ergonomic seating for maximum comfort</li>
            <li>Advanced lighting system</li>
            <li>High-definition projector and screen</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
