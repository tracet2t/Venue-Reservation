import VenueCard from '@/components/venue_card/user_venue_card';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      
    {/* Main Content */}
      <main className="flex-grow p-8">
        <VenueCard />
      </main>

    </div>
  );
};

export default LandingPage;
