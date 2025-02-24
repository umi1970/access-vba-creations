
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Bot, Zap, GitMerge, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AI = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Zap className="h-12 w-12 text-ipc-orange" />,
      title: t('services.ai.automation'),
      description: t('services.ai.automation.desc')
    },
    {
      icon: <Bot className="h-12 w-12 text-ipc-orange" />,
      title: t('services.ai.analysis'),
      description: t('services.ai.analysis.desc')
    },
    {
      icon: <GitMerge className="h-12 w-12 text-ipc-orange" />,
      title: t('services.ai.integration'),
      description: t('services.ai.integration.desc')
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-ipc-orange" />,
      title: t('services.ai.chatbots'),
      description: t('services.ai.chatbots.desc')
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
            {t('services.ai.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.ai.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-center text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AI;
