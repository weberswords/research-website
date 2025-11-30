import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Requirements from './components/Requirements'
import NextSteps from './components/NextSteps'
// import FAQ from './components/FAQ'
// import Register from './components/Register'
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

        {/* FAQ Section */}
        <section id="faq" className="min-h-screen bg-bg-light flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-primary-charcoal mb-4">FAQ Section</h2>
            <p className="text-text-gray">FAQ component will go here</p>
          </div>
        </section>

        {/* Register Section */}
        <section id="register" className="min-h-screen bg-white flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-primary-charcoal mb-4">Register Section</h2>
            <p className="text-text-gray">Register component will go here</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
