"use client";

export default function UserProfilePage() {
  // Temporarily user data 
  const userProfile = {
    name: "Uthpala Devaki",
    firstName: "Uthpala",
    lastName: "Devaki",
    address: "60, Hill Street, Dehiwela",
    phoneNumber: "0709874509",
    email: "uthpaladevaki@gmail.com",
    avatar: "",//profile picture url
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="w-4/5 bg-white rounded-lg shadow p-8 mb-4">
        <div className="flex justify-center">
          <p className="text-2xl font-bold text-[#584822] mb-4">User Profile</p>
        </div>
        {/* add profile pictrue */}
          <img src={userProfile.avatar}
              alt="Profile Photo"
              className="w-24 h-24 rounded-full mr-4"/>
          <h2 className="text-2xl font-bold text-[#584822] mb-2">{userProfile.name}</h2>
          <p className="text-gray-500 mb-8">{userProfile.email}</p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p><strong>Full Name:</strong> {userProfile.firstName}</p>
            </div>
            <div>
              <p><strong>Last Name:</strong> {userProfile.lastName}</p>
            </div>
            <div>
              <p><strong>Address:</strong> {userProfile.address}</p>
            </div>
            <div>
              <p><strong>Phone Number:</strong> {userProfile.phoneNumber}</p>
            </div>
            <div><p><strong>My Email Address:</strong> {userProfile.email}</p></div>
          </div>

          <div className="flex justify-end mt-8">
            <button className="border border-[#584822] text-[#584822] px-8 py-2 rounded mr-8">Cancel</button>
            <button className="bg-[#584822] text-white px-8 py-2 rounded mr-16">Edit</button>
          </div>
      </div>
    </div>
  );
}
