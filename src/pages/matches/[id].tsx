import { useRouter } from 'next/router';
import Head from 'next/head';
import { Navbar } from '@/components/navbar/Navbar.component';
import { Footer } from '@/components/footer/Footer.component';
import { Breadcrumbs } from '@/components/breadcrumbs/Breadcrumbs.component';
import { data } from '@/data/week7.data';
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
        <meta
          name="description"
          content={`Detailed AI predictions and analysis for ${prediction.match}`}
        />
      </Head>

      <Navbar />

      <div className="mt-16 flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: 'Predictions', href: '/' },
                { label: prediction.match },
              ]}
            />
          </div>

          <div className="rounded-2xl border border-gray-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/90">
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {prediction.match}
            </h1>
            <div className="mb-8">
              <span className="rounded-xl border border-blue-200/50 bg-blue-100 px-4 py-2 text-sm text-blue-600 dark:border-cyber-primary/30 dark:bg-cyber-primary/20 dark:text-cyber-primary">
                {prediction.potentialScore}
              </span>
            </div>

            {/* Match Result */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Match Result
              </h2>
              <div className="mb-4">
                <span className="rounded-lg border border-blue-200/50 bg-blue-50 px-3 py-1.5 text-sm text-blue-600 dark:border-cyber-secondary/30 dark:bg-cyber-secondary/20 dark:text-cyber-secondary">
                  {prediction.result.prediction} (
                  {prediction.result.probability}%)
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {prediction.result.analysis}
              </p>
            </section>

            {/* Over/Under */}
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Over/Under
              </h2>
              <div className="mb-4">
                <span className="rounded-lg border border-orange-200/50 bg-orange-50 px-3 py-1.5 text-sm text-orange-600 dark:border-orange-500/30 dark:bg-orange-900/30 dark:text-orange-400">
                  {prediction.overUnder.prediction} (
                  {prediction.overUnder.probability}%)
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {prediction.overUnder.analysis}
              </p>
            </section>

            {/* BTTS */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Both Teams to Score
              </h2>
              <div className="mb-4">
                <span className="rounded-lg border border-purple-200/50 bg-purple-50 px-3 py-1.5 text-sm text-purple-600 dark:border-cyber-primary/30 dark:bg-cyber-primary/20 dark:text-cyber-primary">
                  {prediction.bothTeamsToScore.prediction} (
                  {prediction.bothTeamsToScore.probability}%)
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
