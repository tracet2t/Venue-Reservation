"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
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

const locations: Location[] = [
  { id: 1, province: "Western Province", districts: ["Colombo", "Gampaha", "Kalutara"] },
  { id: 2, province: "Central Province", districts: ["Kandy", "Matale", "Nuwara Eliya"] },
  { id: 3, province: "Southern Province", districts: ["Galle", "Matara", "Hambantota"] },
  { id: 4, province: "Sabaragamuwa Province", districts: ["Kegalle", "Rathnapura"] },
  { id: 5, province: "Eastern Province", districts: ["Ampara", "Batticaloa", "Trincomalee"] },
  { id: 6, province: "Uva Province", districts: ["Badulla", "Monaragala"] },
  { id: 7, province: "North Western Province", districts: ["Kurunegala", "Puttalam"] },
  { id: 8, province: "North Central Province", districts: ["Anuradhapura", "Polonnaruwa"] },
  { id: 9, province: "Northern Province", districts: ["Jaffna", "Kilinochchi", "Mullaitivu", "Vavuniya", "Mannar"] },
];

export default function AddNewVenue() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('general');
  const [imageFiles, setImageFiles] = useState<(File | null)[]>(Array(4).fill(null));
  const [imagePreviews, setImagePreviews] = useState<string[]>(Array(4).fill(''));
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    provinceAndDistrict: '',
    venueSize: '',
    venueType: '',
    maximumCapacity: '',
    timeMode: '',
    features: ['', '', '', ''],
  });
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      text: '',
      options: [''],
    },
  ]);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isUploading, setIsUploading] = useState<boolean[]>(Array(4).fill(false));

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (!e.target.files?.[0]) return;
    
    const file = e.target.files[0];
    console.log('Selected file:', file.name);
    
    // Validate file type and size
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error('Image size should be less than 5MB');
      return;
    }
    
    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setImagePreviews(prev => {
      const newPreviews = [...prev];
      newPreviews[index] = previewUrl;
      return newPreviews;
    });
    
    // Store file for later upload
    setImageFiles(prev => {
      const newFiles = [...prev];
      newFiles[index] = file;
      return newFiles;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 1. Enhanced Initial validation
      if (!imageFiles.some(file => file !== null)) {
        toast.error('Please select at least one image');
        return;
      }

      // Validate other required fields
      if (!formData.name || !formData.location || !selectedDistrict || !selectedProvince) {
        toast.error('Please fill in all required fields');
        return;
      }

      // 2. Start upload process
      setIsUploading(Array(4).fill(true));
      
      // 3. Upload images to Google Cloud
      const uploadedImageUrls: string[] = [];
      
      // Create a loading toast that we can update
      const loadingToast = toast.loading('Uploading images...');

      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          
          try {
            console.log(`Uploading image ${i + 1}...`); // Debug log
            const uploadResponse = await fetch('/api/google_image', {
              method: 'POST',
              body: formData,
            });
            
            if (!uploadResponse.ok) {
              throw new Error(`Failed to upload image ${i + 1}`);
            }
            
            const { imageUrl } = await uploadResponse.json();
            console.log('Uploaded image URL:', imageUrl); // Debug log
            uploadedImageUrls.push(imageUrl);
            
            // Update loading toast with progress
            toast.loading(`Uploaded ${uploadedImageUrls.length} of ${imageFiles.filter(f => f !== null).length} images...`, 
              { id: loadingToast });
            
          } catch (uploadError) {
            console.error('Image upload error:', uploadError);
            toast.error(`Failed to upload image ${i + 1}`);
            setIsUploading(Array(4).fill(false));
            return; // Exit if any image upload fails
          }
        }
      }

      // Dismiss the loading toast
      toast.dismiss(loadingToast);

      toast.loading('Creating venue...');

      // 4. Create venue with uploaded image URLs
      const venueData = {
        name: formData.name,
        streetName: formData.location.split(',').map(s => s.trim()),
        district: selectedDistrict,
        province: selectedProvince,
        type: formData.venueType,
        capacity: parseInt(formData.maximumCapacity),
        size: parseInt(formData.venueSize),
        schedule: formData.timeMode,
        features: formData.features.filter(f => f.trim() !== ''),
        images: uploadedImageUrls,
        questions: questions
          .filter(q => q.text.trim() !== '')
          .map(q => ({
            text: q.text,
            options: q.options.filter(opt => opt.trim() !== '')
          }))
      };

      // 5. Send venue data to API
      const venueResponse = await fetch('/api/new-venue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(venueData),
      });

      if (!venueResponse.ok) {
        const error = await venueResponse.json();
        throw new Error(error.message || 'Failed to create venue');
      }

      // 6. Success handling
      toast.dismiss();
      toast.success('Venue created successfully!');
      router.push('/admin/venue-details');

    } catch (error) {
      // 7. Error handling
      toast.dismiss();
      console.error('Error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create venue');
    } finally {
      setIsUploading(Array(4).fill(false));
    }
  };

  const handleAddOption = (questionId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          return {
            ...q,
            options: [...q.options, ''],
          };
        }
        return q;
      })
    );
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: String(questions.length + 1),
        text: '',
        options: [''],
      },
    ]);
  };

  const handleQuestionChange = (questionId: string, text: string) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, text } : q))
    );
  };

  const handleOptionChange = (
    questionId: string,
    optionIndex: number,
    text: string
  ) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newOptions = [...q.options];
          newOptions[optionIndex] = text;
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
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

  const handleNext = () => {
    if (activeTab === 'general') {
      setActiveTab('setting');
    } else if (activeTab === 'setting') {
      setActiveTab('questions');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8 md:max-w-4xl lg:max-w-5xl">
        <h1 className="text-2xl md:text-3xl font-bold text-[#584822] mb-6">Add New Venue</h1>
        
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
                <div className="flex gap-4">
                  {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="relative">
                      {imagePreviews[index] ? (
                        <div className="w-24 h-24 relative">
                          <img
                            src={imagePreviews[index]}
                            alt={`Preview ${index + 1}`}
                            className="w-24 h-24 object-cover rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImagePreviews(prev => {
                                const newPreviews = [...prev];
                                newPreviews[index] = '';
                                return newPreviews;
                              });
                              setImageFiles(prev => {
                                const newFiles = [...prev];
                                newFiles[index] = null;
                                return newFiles;
                              });
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <label className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center hover:border-[#584822] cursor-pointer">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleImageSelect(e, index)}
                          />
                        </label>
                      )}
                    </div>
                  ))}
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
                  <option value="hall">Auditorium</option>
                  <option value="auditorium">Outdoor</option>
                  <option value="conference">Co-Working Space</option>
                  <option value="outdoor">Conference Hall</option>
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
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-8">
              {questions.map((question, questionIndex) => (
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
