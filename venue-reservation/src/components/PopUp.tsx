import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-[#6A5B3A] text-white px-4 py-2 rounded-lg hover:bg-[#584822] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;