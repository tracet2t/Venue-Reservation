"use client";

import { useState } from "react";
import Header from "@/app/layouts/Header";
import Footer from "@/app/layouts/Footer";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,

} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export function CardWithForm() {
  return (
    <Card className="bg-white shadow-md rounded-xl p-8 border border-gray-200">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            
            <div className="flex flex-col space-y-5 text-[#584822]">
              <Label htmlFor="framework">Is your event open to the public or private/invitation-only?</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">public</SelectItem>
                  <SelectItem value="sveltekit">private</SelectItem>
                  <SelectItem value="astro">invitation only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-5 text-[#584822]">
              <Label htmlFor="framework">Are you aware of any special permits or approvals required for your event?</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Yes</SelectItem>
                  <SelectItem value="sveltekit">No</SelectItem>
                  
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-5 text-[#584822]">
              <Label htmlFor="framework">Are there any special security or safety requirements for your event?</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  
                  <SelectItem value="astro">Yes</SelectItem>
                  <SelectItem value="nuxt">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-5 text-[#584822]">
              <Label htmlFor="framework">Do you anticipate any media coverage or external guests</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">media coverage</SelectItem>
                  <SelectItem value="sveltekit">external guests</SelectItem>
       
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-5 text-[#584822]">
              <Label htmlFor="framework">Are you aware of the rules and regulations regarding the use of the auditorium</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Yes</SelectItem>
                  <SelectItem value="sveltekit">No</SelectItem>
                 
                </SelectContent>
              </Select>
            </div>
            

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      <Button variant="outline" className="border-[#584822] text-[#584822] hover:bg-[#584822] hover:text-white">
  Discard
</Button>

<Button variant="outline" className="border-[#584822] text-[#584822] hover:bg-[#584822] hover:text-white">Next</Button>
      </CardFooter>
    </Card>
  );
}

const SubmitPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePreviousDay = () => {
    setCurrentDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() - 1)));
  };

  const handleNextDay = () => {
    setCurrentDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() + 1)));
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };

  const messages = {
    date: "Date",
    time: "Time",
    event: "Event",
    allDay: "All Day",
    week: "Week",
    work_week: "Work Week",
    day: "Day",
    month: "Month",
    previous: "Previous",
    next: "Next",
    yesterday: "Yesterday",
    tomorrow: "Tomorrow",
    today: "Today",
    agenda: "Agenda",
    showMore: (total) => `+${total} more`,
  };

  const localizer = momentLocalizer(moment);

  const formats = {
    weekdayFormat: (date, culture, localizer) =>
      localizer.format(date, "dddd", culture), 
  };
  

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row gap-16 mx-auto mt-10 w-full lg:w-3/4 px-4">
      
        {/* Calendar Column */}
        <div className="w-full lg:w-3/4 mb-6 lg:mb-0">
  <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
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

    {/* Calendar Component */}
    <div>
      <div>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          toolbar={false}
          messages={messages}
          formats={formats} 
          
        />
      </div>
    </div>


    {/* Legend Section */}
    <div className="flex space-x-5 items-center justify-center mt-6">
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
</div>
        

        {/* Form Card Column */}
        <div className="w-full lg:w-1/2">
          <CardWithForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitPage;
