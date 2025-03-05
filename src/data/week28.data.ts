import { Predictions } from '@/types/Prediction.types';

export const data: Predictions = {
  predictions: [
    {
      match: 'Nottingham Forest FC v Manchester City FC',
      potentialScore: '1-2',
      result: {
        prediction: 'Manchester City FC Win',
        probability: 55,
        analysis:
          "Manchester City are a strong team, but Nottingham Forest are tough at home. City's attacking prowess should see them through, but Forest will likely get a goal.",
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 60,
        analysis:
          "Both teams are capable of scoring, and City's attack is potent. A high-scoring game is likely.",
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 65,
        analysis:
          "Nottingham Forest's home form suggests they'll find the net, while City's attack is almost guaranteed to score.",
      },
    },
    {
      match: 'Brighton & Hove Albion FC v Fulham FC',
      potentialScore: '2-1',
      result: {
        prediction: 'Brighton & Hove Albion FC Win',
        probability: 50,
        analysis:
          'Brighton have been inconsistent, but their home form is generally good. Fulham are a decent side, but Brighton should edge this one.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 55,
        analysis:
          'Both teams are capable of scoring, and Brighton games tend to be open. A tight game is still possible, though.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 70,
        analysis: 'Both teams have a good scoring record. Expect goals at both ends.',
      },
    },
    {
      match: 'Crystal Palace FC v Ipswich Town FC',
      potentialScore: '2-0',
      result: {
        prediction: 'Crystal Palace FC Win',
        probability: 60,
        analysis:
          'Palace are solid at home, while Ipswich are struggling. A comfortable win for Palace is likely.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 65,
        analysis:
          "Palace aren't the most free-scoring team, and Ipswich struggle to score. A low-scoring game is expected.",
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 70,
        analysis: "Ipswich's poor attack suggests they won't score in this match.",
      },
    },
    {
      match: 'Liverpool FC v Southampton FC',
      potentialScore: '4-0',
      result: {
        prediction: 'Liverpool FC Win',
        probability: 90,
        analysis:
          'Liverpool are top of the league and playing at home against a struggling Southampton side. A comfortable win is almost guaranteed.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 85,
        analysis:
          "Liverpool's attack is potent, and Southampton's defence is poor. Expect a high-scoring game.",
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 80,
        analysis:
          "Southampton's attack is weak, and Liverpool's defence is solid. Southampton are unlikely to score.",
      },
    },
    {
      match: 'Brentford FC v Aston Villa FC',
      potentialScore: '1-1',
      result: {
        prediction: 'Draw',
        probability: 40,
        analysis:
          'Brentford are inconsistent, while Aston Villa are a solid mid-table side. A draw is a likely outcome.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 50,
        analysis:
          'Both teams can score, but neither are particularly prolific. A close game with a few goals is expected.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 60,
        analysis: 'Both teams are capable of scoring, making a BTTS likely.',
      },
    },
    {
      match: 'Wolverhampton Wanderers FC v Everton FC',
      potentialScore: '1-0',
      result: {
        prediction: 'Wolverhampton Wanderers FC Win',
        probability: 45,
        analysis:
          'Wolves are playing at home and need the points. Everton have been inconsistent. Wolves may edge this one.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 60,
        analysis:
          'Both teams have struggled for goals this season. A low-scoring affair is anticipated.',
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 65,
        analysis: 'Neither team is reliable in front of goal, making a BTTS unlikely.',
      },
    },
    {
      match: 'Tottenham Hotspur FC v AFC Bournemouth',
      potentialScore: '2-2',
      result: {
        prediction: 'Draw',
        probability: 35,
        analysis:
          'Tottenham are in poor form, while Bournemouth are a decent mid-table side. A draw is possible.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 65,
        analysis:
          'Tottenham still have some attacking firepower, and Bournemouth can score. A high-scoring game is likely.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 75,
        analysis: 'Both teams are capable of scoring, making a BTTS very probable.',
      },
    },
    {
      match: 'Chelsea FC v Leicester City FC',
      potentialScore: '3-1',
      result: {
        prediction: 'Chelsea FC Win',
        probability: 70,
        analysis:
          'Chelsea are a strong team at home, while Leicester are struggling. A comfortable win for Chelsea is expected.',
      },
      overUnder: {
        prediction: 'Over 2.5 Goals',
        probability: 60,
        analysis:
          "Chelsea's attack is potent, and Leicester's defence is poor. A high-scoring game is possible.",
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 55,
        analysis: 'Leicester might grab a consolation goal.',
      },
    },
    {
      match: 'Manchester United FC v Arsenal FC',
      potentialScore: '0-2',
      result: {
        prediction: 'Arsenal FC Win',
        probability: 60,
        analysis:
          'Man Utd are in poor form, while Arsenal are challenging for the title. An Arsenal win is likely.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 55,
        analysis:
          "Man Utd's attack is struggling, and Arsenal's defence is solid. A low-scoring game is expected.",
      },
      bothTeamsToScore: {
        prediction: 'No',
        probability: 70,
        analysis: "Man Utd's attack is unlikely to trouble Arsenal's defence.",
      },
    },
    {
      match: 'West Ham United FC v Newcastle United FC',
      potentialScore: '1-1',
      result: {
        prediction: 'Draw',
        probability: 40,
        analysis: 'Both teams are inconsistent. A draw is a likely outcome.',
      },
      overUnder: {
        prediction: 'Under 2.5 Goals',
        probability: 60,
        analysis:
          'Both teams have struggled for goals this season. A low-scoring affair is anticipated.',
      },
      bothTeamsToScore: {
        prediction: 'Yes',
        probability: 50,
        analysis: 'Both teams are as likely to score as not.',
      },
    },
  ],
};
