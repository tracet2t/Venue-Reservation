// components/CancelReservationModal.tsx

import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Importing a warning icon

interface CancelReservationModalProps {
    showModal: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

const CancelReservationModal: React.FC<CancelReservationModalProps> = ({ showModal, onCancel, onConfirm }) => {
    if (!showModal) return null; // If the modal isn't shown, return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 transition-opacity duration-300 ease-in-out z-50">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full space-y-6 transform scale-100 transition-transform duration-300 ease-in-out">
                <div className="flex justify-center mb-6">
                    {/* Warning Icon */}
                    <FaExclamationTriangle className="text-yellow-500 text-5xl" />
                </div>
                <h3 className="text-2xl font-semibold text-center text-gray-800">
                    Are You Sure You Want to Cancel Your Reservation?
                </h3>
                <p className="text-gray-700 text-center text-lg">
                    Your reservation has been confirmed, and we're ready to host your event. If you cancel now, your booking will be released, and you may lose your reserved time slot. Do you still want to proceed with the cancellation?
                </p>
                <div className="flex justify-center space-x-6 mt-6">
                    {/* Confirm Button */}
                    <button
                        onClick={onConfirm}
                        aria-label="Confirm Cancellation"
                        className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-500 focus:outline-none transition-all ease-in-out duration-200 transform hover:scale-105"
                    >
                        Yes, Cancel
                    </button>
                    {/* Cancel Button */}
                    <button
                        onClick={onCancel}
                        aria-label="Cancel Modal"
                        className="px-8 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 focus:outline-none transition-all ease-in-out duration-200 transform hover:scale-105"
                    >
                        No, Keep It
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CancelReservationModal;
