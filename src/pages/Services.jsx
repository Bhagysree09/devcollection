import React from 'react';
import { motion } from 'framer-motion';
import { FaFileInvoiceDollar, FaChartLine, FaCalculator, FaGlobeAmericas, FaCheckCircle } from 'react-icons/fa';
import { MdSupportAgent, MdSecurity, MdTimer, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <FaFileInvoiceDollar className="w-12 h-12" />,
      title: 'Tax Preparation',
      description: 'Comprehensive tax preparation services for individuals and businesses, ensuring accurate and timely filing.',
      features: [
        'Individual Tax Returns',
        'Business Tax Returns',
        'Tax Planning',
        'Tax Compliance'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: 'Financial Planning',
      description: 'Strategic financial planning to help you achieve your long-term financial goals and maximize returns.',
      features: [
        'Investment Planning',
        'Retirement Planning',
        'Estate Planning',
        'Risk Management'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaCalculator className="w-12 h-12" />,
      title: 'Accounting Services',
      description: 'Professional accounting services to maintain accurate financial records and ensure compliance.',
      features: [
        'Bookkeeping',
        'Financial Statements',
        'Payroll Processing',
        'Bank Reconciliation'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaGlobeAmericas className="w-12 h-12" />,
      title: 'International Taxation',
      description: 'Expert guidance on international tax matters and cross-border transactions.',
      features: [
        'International Tax Planning',
        'Transfer Pricing',
        'Double Taxation Relief',
        'Foreign Investment'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: <MdSupportAgent className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Our team of experienced professionals provides expert guidance and solutions.',
      color: 'bg-blue-50'
    },
    {
      icon: <MdSecurity className="w-8 h-8" />,
      title: 'Data Security',
      description: 'We maintain the highest standards of data security and confidentiality.',
      color: 'bg-green-50'
    },
    {
      icon: <MdTimer className="w-8 h-8" />,
      title: 'Timely Service',
      description: 'We ensure timely delivery of all services and meet deadlines consistently.',
      color: 'bg-purple-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive taxation and financial services tailored to meet your specific needs and goals.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Get Started
                <MdArrowForward className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to right, ${service.color})` }}></div>
                <div className="p-8 relative">
                  <div className={`text-${service.color.split('-')[1]}-600 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <FaCheckCircle className={`w-5 h-5 text-${service.color.split('-')[1]}-600 mr-3`} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional service and value to our clients.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${item.color} p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how we can help you achieve your financial goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Contact Us
              <MdArrowForward className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 