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
  const [originalUserData, setOriginalUserData] = useState<UserProfile | null>(null);
  const router = useRouter();

  const validatePhoneNumber = (phone: string): boolean => {
    if (!phone) return true; // Allow empty phone number
    const phoneRegex = /^\+94\s\d{2}\s\d{7}$/;
    
    // Check format and length
    if (!phoneRegex.test(phone)) {
      return false;
    }
    
    if (phone.length !== 14) {
      return false;
    }
    
    return true;
  };

  const handleProfileImageUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/user/profile-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      
      // Update profile with new image URL
      if (userProfile) {
        const updateResponse = await fetch('/api/user/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            ...userProfile,
            profilePicture: data.imageUrl
          }),
        });

        if (updateResponse.ok) {
          const updatedData = await updateResponse.json();
          setUserProfile(updatedData.user);
          setOriginalUserData(updatedData.user);
          alert('Profile picture updated successfully!');
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size must be less than 5MB');
        return;
      }
      await handleProfileImageUpload(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'contactNumber') {
      // Remove all spaces and non-digit characters except '+'
      let cleaned = value.replace(/[^\d+]/g, '');
      
      // Format the number as +94 XX ZZZZZZZ
      if (cleaned.startsWith('+94')) {
        cleaned = cleaned.substring(3); 
      } else if (cleaned.startsWith('94')) {
        cleaned = cleaned.substring(2); 
      }
      
      // Add spaces to format the number
      let formatted = '';
      if (cleaned.length > 0) {
        formatted = '+94 ';
        if (cleaned.length > 0) {
          formatted += cleaned.slice(0, 2); 
        }
        if (cleaned.length > 2) {
          formatted += ' ' + cleaned.slice(2, 9); 
        }
      }

      if (value && !validatePhoneNumber(formatted) && formatted.length === 14) {
        alert('Please enter a valid phone number');
        return;
      }
      
      if (userProfile) {
        setUserProfile({
          ...userProfile,
          [name]: formatted
        });
      }
    } else {
      if (userProfile) {
        setUserProfile({
          ...userProfile,
          [name]: value
        });
      }
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

        console.log('Response status:', response.status);
        const data = await response.json();
        console.log('Raw API response:', data);

        if (!response.ok) {
          throw new Error(`Failed to fetch profile: ${response.status}`);
        }
    
        if (data.user) {
          console.log('Setting user profile:', data.user);
          setUserProfile(data.user);
          setOriginalUserData(data.user);
        } else {
          console.error('No user data in response');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [router]);

  const handleSave = async () => {
    if (!userProfile) return;

    // Validate phone number before saving
    if (userProfile.contactNumber) {
      if (!validatePhoneNumber(userProfile.contactNumber)) {
        alert('Please enter a complete and valid phone number');
        return;
      }
    }

    // Validate name fields
    if (!userProfile.firstName.trim() || !userProfile.lastName.trim()) {
      alert('First name and last name are required');
      return;
    }

    try {
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          firstName: userProfile.firstName.trim(),
          lastName: userProfile.lastName.trim(),
          address: userProfile.address?.trim() || null,
          contactNumber: userProfile.contactNumber || null
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      if (data.user) {
        setUserProfile(data.user);
        setOriginalUserData(data.user);
        setIsEditing(false);
        alert('Profile updated successfully!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const handleCancel = () => {
    if (originalUserData) {
      setUserProfile(originalUserData); // Restore data
      setIsEditing(false);
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
              <div className="relative w-24 h-24 group">
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <span className="text-white text-sm">Change Photo</span>
                    </label>
                  </div>
                )}
              </div>
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
              <label className="mr-2 font-bold">First Name:</label>
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
              <label className="mr-2 font-bold">Last Name:</label>
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
              <label className="mr-2 font-bold">Address:</label>
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
              <label className="mr-2 font-bold">Phone Number:</label>
              {isEditing ? (
                <div>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={userProfile.contactNumber || ''}
                    onChange={handleChange}
                    placeholder="+94 XX ZZZZZZZ"
                    className="border rounded px-2 py-1"
                  />
                </div>
              ) : (
                <p>{userProfile.contactNumber || 'Not set'}</p>
              )}
            </div>

            <div>
              <p>
                <strong>My Email Address:</strong> {userProfile.email}
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            {isEditing ? (
              <>
                <button
                  className="border border-[#584822] text-[#584822] px-8 py-2 rounded mr-8"
                  onClick={handleCancel}
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