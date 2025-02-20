import { motion } from 'framer-motion';
import { useTheme } from '@hooks/useTheme.hook';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <button
        onClick={toggleTheme}
        className={`
          h-8 w-14 rounded-full p-1 transition-colors duration-200
          ${theme === 'dark' ? 'bg-blue-600' : 'bg-gray-200'}
        `}
      >
        <div
          className={`
            h-6 w-6 rounded-full transition-transform duration-200
            ${theme === 'dark' ? 'translate-x-6 bg-white' : 'translate-x-0 bg-white'}
          `}
        >
          <span className="flex h-full items-center justify-center">
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
        </div>
      </button>
    </motion.div>
  );
};
