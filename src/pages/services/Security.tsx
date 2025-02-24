
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Shield, Lock, FileWarning, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Security = () => {
  const { t } = useLanguage();

  const securityServices = [
    {
      icon: <Shield className="h-12 w-12 text-ipc-orange" />,
      title: "Endpoint Security",
      description: "Umfassender Schutz für alle Endgeräte mit modernster Antivirus-Software und Verhaltensanalyse"
    },
    {
      icon: <Lock className="h-12 w-12 text-ipc-orange" />,
      title: "Netzwerksicherheit",
      description: "Firewall-Lösungen und VPN-Zugänge für sicheren Datenaustausch"
    },
    {
      icon: <FileWarning className="h-12 w-12 text-ipc-orange" />,
      title: "Backup & Recovery",
      description: "Automatisierte Backups und schnelle Wiederherstellung im Notfall"
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-ipc-orange" />,
      title: "Security Audits",
      description: "Regelmäßige Sicherheitsüberprüfungen und Schwachstellenanalyse"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">IT-Sicherheit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Sicherheitslösungen für Ihr Unternehmen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityServices.map((service, index) => (
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

export default Security;
