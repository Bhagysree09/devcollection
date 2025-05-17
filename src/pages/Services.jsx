import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Premium Clothing",
      description: "Discover our exclusive collection of high-quality clothing items. From casual wear to formal attire, we offer the latest trends and timeless classics.",
      icon: "👔",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Designer Footwear",
      description: "Step into style with our curated selection of designer shoes. From sneakers to formal shoes, find the perfect pair for every occasion.",
      icon: "👞",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Luxury Leather Goods",
      description: "Experience the finest leather accessories including bags, wallets, and belts. Each piece is crafted with premium materials and attention to detail.",
      icon: "👜",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Personal Shopping",
      description: "Get personalized style recommendations from our fashion experts. We'll help you find the perfect items that match your style and preferences.",
      icon: "👗",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Size Guide & Fitting",
      description: "Comprehensive size guides and fitting assistance to ensure you get the perfect fit every time. We're here to help you make the right choice.",
      icon: "📏",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=60"
    },
    {
      title: "Express Delivery",
      description: "Fast and reliable shipping services to get your favorite items delivered right to your doorstep. Free shipping on orders above $100.",
      icon: "🚚",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=500&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          At Dev Collection, we're committed to providing you with the finest fashion and accessories.
          Our comprehensive range of services ensures a seamless shopping experience from browsing to delivery.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 text-4xl bg-white bg-opacity-75 rounded-full p-2">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Start Shopping Today</h2>
          <p className="text-gray-600 mb-8">
            Explore our collections and discover the perfect additions to your wardrobe.
          </p>
          <div className="space-x-4">
            <a 
              href="/category/clothing" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Shop Clothing
            </a>
            <a 
              href="/category/footwear" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Shop Footwear
            </a>
            <a 
              href="/category/leather-goods" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Shop Leather Goods
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 