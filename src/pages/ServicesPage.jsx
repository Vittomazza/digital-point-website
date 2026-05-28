import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../mockData';
import { 
  CheckCircle, Server, Monitor, Printer, Phone, Briefcase, 
  LayoutDashboard, ShieldCheck, Globe, Building2, Recycle, 
  Fingerprint, LifeBuoy, ArrowRight, MousePointer2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

const BackgroundBubbles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white/10"
        initial={{ 
          width: Math.random() * 200 + 100, 
          height: Math.random() * 200 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: 0.1
        }}
        animate={{ 
          y: [0, Math.random() * 100 - 50],
          x: [0, Math.random() * 100 - 50],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: Math.random() * 10 + 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    ))}
  </div>
);

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 text-white overflow-hidden"
      >
        <BackgroundBubbles />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-4 tracking-wider uppercase">
              Soluzioni Professionali
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
              I Nostri <span className="text-blue-500">Servizi</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-300 leading-relaxed">
              Dall'assistenza tecnica specializzata alla fornitura di infrastrutture IT all'avanguardia, 
              accompagniamo la tua azienda verso l'innovazione digitale.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </motion.section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {mockData.services.map((service, index) => {
            const ServiceIcon = iconMap[service.icon] || Server;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24 last:mb-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group">
                    {/* Decorative Background */}
                    <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${isEven ? 'from-blue-100 to-slate-50' : 'from-slate-50 to-blue-100'} -z-10 transition-transform duration-500 group-hover:scale-105`}></div>
                    
                    {/* Main Content Box */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12 flex flex-col items-center justify-center min-h-[350px] relative">
                      <div className="absolute top-0 right-0 p-6 text-slate-100 font-bold text-9xl -z-0 opacity-50 select-none">
                        {service.id < 10 ? `0${service.id}` : service.id}
                      </div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-2xl relative z-10 mb-6"
                      >
                        <ServiceIcon size={64} strokeWidth={1.5} />
                      </motion.div>
                      
                      <div className="text-center relative z-10">
                        <h3 className="text-xl font-semibold text-slate-400 uppercase tracking-widest mb-2">Service Concept</h3>
                        <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                      <ServiceIcon size={20} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="mt-1 mr-3 flex-shrink-0 text-blue-500">
                          <CheckCircle size={18} />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <Link 
                      to="/#contatti" 
                      className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                    >
                      Richiedi maggiori informazioni
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Hai un progetto in mente?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Siamo pronti ad aiutarti con consulenze personalizzate e soluzioni tecnologiche su misura.
            </p>
            <Link
              to="/#contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 relative z-10"
            >
              Contattaci Ora
              <MousePointer2 className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
