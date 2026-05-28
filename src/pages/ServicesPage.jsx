import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../mockData';
import { 
  CheckCircle, Server, Monitor, Printer, Phone, Briefcase, 
  LayoutDashboard, ShieldCheck, Globe, Building2, Recycle, 
  Fingerprint, Settings, ArrowRight, Sparkles
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const iconMap = {
  'life-buoy': Settings,
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

const BackgroundVisuals = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Mesh Gradient Effect */}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-600/10 blur-[100px] rounded-full"></div>
    <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-blue-400/5 blur-[100px] rounded-full"></div>
    
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-blue-500/5 border border-white/5 rounded-2xl"
        initial={{ 
          width: Math.random() * 100 + 50, 
          height: Math.random() * 100 + 50,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          rotate: Math.random() * 360
        }}
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ 
          duration: 20 + i * 2, 
          repeat: Infinity, 
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export const ServicesPage = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = React.useState(null);

  const handleContactClick = () => {
    sessionStorage.setItem("scrollTo", "contatti");
    navigate('/');
    window.scrollTo(0, 0);
  };

  const scrollToService = (id) => {
    const el = document.getElementById(`service-${id}`);
    if (el) {
      const offset = 100;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  // Observe which service is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(parseInt(entry.target.id.split('-')[1]));
          }
        });
      },
      { threshold: 0.3, rootMargin: "-10% 0% -70% 0%" }
    );
    
    mockData.services.forEach((service) => {
      const el = document.getElementById(`service-${service.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Side Menu */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed left-8 top-[40%] -translate-y-1/2 z-[100] hidden md:flex flex-col gap-0.5 p-1.5 bg-slate-900 shadow-2xl border border-white/10 rounded-xl"
      >
        <div className="text-[7px] font-black uppercase tracking-[0.1em] text-blue-400/40 mb-1 text-center pt-1 border-b border-white/5 pb-1">Menu</div>
        {mockData.services.map((service) => {
          const Icon = iconMap[service.icon] || Server;
          const isActive = activeService === service.id;
          return (
            <button
              key={service.id}
              onClick={() => scrollToService(service.id)}
              className={`group relative flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 shrink-0 ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-110' 
                  : 'text-slate-500 hover:bg-white/5 hover:text-blue-400'
              }`}
            >
              <Icon size={14} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-slate-900 text-white text-[11px] font-black rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/20 z-[110]">
                {service.title}
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-8 border-transparent border-r-slate-900"></div>
              </div>
            </button>
          );
        })}
      </motion.div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-slate-950 text-white overflow-hidden"
      >
        <BackgroundVisuals />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center py-2 px-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-8 tracking-widest uppercase border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <Sparkles size={16} className="mr-2" />
              Eccellenza Tecnologica
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.1]">
              Potenzia il Tuo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">Business Digitale</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-400 font-medium leading-relaxed mb-12">
              Soluzioni IT sartoriali progettate per scalare, proteggere e innovare 
              la tua infrastruttura aziendale con le tecnologie di domani.
            </p>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Modern Section Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 309.19 8.07 600 120 890.81 8.07 1200 120z" className="fill-white"></path>
          </svg>
        </div>
      </motion.section>

      {/* Services List */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          {mockData.services.map((service, index) => {
            const ServiceIcon = iconMap[service.icon] || Server;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id} 
                id={`service-${service.id}`}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 mb-56 last:mb-0 ${!isEven ? 'lg:flex-row-reverse' : ''} scroll-mt-32`}
              >
                {/* Visual Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group">
                    {/* Floating Abstract Shapes */}
                    <motion.div 
                      animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-12 -left-12 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl z-0"
                    ></motion.div>
                    
                    {/* Main Content Box */}
                    <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 p-10 md:p-16 flex flex-col items-center justify-center min-h-[400px] relative transition-all duration-700 group-hover:shadow-[0_48px_96px_-24px_rgba(59,130,246,0.15)] group-hover:border-blue-200/50">
                      {/* Subtle Inner Glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      <motion.div 
                        animate={{ 
                          y: [0, -15, 0],
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: index * 0.5 
                        }}
                        whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 5 : -5 }}
                        className="w-48 h-48 md:w-60 md:h-60 bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-500 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl relative z-10 mb-10 group-hover:shadow-blue-500/30"
                      >
                        <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <ServiceIcon size={96} strokeWidth={1} className="drop-shadow-2xl" />
                      </motion.div>
                      
                      <div className="text-center relative z-10">
                        <div className="flex gap-2 justify-center mb-4">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-500 w-8' : 'bg-blue-100 group-hover:bg-blue-200'}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="mb-8">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">0{service.id} — Digital Service</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.1] mb-8">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-5 mb-12">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300 group/item"
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mr-4 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                          <CheckCircle size={20} />
                        </div>
                        <span className="text-slate-800 font-bold text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={handleContactClick}
                      className="inline-flex items-center px-8 py-4 bg-slate-950 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all duration-500 group shadow-lg hover:shadow-blue-500/20"
                    >
                      Configura la tua soluzione
                      <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-500" size={24} />
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stunning CTA Section */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-32 text-white shadow-3xl relative overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
              <span className="inline-block py-2 px-6 rounded-full bg-white/10 text-blue-400 text-sm font-black mb-8 tracking-[0.2em] uppercase border border-white/10 backdrop-blur-md">
                Pronti per il futuro?
              </span>
              <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[1] max-w-4xl mx-auto">
                Costruiamo insieme il <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">domani.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                Non aspettare che il futuro accada. Crealo con le nostre soluzioni tecnologiche d'avanguardia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center justify-center px-10 py-6 bg-blue-600 text-white font-black text-lg rounded-2xl hover:bg-blue-500 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.6)] hover:-translate-y-2"
                >
                  Inizia il tuo Progetto
                  <Sparkles className="ml-3" size={24} />
                </button>
                <Link
                  to="/#chi-siamo"
                  className="inline-flex items-center justify-center px-10 py-6 bg-white/5 border border-white/10 text-white font-black text-lg rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-2"
                >
                  Scopri la nostra Vision
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
