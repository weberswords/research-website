import { Mail } from 'lucide-react'

function Hero() {
  const handleScrollToRegister = (e) => {
    e.preventDefault()
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="bg-bg-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column - Text content (60%) */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-charcoal leading-tight mb-6">
              Help Advance Our Understanding of How Software Teams Communicate
            </h1>

            <p className="text-lg md:text-xl text-text-gray mb-8 leading-relaxed">
              Participate in research and receive personalized insights into your team&apos;s collaboration patterns
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <button
                onClick={handleScrollToRegister}
                className="w-full sm:w-auto px-8 py-4 bg-primary-scarlet text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Register Your Team
              </button>
            </div>

            <div className="mt-6">
              <a
                href="mailto:webers4@unlv.nevada.edu"
                className="inline-flex items-center gap-2 text-primary-scarlet hover:text-red-700 transition-colors text-sm"
              >
                <Mail size={16} />
                Questions? Email me
              </a>
            </div>
          </div>

          {/* Right column - Visualization placeholder (40%) */}
          <div className="w-full lg:w-2/5">
            <div className="relative">
              {/* Radar chart placeholder */}
              <div className="aspect-square max-w-md mx-auto bg-white rounded-full shadow-xl p-8 border border-border-gray">
                <div className="w-full h-full relative">
                  {/* Center circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary-charcoal rounded-full" />
                  </div>

                  {/* Concentric circles */}
                  <div className="absolute inset-4 border-2 border-gray-200 rounded-full" />
                  <div className="absolute inset-12 border-2 border-gray-200 rounded-full" />
                  <div className="absolute inset-20 border-2 border-gray-200 rounded-full" />

                  {/* Axis lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {/* Vertical axis */}
                    <line x1="50" y1="5" x2="50" y2="95" stroke="#e2e8f0" strokeWidth="1" />
                    {/* Horizontal axis */}
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#e2e8f0" strokeWidth="1" />
                    {/* Diagonal axes */}
                    <line x1="15" y1="15" x2="85" y2="85" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="85" y1="15" x2="15" y2="85" stroke="#e2e8f0" strokeWidth="1" />

                    {/* Sample data polygon */}
                    <polygon
                      points="50,15 75,30 80,60 60,80 35,75 20,45"
                      fill="rgba(204, 0, 0, 0.2)"
                      stroke="#cc0000"
                      strokeWidth="2"
                    />

                    {/* Data points */}
                    <circle cx="50" cy="15" r="4" fill="#cc0000" />
                    <circle cx="75" cy="30" r="4" fill="#cc0000" />
                    <circle cx="80" cy="60" r="4" fill="#cc0000" />
                    <circle cx="60" cy="80" r="4" fill="#cc0000" />
                    <circle cx="35" cy="75" r="4" fill="#cc0000" />
                    <circle cx="20" cy="45" r="4" fill="#cc0000" />
                  </svg>

                  {/* Labels */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-medium text-text-gray">
                    Async
                  </div>
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-xs font-medium text-text-gray">
                    Code
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs font-medium text-text-gray">
                    Sync
                  </div>
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 text-xs font-medium text-text-gray">
                    Chat
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-center text-sm text-accent-gray mt-4">
                Sample team communication profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
