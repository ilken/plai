import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeSwitch } from '@/components/theme-switch/ThemeSwitch.component';
import useClickOutside from '@/hooks/useClickOutside';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuRef = useClickOutside(closeMenu);

  return (
    <div className="md:hidden" ref={menuRef}>
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-cyber-primary dark:text-gray-300"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
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
            className="absolute right-0 top-16 w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-800 dark:bg-cyber-dark"
          >
            <nav className="flex flex-col">
              <Link
                href="/"
                className="px-4 py-2 font-display text-gray-600 hover:text-cyber-primary dark:text-gray-300 dark:hover:text-cyber-primary"
                onClick={closeMenu}
              >
                Predictions
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 font-display text-gray-600 hover:text-cyber-primary dark:text-gray-300 dark:hover:text-cyber-primary"
                onClick={closeMenu}
              >
                About
              </Link>
              <div className="border-t border-gray-200 px-4 py-2 dark:border-gray-800">
                <ThemeSwitch />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
