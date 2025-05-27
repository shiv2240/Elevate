import { useEffect, useState } from 'react';
import api from '../api';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get('/movies').then((res) => setMovies(res.data));
    }, []);

    const addToWatchlist = async (id) => {
        await api.post(`/movies/${id}/watch`);
        alert('Added to watchlist');
    };

    return (
        <div className="p-6 bg-gradient-to-r from-black to-gray-700  w-full min-h-screen">
            <h2 className="text-4xl text-white font-semibold mb-6 text-center">All Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {movies.map((movie) => (
                    <div
                        key={movie._id}
                        className="bg-transparent border text-white m-20 pb-10 p-5 rounded-lg overflow-hidden flex flex-col "
                    >
                        <img
                            src={movie.poster}
                            alt={movie.movie_title}
                            className="w-full h-full block object-cover object-center relative z-0"
                        />
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <h3 className="text-xl text-white font-semibold mb-1">{movie.movie_title}</h3>
                            <p className="text-sm text-white mb-2">
                                <strong>Genre:</strong> {movie.genre}
                            </p>
                            <p className="text-sm mb-1">
                                <strong>Language:</strong> {movie.language}
                            </p>
                            <p className="text-sm  mb-1">
                                <strong>Duration:</strong> {movie.duration} min
                            </p>
                            <p className="text-sm mb-1">
                                <strong>Rating:</strong> ⭐ {movie.rating}
                            </p>
                            <p className="text-sm  mb-1">
                                <strong>Release Date:</strong> {movie.release_date}
                            </p>
                            <p className="text-sm  my-2 line-clamp-3">
                                <strong>Synopsis:</strong> {movie.synopsis}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <a
                                    href={movie.trailer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                >
                                    Watch Trailer
                                </a>
                                <button
                                    onClick={() => addToWatchlist(movie._id)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                                >
                                    Add to Watchlist
                                </button>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;
