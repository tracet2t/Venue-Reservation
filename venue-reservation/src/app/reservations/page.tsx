// Reservation.tsx
'use client'
import VenueCard from '@/components/venue_card/user_venue_card';
import Header from '@/app/layouts/Header';
import Footer from '@/app/layouts/Footer';

const Reservation = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-8">
        

        {/* Venue Card */}
        <VenueCard />
      </main>

      {/* Footer */}
      
      <Footer />
    </div>
  );
};
export default Reservation;
