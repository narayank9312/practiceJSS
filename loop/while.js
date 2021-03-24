let rep = 1;
// while (rep <= 10) {
//   //   console.log(`WHILE: lifting weight repetition ${rep}`);
//   //   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`you rolles a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log('loop is about to end', dice);
//   }
// }

//coding challange

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function name(amount) {
  if (amount >= 50 && amount <= 300) {
    return amount * 0.15;
  } else {
    return amount * 0.2;
  }

  return amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}
//console.log(tips);
for (let i = 0; i < bills.length; i++) {
  total[i] = bills[i] + tips[i];
}
// console.log(total);

const average = (total) => {
  let sum = 0;
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }
  return sum / total.length;
};

const avg = average(total);
console.log(avg);
