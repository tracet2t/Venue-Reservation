import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

interface DateTimeSelection {
  date: Date;
  timeSlots: string[];
}

interface VenueDetails {
  id?: number;
  schedule: string;
  type?: string;
  name?: string;
}

interface ReservationFormProps {
  selectedDates: Date[];
  dateTimeSelections: DateTimeSelection[];
  onRemoveSelection: (date: Date) => void;
  onNext: () => void;
  id: number;
  venue: VenueDetails;
}

interface Question {
  id: string;
  text: string;
  answerOptions: string[];
}

const Question: React.FC<ReservationFormProps> = ({ selectedDates, dateTimeSelections, onRemoveSelection, onNext, id }) => {
  const [isAmenitiesDropdownOpen, setIsAmenitiesDropdownOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{[key: string]: string}>({});

  // Add new state for error messages
  const [errors, setErrors] = useState({
    title: '',
    purpose: '',
    dates: '',
    timeSlots: '',
    questions: {} as {[key: string]: string}
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsLoggedIn(!!data.user);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    // Fetch venue-specific questions from the API
    const fetchQuestions = async () => {
      try {
        const venueId = window.location.pathname.split('/')[2]; // Get venue ID from URL
        const response = await fetch(`/api/questions/${venueId}`);
        const data = await response.json();
        setQuestions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setQuestions([]);
      }
    };

    fetchQuestions();
  }, []);

  const toggleDropdown = (dropdown: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent form submission

    if (dropdown === 'amenities') {
      setIsAmenitiesDropdownOpen(!isAmenitiesDropdownOpen);
    }
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  // Add handlers for discard
  const handleDiscard = () => {
    // Reset amenities
    setSelectedAmenities([]);
    
    // Reset answers to questions
    setAnswers({});
    
    // Reset input fields directly
    const titleInput = document.getElementById('title') as HTMLInputElement;
    const purposeInput = document.getElementById('purpose') as HTMLInputElement;
    if (titleInput) titleInput.value = '';
    if (purposeInput) purposeInput.value = '';
    
    // Call onRemoveSelection for each selected date to clear time schedule
    selectedDates.forEach(date => {
      onRemoveSelection(date);
    });
  };

  // Update isFormValid to set error messages
  const isFormValid = () => {
    const newErrors = {
      title: '',
      purpose: '',
      dates: '',
      timeSlots: '',
      questions: {} as {[key: string]: string}
    };
    let isValid = true;

    // Check title
    const titleInput = document.getElementById('title') as HTMLInputElement;
    if (!titleInput?.value.trim()) {
      newErrors.title = 'Please enter the title';
      isValid = false;
    }

    // Check purpose
    const purposeInput = document.getElementById('purpose') as HTMLInputElement;
    if (!purposeInput?.value.trim()) {
      newErrors.purpose = 'Please enter the purpose of the reservation';
      isValid = false;
    }

    // Check dates
    if (selectedDates.length === 0) {
      newErrors.dates = 'Please select at least one date';
      isValid = false;
    }

    // Check time slots
    if (!dateTimeSelections.every(selection => selection.timeSlots.length > 0)) {
      newErrors.timeSlots = 'Please select time slots for all dates';
      isValid = false;
    }

    // Check questions
    questions.forEach(q => {
      if (!answers[q.id]) {
        newErrors.questions[q.id] = `Please answer: ${q.text}`;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Update handleNext to use validation
  const handleNext = () => {
    if (!isFormValid()) {
      return;
    }

    const formData = {
      title: (document.getElementById('title') as HTMLInputElement).value,
      purpose: (document.getElementById('purpose') as HTMLInputElement).value,
      selectedAmenities,
      answers,
      // Add date and time selections
      dateTimeSelections: dateTimeSelections.map(selection => ({
        date: selection.date.toISOString(),
        timeSlots: selection.timeSlots
      }))
    };
    
    // Save to localStorage
    localStorage.setItem(`venue-${id}-selections`, JSON.stringify({
      dates: selectedDates.map(date => date.toISOString()),
      timeSlots: dateTimeSelections.map(selection => ({
        date: selection.date.toISOString(),
        slots: selection.timeSlots
      }))
    }));
    
    localStorage.setItem(`venue-${id}-form-data`, JSON.stringify(formData));
    onNext();
  };

  const availableAmenities = [
    'Food & Beverages',
    'Sound System',
    'Private Parking',
    'Projector',
    'Extended Hours'
  ];

  return (
    <div className="space-y-6 text-olive">
      <div className="bg-white-100 p-4 rounded-lg">
         {/* Scrollable Content */}
    <div className="space-y-4 mt-4 h-[600px] overflow-y-auto">
       
        <h2 className="text-xl font-bold">Reservation Details</h2>

        <div className="space-y-4 mt-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <Input
              id="title"
              type="text"
              placeholder="Enter the title"
              className={`mt-1 block w-full px-3 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              disabled={!isLoggedIn}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Purpose */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
              Purpose of the reservation
            </label>
            <Input
              id="purpose"
              type="text"
              placeholder="Enter the purpose"
              className={`mt-1 block w-full px-3 py-2 border ${errors.purpose ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              disabled={!isLoggedIn}
            />
            {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>}
          </div>

          {/* Amenities Dropdown */}
          <div className="relative w-full">
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mt-4">
              Amentities
            </label>
            <button
              onClick={(e) => toggleDropdown('amenities', e)}
              className="flex items-center justify-between gap-0 px-4 py-4 border rounded-lg w-full bg-white focus:outline-none mt-1"
            >
              <span style={{ color: '#584822' }}>Amenities</span>
            </button>
            {isAmenitiesDropdownOpen && (
              <div className="absolute z-20 w-full bg-white border rounded-lg shadow-lg p-2 mt-0">
                {availableAmenities.map((amenity) => (
                  <label key={amenity} className="block mb-1  font-light">
                    <input
                      type="checkbox"
                      value={amenity}
                      onChange={(e) => {  
                        const selected = e.target.checked
                          ? [...selectedAmenities, amenity]
                          : selectedAmenities.filter((item) => item !== amenity);
                        setSelectedAmenities(selected);
                      }}
                      checked={selectedAmenities.includes(amenity)}
                    />
                    <span className="ml-2">{amenity}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Time Schedule Display */}
          {dateTimeSelections.length > 0 ? (
            <div className="items-center justify-between gap-0 px-4 py-4 border rounded-lg w-full bg-white">
              <h3 className="font-medium text-gray-700 mb-2">Selected Dates and Times:</h3>
              {dateTimeSelections.map((selection, index) => (
                <div key={index} className="mb-4 border-b pb-2">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 font-semibold">
                      {selection.date.toLocaleDateString()}
                    </p>
                    <button
                      onClick={() => onRemoveSelection(selection.date)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="mt-1 ml-4">
                    <ul className="list-disc list-inside mt-1">
                      {Array.isArray(selection.timeSlots) && selection.timeSlots.map((slot) => (
                        <li key={`${selection.date}-${slot}`} className="text-gray-600">
                          {slot}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`items-center justify-between gap-0 px-4 py-4 border rounded-lg w-full bg-white ${errors.dates ? 'border-red-500' : 'border-gray-300'}`}>
              <p className="text-gray-500">No dates selected</p>
              {errors.dates && <p className="text-red-500 text-sm mt-1">Please select date and time in the calendar</p>}
            </div>
          )}

          {/* Questions Section */}
          <div className="space-y-4 mt-4">
            <h3 className="font-medium text-gray-700">Additional Questions</h3>
            {questions.map((question) => (
              <div key={question.id} className="relative w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {question.text}
                </label>
                <select
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className={`block w-full px-4 py-4 border rounded-lg bg-white focus:outline-none ${
                    errors.questions[question.id] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={!isLoggedIn}
                >
                  <option value="" disabled>Select an answer</option>
                  {question.answerOptions?.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.questions[question.id] && (
                  <p className="text-red-500 text-sm mt-1">{errors.questions[question.id]}</p>
                )}
              </div>
            ))}
          </div>
        </div>     
        </div>

        {/* Updated buttons section */}
        <div className="flex justify-between items-center mt-4 border-t pt-4">
          <button
            type="button"
            onClick={handleDiscard}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Discard
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-[#584822] text-white rounded-lg hover:bg-[#4d3e20]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
