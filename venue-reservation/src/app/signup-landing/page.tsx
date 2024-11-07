import React from "react";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BrandingSection from "@/components/branding-section";
const SignupLanding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl items-center lg:items-stretch justify-between p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-12">
        
        {/* Left Branding Section  */}
        <BrandingSection />
        
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="none"
                  style={{ width: "32px", height: "32px", marginRight:"12px" }} 
                >
                  <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.9 34.3 30.2 38 24 38c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.7 2.9L38.4 8C34.7 4.7 29.7 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c10.8 0 19.8-7.8 21.5-18h-1z" />
                  <path fill="#34A853" d="M6.3 14.7l6.6 4.9C14.3 15.3 18.7 12 24 12c3 0 5.7 1.1 7.7 2.9L38.4 8C34.7 4.7 29.7 2 24 2 16.4 2 9.8 6.2 6.3 14.7z" />
                  <path fill="#FBBC05" d="M24 44c5.5 0 10.2-1.8 13.8-5L31 34.3c-2.1 1.4-4.8 2.2-7.6 2.2-5.8 0-10.7-3.9-12.5-9.2l-6.6 5C8.5 37.7 15.8 44 24 44z" />
                  <path fill="#EA4335" d="M44.5 20H24v8.5h11.7C34.7 34.5 30 38 24 38c-5.3 0-9.7-3.3-11.5-8.1l-6.6 5C9.3 42.1 16.4 46 24 46c12.2 0 22-9.8 22-22 0-1.5-.2-3-.5-4z" />
                </svg>
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
