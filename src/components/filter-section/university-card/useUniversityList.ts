import { useState, useEffect } from 'react';

import kimep from './assets/kimep.png';
import kbtu from './assets/kbtu.png';
import nu from './assets/nu.png';

export interface University {
    logo: string;
    name: string;
    passingScore: number;
    specialtiesCount: number;
    tuitionCost: string;
    universityId: string;
    region: string;
    entSubjects: string[];
    specialties: string[];
    studyFormat: 'full-time' | 'part-time' | 'online';
    studyDuration: string;
}

interface FilterParams {
    region?: string;
    entSubject?: string;
    specialty?: string;
    studyFormat?: 'full-time' | 'part-time' | 'online';
    studyDuration?: string;
    minPassingScore?: number;
}

export type SortKey = 'passingScore' | 'specialtiesCount' | 'name';
export type SortOrder = 'asc' | 'desc';

interface UniversityListState {
    universities: University[];
    filteredUniversities: University[];
    sortKey: SortKey;
    sortOrder: SortOrder;
    setSort: (key: SortKey, order: SortOrder) => void;
    setFilter: (params: FilterParams) => void;
}

export const mockUniversities: University[] = [
  {
    logo: nu,
    name: 'Назарбаев Университет',
    passingScore: 120,
    specialtiesCount: 45,
    tuitionCost: '3,500,000 ₸/год',
    universityId: 'nu',
    region: 'Астана',
    entSubjects: ['Математика', 'Физика', 'Английский'],
    specialties: ['Компьютерные науки', 'Инженерия', 'Экономика'],
    studyFormat: 'full-time',
    studyDuration: '4 года',
  },
  {
    logo: kbtu,
    name: 'КБТУ',
    passingScore: 100,
    specialtiesCount: 30,
    tuitionCost: '2,800,000 ₸/год',
    universityId: 'kbtu',
    region: 'Алматы',
    entSubjects: ['Математика', 'Информатика'],
    specialties: ['Информационные технологии', 'Менеджмент'],
    studyFormat: 'full-time',
    studyDuration: '4 года',
  },
  {
    logo: kimep,
    name: 'КИМЭП',
    passingScore: 110,
    specialtiesCount: 25,
    tuitionCost: '3,200,000 ₸/год',
    universityId: 'kimep',
    region: 'Алматы',
    entSubjects: ['Английский', 'История'],
    specialties: ['Бизнес', 'Международные отношения'],
    studyFormat: 'part-time',
    studyDuration: '3 года',
  },
];

export const useUniversityList = (): UniversityListState => {
  const [universities, setUniversities] = useState<University[]>(mockUniversities);
  const [filteredUniversities, setFilteredUniversities] = useState<University[]>(mockUniversities);
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    // Не забыть сюда апи приемку добавить хД, пока что тут только имитация
    setUniversities(mockUniversities);
    setFilteredUniversities(mockUniversities);
  }, []);

  const sortUniversities = (universities: University[], key: SortKey, order: SortOrder) => {
    return [...universities].sort((a, b) => {
      let valueA = a[key];
      let valueB = b[key];

      if (key == 'name') {
        return order == 'asc' ? (valueA as string).localeCompare(valueB as string) : (valueB as string).localeCompare(valueA as string);
      } else {
        return order == 'asc' ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA);
      }

      return order === 'asc' ? Number(valueA) - Number(valueB) : Number(valueB) - Number(valueA);
    });
  };

  const filterUniversities = (universities: University[], params: FilterParams) => {
    return universities.filter((university) => {

      const matchesRegion = params.region ? university.region === params.region : true;

      const matchesEntSubject = params.entSubject ? university.entSubjects.includes(params.entSubject) : true;

      const matchesSpecialty = params.specialty ? university.specialties.includes(params.specialty) : true;

      const matchesStudyFormat = params.studyFormat ? university.studyFormat : true;

      const matchesStudyDuration = params.studyDuration ? university.studyDuration : true;

      const matchesScore = params.minPassingScore ? university.passingScore >= params.minPassingScore : true;

      return (
        matchesRegion &&
        matchesEntSubject &&
        matchesSpecialty &&
        matchesStudyFormat &&
        matchesStudyDuration &&
        matchesScore
      );
    });
  };

  const setSort = (key: SortKey, order: SortOrder) => {
    setSortKey(key);
    setSortOrder(order);
    const sorted = sortUniversities(universities, key, order);
    setFilteredUniversities(filterUniversities(sorted, {}));
  };

  const setFilter = (params: FilterParams) => {
    const filtered = filterUniversities(universities, params);
    const sorted = sortUniversities(filtered, sortKey, sortOrder);
    setFilteredUniversities(sorted);
  };

  return {
    universities,
    filteredUniversities,
    sortKey,
    sortOrder,
    setSort,
    setFilter,
  };
};