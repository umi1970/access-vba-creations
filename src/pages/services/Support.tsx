import { motion } from 'framer-motion';
import { HeadsetIcon, Users, Clock, CheckCircle2, Bot } from 'lucide-react';

const Support = () => {
  const features = [
    {
      icon: <HeadsetIcon className="h-8 w-8 text-ipc-blue" />,
      title: "First-Level Support",
      description: "Schnelle und kompetente Hilfe bei allen IT-Problemen"
    },
    {
      icon: <Users className="h-8 w-8 text-ipc-blue" />,
      title: "Vor-Ort Service",
      description: "Persönliche Unterstützung direkt an Ihrem Arbeitsplatz"
    },
    {
      icon: <Clock className="h-8 w-8 text-ipc-blue" />,
      title: "Schnelle Reaktionszeiten",
      description: "Garantierte Reaktionszeiten für minimale Ausfallzeiten"
    },
    {
      icon: <Bot className="h-8 w-8 text-ipc-blue" />,
      title: "KI-gestützte Lösungen",
      description: "Moderne Technologien für effiziente Problemlösung"
    }
  ];

  const tools = [
    "BMC Remedy",
    "HP Peregrine ServiceCenter",
    "LANDesk",
    "Active Directory",
    "Microsoft Support Tools",
    "Remote Support Software"
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
            IT Support & Helpdesk
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professioneller IT-Support mit über 7 Jahren Erfahrung im Helpdesk-Bereich
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Unsere Support-Leistungen</h2>
            <div className="space-y-4">
              {[
                "Helpdesk & Remote Support",
                "Vor-Ort Service & Beratung",
                "Software-Installation & Konfiguration",
                "Problemanalyse & Fehlerbehebung",
                "Benutzerverwaltung & Berechtigungen",
                "Dokumentation & Reporting"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-ipc-blue" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Eingesetzte Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="p-3 bg-blue-50 rounded-lg text-center text-gray-700 hover:bg-blue-100 transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;