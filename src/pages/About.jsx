import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      name: 'Jane Smith',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            About Dev Collection
          </h1>
          <p className="text-xl text-gray-200 animate-fade-in-delay">
            Crafting style and elegance since 2024
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 animate-fade-in">Our Story</h2>
            <p className="text-gray-600 mb-4 animate-fade-in-delay">
              Dev Collection was founded with a simple mission: to provide high-quality fashion
              that combines style, comfort, and sustainability. We believe that everyone deserves
              to look and feel their best, and we're committed to making that possible through
              our carefully curated collections.
            </p>
            <p className="text-gray-600 animate-fade-in-delay-2">
              Our journey began in 2024, and since then, we've grown into a beloved fashion
              destination for customers worldwide. We take pride in our attention to detail,
              quality craftsmanship, and commitment to customer satisfaction.
            </p>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Our Story"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 text-4xl mb-6">✨</div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every item in our collection is carefully
                selected and crafted to meet our high standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 text-4xl mb-6">🌱</div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices and ethical manufacturing processes
                that minimize our environmental impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 text-4xl mb-6">💫</div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly innovate and evolve our collections to stay ahead of fashion
                trends while maintaining timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 transform group-hover:translate-y-1 transition-transform duration-300">{member.name}</h3>
              <p className="text-gray-600 transform group-hover:translate-y-1 transition-transform duration-300 delay-100">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">Contact Us</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-10 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-indigo-600 text-4xl mb-6">📧</div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:hanumanji4560@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  hanumanji4560@gmail.com
                </a>
              </div>
              <div className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-indigo-600 text-4xl mb-6">📞</div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+918826691389" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  +91 8826691389
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 