import { useState } from 'react'
import { Mail, ArrowUp, Loader2 } from 'lucide-react'

function Register() {
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const qualtricsUrl = 'https://unlv.co1.qualtrics.com/jfe/form/SV_9Fey8MlrR5utDAG'

  return (
    <section id="register" className="bg-bg-light py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-charcoal mb-4">
            Register Your Team
          </h2>
          <p className="text-text-gray text-lg mb-6">
            Ready to participate? Complete this form to get started.
          </p>

          {/* Email note */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-border-gray shadow-sm">
            <span className="text-text-gray text-sm">Not ready yet?</span>
            <a
              href="mailto:webers4@unlv.nevada.edu"
              className="inline-flex items-center gap-1 text-primary-scarlet hover:text-red-700 font-medium text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email webers4@unlv.nevada.edu
            </a>
          </div>
        </div>

        {/* Form info */}
        <div className="bg-white rounded-xl p-4 mb-6 border border-border-gray">
          <p className="text-sm text-text-gray text-center">
            This form will collect: team contact name &amp; email, team name, number of members (4-8),
            all team member emails, how long you&apos;ve worked together, and scheduling preferences.
          </p>
        </div>

        {/* Qualtrics iframe container */}
        <div className="relative bg-white rounded-2xl shadow-lg border border-border-gray overflow-hidden">
          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <Loader2 className="w-8 h-8 text-primary-scarlet animate-spin mb-4" />
              <p className="text-text-gray">Loading registration form...</p>
            </div>
          )}

          {/* Iframe */}
          <iframe
            src={qualtricsUrl}
            title="Team Registration Form"
            className="w-full border-0"
            style={{ minHeight: '800px' }}
            onLoad={handleIframeLoad}
            allow="geolocation; microphone; camera"
          />

          {/* Placeholder overlay - remove when actual Qualtrics URL is added */}
          {qualtricsUrl === 'about:blank' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-primary-charcoal mb-2">
                  Registration Form Coming Soon
                </h3>
                <p className="text-text-gray mb-6 max-w-md">
                  The Qualtrics registration form will be embedded here.
                  For now, please email to express your interest.
                </p>
                <a
                  href="mailto:webers4@unlv.nevada.edu?subject=Team%20Registration%20Interest"
                  className="inline-block px-6 py-3 bg-primary-scarlet text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Email to Register
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom section */}
        <div className="mt-12 text-center">
          <p className="text-text-gray mb-6">
            Thank you for your interest in advancing research on team communication!
          </p>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-charcoal text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </section>
  )
}

export default Register
