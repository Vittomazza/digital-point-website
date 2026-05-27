import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Code, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

export const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Server, delay: 0, x: -20, y: -30 },
    { Icon: Shield, delay: 0.2, x: 20, y: -20 },
    { Icon: Code, delay: 0.4, x: 0, y: -40 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold"
            >
              Soluzioni IT Professionali
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Gestione Informatica
              <span className="block text-blue-600 mt-2">di Eccellenza</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              {mockData.company.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('servizi')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Scopri i Servizi
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('contatti')}
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 text-lg transition-all duration-200 hover:shadow-lg"
              >
                Contattaci
              </Button>
            </div>
          </motion.div>

          {/* Right 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden lg:flex items-center justify-center"
          >
            {/* Central Cube */}
            <motion.div
              animate={{
                rotateY: [0, 360],
                rotateX: [0, 15, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center"
                style={{
                  transform: 'rotateX(15deg) rotateY(-15deg)',
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.5)'
                }}
              >
                <Server size={80} className="text-white" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [y, y - 20, y],
                  x: [x, x + 10, x]
                }}
                transition={{
                  opacity: { duration: 0.5, delay: delay + 0.5 },
                  scale: { duration: 0.5, delay: delay + 0.5 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
                }}
                className="absolute w-24 h-24 bg-white rounded-xl shadow-xl flex items-center justify-center"
                style={{
                  top: `${50 + index * 15}%`,
                  left: `${30 + index * 20}%`
                }}
              >
                <Icon size={40} className="text-blue-600" strokeWidth={1.5} />
              </motion.div>
            ))}

            
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

