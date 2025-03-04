import { Footer } from '@/components/footer/Footer.component';
import { Header } from '@/components/header/Header.component';
import { Navbar } from '@/components/navbar/Navbar.component';
import { PredictionCard } from '@/components/prediction-card/PredictionCard.component';
import { TopPredictions } from '@/components/top-predictions/TopPredictions.component';
import { useWeeklyData } from '@/hooks/useWeeklyData';
import Head from 'next/head';
import { PredictionsSkeleton } from '@/components/skeletons/PredictionsSkeleton.component';

export default function Home() {
  const { predictions, isLoading, error } = useWeeklyData();

  if (isLoading) {
    return (
      <>
        <Navbar />
        <PredictionsSkeleton />
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="mt-16 flex min-h-screen flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-red-600 dark:text-red-400">
              Error Loading Predictions
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Please try refreshing the page or check back later.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const todaysMatches = predictions.map(p => p.match).join(', ');
  const description = `Get AI predictions and analysis for today's Premier League matches: ${todaysMatches}. View probability scores and betting insights.`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'Premier League Match Predictions',
    description: 'AI-Powered Premier League Match Predictions and Analysis',
    url: 'https://www.plaifootball.com/',
    organizer: {
      '@type': 'Organization',
      name: 'PLAI',
      url: 'https://www.plaifootball.com/',
    },
    sport: 'Soccer',
    competitor: predictions.map(p => ({
      '@type': 'SportsTeam',
      name: p.match.split(' v ')[0],
    })),
    eventStatus: 'https://schema.org/ScheduledEvent',
    startDate: new Date().toISOString(),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'GBP',
    },
  };

  return (
    <>
      <Head>
        <title>PLAI | AI-Powered Premier League Predictions & Analysis</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="https://www.plaifootball.com" />
        <link rel="preconnect" href="https://www.plaifootball.com" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://www.plaifootball.com/" />
        <meta name="author" content="PLAI" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="PLAI | Premier League Match Analysis & Predictions" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.plaifootball.com/og-image.jpg" />
        <meta property="og:url" content="https://www.plaifootball.com/" />
        <meta property="og:site_name" content="PLAI" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@plai" />
        <meta name="twitter:creator" content="@plai" />
        <meta name="twitter:title" content="PLAI | Premier League Match Analysis" />
        <meta
          name="twitter:description"
          content="Get accurate Premier League football predictions powered by AI. View match analysis, probability scores, and betting insights for upcoming fixtures."
        />
        <meta name="twitter:image" content="https://www.plaifootball.com/og-image.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta
          name="keywords"
          content="Premier League predictions, football analysis, betting tips, match predictions, AI football predictions, EPL predictions, soccer predictions, football betting"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="rating" content="general" />
        <meta name="language" content="English" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="PLAI" />
        <meta name="application-name" content="PLAI" />
        <meta name="msapplication-TileColor" content="#1a1a2e" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Favicon Tags */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Navbar />
      <div className="mt-16 flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
          <Header />
          <TopPredictions predictions={predictions} />
          <h2 className="mb-4 text-2xl font-bold dark:text-white">All Fixtures</h2>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-4 lg:grid-cols-2">
            {predictions.map((prediction, index) => (
              <PredictionCard key={index} prediction={prediction} index={index} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
