// src/app/signup-landing/page.tsx

import React from "react";
import Card from "@/components/ui/card"; // Import the custom Card component
import { Button } from "@/components/ui/button"; // Import the Button component from ShadCN
import Image from "next/image"; // For adding images/icons (e.g., Google icon)

const SignupLanding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1 items-center justify-center p-4 lg:p-8">
        {/* Left Branding Section */}
        <div className="bg-gradient-to-b from-[#8e6830] to-[#a4752d] text-white p-10 rounded-lg shadow-lg w-full max-w-md lg:max-w-lg">
          <h1 className="text-4xl font-bold">RS.</h1>
          <h2 className="text-2xl font-semibold mt-2">Reservation System</h2>
          <p className="mt-6">
            Effortlessly book and manage your event with our seamless reservation system, designed for convenience and flexibility.
          </p>
        </div>

        {/* Right Sign-Up Section using the custom Card */}
        <Card>
          <h2 className="text-2xl font-semibold mb-6">Create a New Account</h2>
          <div className="flex flex-col space-y-4">
            <Button className="bg-[#8e6830] hover:bg-[#6A5B3A] w-full">
              Sign up
            </Button>
            <Button className="bg-[#8e6830] hover:bg-[#6A5B3A] w-full">
              Sign up with Email
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center">
              {/* Add Google icon here */}
              <Image src="/google-icon.svg" alt="Google Icon" width={20} height={20} className="mr-2" />
              Continue with Google
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignupLanding;
