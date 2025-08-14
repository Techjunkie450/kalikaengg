import React from 'react';
import { Wrench, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kalika Engineering Works</h3>
                <p className="text-sm text-gray-400">Precision • Quality • Reliability</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for precision engineering solutions, 
              delivering excellence in lathe machine operations and 
              industrial manufacturing services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Lathe Machine Operations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Mud Pump Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Tapper Operations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Cutting Edge Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Roughing Operations</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Shaper Engine Work</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Quality Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Safety Protocols</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Opposite Panchayat Samiti, Near Hanumanji Mandir<br />Kelwa, Rajsamand 313303</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+91 94149 35836</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">info@kalikaengineeringworks.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Kalika Engineering Works. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Quality Assurance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;