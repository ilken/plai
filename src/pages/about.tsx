import Head from 'next/head';
import { Footer } from '@/components/footer/Footer.component';
import { Navbar } from '@/components/navbar/Navbar.component';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
          <Head>
            <title>About PLAI - Premier League AI Predictions</title>
            <meta name="description" content="Learn about PLAI's AI-powered Premier League football prediction model" />
          </Head>

          <main>
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white font-display">About PLAI</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-display">What is PLAI?</h2>
              <p className="text-gray-700 dark:text-gray-300">
                PLAI is an advanced AI-powered prediction model specifically designed for Premier League football matches. 
                Our system analyzes vast amounts of historical data, team statistics, and current form to provide accurate 
                predictions for upcoming fixtures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-display">Our Predictions</h2>
              <p className="text-gray-700 dark:text-gray-300">
                For each Premier League match, PLAI provides predictions in three key areas:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Match Result:</strong> Who will win the match or if it will end in a draw</li>
                <li className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Both Teams to Score (BTTS):</strong> Whether both teams will score in the match</li>
                <li className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Over/Under 2.5 Goals:</strong> Whether the total goals scored will be over or under 2.5</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-display">How It Works</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our AI model processes multiple data points including team form, head-to-head records, player statistics, 
                and historical performance patterns. Each prediction comes with a confidence percentage and detailed analysis 
                to help you understand the reasoning behind our predictions.
              </p>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
} 