import React, { useState } from 'react';
import bgImg from '../assets/bg-01.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleRegister = () => {
    console.log('Registration clicked', formData);
  };

  const inputFields = [
    { label: 'Name', field: 'name' },
    { label: 'Store Name', field: 'storeName' },
    { label: 'Mobile Number', field: 'mobileNumber' },
    { label: 'Email', field: 'email' },
    { label: 'Password', field: 'password' },
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md">
        <h2 className="text-5xl font-semibold mb-14 text-center">Register</h2>

        {inputFields.map((field, index) => (
          <div key={index} className="mb-4 relative">
            <label htmlFor={field.field} className="block text-sm font-medium text-gray-600">
              {field.label}
            </label>
            <input
              type={field.field === 'password' && showPassword ? 'text' : 'text'}
              id={field.field}
              name={field.field}
              value={formData[field.field]}
              onChange={(e) => handleInputChange(field.field, e.target.value)}
              className="w-full px-4 py-2 bg-transparent border-none focus:outline-none text-black placeholder-gray-500 focus:placeholder-gray-300"
              placeholder={`Your ${field.label.toLowerCase()}`}
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500"></div>
          </div>
        ))}


        <button onClick={handleRegister} className="bg-gradient-to-r from-sky-500 via-purple-500 to-violet-500 text-white p-2 rounded-md">
          Register
        </button>
        <p className="mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
