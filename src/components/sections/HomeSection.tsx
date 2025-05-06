import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HomeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const fadeElems = sectionRef.current?.querySelectorAll('.fade-in');
    fadeElems?.forEach(elem => observer.observe(elem));
    
    return () => {
      fadeElems?.forEach(elem => observer.unobserve(elem));
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-r from-primary-800 to-dark-900 flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background overlay with racing track pattern */}
      <div 
        className="absolute inset-0 bg-[url('/circuit-background.jpg')] bg-cover bg-center opacity-30"
        style={{ backgroundPosition: 'bottom' }}
      ></div>
      
      {/* Content container */}
      <div className="container max-w-7xl mx-auto px-4 z-10 py-24 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-center md:text-left">
            <div className="mb-8 fade-in">
              <img 
                src="/logo.png" 
                alt="PILOTES DU CŒUR Logo" 
                className="h-32 md:h-40 w-auto mx-auto md:mx-0"
              />
            </div>
            <p className="text-xl md:text-2xl mb-6 opacity-90 fade-in" style={{transitionDelay: '200ms'}}>
              Une passion automobile au service de la solidarité
            </p>
            <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0 opacity-80 fade-in" style={{transitionDelay: '400ms'}}>
              Rejoignez notre aventure en Championnat de France de la Montagne 2025 pour allier performance sportive et engagement social.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 fade-in" style={{transitionDelay: '600ms'}}>
              <a href="#sponsorship" className="btn btn-accent">
                Devenir sponsor
              </a>
              <a href="#about" className="btn border-2 border-white hover:bg-white hover:text-primary-800">
                Découvrir notre mission
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center fade-in" style={{transitionDelay: '800ms'}}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-800 to-accent-400 opacity-70 blur-lg rounded-lg"></div>
              <img 
                src="image voiture 4.jpg" 
                alt="Voiture de course PILOTES DU CŒUR" 
                className="relative rounded-lg w-full max-w-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity"
      >
        <span className="text-sm mb-2">Découvrir</span>
        <ChevronDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
};

export default HomeSection;