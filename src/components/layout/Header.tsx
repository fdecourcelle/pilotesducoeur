import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently visible
      const sections = ['home', 'about', 'calendar', 'sponsorship', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-800 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="PILOTES DU CŒUR" className="h-12 w-auto" />
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Accueil</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>Association & Pilote</a>
          <a href="#calendar" className={`nav-link ${activeSection === 'calendar' ? 'active' : ''}`}>Calendrier</a>
          <a href="#sponsorship" className={`nav-link ${activeSection === 'sponsorship' ? 'active' : ''}`}>Sponsoring</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-primary-800 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col p-4 space-y-4">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMenu}>Accueil</a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMenu}>Association & Pilote</a>
          <a href="#calendar" className={`nav-link ${activeSection === 'calendar' ? 'active' : ''}`} onClick={closeMenu}>Calendrier</a>
          <a href="#sponsorship" className={`nav-link ${activeSection === 'sponsorship' ? 'active' : ''}`} onClick={closeMenu}>Sponsoring</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;