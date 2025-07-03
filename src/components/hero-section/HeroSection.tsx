import React from 'react';
import { useLanguage } from '../language-toggler/context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ABCFE0] to-[#DDF3FE] rounded-3xl">
        <div className="flex flex-col md:flex-row items-center py-8 ml-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              {t('hero_title')}
            </h1>
            <p className="text-base md:text-lg font-montserrat text-gray-600 mb-6 max-w-100">
              {t('hero_subtitle')}
            </p>
            <div className="flex space-x-4">
              <a

                href="#universities"
                className="bg-[#2374EE] text-white font-montserrat font-medium text-sm px-6 py-3 rounded-2xl hover:bg-[#1b5cbf] transition-colors duration-200"
              >
                {t('hero_find_university')}
              </a>
              <a
                href="#login"
                className="bg-white text-[#2374EE] font-montserrat font-medium text-sm px-6 py-3 rounded-2xl border border-[#2374EE] hover:bg-gray-100 transition-colors duration-200"
              >
                {t('login')}
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-64 md:h-96 bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500 font-montserrat">
                Placeholder for girl and university logos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;