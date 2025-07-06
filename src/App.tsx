import Header from './widgets/Header';
import Footer from './widgets/Footer';
import HeroSection from './components/hero-section/HeroSection';
import WhatIsTesthubSection from './components/desc-section/WhatIsTesthubSection';
import UniversityFilter from './components/filter-section/filter/UniversityFilter';
import UniversitySection from './components/filter-section/UniversitySection';
import { useUniversityList } from './components/filter-section/university-card/useUniversityList';

function App() {

  const {filteredUniversities, setSort, setFilter} = useUniversityList();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsTesthubSection />
        <section className="flex flex-row gap-10 justify-center py-35">
          <UniversityFilter onSort={setSort} onFilter={setFilter} />
          <UniversitySection universities={filteredUniversities} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
