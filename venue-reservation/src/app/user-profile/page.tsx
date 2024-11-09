"use client";
import { useState } from "react";

export default function UserProfilePage() {
  // Temporarily user data 
  const [userProfile, setUserProfile] = useState({
    name: "Uthpala Devaki",
    firstName: "Uthpala",
    lastName: "Devaki",
    address: "60, Hill Street, Dehiwela",
    phoneNumber: "0709874509",
    email: "uthpaladevaki@gmail.com",
   
  });

  const [isEditing, setIsEditing] = useState(false); 

  const handleChange = (e) => { // Updates userProfile 
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Save changes and toggle off edit mode
  const handleSave = () => {
    setIsEditing(false);
    
  };

  return (
    <div className="flex justify-center mt-8">
        <div className="w-4/5 bg-white rounded-lg shadow p-8 mb-4">
          <div className="flex justify-center">
            <p className="text-2xl font-bold text-[#584822] mb-4">User Profile</p>
          </div>
          {/* add profile pictrue */}
        
            <h2 className="text-2xl font-bold text-[#584822] mb-2">{userProfile.firstName} {userProfile.lastName}</h2>
            <p className="text-gray-500 mb-8">{userProfile.email}</p>

            <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <label className="mr-2 font-bold">First Name:</label>{isEditing ? ( 
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
                <label className="mr-2 font-bold">Last Name:</label> {isEditing ? ( 
                <input
                  type="text"
                  name="lastName"
                  value={userProfile.lastName}
                  onChange={handleChange}
                  className="border rounded px-2 py-1 "
                />
              ) : (
                <p>{userProfile.lastName}</p> )}
              </div>
              <div className="flex items-center">
              <label className="mr-2 font-bold">Address:</label> {isEditing ? ( 
                <input
                  type="text"
                  name="address"
                  value={userProfile.address}
                  onChange={handleChange}
                  className="border rounded px-2 py-1 "
                />
              ) : (
                <p> {userProfile.address}</p>)} 
              </div>
              <div className="flex items-center">
              <label className="mr-2 font-bold">Phone Number:</label>
              {isEditing ? ( 
                <input
                  type="text"
                  name="phoneNumber"
                  value={userProfile.phoneNumber}
                  onChange={handleChange}
                  className="border rounded px-2 py-1"
                />
              ) : (
                <p> {userProfile.phoneNumber}</p>)}
              </div>
              <div><p><strong>My Email Address:</strong> {userProfile.email}</p>{/* Email is not editable */}
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
                onClick={handleSave} // Saves changes
              >
                Save
              </button>
            </>
          ) : (
            <button
              className="bg-[#584822] text-white px-8 py-2 rounded mr-16"
              onClick={() => setIsEditing(true)} // Enables edit mode
            >
              Edit
            </button>
          )}
          </div>
      </div>
    </div>
  );
}
