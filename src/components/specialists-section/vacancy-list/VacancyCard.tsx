import React from 'react';
import { useLanguage } from '../../language-toggler/context/LanguageContext';
import type { Vacancy } from '../SpecialistsSalariesSection';

import professionIcon from '../assets/professionIcon.svg';
import salaryIcon from '../assets/salaryIcon.svg';
import universityIcon from '../assets/universityIcon.svg';

interface VacancyCardProps {
    vacancy: Vacancy;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
    const { t } = useLanguage();

    return (
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 w-full">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <img
                src={professionIcon}
                alt="Profession icon"
                className="w-6 h-6 object-contain"
              />
              <p className="text-sm font-montserrat text-gray-600">
                <span className="font-medium">{t('profession')}:</span> {vacancy.profession}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={salaryIcon}
                alt="Salary icon"
                className="w-6 h-6 object-contain"
              />
              <p className="text-sm font-montserrat text-gray-600">
                <span className="font-medium">{t('median_salary')}:</span> {vacancy.medianSalary}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src={universityIcon}
                alt="University icon"
                className="w-6 h-6 object-contain"
              />
              <p className="text-sm font-montserrat text-gray-600">
                <span className="font-medium">{t('universities')}:</span>{' '}
                {vacancy.vacancy_universities.join(', ')}
              </p>
            </div>
            <a
              href={`/vacancy/${vacancy.id}`}
              className="bg-[#2374EE] text-white font-montserrat font-medium text-sm px-6 py-2 rounded-2xl hover:bg-[#1b5cbf] transition-colors duration-200 mt-4 text-center"
            >
              {t('details_button')}
            </a>
          </div>
        </div>
    );
};

export default VacancyCard;