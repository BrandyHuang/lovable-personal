
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const BackgroundEffects = () => {
  useEffect(() => {
    // Create floating orbs animation
    const orbs = document.querySelectorAll('.bg-orb');
    
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: -30,
        x: Math.sin(index) * 20,
        duration: 4 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.5
      });

      gsap.to(orb, {
        opacity: 0.3,
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.2
      });
    });

    // Parallax background movement
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.01;
      const y = (e.clientY - window.innerHeight / 2) * 0.01;

      gsap.to('.parallax-bg', {
        x: x,
        y: y,
        duration: 2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Parallax Background */}
      <div className="parallax-bg"></div>
      
      {/* Floating Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="bg-orb floating-orb w-64 h-64 bg-blue-500 opacity-5 absolute top-20 left-10 blur-3xl"></div>
        <div className="bg-orb floating-orb w-48 h-48 bg-purple-600 opacity-10 absolute top-1/3 right-20 blur-3xl"></div>
        <div className="bg-orb floating-orb w-32 h-32 bg-cyan-400 opacity-15 absolute bottom-1/3 left-1/4 blur-2xl"></div>
        <div className="bg-orb floating-orb w-56 h-56 bg-pink-500 opacity-8 absolute bottom-20 right-1/3 blur-3xl"></div>
        <div className="bg-orb floating-orb w-40 h-40 bg-indigo-500 opacity-12 absolute top-1/2 left-1/2 blur-2xl"></div>
        
        {/* Small floating particles */}
        <div className="bg-orb floating-orb w-2 h-2 bg-blue-400 opacity-60 absolute top-1/4 left-1/3"></div>
        <div className="bg-orb floating-orb w-3 h-3 bg-purple-500 opacity-40 absolute top-3/4 right-1/4"></div>
        <div className="bg-orb floating-orb w-1 h-1 bg-cyan-400 opacity-80 absolute bottom-1/4 left-3/4"></div>
        <div className="bg-orb floating-orb w-2 h-2 bg-pink-400 opacity-50 absolute top-1/2 right-1/2"></div>
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/5 to-transparent"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-pink-900/5 to-transparent"></div>
      </div>
    </>
  );
};

export default BackgroundEffects;
