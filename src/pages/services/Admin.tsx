import { motion } from 'framer-motion';
import { Laptop, Server, Shield, Network, Bot, Code } from 'lucide-react';

const Admin = () => {
  const services = [
    {
      icon: <Laptop className="h-8 w-8 text-ipc-blue" />,
      title: "Workstation Administration",
      description: "Installation, Konfiguration und Wartung von Arbeitsplatzrechnern",
      experience: "9+ Jahre"
    },
    {
      icon: <Server className="h-8 w-8 text-ipc-blue" />,
      title: "Server Management",
      description: "Windows Server Administration und Wartung",
      experience: "6+ Jahre"
    },
    {
      icon: <Shield className="h-8 w-8 text-ipc-blue" />,
      title: "Security Administration",
      description: "Implementierung und Überwachung von Sicherheitsrichtlinien",
      experience: "5+ Jahre"
    },
    {
      icon: <Network className="h-8 w-8 text-ipc-blue" />,
      title: "Netzwerk Management",
      description: "Verwaltung und Optimierung von Netzwerkinfrastrukturen",
      experience: "7+ Jahre"
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
            Systemadministration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle IT-Administration mit langjähriger Erfahrung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-2">{service.description}</p>
                  <span className="text-sm text-ipc-blue font-medium">
                    Erfahrung: {service.experience}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-6">Technologien & Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Windows Server",
                "Active Directory",
                "LANDesk",
                "Legato Networker",
                "VMware",
                "Microsoft 365",
                "Exchange Server",
                "Group Policy"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="p-3 bg-white rounded-lg text-center text-gray-700 hover:bg-blue-50 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-6">Zusätzliche Services</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Bot className="h-6 w-6 text-ipc-orange" />
                <div>
                  <h3 className="font-semibold">KI-Integration</h3>
                  <p className="text-gray-600">Implementierung moderner KI-Lösungen</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Code className="h-6 w-6 text-ipc-orange" />
                <div>
                  <h3 className="font-semibold">Automatisierung</h3>
                  <p className="text-gray-600">Scripting und Prozessautomatisierung</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admin;