import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Scroll Spy - Update active section based on scroll position
      const sections = navItems.map(item => ({
        id: item.href.replace('#', ''),
        element: document.getElementById(item.href.replace('#', ''))
      }))

      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const sectionTop = section.element.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    handleScroll() // Call once on mount
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (href, name) => {
    setActiveSection(name.toLowerCase())
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Always Visible and Fixed */}
          <a
            href="#home"
            className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300"
          >
            {/* Logo Icon with Initials */}
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-[#c7bba5] via-[#C8B6A6] to-[#634630] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                <span className="text-white font-bold text-lg">AB</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
            </div>

            {/* Name */}
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                Aditya Birajdar
              </span>

            </div>
          </a>

          {/* Desktop Navigation - Centered with rounded dark background */}
          <div className={`hidden md:flex items-center space-x-1 px-6 py-3 rounded-full transition-all duration-300 ${isScrolled
              ? 'bg-black/60 backdrop-blur-md shadow-lg border border-white/10'
              : 'bg-black/40 backdrop-blur-sm shadow-md border border-white/5'
            }`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${activeSection === item.name.toLowerCase()
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                  }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300 ${activeSection === item.name.toLowerCase()
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop - Always Visible and Fixed */}
          <a
            href="mailto:adityabirajdar0305@gmail.com"
            className="hidden md:block px-6 py-2.5 bg-[#12529ba5] text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col space-y-2 py-4 bg-black/60 backdrop-blur-md rounded-2xl shadow-xl px-4 border border-white/10">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === item.name.toLowerCase()
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-300 hover:bg-white/10'
                  }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      {/* Floating Indicator Dots */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col space-y-4 z-50">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => handleNavClick(item.href, item.name)}
            className="group relative"
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeSection === item.name.toLowerCase()
                  ? 'border-blue-400 bg-blue-400 scale-125'
                  : 'border-gray-400 bg-transparent hover:border-blue-400 hover:scale-110'
                }`}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar