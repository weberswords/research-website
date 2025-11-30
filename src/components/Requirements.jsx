import { Check, ClipboardList, Users, FileCheck } from 'lucide-react'

const timelineSteps = [
  {
    number: 1,
    title: 'Pre-Session',
    duration: '15 minutes',
    icon: ClipboardList,
    items: [
      'Individual online survey',
      'Assess teamwork competencies',
      'Complete 3+ days before session',
    ],
  },
  {
    number: 2,
    title: 'Collaborative Session',
    duration: '60 minutes',
    icon: Users,
    items: [
      'Work together on design task',
      'Recorded via Zoom',
      'Use provided Miro board',
    ],
  },
  {
    number: 3,
    title: 'Post-Session',
    duration: '5 minutes',
    icon: FileCheck,
    items: [
      'Individual satisfaction survey',
      'Demographic questions',
      'Complete immediately after',
    ],
  },
]

const eligibilityCriteria = [
  'Team of 4-8 members',
  'At least 75% of team has worked together 3+ months',
  'Minimum of 3 different roles (e.g., developer, designer, PM, QA)',
  'Cross-functional software development team',
  'All members willing to participate',
  'No coding required - just sticky notes and shapes',
]

function TimelineStep({ step, isLast }) {
  const Icon = step.icon
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
      {/* Step content */}
      <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-2 flex-1">
        {/* Number circle */}
        <div className="relative">
          <div className="w-14 h-14 bg-primary-scarlet text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
            {step.number}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
            <Icon className="w-3.5 h-3.5 text-primary-scarlet" />
          </div>
        </div>

        {/* Text content */}
        <div className="md:text-center">
          <h3 className="font-semibold text-primary-charcoal text-lg">
            {step.title}
          </h3>
          <span className="text-primary-scarlet font-medium text-sm">
            {step.duration}
          </span>
          <ul className="mt-2 space-y-1">
            {step.items.map((item, index) => (
              <li key={index} className="text-text-gray text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connector line/arrow - hidden on last item */}
      {!isLast && (
        <>
          {/* Desktop: horizontal connector */}
          <div className="hidden md:flex items-center mx-4 flex-shrink-0">
            <div className="w-16 lg:w-24 h-0.5 bg-primary-scarlet" />
            <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-primary-scarlet" />
          </div>

          {/* Mobile: vertical connector */}
          <div className="md:hidden flex flex-col items-center ml-7 -mt-2 mb-2">
            <div className="w-0.5 h-8 bg-primary-scarlet" />
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-primary-scarlet" />
          </div>
        </>
      )}
    </div>
  )
}

function Requirements() {
  return (
    <section id="requirements" className="bg-bg-light py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-charcoal mb-4">
            What&apos;s Required
          </h2>
          <p className="text-text-gray text-lg">
            Total time commitment:{' '}
            <span className="font-semibold text-primary-charcoal">~90 minutes</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-6 md:gap-0">
            {timelineSteps.map((step, index) => (
              <TimelineStep
                key={step.number}
                step={step}
                isLast={index === timelineSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Eligibility criteria box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-border-gray">
          <h3 className="text-xl font-bold text-primary-charcoal text-center mb-6">
            Is Your Team Eligible?
          </h3>
          <ul className="space-y-3">
            {eligibilityCriteria.map((criterion, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-text-gray">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Requirements
