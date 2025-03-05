import { motion } from 'framer-motion';

export const PredictionsSkeleton = () => {
  return (
    <div className="mt-16 flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
        {/* Header Skeleton */}
        <div className="mb-8 h-10 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />

        {/* Top Predictions Skeleton */}
        <div className="mb-8 rounded-lg border border-gray-200/50 bg-white/80 p-6 shadow-md backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/90">
          <div className="mb-4 h-8 w-40 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-lg border border-gray-100/50 bg-gray-50/90 p-4 dark:border-gray-700/50 dark:bg-gray-800/90"
              >
                <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-6 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            ))}
          </div>
        </div>

        {/* All Fixtures Skeleton */}
        <div className="mb-4 h-8 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 py-4 lg:grid-cols-2">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className="rounded-lg border border-gray-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/90"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="h-6 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-6 w-16 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map(j => (
                  <div key={j} className="space-y-2">
                    <div className="h-4 w-24 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 