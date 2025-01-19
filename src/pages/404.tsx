import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '@/components/navbar/Navbar.component';
import { Footer } from '@/components/footer/Footer.component';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | PLAI</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <Navbar />

      <div className="min-h-screen flex flex-col mt-16">
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
            <div className="relative mb-8">
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 dark:from-blue-500 dark:via-cyan-400 dark:to-blue-400 rounded-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-beam" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Match Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              The prediction you're looking for doesn't exist or has been removed. Check out our latest predictions instead.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 rounded-lg transition-all duration-200 hover:shadow-lg dark:shadow-cyber-primary/20"
            >
              View Latest Predictions
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
} 