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
      className="group relative flex min-h-[420px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200/50 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700/50 dark:bg-gray-900/90"
    >
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gray-900/90 dark:to-gray-800/90" />
      <div className="absolute left-0 top-0 h-1 w-full overflow-hidden bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 dark:from-blue-500 dark:via-cyan-400 dark:to-blue-400">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
          <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-beam" />
        </div>
      </div>

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="mr-4 flex-1 text-2xl font-medium text-gray-900 dark:text-white/90">
            {prediction.match}
          </h3>
          <span className="whitespace-nowrap rounded-xl border border-blue-200/50 bg-blue-100 px-4 py-2 text-sm text-blue-600 dark:border-cyber-primary/30 dark:bg-cyber-primary/20 dark:text-cyber-primary">
            {prediction.potentialScore}
          </span>
        </div>

        <div className="flex-1 space-y-8">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="font-medium text-gray-900 dark:text-white/80">Result</span>
              <span className="whitespace-nowrap rounded-lg border border-blue-200/50 bg-blue-50 px-3 py-1.5 text-sm text-blue-600 dark:border-cyber-secondary/30 dark:bg-cyber-secondary/20 dark:text-cyber-secondary">
                {prediction.result.prediction} ({prediction.result.probability}
                %)
              </span>
            </div>
            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400/80">
              {prediction.result.analysis}
            </p>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-medium text-gray-900 dark:text-white/80">Over/Under</span>
              <span className="whitespace-nowrap rounded-lg border border-orange-200/50 bg-orange-50 px-3 py-1.5 text-sm text-orange-600 dark:border-orange-500/30 dark:bg-orange-900/30 dark:text-orange-400">
                {prediction.overUnder.prediction} ({prediction.overUnder.probability}%)
              </span>
            </div>
            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400/80">
              {prediction.overUnder.analysis}
            </p>
          </div>

          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="font-medium text-gray-900 dark:text-white/80">
                Both Teams to Score
              </span>
              <span className="whitespace-nowrap rounded-lg border border-purple-200/50 bg-purple-50 px-3 py-1.5 text-sm text-purple-600 dark:border-cyber-primary/30 dark:bg-cyber-primary/20 dark:text-cyber-primary">
                {prediction.bothTeamsToScore.prediction} ({prediction.bothTeamsToScore.probability}
                %)
              </span>
            </div>
            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400/80">
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
    <div className="mb-2 flex flex-wrap items-center gap-2">
      <span className="font-mono font-medium text-gray-900 dark:text-cyber-light">{title}</span>
      <span
        className={`rounded-full bg-gradient-to-r px-2 py-1 font-mono text-sm ${colorClass} text-white dark:text-cyber-dark`}
      >
        {prediction.prediction} ({prediction.probability}%)
      </span>
    </div>
    <p className="line-clamp-2 font-mono text-sm text-gray-600 dark:text-cyber-light/70">
      {prediction.analysis}
    </p>
  </div>
);
