import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import '@/app/globals.css'; 

const ReservationForm = () => {
  const methods = useForm(); 
  const { handleSubmit, formState: { errors } } = methods;

  const [isAmenitiesDropdownOpen, setIsAmenitiesDropdownOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

 
  const toggleDropdown = (dropdown, event) => {
    event.preventDefault(); 
    if (dropdown === 'amenities') {
      setIsAmenitiesDropdownOpen((prevState) => !prevState);
    }
  };

  const onSubmit = (data) => {
    console.log({ ...data, selectedAmenities }); 
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg flex justify-center">
      <Card className="w-[800px] rounded-[30px]">
        <CardHeader className="flex justify-center">
          <CardTitle className="text-center text-xxl font-semibold">Reservation Form</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-10 mt-10 h-[600px] overflow-y-auto">
            {/* Wrap the form with FormProvider */}
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Title Field */}
                <FormField
                  control={methods.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          id="title"
                          type="text"
                          className="w-[600px] h-[50px] border-[3px] border-[#584822] focus:ring-0"
                          placeholder="OUSL Meetup"
                          {...field}
                        />
                      </FormControl>
                      {errors.title && <FormMessage>{errors.title.message}</FormMessage>}
                    </FormItem>
                  )}
                />

                {/* Purpose Field */}
                <FormField
                  control={methods.control}
                  name="purpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purpose of Reservation</FormLabel>
                      <FormControl>
                        <Textarea
                          className="w-[600px] h-[100px] border-[3px] border-[#584822] focus:ring-0"
                          placeholder="Purpose of reservation"
                          {...field}
                        />
                      </FormControl>
                      {errors.purpose && <FormMessage>{errors.purpose.message}</FormMessage>}
                    </FormItem>
                  )}
                />

                {/* Amenities Dropdown */}
                <FormItem>
                  <FormLabel>Amenities</FormLabel>
                  <div className="relative w-full z-20">
                    <button
                      onClick={(e) => toggleDropdown('amenities', e)}
                      className="flex items-center justify-between px-4 py-4 border-[3px] border-[#584822] rounded-lg w-[600px] bg-white focus:outline-none"
                    >
                      <span className="text-[#584822]">Select Amenities</span>
                    </button>

                    {isAmenitiesDropdownOpen && (
                      <div className="absolute mt-2 w-[600px] bg-white border-[3px] border-[#584822] rounded-lg shadow-lg p-2">
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
                </FormItem>

                {/* Time Schedule Dropdown */}
                <FormField
                  control={methods.control}
                  name="timeSchedule"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time Schedule</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-[600px] h-[50px] border-[3px] border-[#584822] focus:ring-0">
                            <SelectValue placeholder="Select a time schedule" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="7-8">7:00 AM - 8:00 AM</SelectItem>
                              <SelectItem value="8-9">8:00 AM - 9:00 AM</SelectItem>
                              <SelectItem value="9-10">9:00 AM - 10:00 AM</SelectItem>
                              <SelectItem value="10-11">10:00 AM - 11:00 AM</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      {errors.timeSchedule && <FormMessage>{errors.timeSchedule.message}</FormMessage>}
                    </FormItem>
                  )}
                />

                {/* Event Type Question */}
                <FormField
                  control={methods.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Is your event open to the public or private/invitation-only?</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-[600px] h-[50px] border-[3px] border-[#584822] focus:ring-0">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                            <SelectItem value="invitation-only">Invitation Only</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Permits Question */}
                <FormField
                  control={methods.control}
                  name="specialPermits"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are you aware of any special permits or approvals required for your event?</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-[600px] h-[50px] border-[3px] border-[#584822] focus:ring-0">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Security or Safety Requirements Question */}
                <FormField
                  control={methods.control}
                  name="specialSecurity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Are there any special security or safety requirements for your event?</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-[600px] h-[50px] border-[3px] border-[#584822] focus:ring-0">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

<FormField
                  control={methods.control}
                  name="specialSecurity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Do you anticipate any media coverage or external guests</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-[600px] h-[50px] border-[3px] border-[#584822] focus:ring-0">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
               
                <FormField
                  control={methods.control}
                  name="specialSecurity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Are you aware of the rules and regulations regarding the use of the auditorium</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="w-[600px] h-[50px] border-[3px] border-[#584822] focus:ring-0">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
{/* Fixed Buttons at the Bottom */}
<CardFooter className="sticky bottom-0 bg-white z-10 p-6">
  <div className="flex justify-between mt-2 space-x-12"> 
    <Button
      variant="outline"
      className="w-[250px] h-[50px] bg-[#EBEBEB] text-[#584822] border-[3px] border-[#584822]"
    >
      Cancel
    </Button>
    <Button
      type="submit"
      form="reservationForm"
      className="w-[250px] h-[50px] bg-[#584822] text-white border-[3px] border-[#584822]"
    >
      Submit Reservation
    </Button>
  </div>
</CardFooter>

            
               
              </form>
            </FormProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReservationForm;
