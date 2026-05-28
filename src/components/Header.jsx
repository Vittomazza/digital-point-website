import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);

    if (item.path) {
      navigate(item.path);
      return;
    }

    if (location.pathname !== '/') {
      sessionStorage.setItem("scrollTo", item.id);
      navigate('/');
    } else {
      scrollToSection(item.id);
    }
  };

  const handleContattaci = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      sessionStorage.setItem("scrollTo", "contatti");
      navigate('/');
    } else {
      scrollToSection('contatti');
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Chi Siamo', id: 'chi-siamo' },
    { label: 'Servizi', id: 'servizi', path: '/servizi' },
    { label: 'Contatti', id: 'contatti' }
  ];

  const isDarkHero = (location.pathname === '/servizi' || location.pathname === '/') && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                scrollToSection('home');
              }
            }}
          >
            <div className={`text-2xl font-bold ${isDarkHero ? 'text-white' : 'text-slate-900'}`}>
              Digital <span className="text-blue-600">Point</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleNavigation(item)}
                className={`${isDarkHero ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-600'} font-medium transition-colors duration-200 relative group`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkHero ? 'bg-white' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`}></span>
              </motion.button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Button
              onClick={handleContattaci}
              className={`${isDarkHero ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-blue-600 hover:bg-blue-700 text-white'} transition-colors duration-200`}
            >
              Contattaci
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isDarkHero ? 'text-white' : 'text-slate-900'} p-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="text-slate-700 hover:text-blue-600 font-medium text-left py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={handleContattaci}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Contattaci
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};