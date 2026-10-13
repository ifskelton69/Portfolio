import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((previous) => !previous);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const position = window.scrollY + window.innerHeight * 0.4;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].href.slice(1));

        if (section && position >= section.offsetTop) {
          setActiveSection(navItems[i].name.toLowerCase());
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (name) => {
    setActiveSection(name.toLowerCase());
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-6xl mx-auto px-6 pt-5">
        {" "}
        <div className="flex items-center justify-center">
          {" "}
          {/* Desktop navigation */}{" "}
          <div
            className={`hidden md:flex items-center gap-10 rounded-2xl px-6 py-4 border transition-all duration-300 ${isScrolled ? "bg-transparent backdrop-blur-none border-transparent shadow-none" : "bg-slate-900/30 backdrop-blur-xl border-white/5 shadow-lg shadow-black/10"}`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`px-3 py-2 text-lg font-normal lowercase
                  transition-colors duration-200 ${
                    activeSection === item.name.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-blue-400"
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5
              w-10 h-10 items-center rounded-lg
              bg-slate-900/40 backdrop-blur-xl border border-white/10"
          >
            <span
              className={`block w-5 h-0.5 bg-current rounded-full
                transition-transform duration-300 ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-full
                transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-full
                transition-transform duration-300 ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </button>
          {/* Day / Night toggle */}
          {/* <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="p-2 rounded-full text-amber-400
              hover:bg-white/10 transition-all duration-300"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button> */}
        </div>
        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-3"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div
            className="flex flex-col gap-1 p-3 rounded-xl
              bg-slate-950/90 backdrop-blur-xl
              border border-white/10 shadow-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`px-4 py-3 text-sm lowercase rounded-lg
                  transition-colors ${
                    activeSection === item.name.toLowerCase()
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#footer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-sm text-gray-300
                hover:text-white rounded-lg hover:bg-white/5"
            >
              let's talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
