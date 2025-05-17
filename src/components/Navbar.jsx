import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://fmc8cx.webwave.dev/files/dynamicContent/sites/fmc8cx/images/en/layout_2/m9u3v8fj/element_616/WhatsApp-Image-2025-04-10-at-115703-AM.jpeg" 
            alt="Skill India Education Logo" 
            className="h-14 w-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 border-2 border-indigo-200 bg-white object-cover"
          />
          <span className="text-2xl font-bold text-gray-800">Skill India Education</span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</Link>
          <Link to="/offer" className="text-gray-700 hover:text-indigo-600 font-medium">Offer</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-indigo-600 font-medium">Gallery</Link>
          <Link to="/blog" className="text-gray-700 hover:text-indigo-600 font-medium">Blog</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 