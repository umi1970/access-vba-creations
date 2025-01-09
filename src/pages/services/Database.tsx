import { motion } from 'framer-motion';
import { Database as DatabaseIcon, Server, Code, FileSpreadsheet } from 'lucide-react';

const DatabasePage = () => {
  const expertise = [
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><DatabaseIcon /></div>,
      title: "Datenbankentwicklung",
      description: "Entwicklung und Optimierung von SQL Server, MS Access und MySQL Datenbanken",
      experience: "11+ Jahre"
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><Server /></div>,
      title: "SQL Server Management",
      description: "Umfassende Erfahrung mit SQL Server 2003-2012",
      experience: "10+ Jahre"
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><Code /></div>,
      title: "Datenbankprogrammierung",
      description: "VB.NET und SQL Entwicklung",
      experience: "10+ Jahre"
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><FileSpreadsheet /></div>,
      title: "MS Access Spezialist",
      description: "Entwicklung von maßgeschneiderten Access-Lösungen",
      experience: "10+ Jahre"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Datenbank-Entwicklung & Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Datenbankentwicklung mit über einem Jahrzehnt Erfahrung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <span className="text-sm text-ipc-blue font-medium">
                    Erfahrung: {item.experience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Unsere Datenbank-Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="font-semibold mb-2">Entwicklung</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Maßgeschneiderte Datenbanklösungen</li>
                <li>• Performance-Optimierung</li>
                <li>• Datenmodellierung</li>
                <li>• Migrationsprojekte</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Administration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Backup & Recovery</li>
                <li>• Monitoring & Wartung</li>
                <li>• Sicherheitskonfiguration</li>
                <li>• Performance-Tuning</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Beratung</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Architekturberatung</li>
                <li>• Best Practices</li>
                <li>• Schulungen</li>
                <li>• Support & Wartung</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DatabasePage;