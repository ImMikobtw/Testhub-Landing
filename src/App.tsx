import Header from './widgets/Header';
import Footer from './widgets/Footer';
import HeroSection from './components/hero-section/HeroSection';

function App() {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
