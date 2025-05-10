import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dev Collection</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for premium fashion and accessories.
            </p>
            <p className="text-gray-400">
              SHOP NO-2 802/28, ROHTAK,<br />
              BHARAT COLONY, HARYANA,<br />
              24001
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+918826691389" className="text-gray-400 hover:text-white transition duration-300">
                  +91 8826691389
                </a>
              </li>
              <li>
                <a href="mailto:hanumanji4560@gmail.com" className="text-gray-400 hover:text-white transition duration-300">
                  hanumanji4560@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dev Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 