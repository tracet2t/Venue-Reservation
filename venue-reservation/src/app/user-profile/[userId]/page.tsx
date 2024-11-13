// app/user-profile/[userId]/page.tsx
import { getUserProfile } from 'src/lib/user';
import RegisteredHeader from '@/app/layouts/RegisteredHeader';

type ProfileProps = {
  params: {
    userId: string;
  };
};

const ProfilePage = async ({ params }: ProfileProps) => {
  const { userId } = params; // Extract dynamic 'userId' from URL params

  // Fetch the user profile directly in the server component
  const user = await getUserProfile(userId);

  if (!user) {
    return <p>User not found.</p>; 
  }

  return (
    <div>
      <RegisteredHeader userName={user.firstName} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold">User Profile</h1>
        <div className="profile-card mt-4 p-6 bg-white rounded-lg shadow-md">
          <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Contact Number:</strong> {user.contactNumber}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
