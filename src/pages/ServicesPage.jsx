import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../mockData';
import { CheckCircle, Server, Monitor, Printer, Phone, Briefcase, LayoutDashboard, ShieldCheck, Globe, Building2, Recycle, Fingerprint, LifeBuoy } from 'lucide-react';
import { BinaryGearBanner } from '../components/BinaryGearBanner';

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

      {/* HERO CANVAS */}
      <section className="relative">
        <BinaryGearBanner />

        {/* overlay contenuto sopra canvas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold text-cyan-300 tracking-[0.3em]"
            >
              I NOSTRI SERVIZI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-slate-200 max-w-2xl mx-auto text-lg opacity-80"
            >
              Soluzioni IT avanzate per aziende moderne, scalabili e affidabili.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES CONTENT */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          {mockData.services.map((service, index) => {
            const ServiceIcon = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 py-12 md:py-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } border-b border-slate-200 last:border-b-0`}
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
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.03 }}
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="lg:w-1/2 flex justify-center p-6"
                >
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