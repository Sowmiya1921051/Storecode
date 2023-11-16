import React from 'react';
import { Link } from 'react-router-dom';

function Guide() {
  return (
    <div className='text-center p-10 bg-gradient-to-r from-sky-500 via-purple-500 to-violet-500'>
      <p className='text-2xl font-semibold'>Become a Guide at StoreCode</p>
      <Link to='/register'>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded mt-4">Register</button>
      </Link>
    </div>
  );
}

export default Guide;
