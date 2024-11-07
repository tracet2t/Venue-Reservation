import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-lg w-full  h-[450px]  flex flex-col justify-center">
      {children}
    </div>
  );
};

export default Card;
