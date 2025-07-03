import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Translations } from '../translations/translations';

const LanguageToggler: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: keyof Translations; label: string }[] = [
    { code: 'RU', label: t('language_ru') },
    { code: 'KZ', label: t('language_kz') },
    { code: 'EN', label: t('language_en') },
  ];

  return (
    <div className="flex space-x-2 font-montserrat">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`text-sm font-medium px-2 py-1 rounded-md transition-colors duration-200 ${
            language === lang.code
              ? 'text-[#2374EE] bg-gray-100'
              : 'text-gray-700 hover:text-[#2374EE] hover:bg-gray-100'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggler;