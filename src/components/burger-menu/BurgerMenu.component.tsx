import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSwitch } from '@/components/theme-switch/ThemeSwitch.component';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-cyber-primary"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 right-0 w-48 py-2 bg-white dark:bg-cyber-dark border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg"
          >
            <nav className="flex flex-col">
              <Link
                href="/"
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-primary font-display"
                onClick={toggleMenu}
              >
                Predictions
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-cyber-primary dark:hover:text-cyber-primary font-display"
                onClick={toggleMenu}
              >
                About
              </Link>
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-800">
                <ThemeSwitch />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 