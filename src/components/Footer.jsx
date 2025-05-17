import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://fmc8cx.webwave.dev/files/dynamicContent/sites/fmc8cx/images/en/layout_2/m9u3v8fj/element_616/WhatsApp-Image-2025-04-10-at-115703-AM.jpeg" 
                alt="Skill India Education Logo" 
                className="h-12 w-12 rounded-full shadow-lg border-2 border-indigo-200 bg-white object-cover mr-2"
              />
              <span className="text-lg font-bold text-gray-800">Skill India Education</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Skill India Education empowers individuals through vocational training and skill development, bridging the gap between education and industry for employability and economic growth in Gujarat and beyond. Join us today!
            </p>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-3 text-gray-700">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-500 hover:text-indigo-600 text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-indigo-600 text-sm">About</Link></li>
              <li><Link to="/offer" className="text-gray-500 hover:text-indigo-600 text-sm">Offer</Link></li>
              <li><Link to="/gallery" className="text-gray-500 hover:text-indigo-600 text-sm">Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-indigo-600 text-sm">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-indigo-600 text-sm">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-3 text-gray-700">Address</h3>
            <p className="text-gray-500 text-sm mb-2">
              Paras Circle, SH 61, Janorepura Road,<br />
              Nadiad, Gujarat 387001
            </p>
            <h3 className="text-md font-semibold mb-3 text-gray-700 mt-4">Contact</h3>
            <p className="text-gray-500 text-sm mb-1">ni.valpichal6@gmail.com</p>
            <p className="text-gray-500 text-sm">+91-9925544864</p>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-8 pt-6 text-center text-gray-900 text-bold text-xs">
          <p>&copy; {new Date().getFullYear()} | SKILL INDIA EDUCATION | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 