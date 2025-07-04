import { useState, useContext } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authContext';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/login', form);
      login(data.token);
      navigate('/movies');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials or user not registered');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{
    backgroundImage: "url('/bg_img.jpg')",
  }} >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-3"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="w-full bg-gray-200 text-blue-600 py-2 rounded hover:bg-gray-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
