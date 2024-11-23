import React from "react";

const ReservationConfirmation: React.FC = () => {
  const reservationId = 123;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Title (Outside Container) */}
      <h1 className="text-3xl font-bold text-[#584822] mb-4">
        Reservation Confirmation
      </h1>

      {/* White Container for Other Content */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-[140%] sm:w-[80%] lg:w-[70%] xl:w-[50%] text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Reservation ID: {reservationId}
        </h2>
        <p className="text-base text-gray-600 mb-2">
          Your reservation is now being processed and you will receive
          notification.
        </p>
        <p className="text-base text-gray-600 mb-4">
          If you have any additional requests or require further assistance
          leading up to your event, please don’t hesitate to contact us.
        </p>
        <p className="text-base font-medium text-gray-700 mb-6">
          Thank you for choosing our venue!
        </p>
        {/* Buttons */}
        <div className="flex justify-between">
          <button
            className="border border-gray-400 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200"
            onClick={() => console.log("Back clicked")}
          >
            Back
          </button>
          <button
            className="bg-[#584822] text-white px-6 py-2 rounded-lg hover:bg-[#4b3a1d]"
            onClick={() => console.log("Done clicked")}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmation;
