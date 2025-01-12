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
    'index.hero.title': 'Professionelle IT-Lösungen',
    'index.hero.subtitle': 'Maßgeschneiderte Entwicklung für Ihr Unternehmen',
    'index.hero.cta': 'Kontaktieren Sie uns',
    'index.services.database': 'Datenbank-Entwicklung',
    'index.services.database.desc': 'Professionelle Datenbankentwicklung und -verwaltung',
    'index.services.vba': 'VBA Entwicklung',
    'index.services.vba.desc': 'Automatisierung und Optimierung Ihrer Excel-Prozesse',
    'index.services.addins': 'Excel Add-ins',
    'index.services.addins.desc': 'Individuelle Excel-Erweiterungen für Ihre Anforderungen',
    'index.partner.title': 'Ihr Partner für digitale Lösungen',
    'index.partner.desc': 'Wir unterstützen Sie bei der Digitalisierung Ihrer Geschäftsprozesse',
    'index.partner.link': 'Unsere Leistungen entdecken',
    'services.title': 'Unsere Leistungen',
    'services.subtitle': 'Professionelle IT-Lösungen mit über 10 Jahren Erfahrung, ergänzt durch moderne KI-gestützte Technologien',
    'services.support.title': 'IT Support & Helpdesk',
    'services.support.subtitle': 'Umfassender technischer Support und Problemlösung',
    'services.support.firstLevel': 'First Level Support',
    'services.support.firstLevel.desc': 'Schnelle und effiziente Hilfe bei alltäglichen IT-Problemen',
    'services.support.onsite': 'Vor-Ort Support',
    'services.support.onsite.desc': 'Persönliche Unterstützung direkt bei Ihnen',
    'services.admin.title': 'Systemadministration',
    'services.admin.subtitle': 'Professionelle Verwaltung und Wartung von IT-Infrastrukturen',
    'services.admin.workstation': 'Arbeitsplatz-Management',
    'services.admin.workstation.desc': 'Einrichtung und Verwaltung von Arbeitsplatzrechnern',
    'services.admin.server': 'Server-Administration',
    'services.admin.server.desc': 'Professionelle Verwaltung von Server-Systemen',
    'services.admin.security': 'IT-Sicherheit',
    'services.admin.security.desc': 'Umfassende Sicherheitslösungen für Ihre IT-Infrastruktur',
    'services.admin.network': 'Netzwerk-Administration',
    'services.admin.network.desc': 'Verwaltung und Optimierung Ihrer Netzwerkinfrastruktur'
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
    'index.hero.title': 'Professional IT Solutions',
    'index.hero.subtitle': 'Custom Development for Your Business',
    'index.hero.cta': 'Contact Us',
    'index.services.database': 'Database Development',
    'index.services.database.desc': 'Professional database development and management',
    'index.services.vba': 'VBA Development',
    'index.services.vba.desc': 'Automation and optimization of your Excel processes',
    'index.services.addins': 'Excel Add-ins',
    'index.services.addins.desc': 'Custom Excel extensions for your requirements',
    'index.partner.title': 'Your Partner for Digital Solutions',
    'index.partner.desc': 'We support you in digitalizing your business processes',
    'index.partner.link': 'Discover Our Services',
    'services.title': 'Our Services',
    'services.subtitle': 'Professional IT solutions with over 10 years of experience, enhanced by modern AI-powered technologies',
    'services.support.title': 'IT Support & Helpdesk',
    'services.support.subtitle': 'Comprehensive technical support and problem solving',
    'services.support.firstLevel': 'First Level Support',
    'services.support.firstLevel.desc': 'Quick and efficient help for everyday IT issues',
    'services.support.onsite': 'On-site Support',
    'services.support.onsite.desc': 'Personal support directly at your location',
    'services.admin.title': 'System Administration',
    'services.admin.subtitle': 'Professional management and maintenance of IT infrastructures',
    'services.admin.workstation': 'Workstation Management',
    'services.admin.workstation.desc': 'Setup and management of workstation computers',
    'services.admin.server': 'Server Administration',
    'services.admin.server.desc': 'Professional management of server systems',
    'services.admin.security': 'IT Security',
    'services.admin.security.desc': 'Comprehensive security solutions for your IT infrastructure',
    'services.admin.network': 'Network Administration',
    'services.admin.network.desc': 'Management and optimization of your network infrastructure'
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
