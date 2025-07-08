import React from 'react';
import { useLanguage } from '../language-toggler/context/LanguageContext';
/** @type {import('tailwindcss').Config} */

import girlImage from './assets/girl.png';
import nu from './assets/NU.png';
import kbtu from './assets/KBTU.png';
import kazuu from './assets/KAZUU.png';
import kimep from './assets/KIMEP.png';
import narxoz from './assets/NARXOZ.png';
import sdu from './assets/SDU.png';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const logos = [
    { src: nu, alt: 'NU', position: 'top-10 left-4', animation: 'animate-bounce' },
    { src: kbtu, alt: 'KBTU', position: 'top-6 right-5', animation: 'animate-bounce' },
    { src: kazuu, alt: 'KAZUU', position: 'bottom-10 left-8', animation: 'animate-bounce 5s' },
    { src: kimep, alt: 'KIMEP', position: 'bottom-12 right-8', animation: 'animate-bounce' },
    { src: narxoz, alt: 'NARXOZ', position: 'top-1/4 left-1/4', animation: 'animate-bounce' },
    { src: sdu, alt: 'SDU', position: 'bottom-2/4 right-1/4', animation: 'animate-bounce' },
  ];

  return (
    <section className="py-12 md:pt-20 md:pb-40">
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
                className="bg-white text-[#2374EE] font-montserrat font-medium text-sm px-6 py-3 rounded-2xl border border-[#2374EE] hover:bg-gray-200 transition-colors duration-200"
              >
                {t('login')}
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative h-64 md:h-96">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className={`absolute w-14 h-14 md:w-25 md:h-25 rounded-full object-contain ${logo.animation} ${logo.position}`}
              />
            ))}
            <img
              src={girlImage}
              alt="Girl"
              className="absolute w-40 h-40 md:w-112 md:h-112 object-contain z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;