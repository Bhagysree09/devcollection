import React, { useState } from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
];

const Gallery = () => {
  const [modalImg, setModalImg] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Gallery</h1>
        <p className="text-lg max-w-2xl mx-auto">Explore moments of learning, training, and achievement at Skill India Education.</p>
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-400 opacity-30 rounded-full blur-2xl -z-10 animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-300 opacity-20 rounded-full blur-2xl -z-10 animate-float-slower" />
      </div>
      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={img} className="relative group cursor-pointer animate-fade-in-up" style={{animationDelay: `${0.1 * idx + 0.5}s`}}>
              <img src={img} alt={`Gallery ${idx+1}`} className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300" onClick={() => setModalImg(img)} />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-2xl transition duration-300" />
            </div>
          ))}
        </div>
      </div>
      {/* Modal for Lightbox */}
      {modalImg && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="Enlarged" className="max-w-3xl max-h-[80vh] rounded-2xl shadow-2xl border-4 border-white" />
        </div>
      )}
      <style>{`
        .animate-fade-in-up { opacity: 0; transform: translateY(40px); animation: fadeInUp 1s forwards; }
        @keyframes fadeInUp { to { opacity: 1; transform: none; } }
        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite alternate; }
        .animate-float-slower { animation: floatSlower 12s ease-in-out infinite alternate; }
        @keyframes floatSlow { 0% { transform: translateY(0); } 100% { transform: translateY(-30px); } }
        @keyframes floatSlower { 0% { transform: translateY(0); } 100% { transform: translateY(40px); } }
      `}</style>
    </div>
  );
};

export default Gallery; 