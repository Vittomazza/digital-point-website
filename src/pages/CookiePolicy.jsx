import React from 'react';
import { motion } from 'framer-motion';

export const CookiePolicy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-32 px-6 text-slate-800"
    >
      <h1 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Cookie <span className="text-blue-600">Policy</span></h1>

      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 space-y-6">
        <p className="text-lg leading-relaxed">
          Questo sito utilizza cookie tecnici necessari al funzionamento del sito.
        </p>

        <p className="text-lg leading-relaxed font-bold text-blue-600">
          Non utilizziamo cookie di profilazione o tracciamento di terze parti.
        </p>

        <p className="text-lg leading-relaxed">
          I dati personali raccolti da Digital Point vengono trattati in modo lecito, corretto e trasparente,
          esclusivamente per finalità connesse all’erogazione dei servizi offerti e alla gestione delle richieste degli utenti.
        </p>

        <p className="text-lg leading-relaxed">
          Nessun dato personale viene diffuso a terzi senza consenso, salvo obblighi previsti dalla legge.
        </p>

        <p className="text-lg leading-relaxed">
          Gli utenti hanno il diritto di accedere ai propri dati, richiederne la rettifica, la cancellazione o opporsi
          al loro utilizzo per finalità promozionali.
        </p>

        <p className="text-lg leading-relaxed border-t border-slate-200 pt-6 italic">
          Continuando a utilizzare il sito e i servizi di Digital Point, l’utente dichiara di aver preso visione
          della presente informativa sulla privacy.
        </p>
      </div>
    </motion.div>
  );
};