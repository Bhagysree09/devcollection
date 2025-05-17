import React from 'react';

const blogPosts = [
  {
    title: 'Partnering for Progress: How Skill India Education Collaborates with Government Initiatives in Gujarat',
    date: '10 April 2025',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    summary: 'Empowering Skills for a Brighter Future Skill India Education works closely with government initiatives in Gujarat...'
  },
  {
    title: 'Understanding the NCVSTE Certification: Benefits for Skill Development Graduates',
    date: '10 April 2025',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    summary: "Unlocking Opportunities for Graduates The NCVSTE certification enhances skill development graduates' employability by validating their competencies...."
  },
  {
    title: 'Empowering Youth through Skill Development: The Role of Skill India Education in Nadiad',
    date: '10 April 2025',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
    summary: 'Unlocking Potential Through Skill Development In Nadiad, the initiative focuses on equipping youth with essential skills...'
  },
];

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-900 bg-clip-text text-transparent mb-12 animate-gradient-move">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogPosts.map((post, idx) => (
          <div key={post.title} className={`glass-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col animate-fade-in-up ${idx === 0 ? 'border-4 border-indigo-400 scale-105 relative' : ''}`} style={{animationDelay: `${0.1 * idx + 0.5}s`}}>
            {idx === 0 && <span className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">Featured</span>}
            <div className="overflow-hidden rounded-t-2xl">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-lg font-bold text-indigo-800 mb-2 hover:text-indigo-600 transition cursor-pointer">{post.title}</h2>
              <div className="text-gray-400 text-xs mb-2">{post.date}</div>
              <p className="text-gray-600 mb-4 flex-1">{post.summary}</p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline mt-auto inline-block animated-underline">Click here</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      .glass-card {
        background: rgba(255,255,255,0.7);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.18);
      }
      .animate-fade-in-up { opacity: 0; transform: translateY(40px); animation: fadeInUp 1s forwards; }
      @keyframes fadeInUp { to { opacity: 1; transform: none; } }
      .animate-gradient-move {
        background-size: 200% 200%;
        animation: gradientMove 4s ease-in-out infinite;
      }
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animated-underline {
        position: relative;
      }
      .animated-underline:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #6366f1, #818cf8);
        transition: width 0.3s;
        position: absolute;
        left: 0;
        bottom: -2px;
      }
      .animated-underline:hover:after {
        width: 100%;
      }
    `}</style>
  </div>
);

export default Blog; 