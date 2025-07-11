import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useLanguage } from '../language-toggler/context/LanguageContext';
import first from './assets/first.png';
import second from './assets/second.png';
import third from './assets/third.png';
import fourth from './assets/fourth.png';
import fifth from './assets/fifth.svg';

const WhatIsTesthubSection: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      text: t('card_study_rankings'),
      outline: true,
      image: first,
    },
    {
      text: t('card_find_specialty'),
      outline: true,
      image: second,
    },
    {
      text: t('card_take_tests'),
      outline: true,
      image: third,
    },
    {
      text: t('card_learn_grants'),
      outline: true,
      image: fourth,
    },
    {
      text: t('card_all_in_one'),
      background: 'bg-[#F8F3EC]',
      image: fifth,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 md:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-6 md:mb-0">
            <motion.h2
              className="text-2xl md:text-4xl font-montserrat font-bold mb-2"
              variants={textVariants}
            >
              <span className="text-gray-900">Что такое</span>{' '}
              <span className="text-[#2374EE]">Testhub?</span>
            </motion.h2>
            <motion.p
              className="text-base md:text-lg font-montserrat text-gray-900"
              variants={textVariants}
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(min-content,2fr))] lg:grid-cols-[repeat(auto-fit,min-content)] gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-3xl ${card.outline ? 'border border-gray-200 border-opacity-30' : ''} ${card.background || ''} inline-block`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center cursor-default space-x-3">
                {index < 4 ? (
                  <>
                    <img
                      src={card.image}
                      alt={card.text}
                      className="w-12 h-12 object-cover"
                    />
                    <p className="text-sm md:text-base font-montserrat text-gray-900 whitespace-nowrap">
                      {card.text}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm md:text-base font-montserrat text-gray-900 whitespace-nowrap">
                      {card.text}
                    </p>
                    <img
                      src={card.image}
                      alt={card.text}
                      className="w-8 h-8 object-cover"
                    />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsTesthubSection;