
import { motion } from 'framer-motion';
import { Database as DatabaseIcon, Server, Code, FileSpreadsheet, FileArchive } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DatabasePage = () => {
  const { t } = useLanguage();

  const expertise = [
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><DatabaseIcon /></div>,
      title: t('services.database.development'),
      description: t('services.database.customSolutions')
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><Server /></div>,
      title: t('services.database.administration'),
      description: t('services.database.monitoring')
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><Code /></div>,
      title: t('services.database.consulting'),
      description: t('services.database.architecture')
    },
    {
      icon: <div className="h-8 w-8 text-ipc-blue"><FileSpreadsheet /></div>,
      title: t('services.database.training'),
      description: t('services.database.bestPractices')
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
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">{t('services.database.legacyMigration')}</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="lg:w-1/3">
              <div className="p-4 bg-blue-50 rounded-lg inline-flex mb-4">
                <FileArchive className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t('services.database.legacyMigration')}</h3>
              <p className="text-gray-600">
                {t('services.database.legacyMigration.desc')}
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span> 
                  <span>dBase</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Clipper</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>DOS-based systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legacy file systems</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">{t('services.database.migration')}</h4>
              <p className="text-gray-600 mb-4">
                {t('services.database.dataModeling')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Source Systems</h5>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• dBase</li>
                    <li>• Clipper</li>
                    <li>• FoxPro</li>
                    <li>• Paradox</li>
                    <li>• Legacy File Systems</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Target Systems</h5>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• SQL Server</li>
                    <li>• MySQL / MariaDB</li>
                    <li>• PostgreSQL</li>
                    <li>• Modern Access Solutions</li>
                    <li>• Cloud Databases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

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
