import { ThemeSwitch } from '@/components/theme-switch/ThemeSwitch.component';
import { TopPredictions } from '@/components/top-predictions/TopPredictions.component';
import { PredictionsGrid } from '@/components/predictions-grid/PredictionsGrid.component';
import { Header } from '@/components/header/Header.component';
import { Footer } from '@/components/footer/Footer.component';
import { week1Data } from '@/data/week1.data';
import { PredictionsSchema } from '@/types/Prediction.types';
import { PredictionCard } from '@/components/prediction-card/PredictionCard.component';

export default function Home() {
  const { predictions } = PredictionsSchema.parse(week1Data);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <Header />
        <TopPredictions predictions={predictions} />
        <h2 className="text-2xl font-bold mb-4 dark:text-white">📅 All Fixtures</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 max-w-7xl mx-auto">
          {predictions.map((prediction, index) => (
            <PredictionCard key={index} prediction={prediction} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
} 