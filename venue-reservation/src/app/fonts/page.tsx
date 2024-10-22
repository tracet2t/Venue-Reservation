import React from 'react';

interface FontsPageProps {
  title: string;
}

const FontsPage = ({ title }: FontsPageProps): JSX.Element => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center">
          {/* Logo on the Left */}
          <div className="text-2xl font-bold text-gray-800 flex-grow">
            MyLogo
          </div>

          {/* Buttons on the Right */}
          <nav className="flex space-x-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition duration-200 ease-in-out">
              Login
            </button>
            <button
              style={{ backgroundColor: '#584822' }}
              className="text-white px-4 py-2 rounded hover:bg-[#6A5B3A] transition duration-200 ease-in-out"
            >
              Signup
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">
          This page showcases different fonts.
        </p>

        {/* Home Section Card */}
        <div className="mt-16 max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Our Service</h2>
            <p className="mt-2 text-gray-600">
              Experience the best service tailored just for you. Book your reservation now to enjoy exclusive benefits!
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out">
              Reserve Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FontsPage;
