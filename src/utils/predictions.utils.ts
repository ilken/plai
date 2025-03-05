import { Prediction } from '@/types/Prediction.types';

export const getTopPredictions = (predictions: Prediction[]) => {
  // Get all predictions of each type
  const resultPredictions = predictions.map(prediction => ({
    type: 'Result',
    match: prediction.match,
    prediction: prediction.result.prediction,
    probability: prediction.result.probability,
  }));

  const goalsPredictions = predictions.map(prediction => ({
    type: 'Goals',
    match: prediction.match,
    prediction: prediction.overUnder.prediction,
    probability: prediction.overUnder.probability,
  }));

  const bttsPredictions = predictions.map(prediction => ({
    type: 'BTTS',
    match: prediction.match,
    prediction: prediction.bothTeamsToScore.prediction,
    probability: prediction.bothTeamsToScore.probability,
  }));

  // Get the highest probability prediction for each type
  const topResult = resultPredictions.reduce((prev, current) =>
    prev.probability > current.probability ? prev : current
  );

  const topGoals = goalsPredictions.reduce((prev, current) =>
    prev.probability > current.probability ? prev : current
  );

  const topBTTS = bttsPredictions.reduce((prev, current) =>
    prev.probability > current.probability ? prev : current
  );

  return [topResult, topGoals, topBTTS];
};
