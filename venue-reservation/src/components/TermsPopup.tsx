import { useState } from "react";

const TermsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="text-[#584822]"
      >
        Terms of Use
      </a>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">Terms and Conditions & Privacy and Policies</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
          <p className="text-gray-600 mb-4">
            These Terms of Use are a binding agreement between you and Trace Expert City. for accessing 
            T2T Reservation Management.com and related services. By using the Platform, you agree to comply. If you do 
            not accept these terms, you are prohibited from using the Platform and must stop immediately.
          </p>
          <h4 className="text-md font-semibold text-gray-700">USER RESPONSIBILITIES</h4>
          <ul className="list-decimal pl-5 text-gray-600 mb-4">
            <li>Provide truthful, precise, up-to-date, and complete information.</li>
            <li>Ensure correctness of information and update it as needed.</li>
            <li>Possess the legal authority to abide by these Terms of Use.</li>
            <li>Be of legal age in your place of residence.</li>
            <li>No engagement with automated systems like bots or scripts.</li>
          </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsPopup;
