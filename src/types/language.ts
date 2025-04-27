
export type Language = 'english' | 'french' | 'german' | 'spanish' | 'japanese';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

