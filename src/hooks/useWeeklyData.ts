import { data } from '@/data/week6.data';
import { PredictionsSchema } from '@/types/Prediction.types';

export const useWeeklyData = () => {
    const { predictions } = PredictionsSchema.parse(data);

    return predictions;
}