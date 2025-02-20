import { Predictions } from '@/types/Prediction.types';

export const data: Predictions = {
  predictions: [
    {
      match: 'Brentford v Manchester City',
      potentialScore: '1-3',
      result: {
        prediction: 'Manchester City Win',
        probability: 70,
        analysis:
          "Manchester City are in strong form, and Brentford, though capable of scoring, can be inconsistent. City's attack should be too much for Brentford.",
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 60,
        analysis:
          "Expect goals! Both teams have attacking potential, and City's games often see high scores.",
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 80,
        analysis:
          'Brentford might find the net at home, even if City are likely to score more.',
      },
    },
    {
      match: 'West Ham v Fulham',
      potentialScore: '2-1',
      result: {
        prediction: 'West Ham Win',
        probability: 55,
        analysis:
          "A close one, but West Ham's recent form is slightly better, and they have home advantage.",
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 60,
        analysis:
          "Fulham are decent going forward, and West Ham's defense can be leaky at times.",
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 80,
        analysis: 'Both teams have the capability to score in this match.',
      },
    },
    {
      match: 'Arsenal v Tottenham',
      potentialScore: '2-2',
      result: {
        prediction: 'Draw',
        probability: 60,
        analysis:
          'A classic North London derby! Both teams are attack-minded and evenly matched, making a draw a likely outcome.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 60,
        analysis:
          'These derbies are often high-scoring affairs with both teams pushing for victory.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 80,
        analysis:
          'Expect goals at both ends.  Both teams have strong attacking lineups.',
      },
    },
    {
      match: 'Chelsea v Bournemouth',
      potentialScore: '2-0',
      result: {
        prediction: 'Chelsea Win',
        probability: 65,
        analysis:
          'Chelsea have been solid defensively, and Bournemouth struggle to score against the top sides. Chelsea should control the game.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 40,
        analysis:
          "Bournemouth's struggles in front of goal could lead to a low-scoring match.",
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 20,
        analysis:
          "Chelsea's defense is likely to keep a clean sheet against Bournemouth.",
      },
    },
    {
      match: 'Nottingham Forest v Liverpool',
      potentialScore: '0-2',
      result: {
        prediction: 'Liverpool Win',
        probability: 75,
        analysis:
          "Liverpool are the clear favorites here. Forest have struggled, especially at home. Liverpool's quality should prevail.",
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 40,
        analysis:
          "Forest's struggles in attack and Liverpool's improved defense suggest a lower-scoring game.",
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 20,
        analysis:
          "Liverpool's defense should be able to handle Forest's attack.",
      },
    },
    {
      match: 'Everton v Aston Villa',
      potentialScore: '1-1',
      result: {
        prediction: 'Draw',
        probability: 60,
        analysis:
          'This looks like a tight match. Both teams have been inconsistent, with neither showing a clear advantage.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 40,
        analysis:
          'Both teams have had periods of low-scoring games, suggesting a potentially cagey affair.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 80,
        analysis:
          'Both teams have shown attacking potential, even in their inconsistent form.',
      },
    },
    {
      match: 'Newcastle v Wolverhampton',
      potentialScore: '2-1',
      result: {
        prediction: 'Newcastle Win',
        probability: 65,
        analysis:
          'Newcastle are in good form at home, and Wolves have been struggling. Expect Newcastle to control the game.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 60,
        analysis:
          "Newcastle's attacking strength and Wolves' potential vulnerability could lead to a few goals.",
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 80,
        analysis:
          'While Newcastle are favorites, Wolves might find a way to get on the scoresheet.',
      },
    },
    {
      match: 'Leicester v Crystal Palace',
      potentialScore: '1-2',
      result: {
        prediction: 'Crystal Palace Win',
        probability: 55,
        analysis:
          'Leicester are at the bottom of the table and struggling. Palace have been more consistent and should be able to take advantage.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 60,
        analysis:
          "Leicester's defensive frailties and Palace's attacking potential could lead to a higher-scoring game.",
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 80,
        analysis:
          'While Palace are favorites, Leicester might manage to score at home.',
      },
    },
  ],
};
