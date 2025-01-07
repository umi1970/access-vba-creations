import { motion } from 'framer-motion';
import { ArrowRight, Database, Code, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: <Database className="h-12 w-12 text-ipc-blue" />,
      title: 'MS Access Datenbanken',
      description: 'Entwicklung und Optimierung von maßgeschneiderten Access-Datenbanklösungen',
      image: '/photo-1488590528505-98d2b5aba04b'
    },
    {
      icon: <Code className="h-12 w-12 text-ipc-blue" />,
      title: 'VBA Programmierung',
      description: 'Professionelle Entwicklung von VBA-Code und Makros für Office-Anwendungen',
      image: '/photo-1461749280684-dccba630e2f6'
    },
    {
      icon: <FileSpreadsheet className="h-12 w-12 text-ipc-blue" />,
      title: 'Office Add-ins',
      description: 'Individuelle Add-ins zur Erweiterung Ihrer Office-Anwendungen',
      image: '/photo-1486312338219-ce68d2c6f44d'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section mit großem Hintergrundbild */}
      <section 
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("/photo-1487058792275-0ad4aaf24ca7")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay für bessere Lesbarkeit */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Solutions für Ihr Unternehmen
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Professionelle Entwicklung von MS Access Datenbanken, VBA Code und Office Add-ins
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-ipc-blue text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section mit Bildern */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zusätzliche Sektion mit Teamwork-Bild */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ihr Partner für professionelle IT-Lösungen
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Mit jahrelanger Erfahrung in der Entwicklung von maßgeschneiderten Softwarelösungen 
                unterstützen wir Sie bei der Digitalisierung Ihrer Geschäftsprozesse.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-ipc-blue hover:text-blue-700"
              >
                Mehr über unsere Leistungen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="/photo-1519389950473-47ba0277781c"
                alt="Team Collaboration"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;