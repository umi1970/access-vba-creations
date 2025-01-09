import { motion } from 'framer-motion';
import { Database as DatabaseIcon, Server, Code, FileSpreadsheet } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DatabasePage = () => {
  const { t } = useLanguage();

  const expertise = [
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><DatabaseIcon /></div>,
      title: t('services.database.development'),
      description: t('services.database.customSolutions'),
      experience: "11+ Jahre"
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><Server /></div>,
      title: t('services.database.administration'),
      description: t('services.database.monitoring'),
      experience: "10+ Jahre"
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><Code /></div>,
      title: t('services.database.consulting'),
      description: t('services.database.architecture'),
      experience: "10+ Jahre"
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><FileSpreadsheet /></div>,
      title: t('services.database.training'),
      description: t('services.database.bestPractices'),
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
            {t('services.database.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.database.subtitle')}
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
                    {t('services.database.experience')}: {item.experience}
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
          <h2 className="text-2xl font-bold mb-4 text-center">{t('services.database.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="font-semibold mb-2">{t('services.database.development')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('services.database.customSolutions')}</li>
                <li>• {t('services.database.performance')}</li>
                <li>• {t('services.database.dataModeling')}</li>
                <li>• {t('services.database.migration')}</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{t('services.database.administration')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('services.database.backup')}</li>
                <li>• {t('services.database.monitoring')}</li>
                <li>• {t('services.database.security')}</li>
                <li>• {t('services.database.tuning')}</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{t('services.database.consulting')}</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• {t('services.database.architecture')}</li>
                <li>• {t('services.database.bestPractices')}</li>
                <li>• {t('services.database.training')}</li>
                <li>• {t('services.database.support')}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DatabasePage;