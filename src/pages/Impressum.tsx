import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Impressum = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Impressum</h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>Ümit Zobu</p>
          <p>IPC24 e.K.</p>
          <p>Erzbergerstraße 28</p>
          <p>68753 Waghäusel</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>Telefon: 015906194455</p>
          <p>E-Mail: info@ipc24.de</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
          <p>DE234142988</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a 
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ipc-orange hover:underline inline-flex items-center"
            >
              https://ec.europa.eu/consumers/odr/
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </p>
          <p className="mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Impressum;