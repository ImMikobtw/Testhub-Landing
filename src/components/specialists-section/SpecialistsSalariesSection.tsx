import React from 'react';
import { useState } from 'react';
import { useLanguage } from '../language-toggler/context/LanguageContext';
import VacancyCard from './vacancy-list/VacancyCard';
import { useVacancyList } from './vacancy-list/useVacancyList';

import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';

export interface Vacancy {
    id: string;
    profession: string;
    medianSalary: string;
    vacancy_universities: string[];
}

const SpecialistsSalariesSection: React.FC = () => {
    const { t } = useLanguage();
    const { vacancies } = useVacancyList();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? vacancies.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prev) => (prev === vacancies.length - 1 ? 0 : prev + 1));
    };
    
    return (
        <section className="py-12 md:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-gray-900 mb-8 text-center">
          {t('salaries_title')}
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex flex-row gap-10 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {vacancies.map((vacancy) => (
                <div key={vacancy.id} className="flex-shrink-0 w-full max-w-80">
                  <VacancyCard vacancy={vacancy} />
                </div>
              ))}
            </div>
          </div>
          {vacancies.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
              >
                <img src={leftArrow} alt="Previous" className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
              >
                <img src={rightArrow} alt="Next" className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
    )
}

export default SpecialistsSalariesSection;