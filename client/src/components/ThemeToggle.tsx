import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 dark:from-slate-700 dark:to-slate-800 text-slate-900 dark:text-amber-300 hover:from-amber-200 hover:to-amber-100 dark:hover:from-slate-600 dark:hover:to-slate-700 transition-all duration-500 transform hover:scale-110 shadow-md dark:shadow-lg border border-amber-200 dark:border-slate-600 hover:shadow-lg dark:hover:shadow-amber-500/20"
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun size={20} className="transition-all duration-500 rotate-0" />
      ) : (
        <Moon size={20} className="transition-all duration-500 rotate-0" />
      )}
    </button>
  );
}
