import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../mockData';
import { CheckCircle, Server, Monitor, Printer, Phone, Briefcase, LayoutDashboard, ShieldCheck, Globe, Building2, Recycle, Fingerprint, LifeBuoy } from 'lucide-react';

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

export const ServicesPage = () => {
  return (
    <div className="pt-20">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-24 overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            I Nostri Servizi Completi
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Scopri come Digital Point può supportare la tua azienda con soluzioni IT innovative e affidabili, pensate per ogni esigenza.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <Server className="w-full h-full object-cover" />
        </div>
      </motion.section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          {mockData.services.map((service, index) => {
            const ServiceIcon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 py-12 md:py-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} border-b border-slate-200 last:border-b-0`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    {ServiceIcon && (
                      <div className="p-4 bg-blue-100 rounded-full text-blue-600 mr-4">
                        <ServiceIcon size={36} strokeWidth={2} />
                      </div>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6 text-center lg:text-left">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center text-md"
                      >
                        <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="lg:w-1/2 flex justify-center p-6"
                >
                  {/* Placeholder for service image/illustration */}
                  <div className="w-64 h-64 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 text-6xl font-bold opacity-70">
                    {service.id}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
