import React from 'react';
import { useLanguage } from '../language-toggler/context/LanguageContext';

import first from './assets/first.svg';
import second from './assets/second.svg';
import third from './assets/third.svg';
import fourth from './assets/fourth.svg';
import fifth from './assets/fifth.svg';

const PrepareSection: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      text: t('card_tests_ent'),
      image: first,
      outline: true,
    },
    {
      text: t('card_trial_tests'),
      image: second,
      outline: true,
    },
    {
      text: t('card_error_analysis'),
      image: third,
      outline: true,
    },
    {
      text: t('card_career_test'),
      image: fourth,
      outline: true,
    },
    {
      text: t('card_register'),
      image: fifth,
      background: 'bg-[#F8F3EC]',
      button: t('try_tests_free'),
    },
  ];

  return (
    <section className="py-12 md:py-5 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col m-12">
          <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-2 text-left">
            <span className="text-gray-900">{t('prepare_title')}</span>
          </h2>
          <p className="text-base md:text-lg font-montserrat text-gray-900 text-left max-w-lg">
            {t('prepare_subtitle')}
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-280 items-center justify-center">
          <div className="flex flex-row gap-4 text-gray-600 whitespace-nowrap">
            {cards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className={`p-4 rounded-3xl ${card.outline ? 'border border-gray-200 border-opacity-30' : ''} ${
                  card.background || ''
                } flex flex-col items-left space-x-3`}
              >
                <img src={card.image} alt={card.text} className="w-24 h-24 object-cover" />
                <p className="text-lg md:text-lg font-montserrat text-gray-900">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 items w-243 md:grid-cols-3 gap-4 justify-center">
            {cards.slice(3).map((card, index) => (
              <div
                key={index + 3}
                className={`flex flex-col p-4 rounded-3xl ${
                  card.outline ? 'border border-gray-200 border-opacity-30' : ''
                } ${card.background || ''} flex items-left space-x-3 ${
                  index === 1 ? 'md:col-span-2' : ''
                }`}
              >
                <img src={card.image} alt={card.text} className="w-24 h-24 object-cover" />
                <div className="flex flex-col">
                  <p className="text-sm md:text-base font-montserrat text-gray-900">
                    {card.text}
                  </p>
                  {card.button && (
                    <a
                      href="#tests"
                      className="bg-[#2374EE] w-62.5 text-white font-montserrat font-medium text-sm px-6 py-2 rounded-2xl hover:bg-[#1b5cbf] transition-colors duration-200 mt-2"
                    >
                      {card.button}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepareSection;