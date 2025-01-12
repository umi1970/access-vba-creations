import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7")',
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
  );
};

export default HeroSection;