import { UserPlus, ClipboardCheck, CalendarClock, Mail, Users, FileBarChart } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'You Register',
    icon: UserPlus,
    items: [
      'Submit team information',
      'Receive confirmation email',
    ],
  },
  {
    number: 2,
    title: 'Pre-Session Surveys',
    icon: ClipboardCheck,
    items: [
      'Each team member receives survey link',
      'Complete 15-minute assessment',
      'All team members must complete before scheduling',
    ],
  },
  {
    number: 3,
    title: 'Schedule Your Session',
    icon: CalendarClock,
    items: [
      'Receive scheduling link via email after all surveys are complete',
      'Choose 60-minute time slot',
      'Session materials sent 30 minutes before your chosen time',
    ],
  },
  {
    number: 4,
    title: 'Session Materials',
    icon: Mail,
    items: [
      '30 minutes before your scheduled session',
      'Email with Zoom meeting link',
      'Access to team\'s Miro board',
      'Board includes post-survey link',
    ],
  },
  {
    number: 5,
    title: 'Collaborative Session',
    icon: Users,
    duration: '60 minutes',
    items: [
      'Work together on design task using sticky notes and shapes',
      'No coding required',
      'Session recorded for research',
      'Complete 5-minute survey after',
    ],
  },
  {
    number: 6,
    title: 'Receive Results',
    icon: FileBarChart,
    items: [
      'Personalized PDF with radar chart',
      'Individual competency scores',
      'Team communication analysis',
    ],
  },
]

function TimelineStep({ step, isLast }) {
  const Icon = step.icon

  return (
    <div className="relative flex gap-6">
      {/* Timeline line and node */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <div className="relative z-10 w-12 h-12 bg-primary-scarlet text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
          {step.number}
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div className="w-0.5 bg-primary-scarlet flex-1 min-h-8" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-10'}`}>
        <div className="bg-bg-light rounded-xl p-5 border border-border-gray hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-border-gray">
              <Icon className="w-5 h-5 text-primary-scarlet" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-charcoal text-lg">
                {step.title}
              </h3>
              {step.duration && (
                <span className="text-sm text-primary-scarlet font-medium">
                  {step.duration}
                </span>
              )}
            </div>
          </div>
          <ul className="space-y-1.5 ml-13">
            {step.items.map((item, index) => (
              <li key={index} className="text-text-gray text-sm flex items-start gap-2">
                <span className="text-primary-scarlet mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function NextSteps() {
  return (
    <section id="next-steps" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-charcoal mb-4">
            What Happens Next
          </h2>
          <p className="text-text-gray text-lg">
            Here&apos;s the timeline from registration to receiving your results
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {steps.map((step, index) => (
            <TimelineStep
              key={step.number}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#register"
            className="inline-block px-8 py-4 bg-primary-scarlet text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start the Process - Register Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default NextSteps
