import React from 'react';
import { useLanguage } from '../../language-toggler/context/LanguageContext';
import { mockUniversities } from './useUniversityList';

interface UniversityCardProps {
  logo: string;
  name: string;
  passingScore: number;
  specialtiesCount: number;
  tuitionCost: string;
  universityId: string;
}

const UniversityCard: React.FC<UniversityCardProps> = ({
  logo,
  name,
  passingScore,
  specialtiesCount,
  tuitionCost,
  universityId,
}) => {
  const { t } = useLanguage();

  return (
    <div className=" flex flex-row bg-white border border-gray-200 w-230 h-20 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-30">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-16 h-16 rounded-full object-contain"
        />
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-montserrat font-bold text-gray-900 mb-2">
            {name}
          </h3>
          <div className="flex flex-row gap-15">
            <p className="flex flex-col text-sm font-montserrat text-gray-600 w-30">
              <span className="font-medium">{t('passing_score')}:</span> {passingScore}
            </p>
            <p className="flex flex-col text-sm font-montserrat text-gray-600">
              <span className="font-medium">{t('specialties_count')}:</span> {specialtiesCount}
            </p>
            <p className="flex flex-col text-sm font-montserrat text-gray-600">
              <span className="font-medium">{t('tuition_cost')}:</span> {tuitionCost}
            </p>
          </div>
        </div>

        <a
          href={`/university/${universityId}`}
          className="bg-[#2374EE] text-white font-montserrat font-medium text-sm px-6 py-2 rounded-2xl hover:bg-[#1b5cbf] transition-colors duration-200 mt-4 sm:mt-0"
        >
          {t('details_button')}
        </a>
      </div>
    </div>
  );
};

export default UniversityCard;