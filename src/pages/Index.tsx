
import React, { useEffect, useRef } from 'react';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import BackgroundEffects from '../components/BackgroundEffects';

// Extend Window interface for ScrollTrigger
declare global {
  interface Window {
    ScrollTrigger: any;
  }
}

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Locomotive Scroll after component mounts
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      
      if (scrollRef.current) {
        const scroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
        });

        // Store scroll instance on window for global access
        (window as any).locomotiveScroll = scroll;

        // Update ScrollTrigger when Locomotive Scroll updates
        scroll.on('scroll', () => {
          if (window.ScrollTrigger) {
            window.ScrollTrigger.update();
          }
        });

        // Refresh on window resize
        window.addEventListener('resize', () => {
          scroll.update();
        });

        return () => {
          scroll.destroy();
        };
      }
    };

    // Delay initialization to ensure all components are loaded
    const timer = setTimeout(() => {
      initLocomotiveScroll();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      <BackgroundEffects />
      <Navigation />
      
      <div ref={scrollRef} data-scroll-container className="main-content" style={{ opacity: 0 }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
