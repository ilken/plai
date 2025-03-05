export const PredictionDetailSkeleton = () => {
  return (
    <div className="mt-16 flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        {/* Breadcrumbs Skeleton */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-4">/</div>
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="rounded-2xl border border-gray-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/90">
          {/* Title Skeleton */}
          <div className="mb-2 h-10 w-2/3 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
          <div className="mb-8">
            <div className="h-8 w-24 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Sections Skeleton */}
          {['Match Result', 'Over/Under', 'Both Teams to Score'].map((section, index) => (
            <div key={section} className={`${index < 2 ? 'mb-8' : ''}`}>
              <div className="mb-4 h-8 w-40 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
              <div className="mb-4 h-6 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
              <div className="h-20 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 