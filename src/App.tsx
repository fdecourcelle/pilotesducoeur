import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import CalendarSection from './components/sections/CalendarSection';
import SponsorshipSection from './components/sections/SponsorshipSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'PILOTES DU CŒUR - Une passion automobile au service de la solidarité';
    
    // Initialize intersection observer for animation on scroll
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
    
    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(elem => {
      observer.observe(elem);
    });
    
    // Cleanup observer on component unmount
    return () => {
      document.querySelectorAll('.fade-in').forEach(elem => {
        observer.unobserve(elem);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <CalendarSection />
        <SponsorshipSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;