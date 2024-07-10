import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from '../API/MovieApi';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Moviedetailpage = () => {
    const [currentMovieDetail, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMovieDetails(id);
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchData();
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="relative bg-gray-900 text-white">
            <div 
                className="h-[50vh] md:h-[70vh] overflow-hidden relative bg-cover bg-center"
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                                <img
                                    className="w-32 md:w-72 rounded-lg shadow-lg"
                                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
                                    alt="movie poster"
                                />
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-8">
                     <div className="flex-grow ">
                                <div className="mb-4">
                                    <h1 className="text-3xl md:text-5xl font-bold mb-2">{currentMovieDetail ? currentMovieDetail.original_title : ""}</h1>
                                    <p className="text-lg italic mb-2">{currentMovieDetail ? currentMovieDetail.tagline : ""}</p>
                                    <div className="flex items-center mb-2">
                                        <span className="mr-2 text-yellow-400 text-xl">{currentMovieDetail ? currentMovieDetail.vote_average : ""}</span>
                                        <i className="fas fa-star text-yellow-400"></i>
                                        <span className="ml-2">({currentMovieDetail ? currentMovieDetail.vote_count : ""} votes)</span>
                                    </div>
                                    <div className="text-sm text-gray-400 mb-2">{currentMovieDetail ? `${currentMovieDetail.runtime} mins` : ""}</div>
                                    <div className="text-sm text-gray-400 mb-4">{currentMovieDetail ? `Release date: ${currentMovieDetail.release_date}` : ""}</div>
                                    <div className="flex flex-wrap mb-4">
                                        {currentMovieDetail && currentMovieDetail.genres ? (
                                            currentMovieDetail.genres.map(genre => (
                                                <span key={genre.id} className="border-2 border-white rounded-full px-2 py-1 mr-2 mb-2 text-sm">
                                                    {genre.name}
                                                </span>
                                            ))
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-2">Synopsis</h2>
                                    <p className="text-gray-300">{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
                                </div>
                            </div>
                <div className="flex flex-col md:flex-row justify-between mb-8">
                   
                    <div className="flex-col space-x-4 mt-4 ">
                        <h2 className="text-2xl font-bold">Useful Links</h2>
                        {currentMovieDetail && currentMovieDetail.homepage && (
                            <a href={currentMovieDetail.homepage} target="_blank" rel="noopener noreferrer">
                                <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
                                    Homepage<FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                                </button>
                            </a>
                        )}
                        {currentMovieDetail && currentMovieDetail.imdb_id && (
                            <a href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`} target="_blank" rel="noopener noreferrer">
                                <button className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg flex items-center">
                                    IMDb<FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                                </button>
                            </a>
                        )}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Production Companies</h2>
                    <div className="flex flex-wrap justify-center">
                        {currentMovieDetail && currentMovieDetail.production_companies ? (
                            currentMovieDetail.production_companies.map(company => (
                                company.logo_path && (
                                    <div key={company.id} className="flex flex-col items-center m-4">
                                        <img
                                            className="w-24 md:w-32 mb-2"
                                            src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                                            alt={company.name}
                                        />
                                        <span className="text-center text-sm md:text-base">{company.name}</span>
                                    </div>
                                )
                            ))
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Moviedetailpage;
