// src/components/SearchResults.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchMovies } from '../API/MovieApi';
import Cards from './Card';

const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching movies:', error);
      setSearchResults([]);
    }
  };

  return (
    <div className="px-2 md:px-8 lg:px-16 xl:px-32 py-10 bg-gradient-to-b from-black via-gray-900 to-black bg-opacity-90">
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="py-1 pl-3 pr-8 border-2 border-red-600 rounded-full w-full focus:outline-none focus:border-red-600 transition duration-300 ease-in-out"
        />
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-1">
        {searchResults.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
