import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieResult from "./MovieResult";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [movieName, setMovieName] = useState("");
  const [streamers, setStreamers] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null); // [1
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const bgColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  const handleModeChange = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const handleMovieSearch = (searchTerm) => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`
      )
      .then((response) => {
        console.log(response.data.results);
        setLoading(false);
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error);
      });
  };

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      <header className={`py-4 ${textColor}`}>
        <div className='container mx-auto flex justify-between items-center px-4'>
          <nav className={`bg-gray-800 ${bgColor}`}>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    aria-controls='mobile-menu'
                    aria-expanded='false'
                    onClick={handleModeChange}>
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
                        className={`px-3 py-2 rounded-md text-sm font-medium ${textColor} hover:text-white hover:bg-gray-700`}>
                        Home
                      </a>
                      <a
                        href='#'
                        className={`px-3 py-2 rounded-md text-sm font-medium ${textColor} hover:text-white hover:bg-gray-700`}>
                        About
                      </a>
                      <a
                        href='#'
                        className={`px-3 py-2 rounded-md text-sm font-medium ${textColor} hover:text-white hover:bg-gray-700`}>
                        Contact
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
                <a
                  href='#'
                  className={`block px-3 py-2 rounded-md text-base font-medium ${textColor} hover:text-white hover:bg-gray-700`}>
                  Contact
                </a>
              </div>
            </div>
          </nav>
          <div
            className='w-6 h-6 rounded-full cursor-pointer'
            onClick={handleModeChange}>
            {isDarkMode ? (
              <span className='text-gray-600 hover:text-white cursor-pointer'>
                Light mode
              </span>
            ) : (
              <span className='text-gray-400 hover:text-gray-800 cursor-pointer'>
                Dark mode
              </span>
            )}
          </div>
        </div>
      </header>

      <main className='container mx-auto py-12 px-4'>
        <h2 className='text-4xl font-bold mb-4'>
          Search for your favorite movies
        </h2>
        <form
          className='max-w-md mx-auto'
          onSubmit={(e) => {
            e.preventDefault();
            handleMovieSearch(movieName);
          }}>
          <div className='flex items-center mt-10 border-b border-b-2 border-teal-500 py-2'>
            <input
              className={`appearance-none bg-transparent border-none w-full ${textColor} mr-3 py-1 px-2 leading-tight focus:outline-none`}
              type='text'
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              placeholder='Search for a movie'
            />
            <button
              className={`flex-shrink-0 ${
                isDarkMode ? "bg-gray-800" : "bg-teal-500"
              } hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded`}
              onClick={() => handleMovieSearch(movieName)}
              type='button'>
              Search
            </button>
          </div>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10'>
          {results.map((movie) => (
            <MovieResult
              key={movie.id}
              movie={movie}
              setSelectedMovieId={setSelectedMovieId}
              selectedMovieId={selectedMovieId}
              onSelect={(movieId) => {
                setSelectedMovieId(movieId);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
