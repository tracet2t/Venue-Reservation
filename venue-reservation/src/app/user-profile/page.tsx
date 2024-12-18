"use client";
import { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import RegisteredHeader from "../layouts/Header";
import { useRouter } from 'next/navigation';

interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  address: string | null;
  contactNumber: string | null;
  email: string;
  userType: string;
  provider?: string;
  profilePicture?: string;
}

export default function UserProfilePage() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    const file = e.target.files?.[0];
    if (file) {
      // Add your file upload logic
      console.log('File selected:', file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (userProfile) {
      setUserProfile({
        ...userProfile,
        [name]: value
      });
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch('/api/user/profile', {
          credentials: 'include',
          headers: {
            'Cache-Control': 'no-cache'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        console.log('Profile data:', data);

        if (data.user) {
          setUserProfile(data.user);
        }
      } catch (error) {
        console.error('Error:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [router]);

  const handleSave = async () => {
    if (!userProfile) return;

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          firstName: userProfile.firstName,
          lastName: userProfile.lastName,
          address: userProfile.address,
          contactNumber: userProfile.contactNumber
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedData = await response.json();
      setUserProfile(updatedData.user);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (loading || !userProfile) {
    return (
      <div>
        <RegisteredHeader />
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#584822]"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <RegisteredHeader />
      <div className="flex justify-center mt-8 max-w-2x">
        <p className="text-4xl font-bold text-[#584822] mb-4">User Profile</p>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <div className="w-3/4 bg-white rounded-lg shadow-lg z-10 p-8 mb-4">
          <div className="flex flex-col place-items-start">
            <div className="relative mb-4">
              {userProfile.profilePicture ? (
                <img
                  src={userProfile.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
              {isEditing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              )}
              <h2 className="text-2xl font-bold text-[#584822] mb-2">
                {userProfile.firstName} {userProfile.lastName}
              </h2>
              <p className="text-gray-600 mb-2">{userProfile.email}</p>
              {userProfile.userType === 'Admin' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Administrator
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between">
            <div className="flex items-center">
              <label className="mr-2 font-bold">First Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={userProfile.firstName}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p className="m-0">{userProfile.firstName}</p>
              )}
            </div>

            <div className="flex items-center">
              <label className="mr-2 font-bold">Last Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={userProfile.lastName}
                  onChange={handleChange}
                  className="border rounded px-2 py-2"
                />
              ) : (
                <p>{userProfile.lastName}</p>
              )}
            </div>

            <div className="flex items-center">
              <label className="mr-2 font-bold">Address</label>
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={userProfile.address || ''}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p>{userProfile.address || 'Not set'}</p>
              )}
            </div>

            <div className="flex items-center">
              <label className="mr-2 font-bold">Phone Number</label>
              {isEditing ? (
                <input
                  type="text"
                  name="contactNumber"
                  value={userProfile.contactNumber || ''}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p>{userProfile.contactNumber || 'Not set'}</p>
              )}
            </div>

            <div>
              <p>
                <strong>My Email Address</strong> {userProfile.email}
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            {isEditing ? (
              <>
                <button
                  className="border border-[#584822] text-[#584822] px-8 py-2 rounded mr-8"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#584822] text-white px-8 py-2 rounded mr-16"
                  onClick={handleSave}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button className="border border-[#584822] text-[#584822] px-8 py-2 rounded mr-8">
                  Cancel
                </button>
                <button
                  className="bg-[#584822] text-white px-8 py-2 rounded mr-16"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
