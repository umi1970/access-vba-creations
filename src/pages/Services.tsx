import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Laptop, HeadsetIcon, Code, Bot, Shield, Server, Network } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Database className="h-12 w-12 text-ipc-blue" />,
      title: "Datenbank-Entwicklung",
      description: "Professionelle Entwicklung und Optimierung von Datenbanklösungen",
      path: "/services/database",
      skills: ["SQL Server", "MS Access", "MySQL", "Datenbankdesign"]
    },
    {
      icon: <HeadsetIcon className="h-12 w-12 text-ipc-blue" />,
      title: t('services.support.title'),
      description: t('services.support.subtitle'),
      path: "/services/support",
      skills: ["Helpdesk", "Problemanalyse", "Systemadministration"]
    },
    {
      icon: <Laptop className="h-12 w-12 text-ipc-blue" />,
      title: t('services.admin.title'),
      description: t('services.admin.subtitle'),
      path: "/services/admin",
      skills: ["Windows Server", "Active Directory", "Rollout"]
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
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.path}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
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
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 text-ipc-blue rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Bot className="h-8 w-8 text-ipc-orange mb-4" />
            <h3 className="text-lg font-semibold mb-2">KI-Integration</h3>
            <p className="text-center text-gray-600">Moderne KI-Lösungen für optimierte Prozesse</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Shield className="h-8 w-8 text-ipc-orange mb-4" />
            <h3 className="text-lg font-semibold mb-2">IT-Sicherheit</h3>
            <p className="text-center text-gray-600">Umfassende Sicherheitslösungen</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Server className="h-8 w-8 text-ipc-orange mb-4" />
            <h3 className="text-lg font-semibold mb-2">Server-Management</h3>
            <p className="text-center text-gray-600">Professionelle Serververwaltung</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Network className="h-8 w-8 text-ipc-orange mb-4" />
            <h3 className="text-lg font-semibold mb-2">Netzwerk-Services</h3>
            <p className="text-center text-gray-600">Optimierte Netzwerklösungen</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;