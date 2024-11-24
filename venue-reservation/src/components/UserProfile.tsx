'use client'

import { useState, useEffect } from 'react';
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  address?: string;
  contactNumber?: string;
}

export default function UserProfile() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    contactNumber: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let response;
        if (session?.user?.email) {
          // For NextAuth users (Google, Magic Link)
          response = await fetch(`/api/user/profile?email=${session.user.email}`, {
            credentials: 'include'
          });
        } else {
          // For credential users
          response = await fetch('/api/user/profile', {
            credentials: 'include'
          });
        }

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
          setFormData({
            address: data.address || '',
            contactNumber: data.contactNumber || ''
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (status !== 'loading') {
      fetchUserData();
    }
  }, [session, status]);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = async () => {
    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData(updatedData);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (status === "loading" || !userData) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center space-x-4">
        {session?.user?.image && (
          <img 
            src={session.user.image} 
            alt="Profile" 
            className="w-16 h-16 rounded-full border-2 border-gray-200"
          />
        )}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">
            {userData.firstName} {userData.lastName}
          </h2>
          <p className="text-gray-600">{userData.email}</p>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {userData.userType}
          </span>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <Button 
            onClick={handleSaveProfile}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Save Profile
          </Button>
        </div>
      ) : (
        <div className="pt-4 border-t border-gray-200">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Address:</span> {userData.address || 'Not set'}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Contact:</span> {userData.contactNumber || 'Not set'}
            </p>
          </div>
          <Button 
            onClick={handleEditProfile}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
          >
            Edit Profile
          </Button>
          <Button 
            onClick={() => signOut({ callbackUrl: '/signup-landing' })}
            className="w-full bg-red-600 hover:bg-red-700 text-white mt-2"
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
}