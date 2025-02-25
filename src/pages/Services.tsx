
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Laptop, HeadsetIcon, Bot, Shield, Server, Network } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BackgroundPaths } from "@/components/ui/background-paths";

const Services = () => {
  const { t } = useLanguage();

  const mainServices = [
    {
      icon: <Database className="h-12 w-12 text-white" />,
      title: t('services.database.title'),
      description: t('services.database.subtitle'),
      path: "/services/database",
      gradient: "from-blue-500 to-indigo-600",
      tags: [
        'SQL Server',
        'MS Access',
        'MySQL',
        t('services.database.skills.design')
      ]
    },
    {
      icon: <HeadsetIcon className="h-12 w-12 text-white" />,
      title: t('services.support.title'),
      description: t('services.support.subtitle'),
      path: "/services/support",
      gradient: "from-purple-500 to-pink-600",
      tags: [
        t('services.support.skills.helpdesk'),
        t('services.support.skills.analysis'),
        t('services.support.skills.admin')
      ]
    },
    {
      icon: <Laptop className="h-12 w-12 text-white" />,
      title: t('services.admin.title'),
      description: t('services.admin.subtitle'),
      path: "/services/admin",
      gradient: "from-emerald-500 to-teal-600",
      tags: [
        'Windows Server',
        'Active Directory',
        'Rollout'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: t('services.ai.title'),
      description: t('services.ai.subtitle'),
      path: "/services/ai",
      gradient: "from-orange-400 to-pink-600"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: t('services.security.title'),
      description: t('services.security.subtitle'),
      path: "/services/security",
      gradient: "from-red-500 to-rose-600"
    },
    {
      icon: <Server className="h-8 w-8 text-white" />,
      title: t('services.server.title'),
      description: t('services.server.subtitle'),
      path: "/services/server",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Network className="h-8 w-8 text-white" />,
      title: t('services.network.title'),
      description: t('services.network.subtitle'),
      path: "/services/network",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <BackgroundPaths title={t('services.title')} />
      
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <Link to={service.path}>
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300`}>
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl transform rotate-45 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative z-10 text-center">
                      <div className="mb-6 p-3 inline-flex rounded-xl bg-white/10 backdrop-blur-lg">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/80 mb-6 line-clamp-3">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm text-white/90 rounded-full bg-white/10 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link to={service.path}>
                  <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${service.gradient} p-6 h-full shadow-md hover:shadow-xl transition-all duration-300`}>
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-white/10 blur-xl transform rotate-45 group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative z-10 text-center">
                      <div className="mb-4 p-2 inline-flex rounded-lg bg-white/10 backdrop-blur-lg">
                        {service.icon}
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/80 text-sm line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
