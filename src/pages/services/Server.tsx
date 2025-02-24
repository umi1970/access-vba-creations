
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Server, Cloud, HardDrive, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServerManagement = () => {
  const { t } = useLanguage();

  const serverServices = [
    {
      icon: <Server className="h-12 w-12 text-ipc-orange" />,
      title: "Server Administration",
      description: "Professionelle Verwaltung und Wartung Ihrer Server-Infrastruktur"
    },
    {
      icon: <Cloud className="h-12 w-12 text-ipc-orange" />,
      title: "Cloud Services",
      description: "Integration und Management von Cloud-Lösungen"
    },
    {
      icon: <HardDrive className="h-12 w-12 text-ipc-orange" />,
      title: "Storage Management",
      description: "Optimierung und Verwaltung Ihrer Speichersysteme"
    },
    {
      icon: <Settings className="h-12 w-12 text-ipc-orange" />,
      title: "Monitoring & Wartung",
      description: "24/7 Überwachung und proaktive Wartung"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Server Management</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zuverlässige Server-Lösungen für Ihr Unternehmen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serverServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-center text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerManagement;
