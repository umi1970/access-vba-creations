import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { FileSpreadsheet, Zap, GitMerge, FileText, GraduationCap } from 'lucide-react';

const Office = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('services.office.automation'),
      description: t('services.office.automation.desc'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <GitMerge className="h-8 w-8" />,
      title: t('services.office.integration'),
      description: t('services.office.integration.desc'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: t('services.office.templates'),
      description: t('services.office.templates.desc'),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: t('services.office.training'),
      description: t('services.office.training.desc'),
      gradient: "from-orange-500 to-red-500"
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
            {t('services.office.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.office.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${service.gradient} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex flex-col items-center text-white">
                <div className="mb-4 p-3 bg-white/10 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/90 text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Office;