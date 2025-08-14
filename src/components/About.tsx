import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const features = [
    "State-of-the-art lathe machines and precision equipment",
    "Experienced team of certified machinists and engineers",
    "Quality assurance and ISO standard compliance",
    "Custom solutions for unique engineering challenges",
    "24/7 emergency repair and maintenance services",
    "Competitive pricing with transparent quotations"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Kalika Engineering Works
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in precision engineering, Kalika Engineering Works 
                has established itself as a trusted partner for industries requiring high-quality 
                machining solutions. Our workshop combines traditional craftsmanship with modern 
                technology to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in complex lathe operations, mud pump servicing, and cutting-edge 
                engineering solutions that meet the demanding requirements of today's industrial applications.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Workshop Image */}
            <div className="mt-8">
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
                alt="Lathe machine operations at Kalika Engineering"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide superior precision engineering solutions that exceed client expectations 
                while maintaining the highest standards of quality and safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading precision engineering workshop known for innovation, 
                reliability, and exceptional customer service in the industrial sector.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Commitment to quality, integrity in business, continuous improvement, 
                and building lasting partnerships with our valued clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;