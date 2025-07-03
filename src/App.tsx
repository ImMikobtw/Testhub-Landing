import Header from './widgets/Header';
import Footer from './widgets/Footer';
import HeroSection from './components/hero-section/HeroSection';
import WhatIsTesthubSection from './components/desc-section/WhatIsTesthubSection';

function App() {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhatIsTesthubSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
