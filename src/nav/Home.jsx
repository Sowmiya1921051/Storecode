import React from 'react';
import bgImg from '../assets/bg-01.jpg';

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="text-black text-center bg-white p-16 rounded-md">
        <h1 className="text-4xl font-bold mb-10">Shop with Storecode</h1>
        <div className="mb-4 relative">
          <input
            type="text"
            id="productCode"
            className="w-full px-4 py-2 bg-transparent border-none focus:outline-none text-black placeholder-gray-500 focus:placeholder-gray-300"
            placeholder="Search Pin Number"
          />
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-500"></div>
        </div>
        <div>
          <button
            className="text-white px-4 py-2 rounded mt-4 focus:outline-none"
            style={{
              background: 'linear-gradient(to right, #87CEEB, #800080)',
            }}
          >
            SEARCH
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;
