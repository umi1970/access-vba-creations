import { motion } from 'framer-motion';
import { ArrowRight, Database, Code, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: <Database className="h-12 w-12 text-ipc-blue" />,
      title: 'MS Access Datenbanken',
      description: 'Entwicklung und Optimierung von maßgeschneiderten Access-Datenbanklösungen'
    },
    {
      icon: <Code className="h-12 w-12 text-ipc-blue" />,
      title: 'VBA Programmierung',
      description: 'Professionelle Entwicklung von VBA-Code und Makros für Office-Anwendungen'
    },
    {
      icon: <FileSpreadsheet className="h-12 w-12 text-ipc-blue" />,
      title: 'Office Add-ins',
      description: 'Individuelle Add-ins zur Erweiterung Ihrer Office-Anwendungen'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              IT Solutions für Ihr Unternehmen
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professionelle Entwicklung von MS Access Datenbanken, VBA Code und Office Add-ins
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-ipc-blue text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;