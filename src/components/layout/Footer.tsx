import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">
              PILOTES <span className="text-accent-400">DU CŒUR</span>
            </h2>
            <p className="mb-4 text-gray-300">Une passion automobile au service de la solidarité</p>
           
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation rapide</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-accent-400 transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent-400 transition-colors">Association & Pilote</a>
              </li>
              <li>
                <a href="#calendar" className="text-gray-300 hover:text-accent-400 transition-colors">Calendrier</a>
              </li>
              <li>
                <a href="#sponsorship" className="text-gray-300 hover:text-accent-400 transition-colors">Sponsoring</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Réseaux</h3>
            <div className="space-y-2 mb-4">
              <a href="mailto:contact@pilotesducoeur.com" className="flex items-center text-gray-300 hover:text-accent-400 transition-colors">
                <Mail size={18} className="mr-2" />
                <span>contact@pilotesducoeur.com</span>
              </a>
              <a href="tel:+33600000000" className="flex items-center text-gray-300 hover:text-accent-400 transition-colors">
                <Phone size={18} className="mr-2" />
                <span>06 76 05 30 34</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-400 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PILOTES DU CŒUR. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;