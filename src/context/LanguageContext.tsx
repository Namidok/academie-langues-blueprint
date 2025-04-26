import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'english' | 'french' | 'german' | 'spanish' | 'japanese';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': {
    english: 'Home',
    french: 'Accueil',
    german: 'Startseite',
    spanish: 'Inicio',
    japanese: 'ホーム',
  },
  'nav.courses': {
    english: 'Courses',
    french: 'Cours',
    german: 'Kurse',
    spanish: 'Cursos',
    japanese: 'コース',
  },
  'nav.contact': {
    english: 'Contact Us',
    french: 'Contactez-nous',
    german: 'Kontaktiere uns',
    spanish: 'Contáctenos',
    japanese: 'お問い合わせ',
  },
  // Home page
  'home.title': {
    english: 'Académie de Langues étrangères',
    french: 'Académie de Langues étrangères',
    german: 'Académie de Langues étrangères',
    spanish: 'Académie de Langues étrangères',
    japanese: 'Académie de Langues étrangères',
  },
  'home.subtitle': {
    english: 'Discover the world through language learning: French, Spanish, German, and Japanese courses',
    french: 'Découvrez le monde à travers l\'apprentissage des langues: cours de français, d\'espagnol, d\'allemand et de japonais',
    german: 'Entdecken Sie die Welt durch das Erlernen von Sprachen: Französisch-, Spanisch-, Deutsch- und Japanischkurse',
    spanish: 'Descubre el mundo a través del aprendizaje de idiomas: cursos de francés, español, alemán y japonés',
    japanese: '言語学習を通じて世界を発見：フランス語、スペイン語、ドイツ語、日本語コース',
  },
  // Other translations can be added here
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('english');

  const translate = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
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
