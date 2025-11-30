function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <p className="text-gray-300 text-sm mb-2">
              Department of Educational Psychology, Leadership, and Higher Education
            </p>
            <p className="text-gray-300 text-sm mb-2">
              University of Nevada, Las Vegas
            </p>
            <a
              href="mailto:webers4@unlv.nevada.edu"
              className="text-gray-300 text-sm hover:text-primary-scarlet transition-colors"
            >
              webers4@unlv.nevada.edu
            </a>
          </div>

          {/* Center column - Links */}
          <div className="md:text-center">
            <h3 className="font-semibold text-lg mb-3">Study Information</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#consent"
                  className="text-gray-300 text-sm hover:text-primary-scarlet transition-colors"
                >
                  Consent Form
                </a>
              </li>
              <li>
                <a
                  href="#irb"
                  className="text-gray-300 text-sm hover:text-primary-scarlet transition-colors"
                >
                  IRB Information
                </a>
              </li>
            </ul>
          </div>

          {/* Right column - Copyright */}
          <div className="md:text-right">
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} University of Nevada, Las Vegas
            </p>
            <p className="text-gray-400 text-xs mt-2">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
