
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (footer) {
      // Footer fade and slide-up animation
      gsap.fromTo(footer,
        {
          opacity: 0,
          y: 60,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating particles animation
      gsap.to('.footer-particle', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.5
      });
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="relative py-16 mt-20 glass-dark" data-scroll-section>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="footer-particle floating-orb w-3 h-3 bg-blue-400 opacity-30 absolute top-10 left-10"></div>
        <div className="footer-particle floating-orb w-4 h-4 bg-purple-500 opacity-20 absolute top-20 right-20"></div>
        <div className="footer-particle floating-orb w-2 h-2 bg-cyan-400 opacity-40 absolute bottom-20 left-1/4"></div>
        <div className="footer-particle floating-orb w-5 h-5 bg-pink-400 opacity-15 absolute bottom-10 right-1/3"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-2">Yuqing</h2>
            <p className="text-gray-400">Data Expert & Full Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="glass-dark p-3 rounded-lg hover:glow-blue transition-all duration-300 group"
            >
              <i className="ph ph-github-logo text-xl text-gray-400 group-hover:text-white"></i>
            </a>
            <a
              href="#"
              className="glass-dark p-3 rounded-lg hover:glow-blue transition-all duration-300 group"
            >
              <i className="ph ph-linkedin-logo text-xl text-gray-400 group-hover:text-white"></i>
            </a>
            <a
              href="#"
              className="glass-dark p-3 rounded-lg hover:glow-blue transition-all duration-300 group"
            >
              <i className="ph ph-twitter-logo text-xl text-gray-400 group-hover:text-white"></i>
            </a>
            <a
              href="#"
              className="glass-dark p-3 rounded-lg hover:glow-blue transition-all duration-300 group"
            >
              <i className="ph ph-envelope text-xl text-gray-400 group-hover:text-white"></i>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="glass-dark p-3 rounded-full hover:glow-blue transition-all duration-300 mb-8 inline-flex items-center justify-center group"
          >
            <i className="ph ph-arrow-up text-xl text-gray-400 group-hover:text-white"></i>
          </button>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500 text-sm">
              © {currentYear} Yuqing. Built with passion using React, GSAP & Locomotive Scroll.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Designed & Developed with ❤️ in San Francisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
