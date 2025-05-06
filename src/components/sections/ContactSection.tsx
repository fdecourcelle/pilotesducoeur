import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'sponsorship',
    message: '',
  });
  
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // Initialiser EmailJS avec votre Public Key
      emailjs.init("-vmWmdm6KQ_Y2XUBC");

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Non renseigné',
        subject: getSubjectText(formData.subject),
        message: formData.message,
      };

      await emailjs.send(
        'service_f6vw25r',
        'template_noesvas',
        templateParams
      );

      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'sponsorship',
        message: '',
      });

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSubjectText = (subject: string): string => {
    switch (subject) {
      case 'sponsorship':
        return 'Demande de sponsoring';
      case 'partnership':
        return 'Proposition de partenariat';
      case 'support':
        return 'Support et questions';
      case 'other':
        return 'Autre demande';
      default:
        return 'Contact via le site web';
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="section-heading text-center mb-6 fade-in">Contactez-nous</h2>
        <p className="text-center text-lg text-dark-700 max-w-3xl mx-auto mb-12 fade-in" style={{transitionDelay: '200ms'}}>
          Une question ? Un projet ? N'hésitez pas à nous contacter. 
          Nous vous répondrons dans les plus brefs délais.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8 fade-in" style={{transitionDelay: '400ms'}}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-800 mb-6">Informations de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent-400 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@pilotesducoeur.com" className="text-dark-700 hover:text-accent-400">
                      contact@pilotesducoeur.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent-400 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <a href="tel:+33600000000" className="text-dark-700 hover:text-accent-400">
                      +33 6 00 00 00 00
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent-400 mt-1 mr-3" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-dark-700">
                      Drôme (26), France
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in" style={{transitionDelay: '600ms'}}>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                    placeholder="Votre numéro"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                  >
                    <option value="sponsorship">Devenir sponsor</option>
                    <option value="partnership">Partenariat</option>
                    <option value="support">Support et questions</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-800 focus:border-transparent resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`mb-6 p-4 rounded-md ${
                  status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                }`}>
                  {status.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn btn-primary flex items-center justify-center ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;