import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-32 px-6 text-slate-800"
    >
      <h1 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Privacy <span className="text-blue-600">Policy</span></h1>

      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
        <p className="mb-6 text-lg leading-relaxed">
          Questo sito raccoglie dati personali tramite il modulo di contatto
          (nome, email, telefono e messaggio) esclusivamente per rispondere alle richieste.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          I dati non vengono venduti o condivisi con terze parti.
        </p>

        <p className="text-lg leading-relaxed">
          Per richieste di modifica o cancellazione dei dati puoi contattarci via email all'indirizzo presente nella sezione contatti.
        </p>
      </div>
    </motion.div>
  );
};