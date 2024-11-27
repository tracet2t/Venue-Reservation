import React from "react";
import router from "next/router"; 
import { GetServerSideProps } from "next";
interface ReservationConfirmationProps {
  reservationId: string;
  email: string;
}

const ReservationConfirmation: React.FC<ReservationConfirmationProps> = ({ reservationId, email }) => {

  return (
    <div className="flex flex-col items-center justify-center mb-4  p-8">
      <h1 className="text-3xl font-bold text-[#584822] mb-4">
        Reservation Confirmation
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 w-[140%] sm:w-[80%] lg:w-[70%] xl:w-[50%] text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Reservation ID: {reservationId}
        </h2>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Email: {email}
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
            onClick={() => router.back()}
          >
            Back
          </button>
          <button
            className="bg-[#584822] text-white px-6 py-2 rounded-lg hover:bg-[#4b3a1d]"
            onClick={() => router.push("/")}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const cookies = context.req.headers.cookie || "";
  
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/reservations_confirmation/${id}`,
      {
        method: "GET",
        headers: {
          Cookie: cookies, 
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reservation details");
    }

    const data = await response.json();

    return {
      props: {
        reservationId: data.reservationId || "",
        email: data.email || "",
      },
    };
  } catch (error) {
    console.error("Error fetching reservation details:", error);

    return {
      props: {
        reservationId: "",
        email: "",
      },
    };
  }
};

export default ReservationConfirmation;
