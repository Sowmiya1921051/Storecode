import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className='bg-purple-400 flex justify-between p-4 text-xl font-semibold text-white'>
      <div className="flex items-center space-x-2 overflow-x-auto">
        <img className='rounded-xl w-10 h-10' src={logo} alt="Logo" />
        <Link to='/'>STORECODE</Link>
      </div>
      <div className="hidden md:flex space-x-10">
        <Link to='/' className="hover:text-sky-500">Home</Link>
        <Link to='/login' className="hover:text-sky-500">Login</Link>
        <Link to='/register' className="hover:text-sky-500">Register</Link>
        <Link to='/contact' className="hover:text-sky-500">Contact</Link>
        <Link to='/about' className="hover:text-sky-500">About</Link>
      </div>
    </div>
  );
}

export default Header;
