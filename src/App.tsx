import Header from './widgets/Header';
import Footer from './widgets/Footer';
import HeroSection from './components/hero-section/HeroSection';
import WhatIsTesthubSection from './components/desc-section/WhatIsTesthubSection';
import UniversityFilter from './components/filter-section/filter/UniversityFilter';
import UniversitySection from './components/filter-section/UniversitySection';
import { useUniversityList } from './components/filter-section/university-card/useUniversityList';
import { useLanguage } from './components/language-toggler/context/LanguageContext'

interface AppProps {
  find_universities: string;
}
const App = ({find_universities}: AppProps) => {

  const { t } =useLanguage();

  const {filteredUniversities, setSort, setFilter} = useUniversityList();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsTesthubSection />
        <section className="flex flex-col gap-10 bg-[#F5F7FA] justify-center my-10 py-20">
          <h1 className="flex font-montserrat text-5xl font-bold justify-center py-5">{t('find_university')}</h1>
          <div className="flex flex-row gap-10 justify-center">
               <UniversityFilter onSort={setSort} onFilter={setFilter} />
               <UniversitySection universities={filteredUniversities} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
