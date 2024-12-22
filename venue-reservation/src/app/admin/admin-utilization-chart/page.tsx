import React from "react";
import { Metadata } from "next";

// Define metadata
export const metadata: Metadata = {
  title: "Admin Utilization Chart",
  description: "View venue utilization statistics",
};
 /* eslint-disable @typescript-eslint/no-unused-vars */

interface BrandingSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

// Update the component to be a Server Component
export default function AdminUtilizationChart() {
  return (
    <div>
      <BrandingSection 
        title="RS."
        subtitle="Reservation System"
        description="Effortlessly book and manage your event with our seamless reservation system."
      />
      {/* Rest of your component */}
    </div>
  );
}

// Move BrandingSection to a separate client component file
const BrandingSection: React.FC<BrandingSectionProps> = ({
  title = "RS.",
  subtitle = "Reservation System",
  description = "Effortlessly book and manage your event with our seamless reservation system.",
}) => {
  return (
    <div className="bg-gradient-to-b from-[#312405] via-[#735203] to-[#906B11] text-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg w-full h-full flex flex-col justify-between">
      <div className="mt-4 sm:mt-6 md:mt-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold italic mb-2 sm:mb-3">{title}</h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2 sm:mt-3">{subtitle}</h2>
      </div>
      <div className="mb-4 sm:mb-6 md:mb-8">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
 /* eslint-disable @typescript-eslint/no-unused-vars */