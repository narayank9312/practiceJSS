//for loop keep continue till  condition is true

// for (let rep = 1; rep <= 10; rep++) {
//   //   console.log('lifting weight repetion', rep);
//   console.log(`lifting weight repetion  ${rep}`);
// }

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michale', 'Peter', 'Steven'],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  //reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
  //filling types array

  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}

console.log(age);

//continue and break statement

console.log('----only strings-----');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  //reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
}

console.log('----break with number-----');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == 'number') break;
  //reading from jonas array
  console.log(jonas[i], typeof jonas[i]);
}
