import Link from 'next/link';
import { ThemeSwitch } from '@/components/theme-switch/ThemeSwitch.component';
import { BurgerMenu } from '@/components/burger-menu/BurgerMenu.component';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 bg-white/80 dark:bg-cyber-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold font-display text-gray-900 dark:text-white hover:text-cyber-primary transition-colors"
        >
          PLAI ⚽
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/"
            className="font-display text-gray-600 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-primary transition-colors"
          >
            Predictions
          </Link>
          <Link 
            href="/about"
            className="font-display text-gray-600 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-primary transition-colors"
          >
            About
          </Link>
          <ThemeSwitch />
        </div>

        {/* Mobile Menu */}
        <BurgerMenu />
      </div>
    </nav>
  );
}; 