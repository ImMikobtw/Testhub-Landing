import React from 'react';
import { useLanguage } from '../language-toggler/context/LanguageContext';
import VacancyCard from './vacancy-list/VacancyCard';
import { useVacancyList } from './vacancy-list/useVacancyList';

export interface Vacancy {
    id: string;
    profession: string;
    medianSalary: string;
    vacancy_universities: string[];
    professionIcon: string;
    salaryIcon: string;
    universityIcon: string;
}

const SpecialistsSalariesSection: React.FC = () => {
    const { t } = useLanguage();
    const { vacancies } = useVacancyList();
    
    return (
        <section className="py-12 md:py-20 bg-[#F5F7FA]">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-gray-900 mb-8 text-center">
               {t('salaries_title')}
             </h2>
             <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
               {vacancies.map((vacancy) => (
                 <div key={vacancy.id} className="snap-center flex-shrink-0 w-80">
                   <VacancyCard vacancy={vacancy} />
                 </div>
               ))}
             </div>
           </div>
        </section>
    )
}

export default SpecialistsSalariesSection;