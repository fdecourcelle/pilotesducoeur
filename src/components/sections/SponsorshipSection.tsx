import React, { useEffect, useRef } from 'react';
import { CheckCircle, ExternalLink, Shield, Award, BarChart, Car, PenTool as Tool, Users } from 'lucide-react';

interface SponsorPackProps {
  title: string;
  price: string;
  benefits: string[];
  highlight?: boolean;
}

const SponsorPack: React.FC<SponsorPackProps> = ({ title, price, benefits, highlight = false }) => {
  return (
    <div className={`sponsor-card flex flex-col ${highlight ? 'border-2 border-accent-400 relative' : ''}`}>
      {highlight && (
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
          <div className="bg-accent-400 text-white text-xs font-bold uppercase py-1 px-2 rounded-full">
            Populaire
          </div>
        </div>
      )}
      
      <h3 className={`text-xl font-bold mb-2 ${highlight ? 'text-accent-400' : 'text-primary-800'}`}>
        {title}
      </h3>
      <div className="text-3xl font-bold mb-6">{price} €</div>
      
      <ul className="flex-grow space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className={`h-5 w-5 mr-2 flex-shrink-0 ${highlight ? 'text-accent-400' : 'text-primary-600'}`} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="https://www.helloasso.com/associations/pilotes-du-coeur/formulaires/1" 
        className={`w-full text-center py-3 px-4 rounded-md font-semibold transition-colors ${
          highlight 
            ? 'bg-accent-400 text-white hover:bg-accent-500' 
            : 'bg-primary-800 text-white hover:bg-primary-700'
        }`}
      >
        Choisir cette offre
      </a>
    </div>
  );
};

const SponsorshipSection: React.FC = () => {
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
    <section id="sponsorship" ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-heading text-center mb-6 fade-in">Sponsoring & Contreparties</h2>
        <p className="text-center text-lg text-dark-700 max-w-3xl mx-auto mb-12 fade-in" style={{transitionDelay: '200ms'}}>
          Soutenez notre projet et bénéficiez d'une visibilité exceptionnelle tout en contribuant 
          à une cause solidaire. Nos packs sont adaptés à tous les budgets et objectifs.
        </p>
        
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{transitionDelay: '300ms'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Image de marque</h3>
            <p className="text-dark-700">
              Associez votre marque à des valeurs fortes d'engagement social et de performance sportive.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{transitionDelay: '400ms'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
              <BarChart className="h-8 w-8 text-accent-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visibilité médiatique</h3>
            <p className="text-dark-700">
              Profitez d'une exposition lors de nos événements, sur nos supports de communication et nos réseaux sociaux.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center fade-in" style={{transitionDelay: '500ms'}}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-primary-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Impact social</h3>
            <p className="text-dark-700">
              Participez directement à un projet solidaire concret et mesurable avec L'Arche de la Vallée.
            </p>
          </div>
        </div>
        
        {/* Budget Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16 fade-in" style={{transitionDelay: '1000ms'}}>
          <h3 className="text-2xl font-bold text-primary-800 mb-6">Budget et besoins pour la saison 2025</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Car className="h-6 w-6 text-primary-800 mr-3" />
                  <h4 className="text-lg font-bold">Véhicule et Sécurité</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Location du véhicule</span>
                    <span className="font-semibold">8 200 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Assurance</span>
                    <span className="font-semibold">1 500 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Équipement de sécurité</span>
                    <span className="font-semibold">3 000 €</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Tool className="h-6 w-6 text-primary-800 mr-3" />
                  <h4 className="text-lg font-bold">Logistique & Communication</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Déplacements et hébergements</span>
                    <span className="font-semibold">4 800 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Communication et supports visuels</span>
                    <span className="font-semibold">2 500 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Divers et logistique</span>
                    <span className="font-semibold">2 000 €</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary-800 text-white rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold">Budget Total 2025</h4>
              <div className="text-2xl font-bold">22 000 €</div>
            </div>
            <p className="text-sm opacity-90">
              Ce budget prévisionnel couvre l'ensemble des dépenses nécessaires pour la saison 2025.
              Votre soutien est essentiel pour nous permettre d'atteindre nos objectifs sportifs et solidaires.
            </p>
          </div>
        </div>
        
        {/* Sponsorship Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="fade-in" style={{transitionDelay: '600ms'}}>
            <SponsorPack 
              title="Pack Starter"
              price="500"
              benefits={[
                "Logo sur les réseaux sociaux",
                "Mention dans nos communiqués",
                "Logo sur notre site web",
                "Certificat de partenariat solidaire"
              ]}
            />
          </div>
          
          <div className="fade-in" style={{transitionDelay: '700ms'}}>
            <SponsorPack 
              title="Pack Silver"
              price="1500"
              benefits={[
                "Avantages du Pack Starter",
                "Logo de petite taille sur la voiture",
                "Présence sur nos supports imprimés",
                "2 invitations aux événements",
                "Photos dédicacées"
              ]}
            />
          </div>
          
          <div className="fade-in" style={{transitionDelay: '800ms'}}>
            <SponsorPack 
              title="Pack Gold"
              price="3000"
              benefits={[
                "Avantages du Pack Silver",
                "Logo de taille moyenne sur la voiture",
                "Animation sur votre site d'entreprise",
                "Publications dédiées sur nos réseaux",
                "4 invitations VIP aux événements",
                "Participation à une journée solidaire"
              ]}
              highlight={true}
            />
          </div>
          
          <div className="fade-in" style={{transitionDelay: '900ms'}}>
            <SponsorPack 
              title="Pack Platinum"
              price="5000"
              benefits={[
                "Avantages du Pack Gold",
                "Logo en position premium sur la voiture",
                "Co-branding sur notre équipement",
                "Contenu vidéo personnalisé",
                "Baptême en voiture de course",
                "6 invitations VIP + cocktail privatif",
                "Présence garantie dans les médias"
              ]}
            />
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center fade-in" style={{transitionDelay: '1100ms'}}>
          <h3 className="text-2xl font-bold mb-4">Prêt à rejoindre l'aventure ?</h3>
          <p className="text-lg text-dark-700 mb-8">
            Nous sommes ouverts à des formules sur mesure et des partenariats adaptés à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn btn-primary">
              Devenir sponsor
            </a>
            <a 
              href="/Dossier sponsors .pdf"
              className="btn border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white inline-flex items-center justify-center whitespace-nowrap min-w-[250px]"
              download="Dossier_sponsors.pdf"
            >
              <span className="mr-2">Télécharger notre dossier</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;