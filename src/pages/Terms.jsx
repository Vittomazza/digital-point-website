import React from 'react';
import { motion } from 'framer-motion';

export const Terms = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-32 px-6 text-slate-800"
    >
      <h1 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Termini e <span className="text-blue-600">Condizioni</span></h1>

      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
        <p className="mb-8 text-lg">
          Il presente sito web è gestito dal Titolare: <strong>Alberto Gasparini</strong> (di seguito “Titolare”).
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">1</span>
              Oggetto del servizio
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Il sito ha finalità informativa e/o promozionale dei servizi e contenuti offerti dal Titolare.
              Le informazioni pubblicate non costituiscono offerta contrattuale vincolante ai sensi dell’art. 1336 c.c.,
              salvo diversa indicazione esplicita.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">2</span>
              Utilizzo del sito
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              L’utente si impegna a utilizzare il sito in conformità alla normativa vigente e ai presenti Termini,
              evitando qualsiasi utilizzo illecito, fraudolento o lesivo di diritti di terzi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">3</span>
              Limitazione di responsabilità
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Il Titolare si impegna a mantenere le informazioni aggiornate e corrette, senza tuttavia garantire
              l’assenza di errori o omissioni. Nei limiti consentiti dalla legge, non è responsabile per danni diretti
              o indiretti derivanti dall’uso del sito o dall’impossibilità di utilizzarlo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">4</span>
              Proprietà intellettuale
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Tutti i contenuti presenti sul sito (testi, immagini, loghi, codice e layout) sono protetti dalle normative
              vigenti sul diritto d’autore e sono di proprietà del Titolare o di terzi autorizzati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">5</span>
              Collegamenti esterni
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Il sito può contenere link a siti esterni di terze parti. Il Titolare non è responsabile per i contenuti
              o per eventuali danni derivanti dall’utilizzo di tali siti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">6</span>
              Trattamento dei dati personali (GDPR)
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Il trattamento dei dati personali avviene nel rispetto del Regolamento (UE) 2016/679 (“GDPR”).
              I dati eventualmente raccolti sono utilizzati esclusivamente per finalità connesse ai servizi del sito
              e per obblighi di legge.
              <br /><br />
              L’utente può esercitare i diritti previsti dagli articoli 15-22 del GDPR (accesso, rettifica, cancellazione,
              limitazione, opposizione, portabilità) contattando il Titolare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">7</span>
              Modifiche ai termini
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Il Titolare si riserva il diritto di modificare in qualsiasi momento i presenti Termini e Condizioni.
              Le modifiche saranno efficaci dal momento della pubblicazione sul sito.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-200">
            <h2 className="text-2xl font-black mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">8</span>
              Accettazione
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-bold">
              L’utilizzo del sito implica l’accettazione integrale dei presenti Termini e Condizioni.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};