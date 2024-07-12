
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { getUpcomingMovies } from "../API/MovieApi";

const UpcomingMovies = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUpcomingMovies();
                setMovieList(data);
            } catch (error) {
                console.error('Error fetching upcoming movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="px-2 md:px-8 lg:px-16 xl:px-32 py-10 bg-gradient-to-b from-black via-gray-900 to-black bg-opacity-90">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-white">UPCOMING</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-1">
                {movieList.map(movie => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingMovies;
