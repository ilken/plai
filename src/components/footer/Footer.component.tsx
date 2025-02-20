import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 pb-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© {currentYear} i14u. All rights reserved.</p>
    </footer>
  );
};
