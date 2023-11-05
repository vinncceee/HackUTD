import React, { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-400 to-green-500 p-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navigation links */}
        <div className="space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-200 transition duration-300 font-rubik"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition duration-300 font-rubik"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition duration-300 font-rubik"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition duration-300 font-rubik"
          >
            Contact
          </a>
        </div>

        {/* Dropdown button */}
        <div className="relative inline-block text-left">
        <button
        onClick={toggleDropdown}
        className="px-4 py-1 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 font-rubik"
        >
        Languages
        {/* Replace the checkmark icon with a drop-down arrow */}
        <svg
        className="-mr-1 ml-1 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
            fillRule="evenodd"
            d="M10 12.586l-4.293-4.293a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 12.586z"
            clipRule="evenodd"
        />
        </svg>
        </button>

          {/* Dropdown content with blue background */}
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-5 w-40 rounded-lg shadow-lg bg-blue-500 ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-600 hover:text-white font-rubik"
                  role="menuitem"
                >
                  English
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-600 hover:text-white font-rubik"
                  role="menuitem"
                >
                  Spanish
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-600 hover:text-white font-rubik"
                  role="menuitem"
                >
                  Hindi
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
