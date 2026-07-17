import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-100 dark:border-slate-700 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663455179708/JxhUUqUziiBoZkkO.svg" alt="ZACCH Logo" className="w-7 h-7 sm:w-8 sm:h-8" />
            <span className="font-bold text-sm sm:text-base lg:text-lg text-slate-900 dark:text-white hidden sm:inline">
              ZACCH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 dark:bg-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Side: Theme Toggle & CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-shrink-0">
            {/* Desktop Theme Toggle */}
            <div className="hidden lg:flex">
              <ThemeToggle />
            </div>
            
            {/* Desktop CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm whitespace-nowrap"
            >
              Get in Touch
            </a>

            {/* Mobile Theme Toggle */}
            <div className="lg:hidden">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-900 dark:text-white flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-700 transition-colors duration-300">
          <div className="px-4 sm:px-6 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg transition-colors duration-300"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full mt-3 px-3 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors duration-300 text-center text-sm"
              onClick={closeMenu}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
