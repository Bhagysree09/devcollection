import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SAI ACCOUNTS CARE</h3>
            <p className="text-gray-300 mb-2">Shop No.4D-1 Opp To Hotel Ganpati</p>
            <p className="text-gray-300 mb-2">Pagariya Complex Bus Stand</p>
            <p className="text-gray-300 mb-2">Pandri Raipur 492001</p>
            <p className="text-gray-300 mb-2">Phone: +91 98274 66622</p>
            <p className="text-gray-300">Email: makhijataxconsultant@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Tax Preparation</li>
              <li className="text-gray-300">Tax Planning</li>
              <li className="text-gray-300">Tax Audit Representation</li>
              <li className="text-gray-300">International Taxation</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © COPYRIGHT 2025 SAI ACCOUNTS CARE - ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 