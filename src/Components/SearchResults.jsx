// SearchResults.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=c800c930b3f4ee9adb4590c3d967c485&language=en-US&query=${query}`)
        .then(res => res.json())
        .then(data => setSearchResults(data.results))
        .catch(error => console.error('Error fetching search results:', error));
    }
  }, [query]);

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-10 bg-gradient-to-b from-black via-gray-900 to-black bg-opacity-90">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-white">
        Search Results for "{query}"
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {searchResults.map(movie => (
          <div key={movie.id} className="card bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{movie.original_title}</h3>
              <p className="text-gray-300">{truncateText(movie.overview, 15)}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-yellow-400 font-bold">{movie.vote_average.toFixed(1)}</span>
                <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">View More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
