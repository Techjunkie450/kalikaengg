import React, { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Kalika Engineering Works</h1>
              <p className="text-sm text-gray-600">Precision • Quality • Reliability</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Contact</a>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium">
              Get Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-700 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Gallery</a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Contact</a>
              <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium w-fit">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;