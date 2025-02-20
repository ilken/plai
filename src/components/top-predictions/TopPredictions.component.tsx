import { Prediction } from '@/types/Prediction.types';
import { getTopPredictions } from '@/utils/predictions.utils';
import { FireMeter } from '@/components/fire-meter/FireMeter.component';

interface TopPredictionsProps {
  predictions: Prediction[];
}

export const TopPredictions = ({ predictions }: TopPredictionsProps) => {
  const topPicks = getTopPredictions(predictions);

  return (
    <div className="mb-8 rounded-lg border border-gray-200/50 bg-white/80 p-6 shadow-md backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/90">
      <h2 className="mb-4 text-2xl font-bold dark:text-white">
        🎯 Top Predictions
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-100/50 bg-gray-50/90 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700/50 dark:bg-gray-800/90"
          >
            <div className="absolute left-0 top-0 h-1 w-full overflow-hidden bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 dark:from-blue-500 dark:via-cyan-400 dark:to-blue-400">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-beam" />
              </div>
            </div>
            <div className="mb-2 flex items-start justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {pick.type}
              </span>
              <FireMeter probability={pick.probability} />
            </div>
            <h3 className="mb-1 font-medium dark:text-white">{pick.match}</h3>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {pick.prediction}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
