import React from "react";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SignupLanding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center lg:items-stretch justify-between p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-12">
        
        {/* Left Branding Section  */}
        <div className="bg-gradient-to-b from-[#312405] via-[#735203] via-[#78580E] to-[#906B11] text-white p-10 md:p-14 lg:p-20 rounded-3xl shadow-lg w-5/6 max-w-xs lg:max-w-md h-[600px] flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold">RS.</h1>                                                                                     
          <h2 className="text-lg font-semibold mt-4">Reservation System</h2>
        </div>
        <div>
          <p className="mt-8 text-base leading-relaxed">
            “Effortlessly book and manage your event with our seamless reservation system, designed for convenience and flexibility.”
          </p>
        </div>
      </div>

        {/* Right Sign-Up Section */}
        <div className="flex flex-1 items-center justify-center">
          <Card>
            <div className="flex flex-col items-center space-y-6 h-[400px] justify-center">
              <h2 className="text-2xl font-semibold text-center text-[#584822]">Create a New Account</h2>
              
              <Button
                style={{ backgroundColor: '#584822' }}
                className="w-full h-12 text-lg rounded-md text-white hover:bg-[#6A5B3A]"
              >
                Sign up
              </Button>
              <Button
                style={{ backgroundColor: '#584822' }}
                className="w-full h-12 text-lg rounded-md text-white hover:bg-[#6A5B3A]"
              >
                Sign up with Email
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-lg rounded-md flex items-center justify-center border-[#584822] text-[#584822] hover:bg-gray-100"
              >
                <Image src="/google-icon.svg" alt="Google Icon" width={24} height={24} className="mr-2" />
                Continue with Google
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignupLanding;
