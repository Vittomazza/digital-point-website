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
    { Icon: Server, delay: 0, x: -40, y: -60 },
    { Icon: Shield, delay: 0.2, x: 60, y: -20 },
    { Icon: Code, delay: 0.4, x: -20, y: 40 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center mb-6 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-black tracking-widest uppercase border border-blue-500/20"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-ping"></span>
              Soluzioni IT Professionali
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              Gestione <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">Informatica</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl font-medium leading-relaxed">
              {mockData.company.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('servizi')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-8 text-xl font-bold rounded-2xl transition-all duration-300 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)] hover:-translate-y-1"
              >
                Scopri i Servizi
                <ArrowRight className="ml-3" size={24} />
              </Button>
              <Button
                onClick={() => scrollToSection('contatti')}
                size="lg"
                variant="outline"
                className="border-2 border-white/10 text-white hover:bg-white/5 px-10 py-8 text-xl font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                Contattaci
              </Button>
            </div>
          </motion.div>

          {/* Right 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] hidden lg:flex items-center justify-center"
          >
            {/* Central Stage */}
            <div className="absolute w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 360]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="relative z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(37,99,235,0.5)] flex items-center justify-center border border-white/20"
                style={{
                  transform: 'rotateX(15deg) rotateY(-15deg)',
                }}
              >
                <Server size={120} className="text-white drop-shadow-2xl" strokeWidth={1} />
              </div>
            </motion.div>

            {/* Floating Cards */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  y: [y, y - 30, y],
                  x: [x, x + 15, x],
                  rotate: [index * 10, index * 10 + 5, index * 10]
                }}
                transition={{
                  opacity: { duration: 1, delay: delay + 0.5 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute w-28 h-28 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl flex items-center justify-center"
                style={{
                  zIndex: index === 1 ? 20 : 5
                }}
              >
                <Icon size={48} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" strokeWidth={1.5} />
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
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};
