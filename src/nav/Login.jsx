import React, { useState } from 'react';
import bgImg from '../assets/bg-01.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="max-w-md mx-auto p-20 bg-white rounded-md">
        <h2 className="text-5xl font-semibold mb-14 text-center">Login</h2>

        <div className="mb-4 relative">
          <div className="flex items-center">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border-none focus:outline-none text-black placeholder-gray-500 focus:placeholder-gray-300"
            placeholder="Your email"
          />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500"></div>
        </div>


        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border-none focus:outline-none text-black placeholder-gray-500 focus:placeholder-gray-300"
              placeholder="Your password"
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500"></div>
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-2 py-1"
              onClick={handleTogglePassword}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <Link to="/forgot-password" className="text-sm text-blue-500">
            Forgot Password?
          </Link>
        </div>
        <button onClick={handleLogin} className=" bg-gradient-to-r from-sky-500 via-purple-500 to-violet-500 text-white p-2 rounded-md">
          Login
        </button>
        <p className="mt-4">
          Don't have an account?{' '}<bt/>
          <Link to="/register" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
