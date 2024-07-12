import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../API/MovieApi';
import Cards from './Cards';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchMovie = () => {
  const query = useQuery().get('query');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        setLoading(true);
        try {
          const results = await searchMovies(query);
          setMovies(results);
        } catch (error) {
          console.error('Error searching movies:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [query]);

  return (
    <div className="px-2 md:px-8 lg:px-16 xl:px-32 py-10 bg-gradient-to-b from-black via-gray-900 to-black bg-opacity-90">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-white">
        Search Results for "{query}"
      </h2>
      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMovie;
