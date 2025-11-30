import { useState } from 'react'
import { Check, X, ClipboardList, Users, FileCheck, ChevronRight, RotateCcw, PartyPopper } from 'lucide-react'

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

const quizQuestions = [
  {
    id: 'teamSize',
    question: 'Does your team have 4-8 members?',
    help: 'We need teams within this size range for the study design.',
  },
  {
    id: 'tenure',
    question: 'Have at least 75% of team members worked together for 3+ months?',
    help: 'This ensures established collaboration patterns.',
  },
  {
    id: 'roles',
    question: 'Does your team have at least 3 different roles?',
    help: 'For example: developer, designer, project/product manager, quality analyst, etc.',
  },
  {
    id: 'crossFunctional',
    question: 'Is your team a cross-functional software development team?',
    help: 'Teams that collaborate on building software products.',
  },
  {
    id: 'willing',
    question: 'Are all team members willing to participate?',
    help: 'Everyone needs to complete surveys and attend the session.',
  },
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

function EligibilityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: answer }
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
  }

  const isEligible = Object.values(answers).every((answer) => answer === true)
  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100

  if (showResult) {
    return (
      <div className="text-center py-6">
        {isEligible ? (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PartyPopper className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-green-600 mb-2">
              Great news! Your team is eligible!
            </h4>
            <p className="text-text-gray mb-6">
              Your team meets all the requirements to participate in our study.
            </p>
            <a
              href="#register"
              className="inline-block px-6 py-3 bg-primary-scarlet text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Register Your Team Now
            </a>
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <h4 className="text-xl font-bold text-red-600 mb-2">
              Your team may not be eligible
            </h4>
            <p className="text-text-gray mb-4">
              Based on your answers, your team might not meet all requirements. However, if you think there&apos;s been a misunderstanding, feel free to reach out!
            </p>
            <a
              href="mailto:webers4@unlv.nevada.edu"
              className="text-primary-scarlet hover:text-red-700 font-medium"
            >
              Contact us to discuss →
            </a>
          </>
        )}
        <button
          onClick={resetQuiz}
          className="flex items-center gap-2 mx-auto mt-6 text-accent-gray hover:text-primary-charcoal transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Take quiz again
        </button>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-accent-gray mb-2">
          <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-scarlet transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-primary-charcoal mb-2">
          {question.question}
        </h4>
        <p className="text-sm text-accent-gray">{question.help}</p>
      </div>

      {/* Answer buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => handleAnswer(true)}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-green-50 text-green-700 font-medium rounded-lg border-2 border-green-200 hover:bg-green-100 hover:border-green-300 transition-all"
        >
          <Check className="w-5 h-5" />
          Yes
        </button>
        <button
          onClick={() => handleAnswer(false)}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-red-50 text-red-700 font-medium rounded-lg border-2 border-red-200 hover:bg-red-100 hover:border-red-300 transition-all"
        >
          <X className="w-5 h-5" />
          No
        </button>
      </div>

      {/* Skip hint */}
      {currentQuestion > 0 && (
        <button
          onClick={resetQuiz}
          className="mt-4 text-sm text-accent-gray hover:text-primary-charcoal transition-colors mx-auto block"
        >
          Start over
        </button>
      )}
    </div>
  )
}

function Requirements() {
  const [showQuiz, setShowQuiz] = useState(false)

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

        {/* Eligibility section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-border-gray">
          <h3 className="text-xl font-bold text-primary-charcoal text-center mb-6">
            Is Your Team Eligible?
          </h3>

          {!showQuiz ? (
            <>
              {/* Criteria list */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-gray">Team of 4-8 members</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-gray">At least 75% of team has worked together 3+ months</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-gray">Minimum of 3 different roles (e.g., developer, designer, project/product manager, quality analyst)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-gray">Cross-functional software development team</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-gray">All members willing to participate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-gray">No coding required - just sticky notes and shapes</span>
                </li>
              </ul>

              {/* Quiz CTA button */}
              <div className="text-center pt-4 border-t border-border-gray">
                <p className="text-sm text-accent-gray mb-3">Not sure if you qualify?</p>
                <button
                  onClick={() => setShowQuiz(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-charcoal text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Take the Quick Quiz
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <>
              <EligibilityQuiz />
              <button
                onClick={() => setShowQuiz(false)}
                className="mt-4 text-sm text-accent-gray hover:text-primary-charcoal transition-colors mx-auto block"
              >
                ← Back to criteria list
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Requirements
