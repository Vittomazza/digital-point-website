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
    <section id="chi-siamo" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Chi <span className="text-blue-600">Siamo</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {mockData.company.description}
          </p>
        </motion.div>

        {/* Why Choose Us Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mockData.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                  {/* Icon with 3D Effect */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 15,
                      rotateX: 15
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <IconComponent size={32} className="text-white" strokeWidth={2} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            I Nostri Numeri
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-blue-200 text-sm">
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