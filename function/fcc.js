// question gymnastic team check winner
const calcAverage = (round1, round2, round3) => {
  const average = (round1 + round2 + round3) / 3;
  return average;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 😅(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 😅(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No Team Win');
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
