import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { mockData } from '../mockData';
import { useToast } from '../hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simula l'invio del modulo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Messaggio inviato!",
        description: "Ti contatteremo al più presto possibile."
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore nell'invio del messaggio.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: mockData.contact.email,
      href: `mailto:${mockData.contact.email}`
    },
    {
      icon: Phone,
      label: "Telefono",
      value: mockData.contact.phone,
      href: `tel:${mockData.contact.phone}`
    },
    {
      icon: MapPin,
      label: "Indirizzo",
      value: mockData.contact.address,
      href: "https://maps.app.goo.gl/E92EnHX4cj98kp686"
    }
  ];

  return (
    <section id="contatti" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Contattaci
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hai domande o desideri ricevere una consulenza? Contattaci oggi stesso e scopri come possiamo aiutare la tua azienda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200 group"
                >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500 shadow-inner">
                    <Icon className="text-blue-600 group-hover:text-white transition-colors duration-500" size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
                  {info.label}
                </h3>
                <p className="text-slate-600 font-medium group-hover:text-blue-600 transition-colors duration-500 text-lg">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Inviaci un messaggio
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Il tuo nome"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="La tua email"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                Telefono
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Il tuo numero di telefono"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Messaggio
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Scrivi il tuo messaggio qui..."
                rows={6}
                required
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Invio in corso...
                </>
              ) : (
                <>
                  Invia messaggio
                  <Send size={20} />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
