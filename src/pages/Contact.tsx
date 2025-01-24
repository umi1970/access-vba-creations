import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Submitting form with data:', formData);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: "bfa3b5fa-c3e6-4d1d-9366-23a579f1b603",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "IPC24 Contact Form",
          to_email: "u.zobu@ipc24.de",
          subject: "Neue Kontaktanfrage von " + formData.name,
        }),
      });

      const data = await response.json();
      console.log('Response from web3forms:', data);

      if (data.success) {
        toast({
          title: t('contact.form.success'),
          description: t('contact.form.success.desc'),
          duration: 5000,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.error.desc'),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-ipc-blue mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.info.phone')}</h3>
                  <p className="text-gray-600">+49 1590 6194455</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-ipc-blue mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.info.address')}</h3>
                  <p className="text-gray-600">
                    {t('footer.address')}<br />
                    {t('footer.city')}<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-ipc-blue mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.info.email')}</h3>
                  <p className="text-gray-600">u.zobu@ipc24.de</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ipc-blue focus:border-transparent transition duration-200 text-base"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ipc-blue focus:border-transparent transition duration-200 text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-ipc-blue focus:border-transparent transition duration-200 text-base resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-ipc-blue hover:bg-ipc-blue/90 text-white py-4 rounded-lg text-lg font-medium transition duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;