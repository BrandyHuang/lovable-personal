import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [{
    name: 'Python',
    icon: 'ph-snake'
  }, {
    name: 'JavaScript',
    icon: 'ph-javascript-logo'
  }, {
    name: 'React',
    icon: 'ph-atom'
  }, {
    name: 'Node.js',
    icon: 'ph-node-logo'
  }, {
    name: 'TensorFlow',
    icon: 'ph-brain'
  }, {
    name: 'SQL',
    icon: 'ph-database'
  }, {
    name: 'R',
    icon: 'ph-container'
  }, {
    name: 'AWS',
    icon: 'ph-cloud'
  }];

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const skillsContainer = skillsRef.current;
    if (section && image && content && skillsContainer) {
      // Section fade and blur clear
      gsap.fromTo(section, {
        opacity: 0,
        filter: 'blur(10px)'
      }, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Image enters from left
      gsap.fromTo(image, {
        opacity: 0,
        x: -100
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Content enters from right
      gsap.fromTo(content, {
        opacity: 0,
        x: 100
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: content,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      // Skills icons appear staggered
      gsap.fromTo(skillsContainer.children, {
        opacity: 0,
        y: 50,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: skillsContainer,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });

      // Image hover effect
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }
  }, []);

  return <section id="about" ref={sectionRef} className="py-20 md:py-32" data-scroll-section>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start" data-scroll data-scroll-speed="1">
            <div className="relative">
              <div className="w-80 h-80 glass rounded-full p-2 glow-blue">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                  <i className="ph ph-user text-8xl text-white opacity-80"></i>
                </div>
              </div>
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 floating-orb w-6 h-6 bg-cyan-400 opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 floating-orb w-4 h-4 bg-purple-500 opacity-80"></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} data-scroll data-scroll-speed="0.5">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">I'm a passionate data analyst with over 2 years of experience in creating innovative solutions that bridge the gap between data insights and user experience.</p>
              <p>My expertise spans across machine learning, data visualization, and statistical modeling. I love transforming complex data into actionable insights and building scalable applications that make a real impact.</p>
              <p>When I'm not staying with data, you'll find me exploring ice cream! Cuz, I am a real Gelato Lover!</p>
            </div>

            {/* Skills Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies I Work With</h3>
              <div ref={skillsRef} className="grid grid-cols-4 gap-4">
                {skills.map((skill, index) => <div key={skill.name} className="glass-dark rounded-lg p-4 text-center hover:glow-blue transition-all duration-300 cursor-pointer group">
                    <i className={`ph ${skill.icon} text-2xl text-blue-400 group-hover:text-white transition-colors mb-2`}></i>
                    <p className="text-xs text-gray-400 group-hover:text-white transition-colors">{skill.name}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default About;
