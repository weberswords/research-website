import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Requirements from './components/Requirements'
import NextSteps from './components/NextSteps'
import FAQ from './components/FAQ'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-text-dark">
      <Header />

      <main>
        <Hero />

        <Benefits />

        <Requirements />

        <NextSteps />

        <FAQ />

        <Register />
      </main>

      <Footer />
    </div>
  )
}

export default App
