import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
// import Requirements from './components/Requirements'
// import NextSteps from './components/NextSteps'
// import About from './components/About'
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

        {/* Requirements Section */}
        <section id="requirements" className="min-h-screen bg-white flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-primary-charcoal mb-4">Requirements Section</h2>
            <p className="text-text-gray">Requirements component will go here</p>
          </div>
        </section>

        {/* Next Steps Section */}
        <section id="next-steps" className="min-h-screen bg-bg-light flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-primary-charcoal mb-4">Next Steps Section</h2>
            <p className="text-text-gray">NextSteps component will go here</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-white flex items-center justify-center">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-primary-charcoal mb-4">About Section</h2>
            <p className="text-text-gray">About component will go here</p>
          </div>
        </section>

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
