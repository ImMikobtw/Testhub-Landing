import { useState, useEffect } from 'react';
import type { Vacancy } from '../SpecialistsSalariesSection';

import professionIcon from '../assets/professionIcon.svg';
import salaryIcon from '../assets/salaryIcon.svg';
import universityIcon from '../assets/universityIcon.svg';

export const mockVacancies: Vacancy[] = [
    {
    id: '1',
    profession: 'Software Engineer',
    medianSalary: '2,500,000 ₸/год',
    vacancy_universities: ['Назарбаев Университет', 'КБТУ'],
    professionIcon,
    salaryIcon,
    universityIcon,
  },
  {
    id: '2',
    profession: 'Data Scientist',
    medianSalary: '3,000,000 ₸/год',
    vacancy_universities: ['КБТУ', 'КИМЭП'],
    professionIcon,
    salaryIcon,
    universityIcon,
  },
  {
    id: '3',
    profession: 'Business Analyst',
    medianSalary: '2,200,000 ₸/год',
    vacancy_universities: ['КИМЭП', 'Нархоз'],
    professionIcon,
    salaryIcon,
    universityIcon,
  },
  {
    id: '4',
    profession: 'Mechanical Engineer',
    medianSalary: '2,800,000 ₸/год',
    vacancy_universities: ['Назарбаев Университет', 'КазНУ'],
    professionIcon,
    salaryIcon,
    universityIcon,
  },
];

interface VacancyListState {
    vacancies: Vacancy[];
}

export const useVacancyList = (): VacancyListState => {
    const [vacancies, setVacancies] = useState<Vacancy[]>(mockVacancies);

    useEffect(() => {
        // не забыть сюда тоже добавить апи запросик
        setVacancies(mockVacancies);
    }, []);

    return { vacancies };
};