import { Database, FileSpreadsheet, Globe, Bot } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
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
      icon: <FileSpreadsheet className="h-12 w-12 text-white" />,
      title: t('index.services.office'),
      description: t('index.services.office.desc'),
      path: "/services/office",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: <Bot className="h-12 w-12 text-white" />,
      title: t('index.services.ai'),
      description: t('index.services.ai.desc'),
      path: "/services/ai",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;