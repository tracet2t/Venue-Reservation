import { useState } from 'react';
import ReservationSummary from './re-summary';
import ReservationConfirmation from './re-confirmation';

interface DateTimeSelection {
  date: Date;
  timeSlots: string[];
}

interface CarouselProps {
  id: number;
  selectedDates: Date[];
  dateTimeSelections: DateTimeSelection[];
  currentStep: number;
  onStepChange: (step: number) => void;
  reservationId?: string;
  email?: string;
}

const ReservationCarousel: React.FC<CarouselProps> = ({
  id,
  selectedDates,
  currentStep,
  onStepChange,
  reservationId: initialReservationId,
}) => {
  const [reservationId, setReservationId] = useState(initialReservationId || '');
  const [formData] = useState({
    venueName: 'Test Venue',
    venueType: 'Conference Hall',
    schedule: 'Full Day',
    purpose: 'Meeting',
    amenities: ['WiFi', 'Projector'],
    email: ''
  });

  const steps = [
    { number: 1, label: 'Date Selection' },
    { number: 2, label: 'Summary' },
    { number: 3, label: 'Confirmation' }
  ];

  return (
    <div className="w-full">
      {/* Progress Bar - Desktop */}
      <div className="hidden md:block mb-8">
        <div className="flex justify-between items-center max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center flex-1">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep > step.number ? 'bg-green-500' : 
                  currentStep === step.number ? 'bg-[#584822]' : 'bg-gray-300'
                } text-white font-semibold`}>
                  {step.number}
                </div>
                <div className={`ml-3 ${
                  currentStep === step.number ? 'text-[#584822] font-bold' : 'text-gray-500'
                }`}>
                  {step.label}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div className={`h-1 ${
                    currentStep > step.number ? 'bg-green-500' : 'bg-gray-300'
                  }`} />  
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar - Mobile */}
      <div className="md:hidden mb-8">
        <div className="flex flex-col items-center">
          <div className="flex justify-between w-full max-w-xs mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep > step.number ? 'bg-green-500' : 
                  currentStep === step.number ? 'bg-[#584822]' : 'bg-gray-300'
                } text-white text-sm font-semibold`}>
                  {step.number}
                </div>
                <div className={`mt-2 text-xs text-center ${
                  currentStep === step.number ? 'text-[#584822] font-bold' : 'text-gray-500'
                }`}>
                  {step.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full max-w-xs justify-between relative">
            {steps.slice(0, -1).map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 mx-4 ${
                  currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="transition-all duration-300">
        {currentStep === 2 && (
          <ReservationSummary
            venueName={formData.venueName}
            venueType={formData.venueType}
            schedule={formData.schedule}
            date={selectedDates[0]?.toLocaleDateString() || ''}
            purpose={formData.purpose}
            amenities={formData.amenities}
            setCurrentStep={onStepChange}
            onSubmitSuccess={(data) => {
              setReservationId(data.reservationId);
              onStepChange(3);
            }}
          />
        )}

        {currentStep === 3 && (
          <ReservationConfirmation 
            reservationId={reservationId}
            venueId={id}
            email={formData.email}
          />
        )}
      </div>

    </div>
  );
};

export default ReservationCarousel; 