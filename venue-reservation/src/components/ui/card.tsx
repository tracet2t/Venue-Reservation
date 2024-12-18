import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-3xl shadow-lg w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col justify-center items-center sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] mx-auto">
      {children}
    </div>
  );
};

export default Card;
