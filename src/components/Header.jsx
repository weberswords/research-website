function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-gray shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-text-gray text-sm">
              UNLV Logo
            </div>
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
