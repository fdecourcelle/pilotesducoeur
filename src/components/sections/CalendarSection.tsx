import React, { useEffect, useRef } from 'react';
import { Calendar, Map, Target } from 'lucide-react';

interface EventProps {
  date: string;
  title: string;
  location: string;
  type: 'race' | 'solidarity';
  description: string;
}

const Event: React.FC<EventProps> = ({ date, title, location, type, description }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${type === 'race' ? 'border-primary-800' : 'border-accent-400'}`}>
      <div className="flex items-start">
        <div className={`flex-shrink-0 p-3 rounded-full mr-4 ${type === 'race' ? 'bg-primary-100 text-primary-800' : 'bg-accent-100 text-accent-600'}`}>
          {type === 'race' ? <Calendar size={24} /> : <Target size={24} />}
        </div>
        <div>
          <span className={`text-sm font-semibold uppercase ${type === 'race' ? 'text-primary-800' : 'text-accent-500'}`}>
            {date}
          </span>
          <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
          <div className="flex items-center text-dark-600 mb-3">
            <Map size={16} className="mr-2" />
            <span>{location}</span>
          </div>
          <p className="text-dark-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

const CalendarSection: React.FC = () => {
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
    <section id="calendar" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-heading text-center mb-6 fade-in">Calendrier Sportif & Solidaire</h2>
        <p className="text-center text-lg text-dark-700 max-w-3xl mx-auto mb-12 fade-in" style={{transitionDelay: '200ms'}}>
          Découvrez nos événements pour la saison 2025, alliant courses du Championnat de France 
          de la Montagne et actions solidaires avec L'Arche de la Vallée.
        </p>
        
        {/* Goal counter */}
        <div className="bg-primary-800 rounded-lg shadow-lg p-8 text-white text-center mb-16 fade-in" style={{transitionDelay: '400ms'}}>
          <h3 className="text-2xl font-bold mb-4">Notre objectif solidaire 2025</h3>
          <p className="text-lg mb-6">
            En partenariat avec L'Arche de la Vallée, nous visons à collecter :
          </p>
          <div className="text-5xl md:text-6xl font-bold text-accent-400 mb-6">10 000 €</div>
          <p className="text-lg">
            Ces fonds permettront de financer des équipements adaptés et des activités 
            inclusives pour les personnes en situation de handicap.
          </p>
          <a href="#sponsorship" className="btn btn-accent mt-6">Contribuer</a>
        </div>
        
        {/* Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="fade-in" style={{transitionDelay: '600ms'}}>
            <Event 
              date="15-16 Mai 2025"
              title="Course de Côte du Beaujolais"
              location="Beaujolais, France"
              type="race"
              description="Première manche du championnat avec ses virages techniques et son ambiance conviviale. L'équipe PILOTES DU CŒUR sera présente pour relever le défi sportif."
            />
          </div>
          
          <div className="fade-in" style={{transitionDelay: '700ms'}}>
            <Event 
              date="12 Juin 2025"
              title="Journée Solidaire"
              location="L'Arche de la Vallée"
              type="solidarity"
              description="Rencontre avec les résidents de L'Arche de la Vallée, présentation de la voiture et animations inclusives pour tous. Un moment de partage inoubliable."
            />
          </div>
          
          <div className="fade-in" style={{transitionDelay: '800ms'}}>
            <Event 
              date="20-21 Juillet 2025"
              title="Course de Côte de Limonest"
              location="Limonest, France"
              type="race"
              description="Une des courses les plus techniques du championnat. Notre équipe s'élancera sur ce tracé mythique avec les couleurs de nos partenaires solidaires."
            />
          </div>
          
          <div className="fade-in" style={{transitionDelay: '900ms'}}>
            <Event 
              date="8 Septembre 2025"
              title="Gala de charité"
              location="Lyon, France"
              type="solidarity"
              description="Soirée de gala avec nos sponsors et partenaires pour célébrer la saison et remettre officiellement les fonds collectés à L'Arche de la Vallée."
            />
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16 fade-in" style={{transitionDelay: '1000ms'}}>
          <p className="text-lg text-dark-800 mb-6">
            Vous souhaitez participer à l'un de nos événements ou organiser une action solidaire avec nous ?
          </p>
          <a href="#contact" className="btn btn-primary">Contactez-nous</a>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;