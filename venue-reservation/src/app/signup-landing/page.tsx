"use client"
import React from "react";
import Card from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BrandingSection from "@/components/design/branding-section";
import { useRouter } from 'next/navigation';
import { signIn, useSession } from "next-auth/react"
import { TrendingUpIcon } from "lucide-react";

const SignupLanding = () => {
  const router =useRouter();

  const handleSignupClick = () => {
    router.push("/signup-cred"); 
  };

  const handleSignupLoginLink = () => {
    router.push("/signup-link"); 
  };

  
  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn('google', { 
        callbackUrl: '/card_view',
        redirect: false
      });
      
      if (result?.error === 'AccessDenied') {
        // Show error message to user
        alert('Please sign up first. This email is registered with a different login method.');
        return;
      }
      
      if (result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row w-full max-w-8xl gap-8 sm:gap-12 items-center justify-center sm:justify-between">
        
        {/* Branding Section */}
        <div className="flex-1 w-full sm:w-[50%] lg:w-[45%] xl:w-[40%] flex justify-center items-center">
          <BrandingSection/>
        </div>
        
        {/* Signup Section */}
        <div className="flex-1 w-full sm:w-[50%] lg:w-[40%] xl:w-[35%] flex justify-center items-center">
          <Card>
            <div className="flex flex-col items-center space-y-10">
              <h2  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#584822]" style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)" }}>
                Create a New Account
              </h2>
              <Button onClick={handleSignupClick} style={{ backgroundColor: '#584822' }} className="w-full h-12 text-lg rounded-md text-white hover:bg-[#6A5B3A]">
                Sign up
              </Button>
              <Button onClick={handleSignupLoginLink} style={{ backgroundColor: '#584822' }} className="w-full h-12 text-lg rounded-md text-white hover:bg-[#6A5B3A]">
                Sign up with Email
              </Button>
              <Button variant="outline" className="w-full h-12 text-md font-bold rounded-md flex items-center justify-center border-[#584822] text-[#584822] hover:bg-gray-100"
              onClick={handleGoogleSignIn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" style={{ width: "32px", height: "32px", marginRight: "12px" }}>
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
