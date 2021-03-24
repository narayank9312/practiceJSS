const friends = ['navneet', 'himanshu', 'paras', 'harshit']; //lierals

console.log(friends);

const DOY = new Array(1999, 1999, 1998, 1997);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // size of array
console.log(friends[friends.length - 1]);

friends[1] = 'gautam';
console.log(friends);

const firstName = 'jonas';
const jonas = [firstName, 1999 - 1970, 'teacher', friends];
console.log(jonas);

// Exercise

const calcAge = function (BOY) {
  return 2037 - BOY;
};
const years = [1990, 1995, 2000, 2005];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);

console.log(age1, age1, age3, age4);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[2]),
  calcAge(years[3]),
];
console.log(ages);

// array methods implentation
const friends = ['navneet', 'himanshu', 'paras', 'harshit'];

//add element
friends.push('amrit'); //lasr
console.log(friends);

const newLength = friends.push('aqib');
console.log(newLength);

friends.unshift('chandan'); //start
console.log(friends);

//remove element

const poped1 = friends.pop(); //last
const poped2 = friends.pop();
console.log(poped1, poped2);
console.log(friends);

const poped3 = friends.shift();
console.log(poped3);
console.log(friends);

console.log(friends.indexOf('navneet'));
console.log(friends.indexOf('amrit'));

console.log(friends.includes('navneet'));
console.log(friends.includes('amrit'));

if (friends.includes('amrit')) {
  console.log('you have a friend called amrit');
}

if (friends.includes('navneet')) {
  console.log('you have a friend called navneet');
}

// coding challange question
const calcTip = function name(amount) {
  if (amount >= 50 && amount <= 300) {
    return amount * 0.15;
  } else {
    return amount * 0.2;
  }

  return amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.2;
};

const tip1 = calcTip(125);
console.log(tip1);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
