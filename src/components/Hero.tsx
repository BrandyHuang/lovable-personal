
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      // Use locomotive scroll if available
      if ((window as any).locomotiveScroll) {
        (window as any).locomotiveScroll.scrollTo(aboutSection);
      } else {
        aboutSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" data-scroll-section>
      {/* Background Spline 3D Model */}
      <div ref={splineRef} className="absolute inset-0 z-0">
        <iframe src='https://my.spline.design/strawberryicecream-UELBJpNCsVEMVuF2s8r6lqbM/' frameBorder='0' width='100%' height='100%' className="w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 ref={titleRef} data-scroll data-scroll-speed="2" className="text-4xl md:text-6xl gradient-text mb-6 leading-tight font-bold lg:text-7xl text-blue-100">
            Hi, I'm Yuqing Huang
            <br />
            <span className="text-glow text-blue-200">Data Expert</span>
          </h1>
          
          <p ref={subtitleRef} className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed" data-scroll data-scroll-speed="1">2-year experience with data analysis. 
Specializing in statistical modeling, data visualization, machine learning</p>
        </div>

        {/* Scroll Indicator - moved to absolute bottom */}
        <div onClick={scrollToNext} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-white transition-colors duration-300">
          <i className="ph ph-arrow-down text-2xl text-gray-300 hover:text-white transition-colors duration-300"></i>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-orb w-4 h-4 bg-blue-400 opacity-60"></div>
      <div className="absolute top-40 right-20 floating-orb w-6 h-6 bg-purple-500 opacity-40"></div>
      <div className="absolute bottom-32 left-20 floating-orb w-3 h-3 bg-cyan-400 opacity-80"></div>
      <div className="absolute bottom-20 right-10 floating-orb w-5 h-5 bg-pink-400 opacity-50"></div>
    </section>
  );
};

export default Hero;
