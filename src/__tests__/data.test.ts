import { PredictionsSchema } from '@/types/Prediction.types';
import { data } from '@/data/week1.data';

describe('Predictions Data Validation', () => {
  it('should have valid structure', () => {
    expect(() => {
      PredictionsSchema.parse(data);
    }).not.toThrow();
  });

  it('should contain an array of predictions', () => {
    const parsed = PredictionsSchema.parse(data);
    expect(Array.isArray(parsed.predictions)).toBe(true);
  });

  it('should have valid prediction items', () => {
    const parsed = PredictionsSchema.parse(data);
    
    parsed.predictions.forEach((prediction) => {
      // Check required fields
      expect(prediction.match).toBeDefined();
      expect(prediction.potentialScore).toBeDefined();
      
      // Check result
      expect(prediction.result.prediction).toBeDefined();
      expect(typeof prediction.result.probability).toBe('number');
      expect(prediction.result.analysis).toBeDefined();
      
      // Check overUnder
      expect(prediction.overUnder.prediction).toBeDefined();
      expect(typeof prediction.overUnder.probability).toBe('number');
      expect(prediction.overUnder.analysis).toBeDefined();
      
      // Check bothTeamsToScore
      expect(prediction.bothTeamsToScore.prediction).toBeDefined();
      expect(typeof prediction.bothTeamsToScore.probability).toBe('number');
      expect(prediction.bothTeamsToScore.analysis).toBeDefined();
    });
  });

  it('should have valid probability ranges', () => {
    const parsed = PredictionsSchema.parse(data);
    
    parsed.predictions.forEach((prediction) => {
      // Check probability ranges (should be between 0 and 100)
      expect(prediction.result.probability).toBeGreaterThanOrEqual(0);
      expect(prediction.result.probability).toBeLessThanOrEqual(100);
      
      expect(prediction.overUnder.probability).toBeGreaterThanOrEqual(0);
      expect(prediction.overUnder.probability).toBeLessThanOrEqual(100);
      
      expect(prediction.bothTeamsToScore.probability).toBeGreaterThanOrEqual(0);
      expect(prediction.bothTeamsToScore.probability).toBeLessThanOrEqual(100);
    });
  });

  it('should have non-empty string fields', () => {
    const parsed = PredictionsSchema.parse(data);
    
    parsed.predictions.forEach((prediction) => {
      expect(prediction.match.length).toBeGreaterThan(0);
      expect(prediction.potentialScore.length).toBeGreaterThan(0);
      expect(prediction.result.prediction.length).toBeGreaterThan(0);
      expect(prediction.result.analysis.length).toBeGreaterThan(0);
      expect(prediction.overUnder.prediction.length).toBeGreaterThan(0);
      expect(prediction.overUnder.analysis.length).toBeGreaterThan(0);
      expect(prediction.bothTeamsToScore.prediction.length).toBeGreaterThan(0);
      expect(prediction.bothTeamsToScore.analysis.length).toBeGreaterThan(0);
    });
  });
}); 