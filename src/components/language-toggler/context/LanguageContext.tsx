import React, { createContext, useState, useContext  } from 'react';
import { translations } from '../translations/translations';
import type { Translation } from '../translations/translations';
import type { Translations } from '../translations/translations';


interface LanguageContextType {
  language: keyof Translations;
  setLanguage: (lang: keyof Translations) => void;
  t: (key: keyof Translation) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<keyof Translations>('RU');

  const t = (key: keyof Translation): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};