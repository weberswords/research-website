import { Mail, ArrowUp, Calendar, FileText } from 'lucide-react'

function Register() {
  const calendarUrl = 'https://calendar.app.google/Y5WFP8HF2rfN9Mfu7'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="schedule" className="bg-bg-light py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-charcoal mb-4">
            Schedule Your Session
          </h2>
          <p className="text-text-gray text-lg mb-6">
            Pick a 60-minute window that works for your team and we&apos;ll get you started.
          </p>
        </div>

        {/* Calendar signup card */}
        <div className="bg-white rounded-2xl shadow-lg border border-border-gray p-8 md:p-10 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary-scarlet" />
            </div>
            <h3 className="text-xl font-semibold text-primary-charcoal mb-3">
              Book on Google Calendar
            </h3>
            <p className="text-text-gray">
              Choose a time that works for your team. The researcher will join your session to get everyone started.
              Consent forms and pre-session surveys will be sent out ahead of time.
            </p>
          </div>

          <div className="text-center mb-8">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-scarlet text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl text-lg"
            >
              <Calendar className="w-5 h-5" />
              Schedule on Google Calendar
            </a>
          </div>

          {/* Company permission note */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-1">
                  Participating on company time?
                </h4>
                <p className="text-amber-700 text-sm">
                  If you&apos;re participating on company time with company resources, we need permission
                  on company letterhead ahead of your scheduled session. Please email it to{' '}
                  <a
                    href="mailto:webers4@unlv.nevada.edu"
                    className="underline font-medium hover:text-amber-900"
                  >
                    webers4@unlv.nevada.edu
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email contact */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-border-gray shadow-sm">
            <span className="text-text-gray text-sm">Questions?</span>
            <a
              href="mailto:webers4@unlv.nevada.edu"
              className="inline-flex items-center gap-1 text-primary-scarlet hover:text-red-700 font-medium text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email webers4@unlv.nevada.edu
            </a>
          </div>
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
