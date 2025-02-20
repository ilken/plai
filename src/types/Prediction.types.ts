import { z } from 'zod';

const PredictionItemSchema = z.object({
  prediction: z.string(),
  probability: z.number(),
  analysis: z.string(),
});

export const PredictionSchema = z.object({
  match: z.string(),
  potentialScore: z.string(),
  result: PredictionItemSchema,
  overUnder: PredictionItemSchema,
  bothTeamsToScore: PredictionItemSchema,
});

export const PredictionsSchema = z.object({
  predictions: z.array(PredictionSchema),
});

export type Prediction = z.infer<typeof PredictionSchema>;
export type Predictions = z.infer<typeof PredictionsSchema>;
