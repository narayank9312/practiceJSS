//for loop keep continue till  condition is true

// for (let rep = 1; rep <= 10; rep++) {
//   //   console.log('lifting weight repetion', rep);
//   console.log(`lifting weight repetion  ${rep}`);
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michale', 'Peter', 'Steven'],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   //reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
//   //filling types array

//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age.push(2037 - years[i]);
// }

// console.log(age);

// //continue and break statement

// console.log('----only strings-----');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;
//   //reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('----break with number-----');
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] == 'number') break;
//   //reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
// }

//lopping backwards and loops in  loops

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michale', 'Peter', 'Steven'],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------------statrting exetcise ${exercise}`);

  for (let rep = 1; rep < 5; rep++) {
    console.log(`exercise ${exercise} lifting weight repetition ${rep}`);
  }
}
