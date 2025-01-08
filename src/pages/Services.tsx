import { motion } from 'framer-motion';
import { Database, Code, FileSpreadsheet, CheckCircle2, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-8">
                <div className="flex justify-center items-center h-24 w-24 rounded-full bg-blue-50 mx-auto mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 group"
                    >
                      <ArrowRight className="h-5 w-5 text-ipc-orange transform group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 py-4 bg-gradient-to-r from-ipc-blue to-blue-600">
                <button className="w-full text-white py-2 rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unsere maßgeschneiderten Lösungen helfen Ihnen dabei, Ihre Geschäftsprozesse zu optimieren und die Produktivität zu steigern. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;