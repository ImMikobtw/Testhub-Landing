import React from 'react';
import UniversityCard from './university-card/UniversityCard';
import type { University } from './university-card/useUniversityList';
import { useLanguage } from '../language-toggler/context/LanguageContext';

interface UniversitiesSectionProps {
  universities: University[];
}

const UniversitiesSection: React.FC<UniversitiesSectionProps> = ({ universities }) => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-6">
      {universities.length > 0 ? (
        universities.map((university) => (
          <UniversityCard key={university.universityId} university={university} />
        ))
      ) : (
        <p className="text-gray-600 font-montserrat">{t('no_universities_found')}</p>
      )}
    </div>
  );
};

export default UniversitiesSection;