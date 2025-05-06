import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Wrench, Calendar } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'sponsorship',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here in a real application
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'sponsorship',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-primary-800 text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center fade-in">Contact & Partenariat</h2>
        <p className="text-center text-lg max-w-3xl mx-auto mb-12 opacity-90 fade-in" style={{transitionDelay: '200ms'}}>
          Vous souhaitez nous soutenir, en savoir plus sur notre projet ou simplement échanger ? 
          N'hésitez pas à nous contacter, nous serons ravis de vous répondre.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="fade-in" style={{transitionDelay: '400ms'}}>
            <form 
              onSubmit={handleSubmit} 
              className="bg-white text-dark-900 rounded-lg shadow-lg p-8"
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Send className="h-8 w-8 text-primary-800" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2">Message envoyé !</h3>
                  <p className="text-dark-700">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-1">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      required
                    >
                      <option value="sponsorship">Sponsoring</option>
                      <option value="partnership">Partenariat matériel</option>
                      <option value="event">Événement</option>
                      <option value="media">Presse & Médias</option>
                      <option value="other">Autre demande</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-800 text-white py-3 px-6 rounded-md font-bold hover:bg-primary-700 transition-colors"
                  >
                    Envoyer
                  </button>
                </>
              )}
            </form>
          </div>
          
          {/* Contact info */}
          <div className="fade-in" style={{transitionDelay: '600ms'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-accent-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:contact@pilotesducoeur.com" className="hover:text-accent-400 transition-colors">
                      contact@pilotesducoeur.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-accent-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <a href="tel:06 76 05 30 34" className="hover:text-accent-400 transition-colors">
                      06 76 05 30 34
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-accent-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Siège social</h4>
                    <address className="not-italic">
                      271 Chemin de Marsou<br />
                      07340 THORRENC, France
                    </address>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Autres formes de soutien</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Wrench className="h-5 w-5 mr-3 text-accent-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Partenariat matériel</h4>
                    <p className="text-white/80 text-sm">
                      Nous recherchons également des partenaires pour des équipements, pièces ou services.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-accent-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Événements</h4>
                    <p className="text-white/80 text-sm">
                      Possibilité d'organiser des événements d'entreprise autour de nos courses.
                    </p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;