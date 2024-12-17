import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ReservationForm = () => {
  const [isAmenitiesDropdownOpen, setIsAmenitiesDropdownOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const [dropdownValues, setDropdownValues] = useState({
    timeSchedule: '',
    publicOrPrivate: '',
    specialSecurity: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const toggleDropdown = (dropdown: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent form submission

    if (dropdown === 'amenities') {
      setIsAmenitiesDropdownOpen(!isAmenitiesDropdownOpen);
    }
  };

  const handleDropdownChange = (key: string, value: string) => {
    setDropdownValues({ ...dropdownValues, [key]: value });
  };

  return (
    <form className="space-y-6 text-olive">
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={!isLoggedIn}
            />
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              disabled={!isLoggedIn}
            />
          </div>

          {/* Amenities Dropdown */}
          <div className="relative w-full z-20">
            
            <button
              onClick={(e) => toggleDropdown('amenities', e)}
              className="flex items-center justify-between gap-0 px-4 py-4 border rounded-lg w-full bg-white focus:outline-none"
            >
              <span style={{ color: '#584822' }}>Amenities</span>
      
            </button>
            
            {isAmenitiesDropdownOpen && (
              <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg p-2">
                {['Food', 'Private Parking', 'Sound System', 'Extend Hours'].map((amenity) => (
                  <label key={amenity} className="block mb-2 font-light">
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

          {/* Time Schedule Dropdown */}
          <div className="relative w-full">
            <select
              value={dropdownValues.timeSchedule}
              onChange={(e) => handleDropdownChange('timeSchedule', e.target.value)}
              className="block w-full px-4 py-4 border rounded-lg bg-white focus:outline-none"
              disabled={!isLoggedIn}
            >
              <option value="" disabled>
                Select Time Schedule
              </option>
              {['8:00-9:00', '9:00-10:00', '10:00-11:00', '11:00-12:00'].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Public or Private Dropdown */}
          <div className="relative w-full">
            <select
              value={dropdownValues.publicOrPrivate}
              onChange={(e) => handleDropdownChange('publicOrPrivate', e.target.value)}
              className="block w-full px-4 py-4 border rounded-lg bg-white focus:outline-none"
              disabled={!isLoggedIn}
            >
              <option value="" disabled>
                Open to the public or private
              </option>
              {['Yes', 'No'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Special Security Required Dropdown */}
          <div className="relative w-full">
            <select
              value={dropdownValues.specialSecurity}
              onChange={(e) => handleDropdownChange('specialSecurity', e.target.value)}
              className="block w-full px-4 py-4 border rounded-lg bg-white focus:outline-none"
              disabled={!isLoggedIn}
            >
              <option value="" disabled>
                Special Security Required
              </option>
              {['Yes', 'No'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button type="submit" className="mt-4 bg-olive text-white px-4 py-2 rounded" disabled={!isLoggedIn}>
          Submit Reservation
        </Button>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
