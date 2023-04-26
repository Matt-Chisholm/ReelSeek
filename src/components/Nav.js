import { useState } from "react";
import React from "react";

export default function Nav({ selectedScreen, setSelectedScreen, isDarkMode }) {
  const bgColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  return (
    <div>
      <nav className={`bg-gray-800 ${bgColor}`}>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
                onClick=''>
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0'>
                <h3 className='text-2xl font-bold'>ReelSeek</h3>
              </div>
              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  <a
                    href='#'
                    onClick={() => setSelectedScreen("home")}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${textColor} hover:text-white hover:bg-gray-700 ${
                      selectedScreen === "home"
                        ? "border-t-2 border-b-2 border-teal-500"
                        : ""
                    }`}>
                    Home
                  </a>
                  <a
                    href='#'
                    onClick={() => setSelectedScreen("about")}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${textColor} hover:text-white hover:bg-gray-700 ${
                      selectedScreen === "about"
                        ? "border-t-2 border-b-2 border-teal-500"
                        : ""
                    }`}>
                    About
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:hidden' id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a
              href='#'
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} hover:text-white hover:bg-gray-700`}>
              Home
            </a>
            <a
              href='#'
              className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} hover:text-white hover:bg-gray-700`}>
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
