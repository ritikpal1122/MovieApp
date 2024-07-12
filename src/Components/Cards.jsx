import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="inline-block relative border-2 border-gray-400 overflow-hidden rounded-lg m-1 cursor-pointer min-w-[200px] h-[300px]">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton className="min-w-[200px] h-[300px]" duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`} className="text-white underline-none">
          <div className="inline-block m-0 relative border-2 border-gray-400 overflow-hidden rounded-lg m-2 cursor-pointer min-w-[180px] h-[260px] transform transition-transform duration-300 hover:scale-105 shadow-md">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full h-[260px] object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-end px-4 py-2 bg-gradient-to-t from-transparent to-black opacity-0 transition-opacity duration-200 hover:opacity-100 rounded-b-lg">
              <div className="font-bold text-white text-lg mb-1">
                {movie.original_title}
              </div>
              <div className="text-white text-sm">
                Released: {movie.release_date}
                <span className="ml-2">Rating: {movie.vote_average}</span>
              </div>
              <div className="text-white text-sm italic mt-1">
                {movie.overview.slice(0, 118)}...
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;
