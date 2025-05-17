import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: 'Rajesh Patel',
    text: 'Skill India Education transformed my career with practical training and relevant industry skills. Highly recommended!'
  },
  {
    name: 'Priya Mehta',
    text: 'I had a wonderful experience at Skill India Education. The instructors were knowledgeable and supportive.'
  },
  {
    name: 'Amit Sharma',
    text: 'Skill India Education is doing an exceptional job in bridging the gap between education and industry.'
  }
];

const stats = [
  { value: 12, label: 'Specialists in demand', icon: '👨‍🔬' },
  { value: 8, label: 'Completed projects', icon: '✅' },
  { value: 220, label: 'Satisfied customers', icon: '😊' },
  { value: 5, label: 'Awards received', icon: '🏆' },
];

const features = [
  {
    icon: '🤝',
    title: 'Partnership Initiatives',
    desc: 'Skill India Education partners with Government initiatives, ensuring alignment with national standards and support.'
  },
  {
    icon: '📜',
    title: 'Accredited Certification',
    desc: "The company offers accredited certification courses, enhancing students' employability with recognized credentials."
  },
  {
    icon: '👨‍🏫',
    title: 'Experienced Instructors',
    desc: 'The team consists of experienced professionals and industry experts who bring practical knowledge and passion for skill development.'
  },
  {
    icon: '🛠️',
    title: 'Focus on Practical Training',
    desc: 'Skill India Education emphasizes hands-on experience alongside theoretical knowledge.'
  },
];

// Animated Counter Hook
function useCountUp(end, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    function update() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        ref.current = requestAnimationFrame(update);
      } else {
        setCount(end);
        cancelAnimationFrame(ref.current);
      }
    }
    update();
    return () => cancelAnimationFrame(ref.current);
  }, [end, duration]);
  return count;
}

const Home = () => {
  // Animated counters for stats
  const counts = stats.map(stat => useCountUp(stat.value, 1200));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-12 flex flex-col md:flex-row items-center justify-between container mx-auto px-6">
        <div className="md:w-1/2 z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-6 leading-tight animate-typing overflow-hidden whitespace-nowrap border-r-4 border-indigo-600 pr-4" style={{animation: 'typing 2s steps(30, end), blink-caret .75s step-end infinite'}}>
            Empower Your Future
          </h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in-up delay-200">
            Empowering individuals through vocational education and training, SkillIndia Education bridges the gap between education and industry for enhanced employability.
          </p>
          <Link to="/contact" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition transform hover:scale-105 animate-fade-in-up delay-300">
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 animate-fade-in-up delay-500">
          <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80" alt="Empower" className="rounded-3xl shadow-2xl w-full max-w-md scale-105 hover:scale-110 transition-transform duration-500" />
        </div>
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full opacity-40 -z-10 blur-2xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full opacity-30 -z-10 blur-2xl animate-float-slower" />
      </div>

      {/* About our company - Redesigned */}
      <div className="container mx-auto px-6 py-16 animate-fade-in-up delay-200">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-2xl p-8 md:p-16 gap-8 md:gap-16">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in-up delay-300 flex justify-center">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="About" className="rounded-2xl shadow-xl w-full max-w-md border-4 border-indigo-100" />
          </div>
          <div className="md:w-1/2 md:pl-12 animate-fade-in-up delay-400 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-indigo-800 mb-4 flex items-center gap-2">
              <span className="inline-block bg-indigo-100 p-2 rounded-full text-2xl">🏢</span>
              About
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              <span className="font-semibold text-indigo-700">Skill India Education</span> (Nadiad, Gujarat) empowers individuals through vocational training. As a partner of the Government of India's NSDC, we provide accredited courses that enhance employability. Our experienced instructors foster a dynamic learning environment, equipping students with practical skills to thrive in a competitive job market and contribute to economic growth.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow">Accredited</span>
              <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow">Industry Focused</span>
              <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow">Skill Development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats - Animated Counting */}
      <div className="bg-indigo-50 py-12 animate-fade-in-up delay-300">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center animate-bounce-in" style={{animationDelay: `${0.2 * idx}s`}}>
              <div className="text-5xl font-extrabold text-indigo-700 mb-2 animate-countup flex items-center gap-2">
                <span>{stat.icon}</span>
                <span>{counts[idx]}</span>
              </div>
              <div className="text-gray-600 text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why us */}
      <div className="container mx-auto px-6 py-16 animate-fade-in-up delay-400">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-12">Why us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={feature.title} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${0.1 * idx + 0.5}s`}}>
              <div className="text-indigo-600 text-4xl mb-4 animate-wiggle">{feature.icon}</div>
              <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Connect with Us - Redesigned */}
      <div className="bg-gradient-to-r from-indigo-200 via-indigo-100 to-white py-16 animate-fade-in-up delay-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="mb-8 md:mb-0 md:w-1/2 animate-fade-in-up delay-600 flex flex-col items-start">
            <h2 className="text-3xl font-extrabold text-indigo-800 mb-4 flex items-center gap-2">
              <span className="inline-block bg-indigo-100 p-2 rounded-full text-2xl">📞</span>
              Connect with Us
            </h2>
            <p className="text-gray-700 mb-4 text-lg">Have questions or want to know more? Reach out to us for guidance, support, or partnership opportunities.</p>
            <Link to="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition transform hover:scale-105 flex items-center gap-2">
              <span>Contact</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-up delay-700">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center w-full max-w-md">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-indigo-100 p-3 rounded-full text-2xl">📧</span>
                <span className="text-gray-700 font-semibold">ni.valpichal6@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-indigo-100 p-3 rounded-full text-2xl">📱</span>
                <span className="text-gray-700 font-semibold">+91-9925544864</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-indigo-100 p-3 rounded-full text-2xl">📍</span>
                <span className="text-gray-700 font-semibold">Paras Circle, SH 61, Janorepura Road, Nadiad, Gujarat 387001</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews - Redesigned */}
      <div className="container mx-auto px-6 py-16 animate-fade-in-up delay-600">
        <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-12 flex items-center justify-center gap-2">
          <span className="inline-block bg-indigo-100 p-2 rounded-full text-2xl">⭐</span>
          Reviews & Feedback
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 text-center animate-fade-in-up hover:shadow-2xl transition-all duration-300" style={{animationDelay: `${0.2 * idx + 0.7}s`}}>
              <div className="mb-4 flex flex-col items-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-3xl font-bold shadow-md animate-pop mb-2 border-2 border-indigo-200">{review.name[0]}</div>
                <span className="text-indigo-700 font-semibold">{review.name}</span>
              </div>
              <p className="italic text-gray-700 mb-2 text-lg">“{review.text}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations (Tailwind CSS plugin or custom CSS required) */}
      <style>{`
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { 50% { border-color: transparent } }
        .animate-typing { animation: typing 2s steps(30, end) 1s 1 normal both, blink-caret .75s step-end infinite; }
        .animate-fade-in-up { opacity: 0; transform: translateY(40px); animation: fadeInUp 1s forwards; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
        .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
        .animate-fade-in-up.delay-500 { animation-delay: 0.5s; }
        .animate-fade-in-up.delay-600 { animation-delay: 0.6s; }
        .animate-fade-in-up.delay-700 { animation-delay: 0.7s; }
        @keyframes fadeInUp { to { opacity: 1; transform: none; } }
        .animate-bounce-in { animation: bounceIn 1s both; }
        @keyframes bounceIn { 0% { opacity: 0; transform: scale(0.8); } 60% { opacity: 1; transform: scale(1.05); } 100% { transform: scale(1); } }
        .animate-wiggle { animation: wiggle 1.2s infinite; }
        @keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        .animate-pop { animation: pop 0.6s cubic-bezier(.36,1.64,.56,1) both; }
        @keyframes pop { 0% { transform: scale(0.7); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite alternate; }
        .animate-float-slower { animation: floatSlower 12s ease-in-out infinite alternate; }
        @keyframes floatSlow { 0% { transform: translateY(0); } 100% { transform: translateY(-30px); } }
        @keyframes floatSlower { 0% { transform: translateY(0); } 100% { transform: translateY(40px); } }
      `}</style>
    </div>
  );
};

export default Home; 