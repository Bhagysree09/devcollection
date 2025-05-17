import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaFileInvoiceDollar, FaChartLine, FaHandshake } from 'react-icons/fa';
import { MdSecurity, MdSupportAgent } from 'react-icons/md';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert Taxation Services for Your Business
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Your trusted partner for all tax-related services. We help businesses and individuals navigate complex tax regulations with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300 text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300 text-center"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Tax Services"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About SAI ACCOUNTS CARE</h2>
              <p className="text-gray-600 mb-4">
                We are a leading provider of taxation services, dedicated to helping individuals and businesses navigate the complexities of tax laws and regulations.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to provide exceptional taxation services that exceed our clients' expectations and help them achieve their financial goals.
              </p>
              <Link
                to="/about"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Office"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCalculator />,
                title: "Expert Team",
                description: "Our team of experienced tax professionals provides expert guidance and solutions."
              },
              {
                icon: <MdSecurity />,
                title: "Personalized Service",
                description: "We provide tailored solutions to meet your unique tax needs and requirements."
              },
              {
                icon: <FaHandshake />,
                title: "Confidentiality",
                description: "We maintain the highest level of confidentiality and data protection."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 text-4xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <FaFileInvoiceDollar />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tax Preparation</h3>
              <p className="text-gray-600 mb-4">
                Individual and business tax return preparation
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tax Planning</h3>
              <p className="text-gray-600 mb-4">
                Strategic tax planning to minimize liabilities
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <MdSupportAgent />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tax Audit</h3>
              <p className="text-gray-600 mb-4">
                Representation during tax audits and disputes
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <FaCalculator />
              </div>
              <h3 className="text-xl font-semibold mb-4">International Tax</h3>
              <p className="text-gray-600 mb-4">
                Expertise in international tax laws and regulations
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-800">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}


      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-gray-600 text-sm">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "SAI ACCOUNTS CARE has been instrumental in helping our business navigate complex tax regulations. Their expertise and professionalism are unmatched."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">Individual Client</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The team at SAI ACCOUNTS CARE provides excellent service and always goes above and beyond to ensure our tax needs are met."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Michael Brown</p>
                  <p className="text-gray-600 text-sm">Corporate Client</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Their attention to detail and personalized approach make them the best tax consultants in the region."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 