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
    'services.support.firstLevel': 'First-Level Support',
    'services.support.firstLevel.desc': 'Schnelle und kompetente Hilfe bei allen IT-Problemen',
    'services.support.onsite': 'Vor-Ort Service',
    'services.support.onsite.desc': 'Persönliche Unterstützung direkt an Ihrem Arbeitsplatz',
    'services.support.response': 'Schnelle Reaktionszeiten',
    'services.support.response.desc': 'Garantierte Reaktionszeiten für minimale Ausfallzeiten',
    'services.support.ai': 'KI-gestützte Lösungen',
    'services.support.ai.desc': 'Moderne Technologien für effiziente Problemlösung',
    'services.admin.title': 'Systemadministration',
    'services.admin.subtitle': 'Professionelle IT-Administration mit langjähriger Erfahrung',
    'services.admin.workstation': 'Workstation Administration',
    'services.admin.workstation.desc': 'Installation, Konfiguration und Wartung von Arbeitsplatzrechnern',
    'services.admin.server': 'Server Management',
    'services.admin.server.desc': 'Windows Server Administration und Wartung',
    'services.admin.security': 'Security Administration',
    'services.admin.security.desc': 'Implementierung und Überwachung von Sicherheitsrichtlinien',
    'services.admin.network': 'Netzwerk Management',
    'services.admin.network.desc': 'Verwaltung und Optimierung von Netzwerkinfrastrukturen',
    'services.admin.aiIntegration': 'KI-Integration',
    'services.admin.aiIntegration.desc': 'Implementierung moderner KI-Lösungen',
    'services.admin.automation': 'Automatisierung',
    'services.admin.automation.desc': 'Scripting und Prozessautomatisierung',
    'index.hero.title': 'Professionelle IT-Lösungen',
    'index.hero.subtitle': 'Maßgeschneiderte Datenbank- und Softwarelösungen für Ihr Unternehmen',
    'index.hero.cta': 'Kontaktieren Sie uns',
    'index.services.database': 'Datenbank-Entwicklung',
    'index.services.database.desc': 'Professionelle Entwicklung und Optimierung von Datenbanklösungen',
    'index.services.vba': 'VBA Entwicklung',
    'index.services.vba.desc': 'Automatisierung und Optimierung Ihrer Excel-Prozesse',
    'index.services.addins': 'Excel Add-ins',
    'index.services.addins.desc': 'Maßgeschneiderte Excel-Erweiterungen für Ihre Anforderungen',
    'index.partner.title': 'Ihr Partner für IT-Lösungen',
    'index.partner.desc': 'Mit über 10 Jahren Erfahrung entwickeln wir professionelle Lösungen für Ihr Unternehmen',
    'index.partner.link': 'Unsere Leistungen entdecken'
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
    'services.support.firstLevel': 'First-Level Support',
    'services.support.firstLevel.desc': 'Quick and competent help for all IT problems',
    'services.support.onsite': 'On-Site Service',
    'services.support.onsite.desc': 'Personal support directly at your workplace',
    'services.support.response': 'Fast Response Times',
    'services.support.response.desc': 'Guaranteed response times for minimal downtime',
    'services.support.ai': 'AI-Powered Solutions',
    'services.support.ai.desc': 'Modern technologies for efficient problem solving',
    'services.admin.title': 'System Administration',
    'services.admin.subtitle': 'Professional IT administration with years of experience',
    'services.admin.workstation': 'Workstation Administration',
    'services.admin.workstation.desc': 'Installation, configuration and maintenance of workstations',
    'services.admin.server': 'Server Management',
    'services.admin.server.desc': 'Windows Server administration and maintenance',
    'services.admin.security': 'Security Administration',
    'services.admin.security.desc': 'Implementation and monitoring of security policies',
    'services.admin.network': 'Network Management',
    'services.admin.network.desc': 'Management and optimization of network infrastructures',
    'services.admin.aiIntegration': 'AI Integration',
    'services.admin.aiIntegration.desc': 'Implementation of modern AI solutions',
    'services.admin.automation': 'Automation',
    'services.admin.automation.desc': 'Scripting and process automation',
    'index.hero.title': 'Professional IT Solutions',
    'index.hero.subtitle': 'Custom database and software solutions for your business',
    'index.hero.cta': 'Contact Us',
    'index.services.database': 'Database Development',
    'index.services.database.desc': 'Professional development and optimization of database solutions',
    'index.services.vba': 'VBA Development',
    'index.services.vba.desc': 'Automation and optimization of your Excel processes',
    'index.services.addins': 'Excel Add-ins',
    'index.services.addins.desc': 'Custom Excel extensions for your requirements',
    'index.partner.title': 'Your IT Solutions Partner',
    'index.partner.desc': 'With over 10 years of experience, we develop professional solutions for your business',
    'index.partner.link': 'Discover Our Services'
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
