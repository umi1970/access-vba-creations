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
    'services.database.subtitle': 'Professionelle Datenbankentwicklung mit über einem Jahrzehnt Erfahrung',
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
    'services.database.experience': 'Erfahrung',
    'services.support.title': 'IT Support & Helpdesk',
    'services.support.subtitle': 'Professioneller IT-Support mit über 7 Jahren Erfahrung',
    'services.admin.title': 'Systemadministration',
    'services.admin.subtitle': 'Professionelle IT-Administration mit langjähriger Erfahrung',
    'index.hero.title': 'IT Solutions für Ihr Unternehmen',
    'index.hero.subtitle': 'Professionelle Entwicklung von MS Access Datenbanken, VBA Code und Office Add-ins',
    'index.hero.cta': 'Kontakt aufnehmen',
    'index.services.database': 'MS Access Datenbanken',
    'index.services.database.desc': 'Entwicklung und Optimierung von maßgeschneiderten Access-Datenbanklösungen',
    'index.services.vba': 'VBA Programmierung',
    'index.services.vba.desc': 'Professionelle Entwicklung von VBA-Code und Makros für Office-Anwendungen',
    'index.services.addins': 'Office Add-ins',
    'index.services.addins.desc': 'Individuelle Add-ins zur Erweiterung Ihrer Office-Anwendungen',
    'index.partner.title': 'Ihr Partner für professionelle IT-Lösungen',
    'index.partner.desc': 'Mit jahrelanger Erfahrung in der Entwicklung von maßgeschneiderten Softwarelösungen unterstützen wir Sie bei der Digitalisierung Ihrer Geschäftsprozesse.',
    'index.partner.link': 'Mehr über unsere Leistungen'
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'footer.address': 'Erzberger Street 28',
    'footer.city': '68753 Waghaeusel',
    'services.database.title': 'Database Development & Management',
    'services.database.subtitle': 'Professional database development with over a decade of experience',
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
    'services.database.experience': 'Experience',
    'services.support.title': 'IT Support & Helpdesk',
    'services.support.subtitle': 'Professional IT support with over 7 years of experience',
    'services.admin.title': 'System Administration',
    'services.admin.subtitle': 'Professional IT administration with years of experience',
    'index.hero.title': 'IT Solutions for Your Business',
    'index.hero.subtitle': 'Professional development of MS Access databases, VBA code and Office add-ins',
    'index.hero.cta': 'Contact Us',
    'index.services.database': 'MS Access Databases',
    'index.services.database.desc': 'Development and optimization of custom Access database solutions',
    'index.services.vba': 'VBA Programming',
    'index.services.vba.desc': 'Professional development of VBA code and macros for Office applications',
    'index.services.addins': 'Office Add-ins',
    'index.services.addins.desc': 'Custom add-ins to extend your Office applications',
    'index.partner.title': 'Your Partner for Professional IT Solutions',
    'index.partner.desc': 'With years of experience in developing custom software solutions, we support you in digitalizing your business processes.',
    'index.partner.link': 'More about our services'
  },
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