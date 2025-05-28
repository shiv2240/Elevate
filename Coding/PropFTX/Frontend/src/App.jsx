import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Watchlist from './pages/Watchlist';
import Navbar from './components/Navbar';
import { AuthContext } from './authContext';
import SignUp from './pages/SignUp';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={user ? <Movies /> : <Navigate to="/login" />} />
        <Route path="/watchlist" element={user ? <Watchlist /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={user ? '/movies' : '/login'} />} />
      </Routes>
    </Router>
  );
};

export default App;
