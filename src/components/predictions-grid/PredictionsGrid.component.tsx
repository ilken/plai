import { Prediction } from '@/types/Prediction.types';
import { PredictionCard } from '@/components/prediction-card/PredictionCard.component';

interface PredictionsGridProps {
  predictions: Prediction[];
}

export const PredictionsGrid = ({ predictions }: PredictionsGridProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">📊 All Predictions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {predictions.map((prediction, index) => (
          <PredictionCard key={index} prediction={prediction} index={index} />
        ))}
      </div>
    </div>
  );
}; 