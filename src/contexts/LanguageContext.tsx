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
    'services.web.planning': 'Planung',
    'services.web.planning.desc': 'Strategische Planung und Konzeption Ihrer Webpräsenz',
    'services.web.domain.registration': 'Domain-Registrierung',
    'services.web.domain.registration.desc': 'Registrierung und Verwaltung Ihrer Domains',
    'services.web.domain.migration': 'Domain-Umzug',
    'services.web.domain.migration.desc': 'Professionelle Migration Ihrer bestehenden Domains',
    'services.web.design': 'Webdesign',
    'services.web.design.desc': 'Moderne und ansprechende Gestaltung Ihrer Website',
    'services.web.development': 'Entwicklung',
    'services.web.development.desc': 'Individuelle Webentwicklung nach Ihren Anforderungen',
    'services.web.seo': 'SEO-Optimierung',
    'services.web.seo.desc': 'Optimierung für Suchmaschinen und bessere Sichtbarkeit',
    'services.web.hosting': 'Webhosting',
    'services.web.hosting.desc': 'Zuverlässiges Hosting Ihrer Webpräsenz',
    'services.web.security': 'Sicherheit',
    'services.web.security.desc': 'Umfassende Sicherheitslösungen für Ihre Website',
    'services.web.responsive': 'Responsive Design',
    'services.web.responsive.desc': 'Optimale Darstellung auf allen Endgeräten',
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
    'services.web.planning': 'Planning',
    'services.web.planning.desc': 'Strategic planning and conception of your web presence',
    'services.web.domain.registration': 'Domain Registration',
    'services.web.domain.registration.desc': 'Registration and management of your domains',
    'services.web.domain.migration': 'Domain Migration',
    'services.web.domain.migration.desc': 'Professional migration of your existing domains',
    'services.web.design': 'Web Design',
    'services.web.design.desc': 'Modern and appealing design of your website',
    'services.web.development': 'Development',
    'services.web.development.desc': 'Custom web development according to your requirements',
    'services.web.seo': 'SEO Optimization',
    'services.web.seo.desc': 'Search engine optimization for better visibility',
    'services.web.hosting': 'Web Hosting',
    'services.web.hosting.desc': 'Reliable hosting of your web presence',
    'services.web.security': 'Security',
    'services.web.security.desc': 'Comprehensive security solutions for your website',
    'services.web.responsive': 'Responsive Design',
    'services.web.responsive.desc': 'Optimal display on all devices',
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
