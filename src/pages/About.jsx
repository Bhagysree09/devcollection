import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col justify-between">
    {/* Navbar spacing */}
    <div className="pt-10" />
    {/* Main Heading */}
    <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-12 mt-8">About us</h1>

    {/* Empowering Skills Together Section */}
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 mb-12">
      <div className="md:w-1/2 flex justify-center">
        <img src="https://fmc8cx.webwave.dev/files/dynamicContent/sites/fmc8cx/images/en/webpage_20/m9u3vaxh/element_724/rwdMode_1/550x400/person-holding-iphone-on-white-printer-paper.webp" alt="Empowering Skills" className="rounded-2xl shadow-xl w-full max-w-lg border-4 border-indigo-100" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-4">Empowering Skills Together</h2>
        <p className="text-gray-800 mb-2 font-semibold">Skill India Education</p>
        <p className="text-gray-700 mb-4 text-lg">
          <span className="font-bold">Skill India Education</span>, based in Nadiad, Gujarat, is a leading skill development company committed to empowering individuals through vocational training. As a partner of the National Skill Development Corporation (NSDC), we offer accredited certification courses that enhance employability and foster economic growth. Our programs, taught by experienced professionals, bridge the gap between education and industry demands. We focus on providing both theoretical knowledge and practical experience, equipping students with essential skills to thrive in a competitive job market and contribute to a skilled India.
        </p>
      </div>
    </div>

    {/* Banner */}
    <div className="w-full bg-indigo-400 py-4 text-center text-2xl font-bold text-orange-400 tracking-widest mb-12">SKILL INDIA EDUCATION</div>

    {/* Orange/Blue Split Section */}
    <div className="container mx-auto px-6 mb-16">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-orange-400 flex flex-col justify-center items-center md:w-1/2 py-16 px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Skill India Education</h2>
          <Link to="/contact" className="bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition text-lg">Contact</Link>
        </div>
        <div className="md:w-1/2 flex justify-center items-center bg-white py-8 px-4">
          <img src="https://fmc8cx.webwave.dev/files/dynamicContent/sites/fmc8cx/images/en/webpage_20/m9u3vaxh/element_746/rwdMode_1/600x420/macbook-pro-displaying-group-of-people.webp" alt="Online Meeting" className="rounded-2xl shadow-xl w-full max-w-md border-4 border-indigo-100" />
        </div>
      </div>
    </div>

    {/* Footer Section */}
    
  </div>
);

export default About; 