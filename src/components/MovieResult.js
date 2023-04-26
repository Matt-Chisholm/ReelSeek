import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MovieResult({
  movie,
  streamingProviderSearch,
  selectedMovieId,
  onSelect,
}) {
  const [streamers, setStreamers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movie.id === selectedMovieId) {
      streamingProviderSearch(movie.id);
    }
  }, [movie.id, selectedMovieId, streamingProviderSearch]);

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
        onClick={() => onSelect(movie.id)}>
        Stream Now
      </button>
      {loading && (
        <div className='text-center mt-2 text-gray-500'>Loading...</div>
      )}
      {error && <div className='text-red-500 mt-2'>{error}</div>}
      {streamers.length > 0 && (
        <div className='mt-2'>
          Available on:{" "}
          {streamers.map((streamer, index) => (
            <span key={streamer.provider_id}>
              {streamer.provider_name}
              {index < streamers.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
