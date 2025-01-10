import React, { createContext, useContext, useState } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    'nav.home': 'Home',
    'nav.services': 'Leistungen',
    'nav.contact': 'Kontakt',
    'footer.address': 'Erzbergerstraße 28',
    'footer.city': '68753 Waghäusel',
    'services.database.title': 'Datenbank-Entwicklung & Management',
    'services.database.subtitle': 'Professionelle Datenbankentwicklung',
    'services.database.development': 'Entwicklung',
    'services.database.administration': 'Administration',
    'services.database.consulting': 'Beratung',
    'services.database.customSolutions': 'Maßgeschneiderte Datenbanklösungen',
    'services.database.performance': 'Performance-Optimierung',
    'services.database.dataModeling': 'Datenmodellierung',
    'services.database.migration': 'Migrationsprojekte',
    'services.database.backup': 'Backup & Recovery',
    'services.database.monitoring': 'Monitoring & Wartung',
    'services.database.security': 'Sicherheitskonfiguration',
    'services.database.tuning': 'Performance-Tuning',
    'services.database.architecture': 'Architekturberatung',
    'services.database.bestPractices': 'Best Practices',
    'services.database.training': 'Schulungen',
    'services.database.support': 'Support & Wartung',
    'services.web.title': 'Web Entwicklung & Präsenz',
    'services.web.subtitle': 'Moderne Weblösungen für Ihr Unternehmen',
    'services.web.development': 'Web-Entwicklung',
    'services.web.design': 'Web-Design',
    'services.web.responsive': 'Responsive Design',
    'services.web.seo': 'SEO-Optimierung',
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Nehmen Sie Kontakt mit uns auf',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Senden',
    'contact.address.title': 'Adresse',
    'contact.phone.title': 'Telefon',
    'contact.email.title': 'E-Mail',
    'services.page.title': 'Unsere Leistungen',
    'services.page.subtitle': 'Professionelle IT-Lösungen für Ihr Unternehmen',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'footer.address': 'Erzberger Street 28',
    'footer.city': '68753 Waghaeusel',
    'services.database.title': 'Database Development & Management',
    'services.database.subtitle': 'Professional database development',
    'services.database.development': 'Development',
    'services.database.administration': 'Administration',
    'services.database.consulting': 'Consulting',
    'services.database.customSolutions': 'Custom Database Solutions',
    'services.database.performance': 'Performance Optimization',
    'services.database.dataModeling': 'Data Modeling',
    'services.database.migration': 'Migration Projects',
    'services.database.backup': 'Backup & Recovery',
    'services.database.monitoring': 'Monitoring & Maintenance',
    'services.database.security': 'Security Configuration',
    'services.database.tuning': 'Performance Tuning',
    'services.database.architecture': 'Architecture Consulting',
    'services.database.bestPractices': 'Best Practices',
    'services.database.training': 'Training',
    'services.database.support': 'Support & Maintenance',
    'services.web.title': 'Web Development & Presence',
    'services.web.subtitle': 'Modern web solutions for your business',
    'services.web.development': 'Web Development',
    'services.web.design': 'Web Design',
    'services.web.responsive': 'Responsive Design',
    'services.web.seo': 'SEO Optimization',
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.address.title': 'Address',
    'contact.phone.title': 'Phone',
    'contact.email.title': 'Email',
    'services.page.title': 'Our Services',
    'services.page.subtitle': 'Professional IT solutions for your business',
  }
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['de']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
