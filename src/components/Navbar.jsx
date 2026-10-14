import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Notes", href: "#notes" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") !== "light",
  );

  // Apply theme to <html> and remember it
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((previous) => !previous);

  // Track scroll position + active section
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
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#030712]/80"
          : "bg-white/50 dark:bg-[#030712]/50"
      }`}
    >
      {/* Content container: same width as the Experience section */}
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5
            text-slate-700 dark:text-gray-300
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.name)}
              className={`text-base lowercase transition-colors duration-200 ${
                activeSection === item.name.toLowerCase()
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
          className="rounded-full p-2 transition-colors duration-300
            text-indigo-500 hover:bg-black/5
            dark:text-amber-400 dark:hover:bg-white/10
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>

      {/* Mobile dropdown (same width container) */}
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="flex flex-col gap-1 rounded-xl border p-3
              border-black/10 bg-white/90
              dark:border-white/10 dark:bg-slate-950/90"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`rounded-lg px-4 py-3 text-sm lowercase transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? "bg-black/5 text-slate-900 dark:bg-white/10 dark:text-white"
                    : "text-slate-500 hover:bg-black/5 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
