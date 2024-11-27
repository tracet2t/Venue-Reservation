'use client'; // Ensures this component is a Client Component

import React, { useState, useEffect } from 'react';
import CancelReservationModal from './CancelReservationModal'; // Import the CancelReservationModal component
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa'; // Importing icons for better visuals

interface ReservationCardProps {
    eventName: string;
    startDate: string;
    endDate: string;
    timeMode: string;
    totalDuration: string;
    extraServices: string[];
    purposeOfReservation: string;
    status: string;
    customerName: string;
    customerEmail: string;
    customerContactNumber: string;
    venueType: string; // Add venueType to props
}

const MyReservationCard: React.FC<ReservationCardProps> = ({
                                                               eventName,
                                                               startDate,
                                                               endDate,
                                                               timeMode,
                                                               totalDuration,
                                                               extraServices,
                                                               purposeOfReservation,
                                                               status,
                                                               customerName,
                                                               customerEmail,
                                                               customerContactNumber,
                                                               venueType, // Destructure venueType from props
                                                           }) => {
    const [reservationStatus, setReservationStatus] = useState(status);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isCancelled, setIsCancelled] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false); // New state for card removal

    // Update status to Done if the end date has passed
    useEffect(() => {
        const checkStatus = () => {
            const currentDate = new Date();
            const reservationEndDate = new Date(endDate);

            if (currentDate > reservationEndDate && reservationStatus !== 'Canceled' && reservationStatus !== 'Done') {
                setReservationStatus('Done');
            }
        };

        checkStatus();
        const intervalId = setInterval(checkStatus, 60000); // Check every minute for updates

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [endDate, reservationStatus]);

    // Handle cancel reservation logic and show the confirmation modal
    const handleCancelReservation = () => {
        setShowConfirmModal(true);
    };

    // Handle modal confirmation (Yes)
    const handleConfirmCancellation = () => {
        setReservationStatus('Canceled');
        setIsCancelled(true);
        setShowConfirmModal(false);
        setIsRemoved(true); // Set to true when canceled
        alert('Your reservation has been canceled.');
    };

    // Handle modal closing (No)
    const handleCancelModal = () => {
        setShowConfirmModal(false); // Close the modal without canceling
    };

    // Date formatting
    const formattedStartDate = new Date(startDate).toLocaleString();
    const formattedEndDate = new Date(endDate).toLocaleString();

    // Conditional class for status box styling
    const statusBoxClass = reservationStatus === 'Canceled'
        ? 'bg-red-200 text-red-800'
        : reservationStatus === 'Accepted'
            ? 'bg-green-200 text-green-800'
            : reservationStatus === 'Pending'
                ? 'bg-yellow-200 text-yellow-800'
                : reservationStatus === 'Done'
                    ? 'bg-blue-200 text-blue-800' // New class for Done status
                    : reservationStatus === 'Rejected' // Add case for rejected status
                        ? 'bg-red-200 text-red-800' // Red background for rejected
                        : 'bg-gray-200 text-gray-800';

    // Ensure extraServices is always an array
    const safeExtraServices = Array.isArray(extraServices) ? extraServices : [];

    // Check if the reservation is accepted (formerly confirmed)
    const isAccepted = reservationStatus === 'Accepted';
    const isRejected = reservationStatus === 'Rejected'; // Check if the reservation is rejected

    // If the card is removed, return null
    if (isRemoved) {
        return null; // Card is removed from UI
    }

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out transform hover:scale-102 hover:shadow-lg">
            {/* Header Section */}
            <div className="bg-[#6A5B3A] text-white p-6 rounded-t-lg">
                {/* Venue Type */}
                <div className="text-center text-2xl font-bold text-yellow-200">
                    {venueType} {/* Display the venue type */}
                </div>
                <h2 className="text-xl font-semibold text-center mt-2">{eventName}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Left Column (Event Details) */}
                <div className="space-y-6">
                    {/* Start Date */}
                    <div className="flex justify-between items-center text-gray-800">
                        <FaCalendarAlt className="text-blue-500 mr-4 text-xl" />
                        <div className="flex-1 text-right">
                            <span className="font-semibold text-gray-600">Start:</span>
                            <span className="text-gray-800 ml-2">{formattedStartDate}</span>
                        </div>
                    </div>

                    {/* End Date */}
                    <div className="flex justify-between items-center text-gray-800">
                        <FaCalendarAlt className="text-blue-500 mr-4 text-xl" />
                        <div className="flex-1 text-right">
                            <span className="font-semibold text-gray-600">End:</span>
                            <span className="text-gray-800 ml-2">{formattedEndDate}</span>
                        </div>
                    </div>

                    {/* Time Mode */}
                    <div className="flex justify-between items-center text-gray-800">
                        <span className="font-semibold text-gray-600">Time Mode:</span>
                        <span className="text-gray-800 ml-2">{timeMode}</span>
                    </div>

                    {/* Total Duration */}
                    <div className="flex justify-between items-center text-gray-800">
                        <span className="font-semibold text-gray-600">Total Duration:</span>
                        <span className="text-gray-800 ml-2">{totalDuration} hours</span>
                    </div>

                    {/* Extra Services */}
                    <div className="flex justify-between items-center text-gray-800">
                        <span className="font-semibold text-gray-600">Extra Services:</span>
                        <span className="text-gray-800 ml-2">
                            {safeExtraServices.length > 0
                                ? safeExtraServices.join(', ')
                                : 'No extra services available'}
                        </span>
                    </div>

                    {/* Status - Highlighted Message */}
                    <div className={`flex justify-between items-center p-2 rounded-lg ${statusBoxClass}`}>
                        <span className="font-semibold">Status:</span>
                        <span className="font-bold">{reservationStatus}</span>
                    </div>

                    {/* Purpose of Reservation */}
                    <div className="flex justify-between items-center text-gray-800">
                        <span className="font-semibold text-gray-600">Purpose of Reservation:</span>
                        <span className="text-gray-800 ml-2">{purposeOfReservation}</span>
                    </div>
                </div>

                {/* Right Column (Customer Details) */}
                <div className="space-y-6">
                    {/* Customer Name */}
                    <div className="flex justify-between items-center text-gray-800">
                        <FaUser className="text-blue-500 mr-4 text-xl" />
                        <div className="flex-1 text-right">
                            <span className="font-semibold text-gray-600">Customer Name:</span>
                            <span className="text-gray-800 ml-2">{customerName}</span>
                        </div>
                    </div>

                    {/* Customer Email */}
                    <div className="flex justify-between items-center text-gray-800">
                        <FaEnvelope className="text-purple-500 mr-4 text-xl" />
                        <div className="flex-1 text-right">
                            <span className="font-semibold text-gray-600">Customer Email:</span>
                            <span className="text-gray-800 ml-2">{customerEmail}</span>
                        </div>
                    </div>

                    {/* Customer Contact */}
                    <div className="flex justify-between items-center text-gray-800">
                        <FaPhoneAlt className="text-orange-500 mr-4 text-xl" />
                        <div className="flex-1 text-right">
                            <span className="font-semibold text-gray-600">Customer Contact:</span>
                            <span className="text-gray-800 ml-2">{customerContactNumber}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cancel Button */}
            <div className="flex justify-end mt-6">
                {reservationStatus === 'Done' || reservationStatus === 'Canceled' || isRejected ? (
                    <button
                        disabled
                        className="py-2 px-8 bg-gray-400 text-white font-semibold rounded-lg cursor-not-allowed"
                    >
                        Reservation cannot be canceled
                    </button>
                ) : isAccepted ? (
                    <button
                        disabled
                        className="py-2 px-8 bg-gray-400 text-white font-semibold rounded-lg cursor-not-allowed"
                    >
                        Reservation Accepted - Cannot Cancel
                    </button>
                ) : (
                    <button
                        onClick={handleCancelReservation}
                        className="py-2 px-8 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 ease-in-out flex items-center"
                    >
                        <FaExclamationTriangle className="mr-3" />
                        Cancel Reservation
                    </button>
                )}
            </div>

            {/* Cancel Reservation Modal */}
            <CancelReservationModal
                showModal={showConfirmModal}
                onCancel={handleCancelModal}
                onConfirm={handleConfirmCancellation}
            />

            {/* Confirmation Message for Accepted Reservation */}
            {isAccepted && (
                <div className="text-center mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Reservation Confirmed!</h3>
                    <p className="mt-2">
                        We are excited to inform you that your auditorium reservation has been successfully confirmed!
                    </p>
                    <p className="mt-2">
                        We're looking forward to hosting your event and providing you with an exceptional experience.
                    </p>
                    <p className="mt-2">
                        If you have any additional requests or require further assistance leading up to your event, please don't hesitate to contact us. Thank you for choosing our venue, and we can't wait to welcome you!
                    </p>
                </div>
            )}

            {/* Unsuccessful Reservation Message */}
            {isRejected && (
                <div className="text-center mt-6 p-4 bg-red-100 text-red-800 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">Reservation Unsuccessful!</h3>
                    <p className="mt-2">
                        We regret to inform you that your auditorium reservation could not be confirmed due to unavailability or other circumstances.
                    </p>
                    <p className="mt-2">
                        We understand this may be disappointing and apologize for any inconvenience caused. If you would like assistance in finding an alternative date or venue, please don't hesitate to contact us, and we will do our best to accommodate your needs.
                    </p>
                    <p className="mt-2">
                        Thank you for considering our venue, and we hope to assist you in the future.
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyReservationCard;
