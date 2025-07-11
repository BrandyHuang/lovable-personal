
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate the loader text
    tl.from('.loader-text', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    });
    
    // Animate the progress bar
    tl.to('.progress-bar', {
      width: '100%',
      duration: 2.5,
      ease: 'power2.out'
    }, '-=0.5');
    
    // Fade out preloader and show main content
    tl.to('.preloader', {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        document.querySelector('.preloader')?.remove();
        gsap.to('.main-content', {
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        });
      }
    }, '+=0.5');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="preloader">
      <div className="loader-text">Yuqing</div>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-400">
        Loading Experience...
      </div>
    </div>
  );
};

export default Preloader;
