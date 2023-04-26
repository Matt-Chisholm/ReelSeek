import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieResult from "./MovieResult";
import Nav from "./Nav";

export default function Home({ selectedScreen, setSelectedScreen }) {
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
          <Nav
            selectedScreen={selectedScreen}
            setSelectedScreen={setSelectedScreen}
            isDarkMode={isDarkMode}
          />
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
