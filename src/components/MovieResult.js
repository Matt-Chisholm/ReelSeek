import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MovieResult({
  movie,
  selectedMovieId,
  setSelectedMovieId,
  onSelect,
}) {
  const [streamers, setStreamers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const streamingProviderSearch = (movieId) => {
    setLoading(true);
    setSelectedMovieId(movieId);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.results);
        setLoading(false);
        const providers = response.data.results.CA.buy;
        if (providers.length > 0) {
          setStreamers(providers);
          setError(null);
        } else {
          setStreamers([]);
          setError("No streaming providers found");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("No streaming providers found");
      });
  };

  return (
    <div className='flex flex-col items-center my-4'>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`${movie.title} poster`}
        className='mb-2'
      />
      <h3 className='text-lg font-bold'>{movie.title}</h3>
      <p className='text-sm text-gray-500'>{movie.release_date}</p>
      <button
        className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
        onClick={() => streamingProviderSearch(movie.id)}>
        Find Where to Watch
      </button>
      {loading && (
        <div className='text-center mt-2 text-gray-500'>Loading...</div>
      )}
      {error && <div className='text-center mt-2 text-red-500'>{error}</div>}

      {streamers && streamers.length > 0 && (
        <div className='mt-2'>
          {streamers.map((streamer, index) => (
            <div key={index} className='inline-block mx-1'>
              <img
                src={`https://image.tmdb.org/t/p/w92${streamer.logo_path}`}
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
