import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const offers = [
  {
    title: 'Hospitality Management Course',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    desc: 'A comprehensive program that trains individuals in various aspects of hospitality, including customer service, food and beverage management, and event planning, preparing students for careers in hotels and restaurants.'
  },
  {
    title: 'Digital Marketing Certification Course Training',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    desc: 'This course equips learners with essential skills in digital marketing, covering topics such as social media marketing, search engine optimization, and content creation, enabling them to effectively promote businesses online.'
  },
  {
    title: 'Electrical Technician Training Program Course',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    desc: 'A hands-on training program focused on electrical systems and installations, providing students with the technical skills and knowledge required to work as certified electrical technicians in various industries.'
  },
];

const faqs = [
  {
    q: 'What types of courses does Skill India Education offer?',
    a: 'Skill India Education offers a variety of vocational training courses across different sectors, including certification programs accredited by the National Council for Vocational Training (NCVT). These courses are designed to provide practical skills and knowledge that meet industry demands, thereby enhancing the employability of individuals. By focusing on relevant training, Skill India Education aims to empower students and facilitate their successful entry into the workforce.'
  },
  {
    q: 'How does Skill India Education ensure the quality?',
    a: 'We ensure the quality of our training programs by partnering with the National Skill Development Corporation (NSDC) and the Gujarat Urban Livelihood Mission, and by employing experienced professionals and industry experts as instructors. This collaboration allows us to stay aligned with industry standards and requirements, ensuring that our training is relevant and effective. Our focus on quality helps students gain the necessary skills to succeed in their chosen vocational fields.'
  },
  {
    q: 'Are the certificates provided by Skill India Education recognized?',
    a: 'Yes, the certification courses offered by Skill India Education are accredited by the National Council for Vocational Training (NCVT), ensuring that our students receive recognized credentials that enhance their career prospects. This accreditation signifies that the training meets industry standards and equips students with the necessary skills and knowledge to succeed in their respective fields, thereby improving their chances of finding suitable employment and advancing in their careers.'
  },
  {
    q: 'What is the mission of Skill India Education?',
    a: 'Our mission is to bridge the gap between education and industry needs by providing high-quality training programs that equip individuals with essential skills to enhance their employability and foster economic growth. We aim to empower individuals to become self-sufficient and contribute positively to the workforce and economy, ensuring that our training is aligned with the demands of the job market and supports the overall development of skilled workforce in various sectors.'
  },
];

const Offer = () => {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-900 bg-clip-text text-transparent mb-12 animate-gradient-move">Offer</h1>
        <div className="space-y-16">
          {offers.map((offer, idx) => (
            <div key={offer.title} className={`glass-card flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 rounded-2xl shadow-lg p-8 animate-fade-in-up relative overflow-hidden`} style={{animationDelay: `${0.1 * idx + 0.5}s`}}>
              <svg className="absolute -top-10 -left-10 w-40 h-40 opacity-20 blur-2xl z-0" viewBox="0 0 200 200"><path fill="#818cf8" d="M44.8,-67.6C58.2,-60.2,68.7,-48.2,74.2,-34.7C79.7,-21.2,80.2,-6.1,77.2,8.2C74.2,22.5,67.7,36,58.1,47.2C48.5,58.4,35.8,67.3,21.6,71.7C7.4,76.1,-8.2,76,-22.2,70.2C-36.2,64.4,-48.6,52.9,-57.2,39.2C-65.8,25.5,-70.6,9.7,-70.2,-6.2C-69.8,-22.1,-64.2,-37.9,-54.7,-46.9C-45.2,-55.9,-31.8,-58.1,-18.2,-63.2C-4.6,-68.3,9.2,-76.2,22.2,-77.2C35.2,-78.2,47.4,-72.3,44.8,-67.6Z" transform="translate(100 100)" /></svg>
              <img src={offer.image} alt={offer.title} className="w-full md:w-1/3 h-56 object-cover rounded-2xl shadow-md relative z-10" />
              <div className="flex-1 relative z-10">
                <h2 className="text-2xl font-bold text-indigo-800 mb-2">{offer.title}</h2>
                <p className="text-gray-700 text-lg">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-indigo-800 mb-8">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="glass-card rounded-xl shadow p-6 animate-fade-in-up cursor-pointer" style={{animationDelay: `${0.1 * idx + 1.2}s`}} onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-indigo-700 mb-2">{faq.q}</h3>
                  <span className={`transform transition-transform duration-300 text-2xl ${openIdx === idx ? 'rotate-90 text-indigo-600' : 'rotate-0 text-gray-400'}`}>▶</span>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-700 mt-2">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-20 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-orange-400 via-orange-200 to-orange-100 rounded-2xl shadow-lg p-8 animate-fade-in-up relative overflow-hidden" style={{animationDelay: '2s'}}>
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-orange-700 mb-4">Connect with Us for Skillful Opportunities!</h2>
            <Link to="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition shine-btn inline-block mt-2">Contact</Link>
          </div>
          <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80" alt="Education Changes the World" className="w-full md:w-1/3 h-40 object-cover rounded-2xl shadow-md" />
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
        .shine-btn {
          position: relative;
          overflow: hidden;
        }
        .shine-btn:after {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.7) 100%);
          transform: skewX(-20deg);
          transition: left 0.7s;
        }
        .shine-btn:hover:after {
          left: 120%;
        }
      `}</style>
    </div>
  );
};

export default Offer; 