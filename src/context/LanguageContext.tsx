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
  'home.achievements.item2': {
    english: 'Over 15,000 students successfully completed our language programs',
    french: 'Plus de 15 000 étudiants ont réussi nos programmes linguistiques',
    german: 'Über 15.000 Studenten haben unsere Sprachprogramme erfolgreich abgeschlossen',
    spanish: 'Más de 15.000 estudiantes completaron con éxito nuestros programas de idiomas',
    japanese: '15,000人以上の学生が当社の言語プログラムを修了しました',
  },
  'home.achievements.item3': {
    english: '95% success rate in international language proficiency examinations',
    french: '95% de taux de réussite aux examens internationaux de compétence linguistique',
    german: '95% Erfolgsquote bei internationalen Sprachprüfungen',
    spanish: '95% de tasa de éxito en exámenes internacionales de competencia lingüística',
    japanese: '国際言語能力試験で95％の合格率',
  },
  'home.achievements.item4': {
    english: 'Official examination center for DELF (French) and DELE (Spanish) certifications',
    french: 'Centre d\'examen officiel pour les certifications DELF (français) et DELE (espagnol)',
    german: 'Offizielles Prüfungszentrum für DELF (Französisch) und DELE (Spanisch) Zertifizierungen',
    spanish: 'Centro oficial de examen para las certificaciones DELF (francés) y DELE (español)',
    japanese: 'DELF（フランス語）およびDELE（スペイン語）認定の公式試験センター',
  },
  'home.achievements.item5': {
    english: 'Partnership programs with universities in France, Germany, Spain, and Japan',
    french: 'Programmes de partenariat avec des universités en France, en Allemagne, en Espagne et au Japon',
    german: 'Partnerschaftsprogramme mit Universitäten in Frankreich, Deutschland, Spanien und Japan',
    spanish: 'Programas de asociación con universidades en Francia, Alemania, España y Japón',
    japanese: 'フランス、ドイツ、スペイン、日本の大学とのパートナーシッププログラム',
  },
  // Why Choose Us section
  'home.whyus.title': {
    english: 'Why Choose Us?',
    french: 'Pourquoi nous choisir?',
    german: 'Warum uns wählen?',
    spanish: '¿Por qué elegirnos?',
    japanese: 'なぜ私たちを選ぶのか？',
  },
  'home.whyus.reason1.title': {
    english: 'Expert Teachers',
    french: 'Enseignants experts',
    german: 'Experten-Lehrer',
    spanish: 'Profesores expertos',
    japanese: '専門教師',
  },
  'home.whyus.reason1.description': {
    english: 'Our instructors are either native speakers or certified language experts with years of teaching experience.',
    french: 'Nos instructeurs sont soit des locuteurs natifs, soit des experts linguistiques certifiés avec des années d\'expérience dans l\'enseignement.',
    german: 'Unsere Lehrer sind entweder Muttersprachler oder zertifizierte Sprachexperten mit jahrelanger Unterrichtserfahrung.',
    spanish: 'Nuestros instructores son hablantes nativos o expertos en idiomas certificados con años de experiencia docente.',
    japanese: '私たちの講師は、ネイティブスピーカーまたは何年もの教育経験を持つ認定言語専門家です。',
  },
  'home.whyus.reason2.title': {
    english: 'Small Class Size',
    french: 'Petite taille de classe',
    german: 'Kleine Klassengröße',
    spanish: 'Clases pequeñas',
    japanese: '少人数クラス',
  },
  'home.whyus.reason2.description': {
    english: 'We maintain small groups of 8-12 students to ensure personalized attention and better learning outcomes.',
    french: 'Nous maintenons de petits groupes de 8 à 12 étudiants pour assurer une attention personnalisée et de meilleurs résultats d\'apprentissage.',
    german: 'Wir halten kleine Gruppen von 8-12 Schülern aufrecht, um individuelle Aufmerksamkeit und bessere Lernergebnisse zu gewährleisten.',
    spanish: 'Mantenemos grupos pequeños de 8 a 12 estudiantes para garantizar una atención personalizada y mejores resultados de aprendizaje.',
    japanese: '個別の注意と良好な学習成果を確保するために、8〜12人の小さなグループを維持しています。',
  },
  'home.whyus.reason3.title': {
    english: 'Modern Facilities',
    french: 'Installations modernes',
    german: 'Moderne Einrichtungen',
    spanish: 'Instalaciones modernas',
    japanese: '最新の施設',
  },
  'home.whyus.reason3.description': {
    english: 'Our classrooms are equipped with audio-visual tools and technology to enhance the learning experience.',
    french: 'Nos salles de classe sont équipées d\'outils audiovisuels et de technologies pour améliorer l\'expérience d\'apprentissage.',
    german: 'Unsere Klassenzimmer sind mit audiovisuellen Tools und Technologien ausgestattet, um das Lernerlebnis zu verbessern.',
    spanish: 'Nuestras aulas están equipadas con herramientas audiovisuales y tecnología para mejorar la experiencia de aprendizaje.',
    japanese: '私たちの教室は、学習体験を向上させるためにオーディオビジュアルツールとテクノロジーを備えています。',
  },
  
  // Courses Page
  'courses.title': {
    english: 'Our Language Courses',
    french: 'Nos cours de langue',
    german: 'Unsere Sprachkurse',
    spanish: 'Nuestros cursos de idiomas',
    japanese: '私たちの語学コース',
  },
  'courses.subtitle': {
    english: 'Comprehensive language programs designed to develop your speaking, listening, reading, and writing skills',
    french: 'Programmes linguistiques complets conçus pour développer vos compétences en expression orale, en compréhension orale, en lecture et en écriture',
    german: 'Umfassende Sprachprogramme zur Entwicklung Ihrer Sprech-, Hör-, Lese- und Schreibfähigkeiten',
    spanish: 'Programas de idiomas completos diseñados para desarrollar sus habilidades de habla, escucha, lectura y escritura',
    japanese: '話す、聞く、読む、書くスキルを開発するように設計された包括的な言語プログラム',
  },
  'courses.additionalInfo.title': {
    english: 'Additional Information',
    french: 'Informations supplémentaires',
    german: 'Zusätzliche Information',
    spanish: 'Información adicional',
    japanese: '追加情報',
  },
  'courses.additionalInfo.item1': {
    english: 'New batches start on the first Monday of every month',
    french: 'Les nouveaux lots commencent le premier lundi de chaque mois',
    german: 'Neue Gruppen beginnen am ersten Montag jedes Monats',
    spanish: 'Los nuevos grupos comienzan el primer lunes de cada mes',
    japanese: '新しいバッチは毎月第一月曜日に始まります',
  },
  'courses.additionalInfo.item2': {
    english: 'Course materials are included in the fee',
    french: 'Le matériel de cours est inclus dans les frais',
    german: 'Kursmaterialien sind in der Gebühr enthalten',
    spanish: 'Los materiales del curso están incluidos en la tarifa',
    japanese: 'コース資料は料金に含まれています',
  },
  'courses.additionalInfo.item3': {
    english: 'Special discounts for group enrollments',
    french: 'Remises spéciales pour les inscriptions de groupe',
    german: 'Sonderrabatte für Gruppenanmeldungen',
    spanish: 'Descuentos especiales para inscripciones grupales',
    japanese: 'グループ登録の特別割引',
  },
  'courses.additionalInfo.item4': {
    english: 'One-time registration fee of ₹1,000 for new students',
    french: 'Frais d\'inscription uniques de ₹1 000 pour les nouveaux étudiants',
    german: 'Einmalige Anmeldegebühr von ₹1.000 für neue Studenten',
    spanish: 'Cuota de inscripción única de ₹1,000 para nuevos estudiantes',
    japanese: '新入生のための一回限りの登録料₹1,000',
  },
  'courses.additionalInfo.item5': {
    english: '* Fees are subject to change',
    french: '* Les frais sont sujets à changement',
    german: '* Gebühren können sich ändern',
    spanish: '* Las tarifas están sujetas a cambios',
    japanese: '* 料金は変更される場合があります',
  },
  
  // Contact Page
  'contact.title': {
    english: 'Contact Us',
    french: 'Contactez-nous',
    german: 'Kontaktiere uns',
    spanish: 'Contáctenos',
    japanese: 'お問い合わせ',
  },
  'contact.subtitle': {
    english: 'Get in touch with our team for inquiries about courses, admissions, or any other information',
    french: 'Contactez notre équipe pour des renseignements sur les cours, les admissions ou toute autre information',
    german: 'Kontaktieren Sie unser Team für Anfragen zu Kursen, Zulassungen oder andere Informationen',
    spanish: 'Póngase en contacto con nuestro equipo para consultas sobre cursos, admisiones o cualquier otra información',
    japanese: 'コース、入学、またはその他の情報についての問い合わせは、私たちのチームにお問い合わせください',
  },
  'contact.location.title': {
    english: 'Our Location',
    french: 'Notre emplacement',
    german: 'Unser Standort',
    spanish: 'Nuestra ubicación',
    japanese: '私たちの場所',
  },
  'contact.location.address': {
    english: 'Académie de Langues étrangères\nVisakhapatnam, Andhra Pradesh, India',
    french: 'Académie de Langues étrangères\nVisakhapatnam, Andhra Pradesh, Inde',
    german: 'Académie de Langues étrangères\nVisakhapatnam, Andhra Pradesh, Indien',
    spanish: 'Académie de Langues étrangères\nVisakhapatnam, Andhra Pradesh, India',
    japanese: 'Académie de Langues étrangères\nヴィシャカパトナム、アンドラプラデシュ州、インド',
  },
  'contact.form.title': {
    english: 'Send us a Message',
    french: 'Envoyez-nous un message',
    german: 'Senden Sie uns eine Nachricht',
    spanish: 'Envíenos un mensaje',
    japanese: 'メッセージを送る',
  },
  'contact.form.name': {
    english: 'Your Name',
    french: 'Votre nom',
    german: 'Ihr Name',
    spanish: 'Su nombre',
    japanese: 'あなたの名前',
  },
  'contact.form.namePlaceholder': {
    english: 'Enter your name',
    french: 'Entrez votre nom',
    german: 'Geben Sie Ihren Namen ein',
    spanish: 'Ingrese su nombre',
    japanese: 'あなたの名前を入力してください',
  },
  'contact.form.email': {
    english: 'Email Address',
    french: 'Adresse e-mail',
    german: 'E-Mail-Adresse',
    spanish: 'Dirección de correo electrónico',
    japanese: 'メールアドレス',
  },
  'contact.form.emailPlaceholder': {
    english: 'Enter your email',
    french: 'Entrez votre email',
    german: 'Geben Sie ihre E-Mail ein',
    spanish: 'Introduce tu correo electrónico',
    japanese: 'あなたのメールを入力してください',
  },
  'contact.form.phone': {
    english: 'Phone Number',
    french: 'Numéro de téléphone',
    german: 'Telefonnummer',
    spanish: 'Número de teléfono',
    japanese: '電話番号',
  },
  'contact.form.phonePlaceholder': {
    english: 'Enter your phone number',
    french: 'Entrez votre numéro de téléphone',
    german: 'Geben Sie Ihre Telefonnummer ein',
    spanish: 'Ingrese su número de teléfono',
    japanese: '電話番号を入力してください',
  },
  'contact.form.interest': {
    english: 'Interested In',
    french: 'Intéressé par',
    german: 'Interessiert an',
    spanish: 'Interesado en',
    japanese: '興味がある',
  },
  'contact.form.interestPlaceholder': {
    english: 'Select a language course',
    french: 'Sélectionnez un cours de langue',
    german: 'Wählen Sie einen Sprachkurs',
    spanish: 'Seleccione un curso de idiomas',
    japanese: '言語コースを選択',
  },
  'contact.form.french': {
    english: 'French',
    french: 'Français',
    german: 'Französisch',
    spanish: 'Francés',
    japanese: 'フランス語',
  },
  'contact.form.german': {
    english: 'German',
    french: 'Allemand',
    german: 'Deutsch',
    spanish: 'Alemán',
    japanese: 'ドイツ語',
  },
  'contact.form.spanish': {
    english: 'Spanish',
    french: 'Espagnol',
    german: 'Spanisch',
    spanish: 'Español',
    japanese: 'スペイン語',
  },
  'contact.form.japanese': {
    english: 'Japanese',
    french: 'Japonais',
    german: 'Japanisch',
    spanish: 'Japonés',
    japanese: '日本語',
  },
  'contact.form.message': {
    english: 'Your Message',
    french: 'Votre message',
    german: 'Ihre Nachricht',
    spanish: 'Tu mensaje',
    japanese: 'あなたのメッセージ',
  },
  'contact.form.messagePlaceholder': {
    english: 'Enter your message',
    french: 'Entrez votre message',
    german: 'Geben Sie Ihre Nachricht ein',
    spanish: 'Ingrese su mensaje',
    japanese: 'メッセージを入力してください',
  },
  'contact.form.submit': {
    english: 'Send Message',
    french: 'Envoyer le message',
    german: 'Nachricht senden',
    spanish: 'Enviar mensaje',
    japanese: 'メッセージを送る',
  },
  // Footer
  'footer.rights': {
    english: 'All rights reserved.',
    french: 'Tous droits réservés.',
    german: 'Alle Rechte vorbehalten.',
    spanish: 'Todos los derechos reservados.',
    japanese: '全著作権所有。',
  },
  'footer.disclaimer': {
    english: '* Fees are subject to change',
    french: '* Les frais sont sujets à changement',
    german: '* Gebühren können sich ändern',
    spanish: '* Las tarifas están sujetas a cambios',
    japanese: '* 料金は変更される場合があります',
  },
  
  // About page translations
  'nav.about': {
    english: 'About Us',
    french: 'À propos',
    german: 'Über uns',
    spanish: 'Sobre nosotros',
    japanese: '私たちについて',
  },
  'about.title': {
    english: 'About Our Director',
    french: 'À propos de notre directeur',
    german: 'Über unseren Direktor',
    spanish: 'Sobre nuestro director',
    japanese: 'ディレクターについて',
  },
  'about.director.name': {
    english: 'Prof. Michael Anil Betha',
    french: 'Prof. Michael Anil Betha',
    german: 'Prof. Michael Anil Betha',
    spanish: 'Prof. Michael Anil Betha',
    japanese: 'マイケル・アニル・ベサ教授',
  },
  'about.director.position': {
    english: 'Director, Académie de Langues étrangères',
    french: 'Directeur, Académie de Langues étrangères',
    german: 'Direktor, Académie de Langues étrangères',
    spanish: 'Director, Académie de Langues étrangères',
    japanese: 'ディレクター、アカデミー・ド・ラング・エトランジェール',
  },
  'about.director.description': {
    english: 'Prof. Michael Anil Betha has been at the forefront of language education for over two decades. His innovative teaching methodologies and dedication to cultural exchange have transformed the way languages are taught at our institute. Under his leadership, the academy has grown to become one of the most respected language institutions in the region.',
    french: 'Le professeur Michael Anil Betha est à l\'avant-garde de l\'enseignement des langues depuis plus de deux décennies. Ses méthodologies d\'enseignement innovantes et son dévouement aux échanges culturels ont transformé la façon dont les langues sont enseignées dans notre institut. Sous sa direction, l\'académie est devenue l\'une des institutions linguistiques les plus respectées de la région.',
    german: 'Prof. Michael Anil Betha steht seit über zwei Jahrzehnten an der Spitze der Sprachausbildung. Seine innovativen Lehrmethoden und sein Engagement für den kulturellen Austausch haben die Art und Weise, wie Sprachen an unserem Institut unterrichtet werden, verändert. Unter seiner Leitung hat sich die Akademie zu einer der angesehensten Sprachinstitutionen der Region entwickelt.',
    spanish: 'El Prof. Michael Anil Betha ha estado a la vanguardia de la educación en idiomas durante más de dos décadas. Sus metodologías de enseñanza innovadoras y su dedicación al intercambio cultural han transformado la forma en que se enseñan los idiomas en nuestro instituto. Bajo su liderazgo, la academia se ha convertido en una de las instituciones lingüísticas más respetadas de la región.',
    japanese: 'マイケル・アニル・ベサ教授は、20年以上にわたり語学教育の最前線に立ってきました。彼の革新的な教授法と文化交流への献身は、当研究所での言語教育の方法を変革しました。彼のリーダーシップのもと、アカデミーは地域で最も尊敬される語学機関の1つに成長しました。',
  },
  'about.director.achievements.title': {
    english: 'Key Achievements',
    french: 'Réalisations principales',
    german: 'Wichtige Erfolge',
    spanish: 'Logros principales',
    japanese: '主な実績',
  },
  'about.director.achievements.item1': {
    english: 'Pioneered innovative language teaching methodologies',
    french: 'Pionnier des méthodologies innovantes d\'enseignement des langues',
    german: 'Wegbereiter für innovative Sprachlehrmethoden',
    spanish: 'Pionero en metodologías innovadoras de enseñanza de idiomas',
    japanese: '革新的な語学教授法の先駆者',
  },
  'about.director.achievements.item2': {
    english: 'Established international partnerships with leading universities',
    french: 'Établissement de partenariats internationaux avec des universités de premier plan',
    german: 'Aufbau internationaler Partnerschaften mit führenden Universitäten',
    spanish: 'Estableció asociaciones internacionales con universidades líderes',
    japanese: '主要大学との国際パートナーシップを確立',
  },
  'about.director.achievements.item3': {
    english: 'Recipient of multiple awards for excellence in language education',
    french: 'Récipiendaire de multiples prix d\'excellence en enseignement des langues',
    german: 'Empfänger mehrerer Auszeichnungen für Exzellenz in der Sprachausbildung',
    spanish: 'Receptor de múltiples premios por excelencia en educación de idiomas',
    japanese: '語学教育における優秀性で複数の賞を受賞',
  }
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
