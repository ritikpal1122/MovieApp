import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Components/Card";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
            .catch(error => console.error("Error fetching movies:", error));
    };

    return (
        <div className="px-2 md:px-8 lg:px-16 xl:px-32 py-10 bg-gradient-to-b from-black via-gray-900 to-black bg-opacity-90">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-white">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-1">
                {movieList.map(movie => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
