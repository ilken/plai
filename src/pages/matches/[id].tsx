import { useRouter } from 'next/router';
import Head from 'next/head';
import { Navbar } from '@/components/navbar/Navbar.component';
import { Footer } from '@/components/footer/Footer.component';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs.component';
import { data } from '@/data/week6.data';
import { PredictionsSchema } from '@/types/Prediction.types';
import Custom404 from '../404';

export default function PredictionPage() {
  const router = useRouter();
  const { id } = router.query;
  const { predictions } = PredictionsSchema.parse(data);
  
  const prediction = predictions[Number(id)];

  // Handle invalid IDs and missing predictions
  if (!prediction || isNaN(Number(id)) || Number(id) < 0) {
    return <Custom404 />;
  }

  return (
    <>
      <Head>
        <title>{`${prediction.match} - PLAI`}</title>
        <meta name="description" content={`Detailed AI predictions and analysis for ${prediction.match}`} />
      </Head>
      
      <Navbar />
      
      <div className="min-h-screen flex flex-col mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 flex-1 w-full">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: 'Predictions', href: '/' },
                { label: prediction.match },
              ]}
            />
          </div>
          
          <div className="bg-white/80 dark:bg-gray-900/90 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {prediction.match}
            </h1>
            <div className="mb-8">
              <span className="px-4 py-2 text-sm bg-blue-100 dark:bg-cyber-primary/20 text-blue-600 dark:text-cyber-primary rounded-xl border border-blue-200/50 dark:border-cyber-primary/30">
                {prediction.potentialScore}
              </span>
            </div>

            {/* Match Result */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Match Result
              </h2>
              <div className="mb-4">
                <span className="px-3 py-1.5 text-sm bg-blue-50 dark:bg-cyber-secondary/20 text-blue-600 dark:text-cyber-secondary rounded-lg border border-blue-200/50 dark:border-cyber-secondary/30">
                  {prediction.result.prediction} ({prediction.result.probability}%)
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {prediction.result.analysis}
              </p>
            </section>

            {/* Over/Under */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Over/Under
              </h2>
              <div className="mb-4">
                <span className="px-3 py-1.5 text-sm bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg border border-orange-200/50 dark:border-orange-500/30">
                  {prediction.overUnder.prediction} ({prediction.overUnder.probability}%)
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {prediction.overUnder.analysis}
              </p>
            </section>

            {/* BTTS */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Both Teams to Score
              </h2>
              <div className="mb-4">
                <span className="px-3 py-1.5 text-sm bg-purple-50 dark:bg-cyber-primary/20 text-purple-600 dark:text-cyber-primary rounded-lg border border-purple-200/50 dark:border-cyber-primary/30">
                  {prediction.bothTeamsToScore.prediction} ({prediction.bothTeamsToScore.probability}%)
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {prediction.bothTeamsToScore.analysis}
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
} 