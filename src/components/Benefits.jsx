import { Award, Users, PieChart, FileBarChart, Download } from 'lucide-react'

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

          {/* Download card */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto text-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileBarChart className="w-8 h-8 text-primary-scarlet" />
            </div>
            <p className="text-text-gray text-sm mb-6">
              Download a complete example profile generated with sample data to see the radar chart, competency scores, and team analysis you&apos;ll receive.
            </p>
            <a
              href="/example-profile.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-scarlet text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Example Report
            </a>
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
