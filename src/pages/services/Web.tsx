import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Globe, 
  PenTool, 
  Server, 
  ArrowRightLeft, 
  Layout, 
  Search,
  Code,
  Shield,
  Smartphone
} from 'lucide-react';

const Web = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: t('services.web.planning'),
      description: t('services.web.planning.desc'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('services.web.domain.registration'),
      description: t('services.web.domain.registration.desc'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ArrowRightLeft className="h-8 w-8" />,
      title: t('services.web.domain.migration'),
      description: t('services.web.domain.migration.desc'),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: t('services.web.design'),
      description: t('services.web.design.desc'),
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t('services.web.development'),
      description: t('services.web.development.desc'),
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: t('services.web.seo'),
      description: t('services.web.seo.desc'),
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: t('services.web.hosting'),
      description: t('services.web.hosting.desc'),
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('services.web.security'),
      description: t('services.web.security.desc'),
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('services.web.responsive'),
      description: t('services.web.responsive.desc'),
      gradient: "from-indigo-500 to-blue-500"
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
            {t('services.web.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.web.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Web;