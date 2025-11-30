import { useState } from 'react'
import { Plus, Minus, Mail } from 'lucide-react'

const faqs = [
  {
    question: 'How long will this take?',
    answer: 'Approximately 90 minutes total: 15 minutes for the pre-survey, 60 minutes for the collaborative session, and 5 minutes for the post-survey.',
  },
  {
    question: 'Do we have to be in the same location?',
    answer: 'No, the session is conducted via Zoom so team members can participate remotely.',
  },
  {
    question: 'What happens to our video recording?',
    answer: 'Video recordings are used only for research analysis of communication patterns. Recordings will be destroyed once research is complete. Transcripts will be de-identified and retained for analysis.',
  },
  {
    question: 'When will we receive our results?',
    answer: "You'll receive your personalized PDF report after data analysis is complete.",
  },
  {
    question: "What if someone on our team can't make it?",
    answer: "All team members must participate. We can reschedule if needed to ensure full team attendance.",
  },
  {
    question: 'Is this really free?',
    answer: 'Yes, there is no cost to participate. This is an academic research study.',
  },
  {
    question: 'What kind of task will we do?',
    answer: "You'll work together on a collaborative design task using sticky notes and shapes on a virtual whiteboard. No coding is required - this is strictly a design and planning exercise.",
  },
  {
    question: 'Our team has one new member - are we eligible?',
    answer: "Yes! As long as at least 75% of your team has worked together for 3+ months, you're eligible.",
  },
  {
    question: 'Does our team need specific roles?',
    answer: 'Yes, teams must include at least 3 different roles (e.g., developers, designers, product managers, QA testers). This ensures cross-functional collaboration.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-border-gray last:border-b-0">
      <button
        id={`faq-button-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-scarlet focus:ring-inset rounded-lg"
      >
        <span className={`font-medium pr-4 ${isOpen ? 'text-primary-scarlet' : 'text-primary-charcoal'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isOpen ? 'bg-primary-scarlet text-white' : 'bg-gray-100 text-text-gray'}`}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </span>
      </button>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-button-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-5 text-text-gray leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIndex = (index + 1) % faqs.length
      document.getElementById(`faq-button-${nextIndex}`)?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prevIndex = (index - 1 + faqs.length) % faqs.length
      document.getElementById(`faq-button-${prevIndex}`)?.focus()
    } else if (e.key === 'Home') {
      e.preventDefault()
      document.getElementById('faq-button-0')?.focus()
    } else if (e.key === 'End') {
      e.preventDefault()
      document.getElementById(`faq-button-${faqs.length - 1}`)?.focus()
    }
  }

  return (
    <section id="faq" className="bg-bg-light py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-gray text-lg">
            Don&apos;t see your question?{' '}
            <a
              href="mailto:webers4@unlv.nevada.edu"
              className="inline-flex items-center gap-1 text-primary-scarlet hover:text-red-700 font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email webers4@unlv.nevada.edu
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div
          className="bg-white rounded-2xl shadow-lg border border-border-gray overflow-hidden"
          role="presentation"
        >
          {faqs.map((faq, index) => (
            <div key={index} onKeyDown={(e) => handleKeyDown(e, index)}>
              <FAQItem
                id={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-text-gray mb-4">Ready to participate?</p>
          <a
            href="#register"
            className="inline-block px-8 py-4 bg-primary-scarlet text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Register Your Team
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
