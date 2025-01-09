import { motion } from 'framer-motion';
import { Laptop, Server, Shield, Network, Bot, Code } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Admin = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Laptop className="h-8 w-8 text-ipc-blue" />,
      title: t('services.admin.workstation'),
      description: t('services.admin.workstation.desc'),
      experience: "9+ Jahre"
    },
    {
      icon: <Server className="h-8 w-8 text-ipc-blue" />,
      title: t('services.admin.server'),
      description: t('services.admin.server.desc'),
      experience: "6+ Jahre"
    },
    {
      icon: <Shield className="h-8 w-8 text-ipc-blue" />,
      title: t('services.admin.security'),
      description: t('services.admin.security.desc'),
      experience: "5+ Jahre"
    },
    {
      icon: <Network className="h-8 w-8 text-ipc-blue" />,
      title: t('services.admin.network'),
      description: t('services.admin.network.desc'),
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
            {t('services.admin.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.admin.subtitle')}
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
                    {t('services.database.experience')}: {service.experience}
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
            <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
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
            <h2 className="text-2xl font-bold mb-6">Additional Services</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Bot className="h-6 w-6 text-ipc-orange" />
                <div>
                  <h3 className="font-semibold">{t('services.admin.aiIntegration')}</h3>
                  <p className="text-gray-600">{t('services.admin.aiIntegration.desc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Code className="h-6 w-6 text-ipc-orange" />
                <div>
                  <h3 className="font-semibold">{t('services.admin.automation')}</h3>
                  <p className="text-gray-600">{t('services.admin.automation.desc')}</p>
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