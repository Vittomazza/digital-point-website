import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LifeBuoy, Monitor, Printer, Phone, Briefcase, 
  LayoutDashboard, ShieldCheck, Globe, Server, 
  Building2, Recycle, Fingerprint, CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card } from './ui/card';
import { mockData } from '../mockData';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const iconMap = {
  'life-buoy': LifeBuoy,
  'monitor': Monitor,
  'printer': Printer,
  'phone': Phone,
  'briefcase': Briefcase,
  'layout-dashboard': LayoutDashboard,
  'shield-check': ShieldCheck,
  'globe': Globe,
  'server': Server,
  'building-2': Building2,
  'recycle': Recycle,
  'fingerprint': Fingerprint,
};

export const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // Mostriamo solo i primi 6 servizi nella Home per non appesantire la pagina
  const displayServices = mockData.services.slice(0, 6);

  return (
    <section id="servizi" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
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
            I Nostri <span className="text-blue-600">Servizi</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Soluzioni complete per la gestione e l'ottimizzazione delle infrastrutture informatiche aziendali
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group perspective-1000"
              >
                <motion.div
                  whileHover={{ 
                    y: -15,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  transition={{ duration: 0.4 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Card className="h-full bg-white border-2 border-slate-200 hover:border-blue-400 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                    {/* Background Gradient on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === service.id ? 0.05 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"
                    ></motion.div>

                    {/* Icon Container with 3D Effect */}
                    <motion.div
                      animate={{
                        rotateY: hoveredCard === service.id ? [0, 360] : 0
                      }}
                      transition={{ duration: 0.8 }}
                      className="relative mb-6"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                        {IconComponent ? (
                          <IconComponent size={40} className="text-white" strokeWidth={2} />
                        ) : (
                          <Server size={40} className="text-white" strokeWidth={2} />
                        )}
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 relative z-10 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features List (Show only first 2 for preview) */}
                    <ul className="space-y-3 relative z-10 mb-6">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to Services Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => {
              navigate('/servizi');
              window.scrollTo(0, 0);
            }}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Vedi Tutti i Servizi
            <ArrowRight className="ml-2" size={24} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
