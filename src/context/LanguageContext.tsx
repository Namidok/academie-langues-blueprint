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
  // About section
  'home.about.title': {
    english: 'About Our Institute',
    french: 'À propos de notre institut',
    german: 'Über unser Institut',
    spanish: 'Acerca de nuestro instituto',
    japanese: '当研究所について',
  },
  'home.about.description1': {
    english: 'Founded in 1998, Académie de Langues étrangères has been at the forefront of language education in Visakhapatnam for over 25 years. Our institute is recognized for its excellence in teaching foreign languages with a focus on practical communication skills.',
    french: 'Fondée en 1998, l\'Académie de Langues étrangères est à l\'avant-garde de l\'enseignement des langues à Visakhapatnam depuis plus de 25 ans. Notre institut est reconnu pour son excellence dans l\'enseignement des langues étrangères avec un accent sur les compétences de communication pratiques.',
    german: 'Das 1998 gegründete Académie de Langues étrangères ist seit über 25 Jahren führend im Sprachunterricht in Visakhapatnam. Unser Institut ist bekannt für seine Exzellenz im Unterrichten von Fremdsprachen mit Fokus auf praktische Kommunikationsfähigkeiten.',
    spanish: 'Fundada en 1998, Académie de Langues étrangères ha estado a la vanguardia de la educación de idiomas en Visakhapatnam durante más de 25 años. Nuestro instituto es reconocido por su excelencia en la enseñanza de idiomas extranjeros con un enfoque en habilidades de comunicación práctica.',
    japanese: '1998年に設立されたAcadémie de Langues étrangèresは、25年以上にわたりヴィシャカパトナムの言語教育の最前線にいます。研究所は、実践的なコミュニケーションスキルに焦点を当てた外国語教育の卓越性で認められています。',
  },
  'home.about.description2': {
    english: 'We pride ourselves on our team of native and highly qualified language instructors who bring authentic cultural experiences into the classroom, making learning engaging and effective.',
    french: 'Nous sommes fiers de notre équipe d\'instructeurs de langue natifs et hautement qualifiés qui apportent des expériences culturelles authentiques en classe, rendant l\'apprentissage engageant et efficace.',
    german: 'Wir sind stolz auf unser Team von muttersprachlichen und hochqualifizierten Sprachlehrern, die authentische kulturelle Erfahrungen ins Klassenzimmer bringen und das Lernen ansprechend und effektiv gestalten.',
    spanish: 'Estamos orgullosos de nuestro equipo de instructores de idiomas nativos y altamente calificados que aportan experiencias culturales auténticas al aula, haciendo que el aprendizaje sea atractivo y efectivo.',
    japanese: '私たちは、教室に本物の文化体験をもたらし、学習を魅力的かつ効果的にするネイティブで高度な資格を持つ言語講師のチームを誇りに思っています。',
  },
  'home.about.description3': {
    english: 'Our teaching methodology combines traditional classroom learning with modern technology and immersive techniques to ensure students develop strong language skills that are applicable in real-world situations.',
    french: 'Notre méthodologie d\'enseignement combine l\'apprentissage en classe traditionnel avec la technologie moderne et des techniques immersives pour garantir que les étudiants développent de solides compétences linguistiques applicables dans des situations réelles.',
    german: 'Unsere Lehrmethodik kombiniert traditionelles Klassenzimmerlernen mit moderner Technologie und immersiven Techniken, um sicherzustellen, dass die Schüler starke Sprachkenntnisse entwickeln, die in realen Situationen anwendbar sind.',
    spanish: 'Nuestra metodología de enseñanza combina el aprendizaje tradicional en el aula con tecnología moderna y técnicas inmersivas para garantizar que los estudiantes desarrollen habilidades lingüísticas sólidas que sean aplicables en situaciones del mundo real.',
    japanese: '私たちの教育方法は、伝統的な教室での学習と最新のテクノロジー、没入型技術を組み合わせ、学生が実際の状況で適用できる強力な言語スキルを開発することを保証します。',
  },
  // Achievements section
  'home.achievements.title': {
    english: 'Our Achievements',
    french: 'Nos Réalisations',
    german: 'Unsere Erfolge',
    spanish: 'Nuestros Logros',
    japanese: '当社の成果',
  },
  'home.achievements.item1': {
    english: 'Recognized as the leading language institute in Visakhapatnam for five consecutive years (2019-2023)',
    french: 'Reconnu comme le principal institut de langues à Visakhapatnam pendant cinq années consécutives (2019-2023)',
    german: 'Als führendes Sprachinstitut in Visakhapatnam für fünf aufeinanderfolgende Jahre anerkannt (2019-2023)',
    spanish: 'Reconocido como el instituto de idiomas líder en Visakhapatnam durante cinco años consecutivos (2019-2023)',
    japanese: 'ヴィシャカパトナムの主要な言語研究所として5年連続で認められています（2019年〜2023年）',
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
