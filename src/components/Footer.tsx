import { Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hilfe & Kontakt */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-ipc-orange">
              {t('footer.help')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-ipc-orange transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-ipc-orange transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-ipc-orange">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-gray-300 hover:text-ipc-orange transition-colors">
                  {t('footer.imprint')}
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-300 hover:text-ipc-orange transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-gray-300 hover:text-ipc-orange transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <motion.h3 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="font-semibold text-xl mb-4 text-ipc-orange"
            >
              IPC24 e.K.
            </motion.h3>
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-gray-300">{t('footer.address')}</p>
              <p className="text-gray-300">{t('footer.city')}</p>
              <div className="flex flex-col space-y-2 mt-4">
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
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;