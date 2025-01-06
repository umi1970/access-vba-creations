import { motion } from 'framer-motion';
import { Database, Code, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database className="h-16 w-16 text-ipc-blue mb-4" />,
      title: 'MS Access Datenbanken',
      description: 'Professionelle Entwicklung von Datenbanklösungen',
      features: [
        'Maßgeschneiderte Datenbankentwicklung',
        'Optimierung bestehender Datenbanken',
        'Benutzerfreundliche Oberflächen',
        'Datenimport und -export Lösungen'
      ]
    },
    {
      icon: <Code className="h-16 w-16 text-ipc-blue mb-4" />,
      title: 'VBA Programmierung',
      description: 'Automatisierung und Optimierung Ihrer Prozesse',
      features: [
        'Entwicklung von VBA-Makros',
        'Prozessautomatisierung',
        'Individuelle Funktionserweiterungen',
        'Fehlerbehandlung und Debugging'
      ]
    },
    {
      icon: <FileSpreadsheet className="h-16 w-16 text-ipc-blue mb-4" />,
      title: 'Office Add-ins',
      description: 'Erweitern Sie die Funktionalität Ihrer Office-Anwendungen',
      features: [
        'Individuelle Excel Add-ins',
        'Word Dokumentenautomatisierung',
        'Outlook Erweiterungen',
        'Integration in bestehende Systeme'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professionelle IT-Lösungen für Ihre individuellen Anforderungen
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <div className="md:flex items-start">
                <div className="md:w-1/3 text-center md:text-left">
                  {service.icon}
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="h-6 w-6 text-ipc-orange flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;