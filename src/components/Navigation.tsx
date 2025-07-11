
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate navigation on load
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.1,
      delay: 3.5, // After preloader
      ease: 'power2.out'
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to('.mobile-menu', {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      gsap.to('.mobile-menu', {
        opacity: 0,
        x: '100%',
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark backdrop-blur-md' : ''
      }`}>
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="nav-item">
              <h1 className="text-2xl font-bold gradient-text cursor-pointer" 
                  onClick={() => scrollToSection('hero')}>
                Yuqing
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-item text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="nav-item btn-glow px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden nav-item p-2 text-gray-300 hover:text-white transition-colors"
            >
              <i className="ph ph-list text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 w-80 h-full glass-dark backdrop-blur-md z-40 transform translate-x-full opacity-0 md:hidden`}>
        <div className="p-8 pt-20">
          <div className="space-y-6">
            {['About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-8 btn-glow px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
