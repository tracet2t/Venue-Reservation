"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import React from 'react';

interface Question {
  id: string;
  text: string;
  options: string[];
}

interface Location {
  id: number;
  province: string;
  districts: string[];
}

interface VenueQuestion {
  id: string;
  text: string;
  answerOptions: string[];
}

const locations: Location[] = [
    { id: 1, province: "Western Province", districts: ["Colombo", "Gampaha", "Kalutara"] },
    { id: 2, province: "Central Province", districts: ["Kandy", "Matale", "Nuwara Eliya"] },
    { id: 3, province: "Southern Province", districts: ["Galle", "Matara", "Hambantota"] },
    { id: 4, province: "Sabaragamuwa Province", districts: ["Kegalle", "Rathnapura"] },
    { id: 5, province: "Eastern Province", districts: ["Ampara", "Batticaloa","Trincomalee"] },
    { id: 6, province: "Uva Province", districts: ["Badulla", "Monaragala"] },
    { id: 7, province: "North Western Province", districts: ["Kurunegala", "Puttalam"] },
    { id: 8, province: "North Central Province", districts: ["Anuradhapura", "Polonnaruwa"] },
    { id: 9, province: "Northern Province", districts: ["Jaffna", "Kilinochchi","Mullaitivu","Vavuniya","Mannar"] },
];

export default function EditVenue({ params }: { params: { id: string } }) {
  //const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('general');
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    provinceAndDistrict: '',
    venueSize: '',
    venueType: '',
    maximumCapacity: '',
    timeMode: '',
    features: ['', '', '', ''],
    amenments:['','','',''],
  });
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (activeTab === 'general') {
      if (!formData.name || !formData.location || !selectedProvince || !selectedDistrict) {
        toast.error('Please fill all required fields');
        return;
      }
      setActiveTab('setting');
    }
    if (activeTab === 'setting') {
      if (!formData.venueType || !formData.maximumCapacity || !formData.timeMode) {
        toast.error('Please fill all required fields');
        return;
      }
      setActiveTab('questions');
    }
  };

  const handleAddOption = (questionId: string) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        return { ...q, options: [...q.options, ''] };
      }
      return q;
    }));
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: String(questions.length + 1),
        text: '',
        options: ['']
      }
    ]);
  };

  const handleQuestionChange = (questionId: string, text: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, text } : q
    ));
  };

  const handleOptionChange = (questionId: string, optionIndex: number, text: string) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        const newOptions = [...q.options];
        newOptions[optionIndex] = text;
        return { ...q, options: newOptions };
      }
      return q;
    }));
  };

  const handleProvinceCheckboxChange = (province: string) => {
    if (selectedProvince === province) {
      setSelectedProvince(null);
      setSelectedDistrict(null);
    } else {
      setSelectedProvince(province);
      setSelectedDistrict(null);
    }
  };

  const handleDistrictCheckboxChange = (district: string) => {
    setSelectedDistrict(district === selectedDistrict ? null : district);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/google_image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      
      const { imageUrl } = await response.json();
      setImages(prev => [...prev, imageUrl]);
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    }
  };

  const handleDeleteImage = async (imageUrl: string) => {
    try {
      const response = await fetch('/api/google_image', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete image');
      }

      setImages(prev => prev.filter(img => img !== imageUrl));
      toast.success('Image deleted successfully');
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete image');
    }
  };

  useEffect(() => {
    const fetchVenueData = async () => {
      try {
        const response = await fetch(`/api/admin-venue/${params.id}`);
        if (!response.ok) throw new Error('Failed to fetch venue data');
        
        const venueData = await response.json();
        
        setFormData({
          name: venueData.name,
          location: venueData.street_name[0] || '',
          provinceAndDistrict: '',
          venueSize: venueData.size.toString(),
          venueType: venueData.type,
          maximumCapacity: venueData.capacity.toString(),
          timeMode: venueData.schedule,
          features: venueData.features.length ? venueData.features : ['', '', '', ''],
          amenments: venueData. amenments.length ? venueData. amenments : ['', '', '', '']
        });

        setImages(venueData.images);
        setSelectedProvince(venueData.province);
        setSelectedDistrict(venueData.district);
        
        const transformedQuestions = venueData.questions.map((q: VenueQuestion) => ({
          id: q.id,
          text: q.text,
          options: q.answerOptions
        }));
        setQuestions(transformedQuestions);
      } catch (error) {
        console.error('Error fetching venue data:', error);
        toast.error('Failed to load venue data');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchVenueData();
    }
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab !== 'questions') return;

    try {
      const validQuestions = questions
        .filter(q => q.text.trim() !== '')
        .map(q => ({
          text: q.text,
          options: q.options.filter(opt => opt.trim() !== '')
        }));

      const venueData = {
        name: formData.name,
        streetName: formData.location,
        district: selectedDistrict,
        province: selectedProvince,
        type: formData.venueType,
        capacity: parseInt(formData.maximumCapacity),
        size: parseInt(formData.venueSize),
        schedule: formData.timeMode,
        features: formData.features.filter(f => f.trim() !== ''),
        amenments: formData.amenments.filter(f => f.trim() !== ''),
        images: images,
        questions: validQuestions
      };

      const response = await fetch(`/api/admin-venue/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(venueData),
      });

      if (!response.ok) throw new Error('Failed to update venue');

      toast.success('Venue updated successfully!');
      router.push('/admin/venue-details');
    } catch (error) {
      console.error('Error updating venue:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to update venue');
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8 md:max-w-4xl lg:max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-bold text-[#584822] mb-6">Edit Venue</h1>
        
        {/* Tabs */}
        <div className="flex border-b mb-6 space-x-4 gap-64">
          <button
            className={`px-6 py-2 text-base md:text-lg ${activeTab === 'general' ? 'border-b-2 border-[#584822] text-[#584822]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button
            className={`px-6 py-2 text-base md:text-lg ${activeTab === 'setting' ? 'border-b-2 border-[#584822] text-[#584822]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('setting')}
          >
            Setting
          </button>
          <button
            className={`px-6 py-2 text-base md:text-lg ${activeTab === 'questions' ? 'border-b-2 border-[#584822] text-[#584822]' : 'text-gray-500'}`}
            onClick={() => setActiveTab('questions')}
          >
            Questions
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {activeTab === 'general' && (
            <div className="space-y-6 p-6 border-2 border-gray-200 rounded-lg bg-white shadow-sm">
              {/* Name */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Hall Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#584822] text-base md:text-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Address ( No.7, Bodhiraja Road)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#584822] text-base md:text-lg"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              {/* Province and District Selection */}
              <div className="space-y-4">
                <label className="block text-sm md:text-base font-medium text-gray-700">
                  Province and District
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#584822]"
                  >
                    <span>
                      {selectedProvince && selectedDistrict 
                        ? `${selectedProvince} - ${selectedDistrict}`
                        : "Select Province and District"}
                    </span>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isLocationDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto">
                      <div className="p-4">
                        {locations.map((location) => (
                          <div key={location.id} className="mb-4">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={selectedProvince === location.province}
                                onChange={() => handleProvinceCheckboxChange(location.province)}
                                className="form-checkbox h-4 w-4 text-[#584822] rounded focus:ring-[#584822]"
                              />
                              <span className="text-sm font-medium">{location.province}</span>
                            </label>
                            
                            {selectedProvince === location.province && (
                              <div className="ml-6 mt-2 space-y-2">
                                {location.districts.map((district) => (
                                  <label key={district} className="flex items-center space-x-2">
                                    <input
                                      type="checkbox"
                                      checked={selectedDistrict === district}
                                      onChange={() => handleDistrictCheckboxChange(district)}
                                      className="form-checkbox h-4 w-4 text-[#584822] rounded focus:ring-[#584822]"
                                    />
                                    <span className="text-sm">{district}</span>
                                  </label>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* Selected Location Display */}
                {selectedProvince && selectedDistrict && (
                  <div className="mt-2 text-sm text-gray-600">
                    Selected: {selectedProvince} - {selectedDistrict}
                  </div>
                )}
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Images</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={image} 
                        alt={`Venue ${index + 1}`} 
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteImage(image)}
                        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                  {images.length < 4 && (
                    <label className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center hover:border-[#584822] cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </label>
                  )}
                </div>
              </div>

              {/* Information About Venue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Information About Venue
                </label>
                <div className="space-y-3">
                  {[
                    'Interior details (e.g., Elegant interiors with chandeliers)',
                    'Sound system details (e.g., Dedicated sound and lighting system)',
                    'Additional area details (e.g., Adjacent cocktail area)',
                    'Services details (e.g., In-house catering services)'
                  ].map((placeholder, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#584822]"
                      value={formData.features[index] || ''}
                      onChange={(e) => {
                        const newFeatures = [...formData.features];
                        newFeatures[index] = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          features: newFeatures
                        }));
                      }}
                      required={index === 0}
                    />
                  ))}
                </div>
              </div>
               
              {/* Venue Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Venue Size (Square Feet)</label>
                <input
                  type="text"
                  placeholder="Details about venue size"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#584822]"
                  value={formData.venueSize}
                  onChange={(e) => setFormData({...formData, venueSize: e.target.value})}
                />
              </div>
            </div>
          )}

          {activeTab === 'setting' && (
            <div className="space-y-6 p-6 border-2 border-gray-200 rounded-lg bg-white shadow-sm">
              {/* Venue Type */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Select Venue Type
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#584822] text-base md:text-lg appearance-none bg-white"
                  value={formData.venueType}
                  onChange={(e) => setFormData({...formData, venueType: e.target.value})}
                >
                  <option value="">Select a category</option>
                  <option value="hall">Hall</option>
                  <option value="auditorium">Auditorium</option>
                  <option value="conference">Conference Room</option>
                  <option value="outdoor">Outdoor Venue</option>
                </select>
              </div>

              {/* Maximum Venue Capacity */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Maximum Venue Capacity (Seat Count)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#584822] text-base md:text-lg"
                  value={formData.maximumCapacity}
                  onChange={(e) => setFormData({...formData, maximumCapacity: e.target.value})}
                />
              </div>

              {/* Venue Time Mode */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Venue Time Mode
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#584822] text-base md:text-lg appearance-none bg-white"
                  value={formData.timeMode}
                  onChange={(e) => setFormData({...formData, timeMode: e.target.value})}
                >
                  <option value="">Select Time Mode</option>
                  <option value="EntireDay">Entire Day</option>
                  <option value="SessionTime">Session Time</option>
                  <option value="HourlyTime">Hourly Time</option>
                </select>
              </div>
              {/* Add Amenity */}
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                  Amenments
                </label>
                <div className="space-y-3">
                  {[
                    'Amenity 01',
                    'Amenity 02',
                    'Amenity 03',
                    'Amenity 04'
                  ].map((placeholder, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#584822]"
                      value={formData.amenments[index] || ''}
                      onChange={(e) => {
                        const newamenments = [...formData.amenments];
                        newamenments[index] = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          amenments: newamenments
                        }));
                      }}
                      required={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          

          {activeTab === 'questions' && (
            <div className="space-y-8">
              {questions.map((question) => (
                <div 
                  key={question.id} 
                  className="space-y-4 p-6 border-2 border-gray-200 rounded-lg bg-white shadow-sm"
                >
                  {/* Question Input */}
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Question
                    </label>
                    <input
                      type="text"
                      placeholder="Ask Question"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#584822] text-base md:text-lg"
                      value={question.text}
                      onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                    />
                  </div>

                  {/* Options */}
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Option
                    </label>
                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <input
                          key={optionIndex}
                          type="text"
                          placeholder="+ Add"
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#584822] text-base md:text-lg"
                          value={option}
                          onChange={(e) => handleOptionChange(question.id, optionIndex, e.target.value)}
                        />
                      ))}
                      
                      {/* New Option Button */}
                      <button
                        type="button"
                        onClick={() => handleAddOption(question.id)}
                        className="inline-flex items-center px-5 py-2.5 border-2 border-[#584822] text-[#584822] rounded-md hover:bg-[#584822] hover:text-white transition-colors text-base md:text-lg"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        New Option
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add New Question Button */}
              <button
                type="button"
                onClick={handleAddQuestion}
                className="w-full flex items-center justify-center px-5 py-3 border-2 border-dashed border-[#584822] text-[#584822] rounded-md hover:bg-[#584822] hover:text-white transition-colors text-base md:text-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add a New Question
              </button>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  className="px-6 py-2.5 border-2 border-gray-300 rounded-md hover:bg-gray-50 text-base md:text-lg"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#584822] text-white rounded-md hover:bg-[#6A5B3A] text-base md:text-lg"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Show buttons only for general and setting tabs */}
          {(activeTab === 'general' || activeTab === 'setting') && (
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={() => router.push('/admin/venue-details')}
              >
                Discard
              </button>
              <button
                type="button"
                className="px-6 py-2 bg-[#584822] text-white rounded-md hover:bg-[#6A5B3A]"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          )}


        </form>
      </div>
    </div>
  );
} 