import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://qmw4ed.webwave.dev/files/dynamicContent/sites/qmw4ed/images/en/layout_2/mab2yvxp/element_152/rwdMode_1/100x50/WhatsApp-Image-2025-05-05-at-55018-PM.webp" 
              alt="Dev Collection Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-gray-800">Dev Collection</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            {/* <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link> */}
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 