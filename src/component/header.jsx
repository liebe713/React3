import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 flex justify-center">
      <div className="flex space-x-6">
        <Link to="/" className="text-white text-2xl font-semibold hover:text-gray-300 hover:underline hover:text-3xl">Home</Link>
        <Link to="/about" className="text-white text-2xl font-semibold hover:text-gray-300 hover:underline hover:text-3xl">About</Link>
        <Link to="/contact" className="text-white text-2xl font-semibold hover:text-gray-300 hover:underline hover:text-3xl">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
