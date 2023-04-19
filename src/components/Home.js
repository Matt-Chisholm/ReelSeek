import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const bgColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  const handleModeChange = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      <header className={`py-4 ${textColor}`}>
        <div className='container mx-auto flex justify-between items-center px-4'>
          <h1 className='text-xl font-bold'>ReelSeek</h1>
          <nav>
            <ul className='flex items-center'>
              <li>
                <a
                  href='#'
                  className={`py-2 px-3 ${textColor} hover:text-gray-800`}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`py-2 px-3 ${textColor} hover:text-gray-800`}>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className={`py-2 px-3 ${textColor} hover:text-gray-800`}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div
            className='w-6 h-6 rounded-full cursor-pointer'
            onClick={handleModeChange}>
            {isDarkMode ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6v.01M18 10.5l-6-6M6 10.5l6-6M12 18v.01M6 13.5h12'
                />
              </svg>
            )}
          </div>
        </div>
      </header>

      <main className='container mx-auto py-12 px-4'>
        <h2 className='text-4xl font-bold mb-4'>
          Find Where to Stream Your Favorite Movies
        </h2>
        <form className='max-w-md mx-auto'>
          <div className='flex items-center mt-10 border-b border-b-2 border-teal-500 py-2'>
            <input
              className={`appearance-none bg-transparent border-none w-full ${textColor} mr-3 py-1 px-2 leading-tight focus:outline-none`}
              type='text'
              placeholder='Search for a movie'
            />
            <button
              className={`flex-shrink-0 ${
                isDarkMode ? "bg-gray-800" : "bg-teal-500"
              } hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded`}
              type='button'>
              Search
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
