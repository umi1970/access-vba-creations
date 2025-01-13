import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Datenschutz = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Datenschutzerklärung</h1>
      
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold mb-2">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-medium mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <h4 className="text-lg font-medium mb-2">Wie erfassen wir Ihre Daten?</h4>
          <p className="mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="mb-4">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <h4 className="text-lg font-medium mb-2">Wofür nutzen wir Ihre Daten?</h4>
          <p className="mb-4">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="text-lg font-medium mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p className="mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>
          <p className="mb-4">Wir hosten die Inhalte unserer Website bei folgendem Anbieter: IONOS</p>
          <p className="mb-4">
            Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von IONOS:{' '}
            <a 
              href="https://www.ionos.de/terms-gtc/terms-privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ipc-orange hover:underline inline-flex items-center"
            >
              https://www.ionos.de/terms-gtc/terms-privacy
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-semibold mb-2">Cookies</h3>
          <p className="mb-4">
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Newsletter</h2>
          <h3 className="text-xl font-semibold mb-2">Newsletterdaten</h3>
          <p className="mb-4">
            Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">6. Plugins und Tools</h2>
          <h3 className="text-xl font-semibold mb-2">Google Fonts</h3>
          <p className="mb-4">
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Weitere Informationen zu Google Fonts finden Sie unter:{' '}
            <a 
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ipc-orange hover:underline inline-flex items-center"
            >
              https://developers.google.com/fonts/faq
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default Datenschutz;