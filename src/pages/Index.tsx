import { motion } from 'framer-motion';
import { ArrowRight, Database, Code, FileSpreadsheet, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Database className="h-12 w-12 text-white" />,
      title: t('index.services.database'),
      description: t('index.services.database.desc'),
      path: "/services/database",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="h-12 w-12 text-white" />,
      title: t('index.services.vba'),
      description: t('index.services.vba.desc'),
      path: "/services/vba",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: <FileSpreadsheet className="h-12 w-12 text-white" />,
      title: t('index.services.addins'),
      description: t('index.services.addins.desc'),
      path: "/services/addins",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="h-12 w-12 text-white" />,
      title: t('services.web.title'),
      description: t('services.web.subtitle'),
      path: "/services/web",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {t('index.hero.title')}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t('index.hero.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('index.hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.path}>
                  <div className={`h-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${service.gradient}`}>
                    <div className="p-8">
                      <div className="flex items-center justify-center mb-6 bg-white/10 rounded-full w-20 h-20 mx-auto">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-center">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('index.partner.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('index.partner.desc')}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                {t('index.partner.link')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Team Collaboration"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;