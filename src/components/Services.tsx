import React from 'react';
import { Settings, Cog, Zap, Wrench, HardHat, Drill } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Lathe Machine Operations",
      description: "Precision turning, facing, threading, and complex machining operations on various materials including steel, aluminum, and specialty alloys."
    },
    {
      icon: Cog,
      title: "Mud Pump Services",
      description: "Comprehensive repair, maintenance, and precision machining of mud pump components for drilling operations and industrial applications."
    },
    {
      icon: Drill,
      title: "Tapper Operations",
      description: "Professional threading and tapping services with high precision tooling for creating internal threads in various hole sizes and materials."
    },
    {
      icon: Zap,
      title: "Cutting Edge Engineering",
      description: "Advanced cutting tool engineering, custom tool design, and precision grinding services for optimal machining performance."
    },
    {
      icon: Wrench,
      title: "Roughing Operations",
      description: "Heavy-duty roughing and material removal operations for large components, preparing workpieces for finish machining."
    },
    {
      icon: HardHat,
      title: "Shaper Engine Work",
      description: "Specialized shaper machine operations for creating flat surfaces, keyways, splines, and complex geometric profiles."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive precision machining and engineering solutions backed by years of experience 
            and state-of-the-art equipment for all your manufacturing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-700 group-hover:to-blue-600 transition-all duration-300 shadow-lg">
                  <IconComponent className="h-8 w-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-blue-700 font-medium text-sm hover:text-blue-800 cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;