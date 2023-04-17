import React from "react";

export default function Home() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <>
      <header className='bg-white py-4'>
        <div className='container mx-auto flex justify-between items-center px-4'>
          <h1 className='text-xl font-bold text-gray-800'>ReelSeek</h1>
          <nav>
            <ul className='flex items-center'>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-800 py-2 px-3'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-800 py-2 px-3'>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-800 py-2 px-3'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className='container mx-auto py-12 px-4'>
        <h2 className='text-4xl font-bold text-gray-800 mb-4'>
          Find Where to Stream Your Favorite Movies
        </h2>
        <form className='max-w-md mx-auto'>
          <div className='flex items-center border-b border-b-2 border-teal-500 py-2'>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
              type='text'
              placeholder='Search for a movie'
            />
            <button
              className='flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded'
              type='button'>
              Search
            </button>
          </div>
        </form>
      </main>

      <footer className='bg-white py-4'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          &copy; 2023 Movie Streamer. All rights reserved.
        </div>
      </footer>
    </>
  );
}
