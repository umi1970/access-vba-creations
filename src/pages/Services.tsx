
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Laptop, HeadsetIcon, Bot, Shield, Server, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      icon: <Database className="h-16 w-16 text-blue-500" />,
      title: t('services.database.title'),
      description: t('services.database.subtitle'),
      path: "/services/database",
      tags: [
        'SQL Server',
        'MS Access',
        'MySQL',
        t('services.database.skills.design')
      ]
    },
    {
      icon: <HeadsetIcon className="h-16 w-16 text-blue-500" />,
      title: t('services.support.title'),
      description: t('services.support.subtitle'),
      path: "/services/support",
      tags: [
        t('services.support.skills.helpdesk'),
        t('services.support.skills.analysis'),
        t('services.support.skills.admin')
      ]
    },
    {
      icon: <Laptop className="h-16 w-16 text-blue-500" />,
      title: t('services.admin.title'),
      description: t('services.admin.subtitle'),
      path: "/services/admin",
      tags: [
        'Windows Server',
        'Active Directory',
        'Rollout'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Bot className="h-12 w-12 text-orange-500" />,
      title: t('services.ai.title'),
      description: t('services.ai.subtitle'),
      path: "/services/ai"
    },
    {
      icon: <Shield className="h-12 w-12 text-orange-500" />,
      title: t('services.security.title'),
      description: t('services.security.subtitle'),
      path: "/services/security"
    },
    {
      icon: <Server className="h-12 w-12 text-orange-500" />,
      title: t('services.server.title'),
      description: t('services.server.subtitle'),
      path: "/services/server"
    },
    {
      icon: <Network className="h-12 w-12 text-orange-500" />,
      title: t('services.network.title'),
      description: t('services.network.subtitle'),
      path: "/services/network"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.path}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="mb-6 bg-blue-50 w-20 h-20 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link to={service.path}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-4 bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
