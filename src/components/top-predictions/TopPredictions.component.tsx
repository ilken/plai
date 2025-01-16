import { Prediction } from '@/types/Prediction.types';
import { getTopPredictions } from '@/utils/predictions.utils';
import { FireMeter } from '@/components/fire-meter/FireMeter.component';

interface TopPredictionsProps {
  predictions: Prediction[];
}

export const TopPredictions = ({ predictions }: TopPredictionsProps) => {
  const topPicks = getTopPredictions(predictions);

  return (
    <div className="bg-white/80 dark:bg-gray-900/90 rounded-lg shadow-md border border-gray-200/50 dark:border-gray-700/50 p-6 mb-8 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">🎯 Top Predictions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topPicks.map((pick, index) => (
          <div
            key={index}
            className="group relative overflow-hidden flex flex-col bg-gray-50/90 dark:bg-gray-800/90 rounded-lg p-4 backdrop-blur-sm border border-gray-100/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 dark:from-blue-500 dark:via-cyan-400 dark:to-blue-400 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-beam" />
              </div>
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {pick.type}
              </span>
              <FireMeter probability={pick.probability} />
            </div>
            <h3 className="font-medium dark:text-white mb-1">{pick.match}</h3>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {pick.prediction}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}; 