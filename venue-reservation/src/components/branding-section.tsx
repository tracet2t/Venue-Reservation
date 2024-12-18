// src/components/branding-section.tsx

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
    <div className="bg-gradient-to-b from-[#312405] via-[#735203] via-[#78580E] to-[#906B11] text-white p-10 md:p-14 lg:p-20 rounded-3xl shadow-lg w-5/6 max-w-xs lg:max-w-md h-[600px] flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className="text-lg font-semibold mt-4">{subtitle}</h2>
      </div>
      <div>
        <p className="mt-8 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BrandingSection;