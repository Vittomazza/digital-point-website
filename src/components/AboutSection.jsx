import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lock, CheckCircle } from 'lucide-react';
import { mockData } from '../mockData';

const iconMap = {
  award: Award,
  lock: Lock,
  'check-circle': CheckCircle
};

export const AboutSection = () => {
  return (
    <section id="chi-siamo" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-sm mb-4 block">La Nostra Identità</span>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-6 tracking-tighter">
            Passione per l'<span className="text-blue-600">Innovazione</span>
          </h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            {mockData.company.description}
          </p>
        </motion.div>

        {/* Why Choose Us Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {mockData.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="h-full bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-blue-100">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20"
                  >
                    <IconComponent size={40} className="text-white" strokeWidth={1.5} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-950 rounded-[3rem] p-16 md:p-24 shadow-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
          
          <h3 className="text-4xl md:text-5xl font-black text-white text-center mb-20 tracking-tight relative z-10">
            Digital Point in <span className="text-blue-500">Numeri</span>
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {mockData.stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-blue-400 font-black uppercase tracking-widest text-xs mb-2">
                  {stat.label}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};