import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const PartnerSection = () => {
  const { t } = useLanguage();

  return (
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
  );
};

export default PartnerSection;