import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Carousel from './carousel';
import moment from 'moment';
import termsPopup from '@/components/termsPop'; 
import TermsPopup from '@/components/termsPop';

interface VenueDetails {
  id: number;
  name: string;
  street_name: string;
  district: string;
  province: string;
  type: string;
  capacity: string;
  size: string;
  schedule: string;
  features: string[];
  images: string[];
  adminDetails?: {
    email: string;
    firstName: string;
    lastName: string;
    contactNumber: bigint;
  };
}

interface DateTimeSelection {
  date: Date;
  timeSlots: string[];
}

interface ReservationSummaryProps {
  venueName: string;
  venueType: string;
  schedule: string;
  date: string;
  purpose: string;
  amenities: string[];
  title?: string;
  selectedAmenities?: string[];
  answers?: { [key: string]: string };
  setCurrentStep: (step: number) => void;
  onSubmitSuccess?: (data: { 
    reservationId: string; 
    email: string;
    venueId: number;
    adminDetails?: {
      email: string;
      firstName: string;
      lastName: string;
      contactNumber: string;
    }
  }) => void;
}
// Add this interface for the time slot structure
interface TimeSlot {
  date: string;
  slots: string[];
}

const ReservationSummary: React.FC<ReservationSummaryProps> = ({
  setCurrentStep,
  onSubmitSuccess,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const [venueDetails, setVenueDetails] = useState<VenueDetails | null>(null);
  const [dateTimeSelections, setDateTimeSelections] = useState<DateTimeSelection[]>([]);
  const [reservationDetails, setReservationDetails] = useState<ReservationSummaryProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Array<{ id: string; text: string }>>([]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState('');

  useEffect(() => {
    if (!id) return;

    // Fetch venue details
    const fetchVenueDetails = async () => {
      try {
        const response = await fetch(`/api/venue-details/${id}`);
        if (!response.ok) throw new Error('Failed to fetch venue details');
        const data = await response.json();
        setVenueDetails(data);
      } catch (err: unknown) {
        setError('Error fetching venue details');
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error('An unexpected error occurred');
        }
      }
    };

    // Get reservation details from localStorage
    const getReservationDetails = () => {
      try {
        const savedSelectionsStr = localStorage.getItem(`venue-${id}-selections`);
        if (savedSelectionsStr) {
          const saved = JSON.parse(savedSelectionsStr);
          const selections = saved.timeSlots.map((slot: TimeSlot) => ({
            date: new Date(slot.date),
            timeSlots: slot.slots
          }));
          setDateTimeSelections(selections);
        }

        const formDataStr = localStorage.getItem(`venue-${id}-form-data`);
        if (formDataStr) {
          setReservationDetails(JSON.parse(formDataStr));
        }
      } catch (err) {
        console.error('Error loading reservation details:', err);
        setError('Error loading reservation details');
      }
    };

    if (id) {
      getReservationDetails();
      fetchVenueDetails();
    }

    setLoading(false);
  }, [id]);

  useEffect(() => {
    // Fetch questions when component mounts
    const fetchQuestions = async () => {
      try {
        const venueId = id;
        const response = await fetch(`/api/questions/${venueId}`);
        const data = await response.json();
        setQuestions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setQuestions([]);
      }
    };

    fetchQuestions();
  }, [id]);

  const handleSubmit = async () => {
    // Check if terms are accepted
    if (!isTermsAccepted) {
      setTermsError('Please accept the Terms and Privacy Policy to continue');
      return;
    }
    setTermsError('');

    try {
      const mappedExtraServices = reservationDetails?.selectedAmenities || []; // Store all selected amenities as they are

      // const mappedExtraServices = reservationDetails?.selectedAmenities?.map((amenity: string) => {
      //   switch(amenity) {
      //     case 'Food & Beverages': return 'food' as const;
      //     case 'Sound System': return 'sound_system' as const;
      //     case 'Private Parking': return 'private_parking' as const;
      //     case 'Projector': return 'projectors' as const;
      //     case 'Extended Hours': return 'extend_hours' as const;
      //     default: return null;
      //   }
      // }).filter((service): service is 'food' | 'sound_system' | 'private_parking' | 'projectors' | 'extend_hours' => 
      //   service !== null
      // );

      // Format all date-time selections
      const formatDate = (date: Date) => {
        // Add timezone offset to keep the correct date
        const userTimezone = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
          .toISOString()
          .split('T')[0];
        return userTimezone;
      };

      const formattedDateTimeSelections = dateTimeSelections.map(selection => ({
        date: formatDate(new Date(selection.date)),
        timeSlots: selection.timeSlots
      }));

      const reservationData = {
        venueId: Number(id),
        title: reservationDetails?.title || '',
        purposeOfReservation: reservationDetails?.purpose || '',
        extraServices: reservationDetails?.selectedAmenities || [], // Save all selected amenities dynamically
        dateTimeSelections: formattedDateTimeSelections,
        timeDuration: dateTimeSelections.reduce((total, selection) => 
          total + selection.timeSlots.length, 0),
        questions: questions.map(q => ({
          text: q.text,
          answer: (reservationDetails?.answers ?? {})[q.id] || ''
        }))
      };

      const response = await fetch('/api/reservations/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit reservation');
      }

      // Success handling
      if (onSubmitSuccess && data.reservation) {
        onSubmitSuccess({
          reservationId: data.reservation.reservationId,
          email: data.reservation.user?.email || '',
          venueId: Number(id),
          adminDetails: venueDetails?.adminDetails ? {
            email: venueDetails.adminDetails.email,
            firstName: venueDetails.adminDetails.firstName,
            lastName: venueDetails.adminDetails.lastName,
            contactNumber: venueDetails.adminDetails.contactNumber.toString()
          } : undefined
        });
      } else {
        throw new Error('Invalid response format from server');
      }

      // Send email notification to admin
      if (data.reservation) {
        const emailData = {
          reservationDetails: {
            reservationId: data.reservation.reservationId,
            venueId: Number(id),
            title: reservationDetails?.title,
            purpose: reservationDetails?.purpose,
            dates: formattedDateTimeSelections,
            selectedAmenities: reservationDetails?.selectedAmenities,
            questions: questions.map(q => ({
              question: q.text,
              answer: (reservationDetails?.answers ?? {})[q.id] || ''
            }))
          }
        };

        const emailResponse = await fetch('/api/send-admin-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        if (!emailResponse.ok) {
          console.error('Failed to send admin notification email');
        }
      }

      // Clear localStorage after successful submission
      localStorage.removeItem(`venue-${id}-selections`);
      localStorage.removeItem(`venue-${id}-form-data`);

      // Navigate to confirmation step
      setCurrentStep(3);
    } catch (error) {
      console.error('Error details:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit reservation');
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 text-olive">
     

      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* Venue Details Section - Left Column */}
        <div className="w-full lg:w-3/5">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            <h2 className="text-2xl font-bold mb-4">Venue Details</h2>
             {/* Venue Images Carousel Section */}
                {venueDetails && venueDetails.images && venueDetails.images.length > 0 && (
                  <div className="mb-6">
                    <Carousel 
                      images={venueDetails.images}
                      height="300px"
                      width="100%"
                      arrowBgColor="rgba(88, 72, 34, 0.7)"
                      arrowFgColor="#ffffff"
                      dotColor="#D3D3D3"
                      activeDotColor="#584822"
                    />
                  </div>
                )}
            {venueDetails && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl justify-center items-center font-bold text-olive">{venueDetails.name}</h3>
                  <p>
                    {`${venueDetails.street_name}, ${venueDetails.district}, ${venueDetails.province}`}
                  </p>
                </div>
                
                <div className="gap-4">
                  <div>
                    <p className="font-semibold text-olive">Type: {venueDetails.type}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Capacity: {venueDetails.capacity}</p>
                    
                  </div>
                  <div>
                    <p className="font-semibold">Size: {venueDetails.size}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Schedule Type:{venueDetails.schedule}</p>
                  </div>
                </div>

                {venueDetails.features && venueDetails.features.length > 0 && (
                  <div>
                    <ul className="list-disc list-inside space-y-1">
                      {venueDetails.features.map((feature, index) => (
                        <li key={index} className="text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Reservation Summary Section - Right Column */}
        <div className="w-full lg:w-2/5">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Reservation Summary</h2>
            
            {reservationDetails && (
              <>
                {/* Basic Details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Title</span>
                    <span className="text-gray-600">{reservationDetails?.title}</span>
                  </div>

                  {/* Selected Dates and Time Slots */}
                  <div className="mt-4">
                    <span className="text-gray-700 font-medium block mb-2">Selected Dates & Times</span>
                    <div className="space-y-3 bg-gray-50 p-3 rounded-lg">
                      {Array.isArray(dateTimeSelections) && dateTimeSelections.map((selection, index) => {
                        // Parse the date string using moment
                        const formattedDate = moment(selection.date).isValid() 
                          ? moment(selection.date).format('MMMM D, YYYY')
                          : moment(new Date(selection.date)).format('MMMM D, YYYY');

                        return (
                          <div key={index} className="border-b last:border-0 pb-2">
                            <div className="font-medium text-gray-800">
                              {formattedDate}
                            </div>
                            <div className="ml-4 mt-1">
                              {Array.isArray(selection.timeSlots) && selection.timeSlots.map((slot, slotIndex) => (
                                <div key={slotIndex} className="text-sm text-gray-600">
                                  • {slot}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Purpose Of The Reservation</span>
                    <span className="text-gray-600">{reservationDetails?.purpose}</span>
                  </div>

                  {/* Venue Type */}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Venue Type</span>
                    <span className="text-gray-600">{venueDetails?.type}</span>
                  </div>

                  {/* Selected Amenities */}
                  <div className="space-y-2">
                    <span className="text-gray-700 font-medium block">Amenities</span>
                    <div className="flex flex-wrap gap-2">
                      {reservationDetails?.selectedAmenities?.map((amenity, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 rounded-full bg-[#584822] text-white text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Questions Section */}
                  {questions.length > 0 && (
                    <div className="mt-6 space-y-4">
                      <span className="text-gray-700 font-medium">Additional Information</span>
                      {questions.map((question) => (
                        <div key={question.id} className="flex justify-between items-center">
                          <span className="text-gray-700">{question.text}</span>
                          <span className="text-gray-600">
                            {(reservationDetails?.answers ?? {})[question.id] || '-'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Terms and Privacy Policy */}
                  <div className="mt-6">
                    <label className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-[#584822]"
                        checked={isTermsAccepted}
                        onChange={(e) => {
                          setIsTermsAccepted(e.target.checked);
                          if (e.target.checked) setTermsError('');
                        }}
                      />
                       <div>  By clicking Reserve Now you agree to the <TermsPopup /> </div>
                    </label>
                    {termsError && (
                      <p className="text-red-500 text-sm mt-2">{termsError}</p>
                    )}
                  </div> 
                  {/* Reserve Now Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 mt-6 bg-[#584822] text-white rounded-lg hover:bg-[#4d3e20] transition-colors"
                  >
                    Reserve Now
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ReservationSummary;
