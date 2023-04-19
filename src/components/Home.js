import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [movieName, setMovieName] = useState("");
  const [streamers, setStreamers] = useState({});
  const [results, setResults] = useState([]);

  const bgColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  const handleModeChange = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const handleMovieSearch = (searchTerm) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`
      )
      .then((response) => {
        console.log(response.data.results);
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const streamingProviderSearch = (movieId) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.results);
        setStreamers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
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
          Find Where to Stream Your Favorite Movies
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
        <div className='flex flex-col items-center mt-10'>
          {results.slice(0, 5).map((result) =>
            result.poster_path === null ? (
              <div key={result.id}></div>
            ) : (
              <div key={result.id} className='flex items-center mb-4'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  alt={result.title}
                  className='w-32 h-auto mr-4'
                />
                <div className='flex flex-col'>
                  <h3 className='text-2xl font-bold'>{result.title}</h3>
                  <div className='flex items-center'>
                    <p className='text-gray-500 text-sm mr-2'>
                      {result.release_date.substring(0, 4)}
                    </p>
                    <p
                      className={`text-sm font-bold ${
                        result.vote_average >= 7.5
                          ? "text-green-500"
                          : result.vote_average >= 5
                          ? "text-yellow-500"
                          : "text-red-500"
                      } mr-2`}>
                      {result.vote_average.toFixed(1)} /10
                    </p>
                  </div>

                  <p className='text-gray-600 text-sm mt-2'>
                    {result.overview}
                  </p>
                  <div className='flex items-center justify-center mt-8'>
                    <button
                      className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2'
                      onClick={() => streamingProviderSearch(result.id)}>
                      Find Streaming Providers
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
}
