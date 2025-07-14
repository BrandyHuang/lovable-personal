
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Instacart User Retention Analysis",
      description: "Analyzing consumer retension based on different segmentation in eCommerce market using survival analysis.",
      image: "/lovable-uploads/46bbfedf-32bf-425a-a144-a49acf23bf9d.png",
      tech: ["Big Query", "GCS", "Looker Studio", "Survival Analysis", "Google Colab"],
      link: "https://github.com/BrandyHuang/Instacart_User_Retention_Analysis"
    },
    {
      title: "Predictive Analysis on Consumer Transaction Behavior",
      description: "Utilizing LLM and statistical model to predict customer transaction behaviors.",
      image: "/lovable-uploads/178576b3-67a3-4766-bfb8-f4900fb84adc.png",
      tech: ["Matplotlib", "PySpark", "MLib Regression", "LLM", "Text Classification"],
      link: "https://github.com/BrandyHuang/Predictive-Analysis-on-Consumer-Transaction-Behavior"
    },
    {
      title: "ML Powered Diabetes Risk Analysis",
      description: "Uncovering insights on female diabetes in different age groups.",
      image: "/lovable-uploads/52ab243c-1e6b-48a7-a297-cd24c9dbef23.png",
      tech: ["Tableau", "Logistic Regression", "Random Forest", "Python"],
      link: "#"
    },
    {
      title: "Business Open Toolkit",
      description: "A toolkit to help businesses streamline their operations and decision-making.",
      image: "/lovable-uploads/33ab3a41-1716-4a36-9d7e-4f97fdb594af.png",
      tech: ["API Connection", "Web Scraping", "Gemini AI", "Matplotlib"],
      link: "#"
    },
    {
      title: "Data Job Salaries Analysis",
      description: "Performed data modeling to explore trends in the data industry across various job positions.",
      image: "/lovable-uploads/270aab5f-3650-4e90-a461-3d23ea2a890b.png",
      tech: ["R", "MySQL", "Excel Pivot"],
      link: "#"
    },
    {
      title: "Conjoint Analysis of Smartphone",
      description: "Analyzing consumer preferences in the smartphone market using conjoint analysis.",
      image: "/lovable-uploads/b19e59e8-96f1-4d71-a0e4-bb92427c312a.png",
      tech: ["R", "Linear Regression", "Conjoint Analysis", "Price Optimization"],
      link: "#"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards) {
      // Section title animation
      gsap.fromTo('.projects-title',
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Cards animation with stagger
      gsap.fromTo(cards.children,
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Add hover effects to cards
      Array.from(cards.children).forEach((card) => {
        const cardElement = card as HTMLElement;
        
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32" data-scroll-section>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="projects-title text-3xl md:text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of my recent work spanning data science, statistical analysis, and innovative solutions.
          </p>
        </div>

        {/* Desktop: Horizontal scroll layout */}
        <div className="hidden md:block overflow-x-auto pb-6">
          <div ref={cardsRef} className="flex space-x-6 w-max">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-dark rounded-xl p-6 w-80 hover:glow-blue transition-all duration-300 group cursor-pointer"
                data-scroll
                data-scroll-speed="0.5"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="btn-glow px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 w-full">
                  <i className="ph ph-arrow-square-out mr-2"></i>
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="md:hidden space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-dark rounded-xl p-6 hover:glow-blue transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="btn-glow px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 w-full">
                <i className="ph ph-arrow-square-out mr-2"></i>
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
