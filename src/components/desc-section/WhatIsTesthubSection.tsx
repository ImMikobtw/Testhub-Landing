import React from 'react';
import { useLanguage } from '../language-toggler/context/LanguageContext';

const WhatIsTesthubSection: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      text: t('card_study_rankings'),
      outline: true,
    },
    {
      text: t('card_find_specialty'),
      outline: true,
    },
    {
      text: t('card_take_tests'),
      outline: true,
    },
    {
      text: t('card_learn_grants'),
      outline: true,
    },
    {
      text: t('card_all_in_one'),
      background: 'bg-[#F8F3EC]',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-2">
              <span className="text-gray-900">Что такое</span>{' '}
              <span className="text-[#2374EE]">Testhub?</span>
            </h2>
            <p className="text-base md:text-lg font-montserrat text-gray-900">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${card.outline ? 'border border-gray-900 border-opacity-50' : ''} ${card.background || ''}`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div> 
                <p className="text-sm md:text-base font-montserrat text-gray-900">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsTesthubSection;