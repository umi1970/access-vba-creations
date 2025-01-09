import { Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <motion.h3 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="font-semibold text-2xl mb-4 text-ipc-orange"
            >
              IPC24 e.K.
            </motion.h3>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1"
            >
              <p className="text-gray-300">{t('footer.address')}</p>
              <p className="text-gray-300">{t('footer.city')}</p>
            </motion.div>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <motion.a 
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              href="https://ipc24.de" 
              className="flex items-center text-gray-300 hover:text-ipc-orange transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              ipc24.de
            </motion.a>
            <motion.a 
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
              href="mailto:info@ipc24.de"
              className="flex items-center text-gray-300 hover:text-ipc-orange transition-colors group"
            >
              <Mail className="h-5 w-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              info@ipc24.de
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;