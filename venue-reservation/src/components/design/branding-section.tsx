import React from "react";

interface BrandingSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

const BrandingSection: React.FC<BrandingSectionProps> = ({
  title = "RS.",
  subtitle = "Reservation System",
  description = "Effortlessly book and manage your event with our seamless reservation system, designed for convenience and flexibility.",
}) => {
  return (
    <div className="bg-gradient-to-b from-[#312405] via-[#735203] to-[#906B11] text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl shadow-lg w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] flex flex-col justify-between mx-auto max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold italic mb-2 sm:mb-4">{title}</h1>
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-2 sm:mt-4">{subtitle}</h2>
      </div>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BrandingSection;
