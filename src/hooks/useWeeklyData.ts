import { data } from '@/data/week4.data';
import { PredictionsSchema } from '@/types/Prediction.types';

export const useWeeklyData = () => {
    const { predictions } = PredictionsSchema.parse(data);

    return predictions;
}