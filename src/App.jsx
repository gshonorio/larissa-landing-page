import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import VisualSection from './components/VisualSection'
import Specialties from './components/Specialties'
import LocationSection from './components/LocationSection'
import FinalCta from './components/FinalCta'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <VisualSection />
        <Specialties />
        <LocationSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
