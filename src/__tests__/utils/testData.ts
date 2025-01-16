import { Predictions } from '@/types/Prediction.types';

export const mockPrediction = {
  match: "Team A vs Team B",
  potentialScore: "2-1",
  result: {
    prediction: "Home Win",
    probability: 75,
    analysis: "Team A has been in great form"
  },
  overUnder: {
    prediction: "Over 2.5",
    probability: 65,
    analysis: "Both teams score frequently"
  },
  bothTeamsToScore: {
    prediction: "Yes",
    probability: 80,
    analysis: "Both teams have strong attack"
  }
};

export const mockPredictions: Predictions = {
  predictions: [mockPrediction]
}; 