import React, { useState } from 'react';
import { useLanguage } from '../../language-toggler/context/LanguageContext';
import type{ SortKey, SortOrder } from '../university-card/useUniversityList';

interface UniversityFilterProps {
  onSort: (key: SortKey, order: SortOrder) => void;
  onFilter: (params: {
    region?: string;
    entSubject?: string;
    specialty?: string;
    studyFormat?: 'full-time' | 'part-time' | 'online';
    studyDuration?: string;
    minPassingScore?: number;
  }) => void;
}

const UniversityFilter: React.FC<UniversityFilterProps> = ({ onSort, onFilter }) => {
  const { t } = useLanguage();
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [region, setRegion] = useState<string>('');
  const [entSubject, setEntSubject] = useState<string>('');
  const [specialty, setSpecialty] = useState<string>('');
  const [studyFormat, setStudyFormat] = useState<'' | 'full-time' | 'part-time' | 'online'>('');
  const [studyDuration, setStudyDuration] = useState<string>('');
  const [minPassingScore, setMinPassingScore] = useState<string>('');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [key, order] = e.target.value.split(':') as [SortKey, SortOrder];
    setSortKey(key);
    setSortOrder(order);
    onSort(key, order);
  };

  const handleFilterApply = () => {
    onFilter({
      region: region || undefined,
      entSubject: entSubject || undefined,
      specialty: specialty || undefined,
      studyFormat: studyFormat || undefined,
      studyDuration: studyDuration || undefined,
      minPassingScore: minPassingScore ? Number(minPassingScore) : undefined,
    });
  };

  return (
    <div className="bg-white border border-gray-200 w-70 h-160 rounded-3xl p-6 mb-6">
      <h3 className="text-lg font-montserrat font-bold text-gray-900 mb-4">
        {t('filter_title')}
      </h3>
      <div className="flex flex-col gap-2">
        <div>
          <label className="text-sm font-montserrat text-gray-600 mb-1.5 block">
            {t('sort_by')}
          </label>
          <select
            value={`${sortKey}:${sortOrder}`}
            onChange={handleSortChange}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm font-montserrat text-gray-900"
          >
            <option value="name:asc">{t('sort_name_asc')}</option>
            <option value="name:desc">{t('sort_name_desc')}</option>
            <option value="passingScore:asc">{t('sort_passing_score_asc')}</option>
            <option value="passingScore:desc">{t('sort_passing_score_desc')}</option>
            <option value="specialtiesCount:asc">{t('sort_specialties_count_asc')}</option>
            <option value="specialtiesCount:desc">{t('sort_specialties_count_desc')}</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-montserrat text-gray-600 mb-1.5 block">
            {t('region')}
          </label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm font-montserrat text-gray-900"
          >
            <option value="">{t('all_regions')}</option>
            <option value="Астана">Астана</option>
            <option value="Алматы">Алматы</option>
            <option value="Шымкент">Шымкент</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-montserrat text-gray-600 mb-1.5 block">
            {t('ent_subject')}
          </label>
          <select
            value={entSubject}
            onChange={(e) => setEntSubject(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm font-montserrat text-gray-900"
          >
            <option value="">{t('all_subjects')}</option>
            <option value="Математика">Математика</option>
            <option value="Физика">Физика</option>
            <option value="Английский">Английский</option>
            <option value="Информатика">Информатика</option>
            <option value="История">История</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-montserrat text-gray-600 mb-1.5 block">
            {t('specialty')}
          </label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm font-montserrat text-gray-900"
          >
            <option value="">{t('all_specialties')}</option>
            <option value="Компьютерные науки">Компьютерные науки</option>
            <option value="Инженерия">Инженерия</option>
            <option value="Экономика">Экономика</option>
            <option value="Менеджмент">Менеджмент</option>
            <option value="Международные отношения">Международные отношения</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-montserrat text-gray-600 mb-1.5 block">
            {t('study_format')}
          </label>
          <select
            value={studyFormat}
            onChange={(e) => setStudyFormat(e.target.value as '' | 'full-time' | 'part-time' | 'online')}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm font-montserrat text-gray-900"
          >
            <option value="">{t('all_formats')}</option>
            <option value="full-time">{t('study_format_full_time')}</option>
            <option value="part-time">{t('study_format_part_time')}</option>
            <option value="online">{t('study_format_online')}</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-montserrat text-gray-600 mb-1.5 block">
            {t('study_duration')}
          </label>
          <select
            value={studyDuration}
            onChange={(e) => setStudyDuration(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm font-montserrat text-gray-900"
          >
            <option value="">{t('all_durations')}</option>
            <option value="3 года">3 года</option>
            <option value="4 года">4 года</option>
            <option value="5 лет">5 лет</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-montserrat text-gray-600 mb-1.5 block">
            {t('min_passing_score')}
          </label>
          <input
            type="number"
            value={minPassingScore}
            onChange={(e) => setMinPassingScore(e.target.value)}
            placeholder={t('enter_score')}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm font-montserrat text-gray-900"
          />
        </div>
      </div>

      <button
        onClick={handleFilterApply}
        className="bg-[#2374EE] text-white font-montserrat font-medium text-sm px-6 py-2 rounded-2xl hover:bg-[#1b5cbf] transition-colors duration-200 mt-4"
      >
        {t('apply_filters')}
      </button>
    </div>
  );
};

export default UniversityFilter;