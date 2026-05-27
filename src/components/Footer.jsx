import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Server, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../mockData';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (link) => {
    // Se siamo sulla pagina servizi e clicchiamo su Home, Chi Siamo o Contatti
    if (location.pathname === '/servizi') {
      // Naviga alla home e poi scrolla alla sezione
      navigate('/');
      setTimeout(() => {
        scrollToSection(link.id);
      }, 100);
    } else if (link.path) {
      // Se è un link a una pagina diversa (come /servizi)
      navigate(link.path);
    } else {
      // Altrimenti scrolla alla sezione
      scrollToSection(link.id);
    }
  };

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Chi Siamo', id: 'chi-siamo' },
    { label: 'Servizi', id: 'servizi', path: '/servizi' },
    { label: 'Contatti', id: 'contatti' }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Server size={32} className="text-blue-400 mr-2" />
              <div className="text-2xl font-bold">
                Digital <span className="text-blue-400">Point</span>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              {mockData.company.tagline}
            </p>
            <p className="text-slate-500 text-sm">
              Soluzioni affidabili e sicure per la tua azienda.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Servizi</h3>
            <ul className="space-y-2">
              {mockData.services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => navigate('/servizi')}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm break-all">
                  {mockData.contact.email}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  {mockData.contact.phone}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  {mockData.contact.address}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © {currentYear} Digital Point. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6">
              <button className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">
                Cookie Policy
              </button>
              <button className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200">
                Termini di Servizio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
