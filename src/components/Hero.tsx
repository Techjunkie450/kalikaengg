import React from 'react';
import { ArrowRight, Award, Users, Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Precision Engineering
                <span className="block text-blue-700">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional lathe machine workshop specializing in cutting-edge engineering, 
                precision machining, and comprehensive manufacturing solutions for industrial applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold flex items-center justify-center group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-200 font-semibold">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Wrench className="h-8 w-8 text-blue-700" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://i.pinimg.com/1200x/17/ec/5d/17ec5de696aff0925b28b38f044e756d.jpg" 
                alt="Industrial lathe machine in workshop" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">ISO</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
              </div>
            </div>
            
            {/* Additional floating elements */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;