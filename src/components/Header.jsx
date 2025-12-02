import graduateCollegeLogo from '../assets/GraduateCollege_V.png'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-gray shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Graduate College Logo */}
          <div className="flex-shrink-0">
            <img
              src={graduateCollegeLogo}
              alt="UNLV Graduate College"
              className="h-12 w-auto"
            />
          </div>

          {/* Study info */}
          <div className="text-center md:text-right">
            <h1 className="text-lg md:text-xl font-semibold text-primary-charcoal leading-tight">
              Team Communication in Software Development Research
            </h1>
            <p className="text-sm text-text-gray mt-1">
              Stephanie Weber, PhD Candidate, University of Nevada - Las Vegas
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
