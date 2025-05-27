import { useEffect, useState } from 'react';
import api from '../api';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = () => {
    api.get('/movies/watchlist/me')
      .then((res) => {
        setWatchlist(res.data);
        console.log('Fetched watchlist:', res.data);
      })
      .catch((err) => console.error('Failed to fetch watchlist:', err));
  };

  const handleDelete = async (movieId) => {
    try {
      console.log('Deleting movieId:', movieId);
      await api.delete(`/movies/${movieId}/watch`);
      alert('Movie removed from watchlist');
      fetchWatchlist(); 
    } catch (error) {
      console.error('Failed to delete movie:', error);
      alert(error.response?.data?.message || 'Could not remove movie from watchlist');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Watchlist</h2>

      {watchlist.length === 0 ? (
        <p className="text-gray-600">Your watchlist is empty. Add some movies!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {watchlist.map((movie) => (
            <div
              key={movie._id} 
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <img
                src={movie.poster}
                alt={movie.movie_title}
                className="w-full h-64 object-contain p-2"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{movie.movie_title}</h3>
                  <p className="text-sm text-gray-600">{movie.genre}</p>
                  <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
                  <p className="text-sm text-gray-500 mt-2">{movie.synopsis?.slice(0, 100)}...</p>
                </div>
                <button
                  onClick={() => handleDelete(movie._id)} 
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
