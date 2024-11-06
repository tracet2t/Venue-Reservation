// src/components/ui/Card.tsx

import React from "react";

interface CardProps {
  children: React.ReactNode; // This allows the card to contain any content passed to it
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      {children}
    </div>
  );
};

export default Card;
