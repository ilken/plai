import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
      <Link 
        href="/"
        className="flex items-center hover:text-cyber-primary dark:hover:text-cyber-primary transition-colors"
      >
        <HomeIcon className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRightIcon className="w-4 h-4 mx-1" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-cyber-primary dark:hover:text-cyber-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-white">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}; 