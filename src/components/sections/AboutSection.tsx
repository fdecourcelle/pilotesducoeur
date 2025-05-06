import React, { useEffect, useRef } from 'react';
import { Heart, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-heading text-center mb-12 fade-in">L'Association & Le Pilote</h2>
        
        {/* Association info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="fade-in" style={{transitionDelay: '200ms'}}>
            <h3 className="text-2xl font-bold text-primary-800 mb-6">PILOTES DU CŒUR</h3>
            <p className="text-lg mb-4 text-dark-700">
              PILOTES DU CŒUR est une association qui allie passion automobile et engagement solidaire. 
              Née de la conviction que le sport automobile peut être vecteur de valeurs positives, 
              notre équipe s'engage dans des compétitions prestigieuses tout en soutenant des causes humanitaires.
            </p>
            <p className="text-lg mb-6 text-dark-700">
              Nous participons au Championnat de France de la Montagne, une compétition exigeante 
              qui met en valeur performances techniques et humaines. Chaque course devient une 
              opportunité de sensibiliser le public à nos actions solidaires et de collecter des fonds.
            </p>
            
            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Heart className="text-accent-400 mb-2" size={28} />
                <h4 className="font-bold mb-1">Solidarité</h4>
                <p className="text-sm text-dark-600">Soutien aux personnes vulnérables</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Award className="text-primary-800 mb-2" size={28} />
                <h4 className="font-bold mb-1">Excellence</h4>
                <p className="text-sm text-dark-600">Recherche de la performance</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                <Users className="text-primary-600 mb-2" size={28} />
                <h4 className="font-bold mb-1">Inclusion</h4>
                <p className="text-sm text-dark-600">Accessibilité pour tous</p>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in" style={{transitionDelay: '400ms'}}>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-800/30 to-accent-400/30 blur-lg rounded-lg"></div>
            <img 
              src="Photo luc voiture.JPG" 
              alt="L'équipe PILOTES DU CŒUR" 
              className="relative w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Pilot biography */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative fade-in" style={{transitionDelay: '600ms'}}>
            <div className="absolute -inset-4 bg-gradient-to-tl from-primary-800/30 to-accent-400/30 blur-lg rounded-lg"></div>
            <img 
              src="image voiture 2.jpg" 
              alt="Luc Seignovert, pilote PILOTES DU CŒUR" 
              className="relative w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 fade-in" style={{transitionDelay: '800ms'}}>
            <h3 className="text-2xl font-bold text-primary-800 mb-6">Luc Seignovert, pilote engagé</h3>
            <p className="text-lg mb-4 text-dark-700">
              Pilote passionné depuis son plus jeune âge, Luc Seignovert a toujours voulu donner 
              un sens plus profond à sa pratique sportive. Multiple champion régional, il a décidé 
              en 2023 de créer PILOTES DU CŒUR pour allier sa passion à un engagement solidaire fort.
            </p>
            <p className="text-lg mb-6 text-dark-700">
              Fort d'une expérience de plus de 15 ans en compétition automobile, Luc apporte 
              son expertise technique et sa détermination au service d'une cause qui lui tient à cœur : 
              l'inclusion et le soutien aux personnes en situation de handicap.
            </p>
            
            {/* Quote */}
            <div className="bg-primary-800 text-white p-6 rounded-lg shadow-lg relative">
              <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2">
                <span className="text-6xl text-accent-400">"</span>
              </div>
              <p className="relative z-10 italic text-lg mb-4">
                La vraie victoire n'est pas sur la ligne d'arrivée, mais dans chaque sourire 
                que nous aidons à faire naître grâce à nos actions solidaires.
              </p>
              <p className="font-bold text-right">— Luc Seignovert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;