import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, navigate] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  // Section links must also work from other pages (e.g. /case-study/:id):
  // go home first, then smooth-scroll to the section.
  const goSection = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    closeMenu();
    if (location === "/") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-100 dark:border-slate-700 transition-colors duration-300">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={closeMenu}>
            <img src="/images/logo.svg" alt="ZACCH Logo" className="w-8 h-8" />
            <span className="font-bold text-base text-slate-900 dark:text-white hidden min-[400px]:inline">
              ZACCH
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.href === "/" ? (
                <Link
                  key={item.label}
                  href="/"
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 dark:bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={`/${item.href}`}
                  onClick={(e) => goSection(e, item.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 dark:bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/#contact"
              onClick={(e) => goSection(e, "#contact")}
              className="hidden md:inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Get in Touch
            </a>
            {/* Hamburger — mobile & tablet only */}
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="relative block w-5 h-5">
                <Menu
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
                />
                <X
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / tablet slide-down panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-700 ${
          isOpen ? "max-h-[480px] opacity-100 border-t" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 sm:px-6 py-3 space-y-1">
          {navItems.map((item) =>
            item.href === "/" ? (
              <Link
                key={item.label}
                href="/"
                onClick={closeMenu}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={`/${item.href}`}
                onClick={(e) => goSection(e, item.href)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-amber-400 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <div className="pt-2 pb-2 text-center">
            <a
              href="/#contact"
              onClick={(e) => goSection(e, "#contact")}
              className="inline-flex items-center px-6 py-2.5 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors shadow-md"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
