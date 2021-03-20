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
