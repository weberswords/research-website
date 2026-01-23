import { Award, Users, PieChart } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'Individual Competency Assessment',
    description: 'Your personal teamwork competency scores across 5 key dimensions',
  },
  {
    icon: Users,
    title: 'Team Communication Analysis',
    description: "Insights into your team's collaborative problem-solving patterns",
  },
  {
    icon: PieChart,
    title: 'Visual Profile Report',
    description: 'Radar chart showing your individual profile vs. team average',
  },
]

function BenefitCard({ icon, title, description }) {
  const Icon = icon
  return (
    <div className="bg-white border border-border-gray rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-primary-scarlet" />
        </div>
        <h3 className="text-lg font-semibold text-primary-charcoal mb-2">
          {title}
        </h3>
        <p className="text-text-gray text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

function Benefits() {
  return (
    <section id="benefits" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-charcoal mb-4">
            What You&apos;ll Receive
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Every participant receives valuable insights about their teamwork and communication style
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* Sample report placeholder */}
        <div className="bg-bg-light rounded-2xl p-8 border border-border-gray">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-primary-charcoal mb-2">
              Sample Report Preview
            </h3>
            <p className="text-text-gray text-sm">
              Here&apos;s an example of the personalized report you&apos;ll receive
            </p>
          </div>

          {/* Report mockup */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left side - scores */}
              <div className="flex-1">
                <h4 className="font-semibold text-primary-charcoal mb-4 text-sm uppercase tracking-wide">
                  Competency Scores
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Communication', score: 85 },
                    { name: 'Collaboration', score: 78 },
                    { name: 'Problem Solving', score: 92 },
                    { name: 'Adaptability', score: 70 },
                    { name: 'Leadership', score: 65 },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-gray">{item.name}</span>
                        <span className="font-medium text-primary-charcoal">{item.score}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-scarlet rounded-full"
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - mini radar chart */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Background circles */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="#e2e8f0" strokeWidth="1" />

                    {/* 6 axes at 60° intervals from center */}
                    <line x1="50" y1="50" x2="50" y2="10" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="50" y1="50" x2="85" y2="30" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="50" y1="50" x2="85" y2="70" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="50" y1="50" x2="50" y2="90" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="50" y1="50" x2="15" y2="70" stroke="#e2e8f0" strokeWidth="1" />
                    <line x1="50" y1="50" x2="15" y2="30" stroke="#e2e8f0" strokeWidth="1" />

                    {/* Data polygon - points on the 6 axes */}
                    <polygon
                      points="50,16 71,34 73,66 50,78 27,66 29,34"
                      fill="rgba(204, 0, 0, 0.15)"
                      stroke="#cc0000"
                      strokeWidth="2"
                    />

                    {/* Data points - aligned with axes */}
                    <circle cx="50" cy="16" r="3" fill="#cc0000" />
                    <circle cx="71" cy="34" r="3" fill="#cc0000" />
                    <circle cx="73" cy="66" r="3" fill="#cc0000" />
                    <circle cx="50" cy="78" r="3" fill="#cc0000" />
                    <circle cx="27" cy="66" r="3" fill="#cc0000" />
                    <circle cx="29" cy="34" r="3" fill="#cc0000" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-accent-gray mt-4">
            * Sample data shown for illustration purposes
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits
