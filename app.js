const score = [
  { pins: 10, balls: 2 },
  { pins: 6, balls: 2 },
  { pins: 7, balls: 1 },
  { pins: 6, balls: 0 },
  { pins: 10, balls: 1 },
  { pins: 4, balls: 1 },
  { pins: 0, balls: 0 },
  { pins: 6, balls: 2 },
  { pins: 8, balls: 1 },
  { pins: 10, balls: 1 },
];

const bowlingScoreCalculator = (score) => {
  let totalScore = 0;

  for (let i = 0; i < score.length; i++) {

    const spare = () => {
      bonusScore = score[i].pins + score[i + 1].pins;
      totalScore += bonusScore;
    };
  
    const strike = () => {
      bonusScore = score[i].pins + score[i + 1].pins + score[i + 2].pins;
      totalScore += bonusScore;
    };
  
    const rollBonusBall = () => {
      score.push({ pins: Math.floor(Math.random() * 10), balls: 1 });
    };

    if (score[i] !== 10) {
      if (score[i].pins < 10 && score[i].balls == 2) {
        totalScore += score[i].pins;
      } else if (score[i].pins == 10 && score[i].balls == 2) {
        spare();
      } else if (score[i].pins == 10 && score[i].balls == 1) {
        strike();
      }
    }

    if (score[i].pins == 10 && score[i].balls == 2) {
      rollBonusBall();
      totalScore = 0;
      bowlingScoreCalculator();
    } else if (score[i].pins == 10 && score[i].balls == 1) {
      rollBonusBall();
      rollBonusBall();
      totalScore = 0;
      bowlingScoreCalculator();
    }
  }

  return totalScore;
};
console.log(bowlingScoreCalculator(score));
