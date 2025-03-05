import { Predictions } from '@/types/Prediction.types';

export const data: Predictions = {
  predictions: [
    {
      match: 'Brighton & Hove Albion v Chelsea',
      potentialScore: '1-2',
      result: {
        prediction: 'Chelsea Win',
        probability: 50,
        analysis:
          "Chelsea have a slightly better record this season, but Brighton are unpredictable at home. It could go either way, but Chelsea's slight edge in quality might be the decider.",
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 55,
        analysis: 'Both teams can be defensively solid, and it might be a tight affair.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 55,
        analysis: 'Both teams have shown they can score, but it might not be a goal fest.',
      },
    },
    {
      match: 'Leicester City v Arsenal',
      potentialScore: '1-3',
      result: {
        prediction: 'Arsenal Win',
        probability: 70,
        analysis:
          "Arsenal are strong favourites against a struggling Leicester City. Arsenal's attack should be too much for Leicester.",
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 65,
        analysis: "Arsenal's games often involve goals, and Leicester's defense has been leaky.",
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 60,
        analysis: 'Leicester might score, but Arsenal are likely to score more.',
      },
    },
    {
      match: 'Aston Villa v Ipswich Town',
      potentialScore: '2-0',
      result: {
        prediction: 'Aston Villa Win',
        probability: 65,
        analysis:
          'Aston Villa are the stronger side and should be able to win at home against Ipswich Town.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 60,
        analysis: 'Ipswich might struggle to score, and Villa might win with a clean sheet.',
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 70,
        analysis: "Ipswich's attack is not the strongest, and Villa's defense can be solid.",
      },
    },
    {
      match: 'Fulham v Nottingham Forest',
      potentialScore: '1-1',
      result: {
        prediction: 'Draw',
        probability: 45,
        analysis:
          'Both teams are evenly matched, and it could be a close contest. A draw is a likely outcome.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 65,
        analysis: 'It might be a tight and cautious game with few goals.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 50,
        analysis: "Both teams have the potential to score, but it's not guaranteed.",
      },
    },
    {
      match: 'Manchester City v Newcastle United',
      potentialScore: '3-1',
      result: {
        prediction: 'Manchester City Win',
        probability: 75,
        analysis:
          "Manchester City are the stronger team and are likely to win at home. Newcastle can be dangerous on the counter, but City's attack is formidable.",
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 70,
        analysis:
          "City's games are usually high scoring, and Newcastle can contribute to the goal count.",
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 65,
        analysis: 'Newcastle have the attacking talent to get a goal, even against City.',
      },
    },
    {
      match: 'Southampton v AFC Bournemouth',
      potentialScore: '1-2',
      result: {
        prediction: 'AFC Bournemouth Win',
        probability: 55,
        analysis:
          'Bournemouth have been the slightly better side this season and might edge this encounter.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 55,
        analysis: 'Both teams have shown defensive vulnerabilities, and there could be goals.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 60,
        analysis: 'Both teams are capable of scoring against each other.',
      },
    },
    {
      match: 'West Ham United v Brentford',
      potentialScore: '2-1',
      result: {
        prediction: 'West Ham United Win',
        probability: 50,
        analysis:
          'West Ham at home can be a tough opponent, and they might have a slight advantage over Brentford.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 50,
        analysis: 'Both teams are capable of scoring, making it a potentially open game.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 55,
        analysis: 'Both teams have attacking threats and defensive issues.',
      },
    },
    {
      match: 'Crystal Palace v Everton',
      potentialScore: '1-0',
      result: {
        prediction: 'Crystal Palace Win',
        probability: 55,
        analysis:
          'Crystal Palace at home are a tough team to beat, and Everton have been inconsistent.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 60,
        analysis: 'It could be a low-scoring game, as both teams can be defensively organized.',
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 65,
        analysis:
          "Palace's defense can be difficult to break down, and Everton might struggle to score.",
      },
    },
    {
      match: 'Liverpool v Wolverhampton Wanderers',
      potentialScore: '3-0',
      result: {
        prediction: 'Liverpool Win',
        probability: 80,
        analysis: 'Liverpool are the much stronger team and should comfortably win at home.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 70,
        analysis: "Liverpool's attack is very strong, and they are likely to score multiple goals.",
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 75,
        analysis: "Wolves might find it hard to score against Liverpool's defense.",
      },
    },
    {
      match: 'Tottenham Hotspur v Manchester United',
      potentialScore: '2-2',
      result: {
        prediction: 'Draw',
        probability: 40,
        analysis:
          'This is a tough game to call. Both teams have attacking talent, but also defensive vulnerabilities. A draw is a plausible outcome.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 60,
        analysis: 'Both teams have potent attacks, and it could be a high-scoring encounter.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 70,
        analysis: 'Both teams are almost certain to find the net.',
      },
    },
  ],
};
