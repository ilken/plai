import { useQuery } from '@tanstack/react-query';
import { PredictionsSchema } from '@/types/Prediction.types';

export const useWeeklyData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['predictions'],
    queryFn: async () => {
      const response = await fetch('https://raw.githubusercontent.com/ilken/plai-actions/main/output/data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      return PredictionsSchema.parse(jsonData);
    },
  });

  return {
    predictions: data?.predictions ?? [],
    isLoading,
    error,
  };
};
