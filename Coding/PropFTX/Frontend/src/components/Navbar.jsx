import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../authContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div className="flex space-x-6">
        <Link to="/movies" className="hover:text-yellow-400 transition-colors duration-200 font-semibold">
          Movies
        </Link>
        <Link to="/watchlist" className="hover:text-yellow-400 transition-colors duration-200 font-semibold">
          Watchlist
        </Link>
      </div>

      {user ? (
        <button
          onClick={handleLogout}
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300 transition-colors duration-200 font-semibold"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300 transition-colors duration-200 font-semibold"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
