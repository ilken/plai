import Link from 'next/link';
import { ThemeSwitch } from '@/components/theme-switch/ThemeSwitch.component';
import { BurgerMenu } from '@/components/burger-menu/BurgerMenu.component';

export const Navbar = () => {
  return (
    <nav className="absolute left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-cyber-dark/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-display text-2xl font-bold text-gray-900 transition-colors hover:text-cyber-primary dark:text-white"
        >
          PLAI ⚽
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="font-display text-gray-600 transition-colors hover:text-cyber-primary dark:text-gray-300 dark:hover:text-cyber-primary"
          >
            Predictions
          </Link>
          <Link
            href="/about"
            className="font-display text-gray-600 transition-colors hover:text-cyber-primary dark:text-gray-300 dark:hover:text-cyber-primary"
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
