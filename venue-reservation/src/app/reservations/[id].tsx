"use client";


import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";
import CalendarComponent from "@/components/calendar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";



import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "/src/app/globals.css";

import { title } from "process";

interface Venue {
  id: string; // or `number`, based on your data type
  name: string;
  schedule: string;
  // Add other properties as needed
}

const items = [
  { id: "recents", label: "Recents" },
  { id: "home", label: "Home" },
  { id: "applications", label: "Applications" },
  { id: "desktop", label: "Desktop" },
  { id: "downloads", label: "Downloads" },
  { id: "documents", label: "Documents" },
] as const;

const amenitiesList = [
  "WiFi",
  "Air Conditioning",
  "Parking",
  "Projector",
  "Sound System",
  "Wheelchair Accessible",
];


const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  purpose: z.string().min(1, "Purpose is required"),
  timezone: z.string().min(1, "Timezone is required"),
  amenities: z.array(z.string()),
});

const Availability = () => {
  const router = useRouter();
  const { id } = router.query;

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [venueInfo, setVenueInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [venue, setVenue] = useState(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      purpose: "",
      timezone: "",
      amenities: [],
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [availability, setAvailability] = useState({
    morning: false,
    evening: false,
    lateEvening: false,
    earlyMorning: false,
  });

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setAvailability({
      morning: false,
      evening: false,
      lateEvening: false,
      earlyMorning: false,
    });
    setShowModal(true);
  };

  const handleCheckboxChange = (timeSlot: string) => {
    setAvailability((prevState) => ({
      ...prevState,
      [timeSlot]: !prevState[timeSlot],
    }));
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!id) return;
  
    const fetchVenueInfo = async () => {
      try {
        const response = await fetch(`/api/venues/${id}`);
        if (response.ok) {
          const data = await response.json();
          setVenueInfo({
            id: data.id,
            name: data.name,
            type: data.type,
            schedule: data.schedule,
          });
  
          
          if (data.schedule === 'EntireDay') {
            setTimeSlots([
              '6:00 AM - 7:00 AM',
              '7:00 AM - 8:00 AM',
              '8:00 AM - 9:00 AM',
              '9:00 AM - 10:00 AM',
              
            ]);
          } else if (data.schedule === 'HalfDay') {
            setTimeSlots([
              '6:00 AM - 12:00 PM', // Morning
              '12:00 PM - 6:00 PM', // Evening
            ]);
          }
          else if (data.schedule === 'SessionTime'){
            setTimeSlots([
              '6:00 AM - 12:00 PM',
              '12.00 PM - 6.00 PM',
              '6.00 PM - 12.00 AM',
              '12.00 AM - 6.00 AM'
            ])
          }
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to fetch venue details');
        }
      } catch (err) {
        console.error('Error fetching venue info:', err);
        setError('An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchVenueInfo();
  }, [id]);
  
  const handlePreviousDay = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(previousDate);
  };
  
  const handleNextDay = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDate);
  };
  
  const handleAmenityChange = (amenity: string) => {
    const currentAmenities = form.getValues("amenities");
    if (currentAmenities.includes(amenity)) {
      form.setValue(
        "amenities",
        currentAmenities.filter((a) => a !== amenity)
      );
    } else {
      form.setValue("amenities", [...currentAmenities, amenity]);
    }
  };
  
  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    // Step 2 implementation: Process the data for "Step 2"
    // Example:
    console.log("Step 2: Processing submitted data...");
  };



  return (
    <div>
    <Header />
    <div className="flex flex-col lg:flex-row justify-between mx-auto mt-10 w-full lg:w-3/4 px-4">
  {/* Calendar Component Card */}
  <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
    {/* Card Container */}
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
            <button
              className="px-4 py-2 bg-[#584822] rounded-md hover:bg-gray-300 text-white"
              onClick={handlePreviousDay}
            >
             Prev
            </button>
            <div className="text-lg font-semibold">
              {currentDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </div>
            <button
              className="px-4 py-2 bg-[#584822] rounded-md hover:bg-gray-300 text-white"
              onClick={handleNextDay}
            >
              
              Next
            </button>
          </div>
          {/* Card Body */}
          <div>
            <CalendarComponent
              venueId={Number(id)}
              onSelectDate={handleSelectDate}
            />
          </div>
          </div>
          
          {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Select Availability</h2>
              <p className="text-gray-700 mb-6">Select availability for {selectedDate?.toLocaleDateString()}</p>

              <div className="mb-4">
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.morning}
                    onChange={() => handleCheckboxChange('morning')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Morning (8AM - 12PM)
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.evening}
                    onChange={() => handleCheckboxChange('evening')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Evening (12PM - 8PM)
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.lateEvening}
                    onChange={() => handleCheckboxChange('lateEvening')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Late Evening (8PM - 12AM)
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={availability.earlyMorning}
                    onChange={() => handleCheckboxChange('earlyMorning')}
                    className="form-checkbox text-blue-500 mr-2"
                  />
                  Early Morning (12AM - 8AM)
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={closeModal}
                >
                  Choose Availability
                </button>
              </div>
            </div>
          </div>
        )}
  
  <div className="flex space-x-5 items-center justify-center">
  <div className="flex items-center space-x-2">
    <div className="w-7 h-6 rounded-full bg-red-500" title="Reserved"></div>
    <span>Reserved</span>
  </div>
  <div className="flex items-center space-x-2">
    <div className="w-7 h-6 rounded-full bg-blue-500" title="Partially Available"></div>
    <span>Partially Available</span>
  </div>
  <div className="flex items-center space-x-2">
    <div className="w-7 h-6 rounded-full bg-green-500" title="Selected Dates"></div>
    <span>Selected Dates</span>
  </div>
  <div className="flex items-center space-x-2">
    <div className="w-7 h-6 rounded-full bg-yellow-500" title="Not Available"></div>
    <span>Not Available</span>
  </div>
</div>

        </div>

        {/* Card Section with Form */}
        <div className="p-4 flex justify-center">
      <Card className="w-[459px] h-[724px] rounded-[30px] font-[poppins]">
        <CardHeader>
        <CardHeader className="flex justify-center">
  <CardTitle className="text-center">Reservation Details</CardTitle>
</CardHeader>

          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Title Input */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[400px] h-[50px] border-[3px] border-[#584822] focus:border-[#584822] focus:ring-0"
                        placeholder="OUSL Meetup"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


                   {/* Purpose Textarea */}
                   <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Purpose of Reservation</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-[400px] h-[50px] border-[3px] border-[#584822] focus:border-[#584822] focus:ring-0"
                        placeholder="Purpose of reservation"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Amenities Dropdown */}
              <FormField
  control={form.control}
  name="amenities"
  render={() => (
    <FormItem>
      <FormLabel>Amenities</FormLabel>
      <FormControl>
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-[400px] h-[50px] border-[3px] border-[#584822] focus:border-[#584822] focus:ring-0 flex items-center justify-between"
          >
            <span>
              {form.getValues("amenities").length > 0
                ? `Selected: ${form.getValues("amenities").join(", ")}`
                : "Select Amenities"}
            </span>
            {/* Dropdown Icon */}
            <div className="relative w-[400px] h-[50px] border-[3px] border-[#584822] focus-within:border-[#584822] focus-within:ring-0 flex items-center justify-between px-3">
  <span className="text-gray-500"></span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
</div>


          </button>

          {isDropdownOpen && (
            <div
              className="absolute mt-2 w-[400px] bg-white border rounded-md shadow-lg"
              ref={dropdownRef} // Attach a ref for outside click detection
            >
              <div className="py-2 max-h-60 overflow-y-auto">
                {amenitiesList.map((amenity) => (
                  <label
                    key={amenity}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={form.getValues("amenities").includes(amenity)}
                      onChange={() => handleAmenityChange(amenity)}
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
           
              {/* Time Schedule Select */}
              <FormField
                control={form.control}
                name="timezone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time Schedule</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="w-[400px] h-[50px] border-[3px] border-[#584822] focus:border-[#584822] focus:ring-0">
                          <SelectValue placeholder="Select a time schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <FormLabel>Session Time</FormLabel>
                            <SelectItem value="6-7">6:00 AM - 7:00 AM</SelectItem>
                        <SelectItem value="7-8">7:00 AM - 8:00 AM</SelectItem>
                        <SelectItem value="8-9">8:00 AM - 9:00 AM</SelectItem>
                        <SelectItem value="9-10">9:00 AM - 10:00 AM</SelectItem>
                        <SelectItem value="10-11">10:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11-12">11:00 AM - 12:00 AM</SelectItem>
                        <SelectItem value="12-13">12:00 AM - 13:00 AM</SelectItem>
                        <SelectItem value="13-14">13:00 AM - 14:00 AM</SelectItem>
                        <SelectItem value="14-15">14:00 AM - 15:00 AM</SelectItem>
                        <SelectItem value="15-16">15:00 AM - 16:00 AM</SelectItem>
                        <SelectItem value="16-17">16:00 AM - 17:00 AM</SelectItem>
                        <SelectItem value="17-18">17:00 AM - 18:00 AM</SelectItem>
                        <SelectItem value="18-19">18:00 AM - 19:00 AM</SelectItem>
                        <SelectItem value="19-20">19:00 AM - 20:00 AM</SelectItem>
                        <SelectItem value="20-21">20:00 AM - 21:00 AM</SelectItem>
                        <SelectItem value="21-22">21:00 AM - 22:00 AM</SelectItem>
                        <SelectItem value="22-23">22:00 AM - 23:00 AM</SelectItem>
                        <SelectItem value="23-24">23:00 AM - 24:00 AM</SelectItem>
                            {/* Add remaining items here */}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="bg-[#584822] text-white hover:bg-[#483a1a]">
                Cancel
              </Button>
              <Button className="bg-[#584822] text-white hover:bg-[#483a1a]">Next</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Availability;
