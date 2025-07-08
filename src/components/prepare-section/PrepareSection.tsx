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
      background: 'bg-gradient-to-r from-[#B5D8FF] to-[#E4EFFF]',
      button: t('try_tests_free'),
    },
  ];

  return (
    <section className="py-12 md:py-5 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-2xl md:text-4xl font-montserrat font-bold mb-2 text-left">
            <span className="text-gray-900">{t('prepare_title')}</span>
          </h2>
          <p className="text-base md:text-lg font-montserrat text-gray-900 text-left max-w-lg">
            {t('prepare_subtitle')}
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {cards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className={`flex flex-col items-left p-6 rounded-3xl ${card.outline ? 'border border-gray-200 border-opacity-30' : ''} ${
                  card.background || ''
                }`}
              >
                <img src={card.image} alt={card.text} className="w-30 h-30 object-cover mb-4" />
                <p className="text-lg font-montserrat text-gray-600 text-left">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {cards.slice(3).map((card, index) => (
              <div
                key={index + 3}
                className={`flex flex-col p-6 rounded-3xl ${
                  card.outline ? 'border border-gray-200 border-opacity-30' : ''
                } ${card.background || ''} ${index === 1 ? 'md:col-span-2' : ''}`}
              >
                {index === 1 ? (
                  <div className="flex flex-row items-center">
                    <div className="text-left">
                      <p className="text-lg font-montserrat text-gray-600 mb-4">
                        {card.text}
                      </p>
                      {card.button && (
                        <button
                          className="bg-[#2374EE] border border-blue-500 text-white font-montserrat text-lg font-medium px-6 py-2 rounded-2xl hover:bg-blue-700 hover:text-white transition-colors duration-200 mb-4"
                        >
                          {card.button}
                        </button>
                      )}
                    </div>
                    <img src={card.image} alt={card.text} className="w-40 h-40 object-cover" />
                  </div>
                ) : (
                  <div className="flex flex-col items-left">
                    <img src={card.image} alt={card.text} className="w-30 h-30 object-cover mb-4" />
                    <p className="text-lg font-montserrat text-gray-600 text-left">
                      {card.text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrepareSection;