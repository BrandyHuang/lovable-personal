
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0 // No delay - animations start immediately
    });

    // Hero animations
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)',
      duration: 1.2,
      ease: 'power2.out'
    }).from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6').from(ctaRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4').from(splineRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8');

    // CTA button hover animation
    const ctaButton = ctaRef.current;
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

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
          
          <button ref={ctaRef} onClick={scrollToContact} className="btn-glow px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 glow-blue" data-scroll data-scroll-speed="0.5">
            <i className="ph ph-rocket-launch mr-2"></i>
            Hire Me
          </button>
        </div>

        {/* Scroll Indicator */}
        <div onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-white transition-colors duration-300">
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
