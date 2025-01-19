import { useRouter } from 'next/router';
import { Prediction } from '@/types/Prediction.types';

interface PredictionCardProps {
  prediction: Prediction;
  index: number;
}

interface PredictionSectionProps {
  title: string;
  prediction: {
    prediction: string;
    probability: number;
    analysis: string;
  };
  colorClass: string;
}

export const PredictionCard = ({ prediction, index }: PredictionCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/matches/${index}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden bg-white/80 dark:bg-gray-900/90 rounded-2xl p-8 min-h-[420px] flex flex-col border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm group cursor-pointer"
    >
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-800/90" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 dark:from-blue-500 dark:via-cyan-400 dark:to-blue-400 overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-beam" />
        </div>
      </div>
      
      <div className="relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white/90 flex-1 mr-4">
            {prediction.match}
          </h3>
          <span className="px-4 py-2 text-sm bg-blue-100 dark:bg-cyber-primary/20 text-blue-600 dark:text-cyber-primary rounded-xl whitespace-nowrap border border-blue-200/50 dark:border-cyber-primary/30">
            {prediction.potentialScore}
          </span>
        </div>

        <div className="space-y-8 flex-1">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-medium text-gray-900 dark:text-white/80">Result</span>
              <span className="px-3 py-1.5 text-sm bg-blue-50 dark:bg-cyber-secondary/20 text-blue-600 dark:text-cyber-secondary rounded-lg whitespace-nowrap border border-blue-200/50 dark:border-cyber-secondary/30">
                {prediction.result.prediction} ({prediction.result.probability}%)
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400/80 line-clamp-2">
              {prediction.result.analysis}
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2 gap-2">
              <span className="font-medium text-gray-900 dark:text-white/80">Over/Under</span>
              <span className="px-3 py-1.5 text-sm bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg whitespace-nowrap border border-orange-200/50 dark:border-orange-500/30">
                {prediction.overUnder.prediction} ({prediction.overUnder.probability}%)
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400/80 line-clamp-2">
              {prediction.overUnder.analysis}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-medium text-gray-900 dark:text-white/80">Both Teams to Score</span>
              <span className="px-3 py-1.5 text-sm bg-purple-50 dark:bg-cyber-primary/20 text-purple-600 dark:text-cyber-primary rounded-lg whitespace-nowrap border border-purple-200/50 dark:border-cyber-primary/30">
                {prediction.bothTeamsToScore.prediction} ({prediction.bothTeamsToScore.probability}%)
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400/80 line-clamp-2">
              {prediction.bothTeamsToScore.analysis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PredictionSection = ({ title, prediction, colorClass }: PredictionSectionProps) => (
  <div className="relative">
    <div className="flex items-center gap-2 mb-2 flex-wrap">
      <span className="font-medium text-gray-900 dark:text-cyber-light font-mono">{title}</span>
      <span className={`px-2 py-1 text-sm rounded-full font-mono bg-gradient-to-r ${colorClass} text-white dark:text-cyber-dark`}>
        {prediction.prediction} ({prediction.probability}%)
      </span>
    </div>
    <p className="text-sm text-gray-600 dark:text-cyber-light/70 line-clamp-2 font-mono">
      {prediction.analysis}
    </p>
  </div>
); 