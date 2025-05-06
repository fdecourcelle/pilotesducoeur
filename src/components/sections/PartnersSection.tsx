import React, { useRef, useEffect } from 'react';
import { Heart, Users, Home, Palette } from 'lucide-react';

const PartnersSection: React.FC = () => {
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
    <section id="partners" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-heading text-center mb-6 fade-in">Un engagement solidaire concret</h2>
        
        <div className="text-center mb-12 fade-in" style={{transitionDelay: '200ms'}}>
          <p className="text-lg text-dark-700 max-w-3xl mx-auto mb-4">
            <span className="font-bold text-primary-800">PILOTES DU CŒUR</span> s'engage à reverser{' '}
            <span className="font-bold text-accent-400">100 %</span> des excédents financiers issus du 
            sponsoring à L'Arche de la Vallée, située dans la Drôme.
          </p>
          <p className="text-2xl font-bold text-accent-400 mb-8">
            Objectif : 10 000 Euros reversés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{transitionDelay: '300ms'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Communauté</h3>
            <p className="text-dark-700">
              Plus de 70 personnes avec et sans handicap qui vivent ensemble
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{transitionDelay: '400ms'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
              <Home className="h-8 w-8 text-accent-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cadre de vie</h3>
            <p className="text-dark-700">
              Des maisons à taille humaine pour un accueil chaleureux
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{transitionDelay: '500ms'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Palette className="h-8 w-8 text-primary-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Activités inclusives</h3>
            <p className="text-dark-700">
              Arts, sport, ateliers, culture et bien plus encore
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{transitionDelay: '600ms'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
              <Heart className="h-8 w-8 text-accent-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Impact</h3>
            <p className="text-dark-700">
              Chaque course devient un véritable acte de solidarité
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center fade-in" style={{transitionDelay: '700ms'}}>
          <h3 className="text-2xl font-bold text-primary-800 mb-4">Notre partenariat</h3>
          <p className="text-lg text-dark-700 max-w-3xl mx-auto">
            Ce partenariat permet de donner du sens à la performance sportive : chaque course devient un acte 
            de solidarité concret qui contribue directement au bien-être des résidents de L'Arche de la Vallée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 