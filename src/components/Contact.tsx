import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    if (section && form) {
      // Section animation
      gsap.fromTo('.contact-title', {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Form inputs fade from left
      gsap.fromTo('.form-input', {
        opacity: 0,
        x: -50
      }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Submit button animation
      gsap.fromTo('.submit-btn', {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.submit-btn',
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      // Social icons glow on hover
      const socialIcons = document.querySelectorAll('.social-icon');
      socialIcons.forEach(icon => {
        const iconElement = icon as HTMLElement;
        iconElement.addEventListener('mouseenter', () => {
          gsap.to(iconElement, {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        iconElement.addEventListener('mouseleave', () => {
          gsap.to(iconElement, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out',
      onComplete: () => {
        // Show success message (you can replace this with actual form submission)
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    });
  };
  return <section id="contact" ref={sectionRef} className="py-20 md:py-32" data-scroll-section>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="contact-title text-3xl md:text-4xl font-bold gradient-text mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Curious to uncover insights from data? I'm always excited to collaborate on meaningful and innovative projects.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Contact Info & Social */}
            <div className="space-y-8 text-center max-w-md">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <i className="ph ph-envelope text-blue-400 text-xl mr-4"></i>
                    <span>yqhuang00@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="ph ph-map-pin text-blue-400 text-xl mr-4"></i>
                    <span>San Francisco Bay Area, CA</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="ph ph-phone text-blue-400 text-xl mr-4"></i>
                    <span>+1 (628) 444-9955</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/BrandyHuang" target="_blank" rel="noopener noreferrer" className="social-icon glass-dark p-3 rounded-lg hover:glow-blue transition-all duration-300 group">
                    <i className="ph ph-github-logo text-xl text-gray-400 group-hover:text-white"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/yq-huang" target="_blank" rel="noopener noreferrer" className="social-icon glass-dark p-3 rounded-lg hover:glow-blue transition-all duration-300 group">
                    <i className="ph ph-linkedin-logo text-xl text-gray-400 group-hover:text-white"></i>
                  </a>
                </div>
              </div>

              {/* Floating elements */}
              <div className="relative">
                <div className="floating-orb w-4 h-4 bg-blue-400 opacity-40 absolute top-10 right-10"></div>
                <div className="floating-orb w-3 h-3 bg-purple-500 opacity-60 absolute bottom-5 left-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;