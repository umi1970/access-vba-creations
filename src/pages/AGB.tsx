import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const AGB = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Allgemeine Geschäftsbedingungen</h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Geltungsbereich</h2>
          <p className="mb-4">Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der IPC24 e.K. (nachfolgend "Verkäufer"), gelten für alle Verträge, die ein Verbraucher oder Unternehmer (nachfolgend "Kunde") mit dem Verkäufer hinsichtlich aller im Online-Shop des Verkäufers dargestellten Waren und/oder Dienstleistungen abschließt. Der Einbeziehung von eigenen Geschäftsbedingungen des Kunden wird hiermit widersprochen, sofern nicht anders vereinbart.</p>
          <p className="mb-4">Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer im Sinne dieser AGB ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Vertragsschluss</h2>
          <p className="mb-4">Die im Online-Shop des Verkäufers enthaltenen Produktbeschreibungen stellen keine verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.</p>
          <p className="mb-4">Der Kunde kann das Angebot über das in den Online-Shop des Verkäufers integrierte Online-Bestellformular abgeben. Dabei gibt der Kunde, nachdem er die ausgewählten Waren in den virtuellen Warenkorb gelegt und den elektronischen Bestellprozess durchlaufen hat, durch Klicken des den Bestellvorgang abschließenden Buttons ein rechtlich verbindliches Vertragsangebot in Bezug auf die im Warenkorb enthaltenen Waren ab.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Widerrufsrecht</h2>
          <p className="mb-4">Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.</p>
          <p className="mb-4">Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des Verkäufers.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Preise und Zahlungsbedingungen</h2>
          <p className="mb-4">Sofern sich aus der Produktbeschreibung des Verkäufers nichts anderes ergibt, handelt es sich bei den angegebenen Preisen um Gesamtpreise, die die gesetzliche Umsatzsteuer enthalten. Gegebenenfalls zusätzlich anfallende Liefer- und Versandkosten werden in der jeweiligen Produktbeschreibung gesondert angegeben.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Alternative Streitbeilegung</h2>
          <p className="mb-4">Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereit:</p>
          <a 
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ipc-orange hover:underline inline-flex items-center"
          >
            https://ec.europa.eu/consumers/odr
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <p className="mt-4">Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten aus Online-Kauf- oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist.</p>
          <p className="mt-4">Der Verkäufer ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.</p>
        </div>
      </section>
    </motion.div>
  );
};

export default AGB;