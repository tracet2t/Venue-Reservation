"use client";
import { useState,useEffect } from "react";
import Footer from "../layouts/Footer";
import RegisteredHeader from "../layouts/RegisteredHeader";
import { useRouter } from 'next/navigation';
import axios from "axios";
interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  address: string; 
  contactNumber: string;
  email: string;
  profilePicture?: string;
}

export default function UserProfilePage() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userId: "a00a0cc5-3c60-4df5-89ff-1c67a140915e", // userId for testing
    firstName: "",
    lastName: "",
    address: "",
    contactNumber: "",
    email: "",
    profilePicture: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get<UserProfile>(
          `http://localhost:3000/api/user/profile?userId=${userProfile.userId}`
        );
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserProfile();
  }, [userProfile.userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      if (!userProfile.contactNumber || isNaN(Number(userProfile.contactNumber))) {
        alert("Please enter a valid phone number.");
        return;
      }
  
      const contactNumber = BigInt(userProfile.contactNumber); // Convert to BigInt 
  
      await axios.put(`http://localhost:3000/api/user/profile`, {
        ...userProfile,
        contactNumber: userProfile.contactNumber.toString(), 
        profilePicture: userProfile.profilePicture,
      });

     // Update the new data after the save successful
     setUserProfile((prevProfile) => ({
      ...prevProfile,
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      address: userProfile.address,
      contactNumber: userProfile.contactNumber,
    }));

      setIsEditing(false);
      router.push('/user-profile');
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setUserProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result as string, // Base64 image string
        }));
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div>
      <RegisteredHeader userName={""} />
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
              <h2 className="text-2xl font-bold text-[#584822] mb-2">{userProfile.firstName} {userProfile.lastName}</h2>
              <p className="text-gray-600 mb-8">{userProfile.email}</p>
            </div>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between">
              
            <div className="flex items-center">
              <label className="mr-2 font-bold">First Name</label>{isEditing ? ( 
                  <input
                    type="text"
                    name="firstName"
                    value={userProfile.firstName}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 "
                  />
                ) : (<p className="m-0"> {userProfile.firstName}</p>)}
              </div>
              <div className="flex items-center">
                <label className="mr-2 font-bold">Last Name</label> {isEditing ? ( 
                <input
                  type="text"
                  name="lastName"
                  value={userProfile.lastName}
                  onChange={handleChange}
                  className="border rounded px-2 py-2 "
                />
              ) : (
                <p>{userProfile.lastName}</p> )}
              </div>
              <div className="flex items-center">
              <label className="mr-2 font-bold">Address</label> {isEditing ? ( 
                <input
                  type="text"
                  name="address"
                  value={userProfile.address}
                  onChange={handleChange}
                  className="border rounded px-2 py-1 "
                />
              ) : (
                <p> {userProfile.address}</p>)} 
              </div><br>
              </br>
              <div className="flex items-center">
              <label className="mr-2 font-bold">Phone Number</label>
              {isEditing ? ( 
                <input
                  type="text"
                  name="contactNumber"
                  value={userProfile.contactNumber}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p> {userProfile.contactNumber}</p>)}
              </div><br></br>
              <div><p><strong>My Email Address</strong> {userProfile.email}</p>{/* Email is not editable */}
              </div>
            </div>

          <div className="flex justify-end mt-8">
          {isEditing ? ( 
            <>
              <button
                className="border border-[#584822] text-[#584822] px-8 py-2 rounded mr-8"
                onClick={() => setIsEditing(false)} // Cancel editing
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
            <button className="border border-[#584822] text-[#584822] px-8 py-2 rounded mr-8">Cancel</button>
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

