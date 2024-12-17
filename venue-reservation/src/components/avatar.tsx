import React from "react";
import { useRouter } from 'next/navigation';

const UserAvatar = () => {
    const router = useRouter();

  // Handle click event
  const goToProfile = () => {
    router.push('/user-profile'); // Navigate to the User Profile Page
  };

  return (
    <div
      onClick={goToProfile}
      className="flex items-center space-x-2 text-[#584822] cursor-pointer"
    >
      {/* Avatar */}
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
        {/* Placeholder User Icon */}
        <span className="text-lg font-bold text-[#584822]">👤</span>
      </div>
      {/* Greeting Text */}
      <p className="text-md font-medium">Hi, Siva Laksh</p>
    </div>
  );
};

export default UserAvatar;
