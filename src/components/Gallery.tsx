import React from 'react';
import { Camera, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      src:"https://i.pinimg.com/736x/31/7d/31/317d31f55df412611b48604b87b3a3f9.jpg",
      alt: "Heavy duty lathe machine",
      title: "CNC Lathe Operations"
    },
    {
      src:"https://i.pinimg.com/736x/d4/2d/c7/d42dc72c82b7dc0892eadbd9cdb3af52.jpg",
      alt: "Lathe machine precision work",
      title: "Precision Machining"
    },
    {
      src: "https://i.pinimg.com/736x/93/66/aa/9366aad711e7d22ffc1b97b3b5e1c26d.jpg",
      alt: "Metal cutting on lathe",
      title: "Metal Cutting Operations"
    },
    {
      src:"https://i.pinimg.com/736x/24/64/70/246470de36622f4302111f2c03af0bf9.jpg",
      alt: "Precision engineering work",
      title: "Engineering Solutions"
    },
    {
      src:"https://i.pinimg.com/1200x/b7/a3/0b/b7a30b82ea8d7f51d5b7c5e9fe4ae5ed.jpg",
      alt: "Welding operations in workshop",
      title: "Welding Services"
    },
    {
      src: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
      alt: "Workshop tools and equipment",
      title: "Professional Tools"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-blue-700 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Our Workshop & Machinery
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our state-of-the-art lathe machines and precision engineering equipment. 
            Our modern workshop is equipped with the latest technology to handle complex machining operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Professional Equipment</span>
                    <Maximize2 className="h-5 w-5 text-white/80" />
                  </div>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Workshop Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">8+</div>
              <div className="text-gray-600">Lathe Machines</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">5000+</div>
              <div className="text-gray-600">Sq Ft Workshop</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">15+</div>
              <div className="text-gray-600">Skilled Workers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;