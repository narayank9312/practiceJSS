// // object creation

// const studentInformation = {
//   firstName: 'Navneet',
//   lastName: 'jha',
//   age: 2021 - 1999,
//   profession: 'student',
//   friends: ['himanshu', 'paras', 'harshit'],
// };
// console.log(studentInformation);
// console.log(studentInformation.lastName);
// console.log(studentInformation['lastName']); // we can put expressoin

// const nameKey = 'Name';
// console.log(studentInformation['first' + nameKey]);
// console.log(studentInformation['last' + nameKey]);

// //bracket notation
// const intrestedIn = prompt(
//   'what do you want to know about this person lastName , firstName , age , profession , friends'
// );

// if (studentInformation[intrestedIn]) {
//   console.log(studentInformation[intrestedIn]);
// } else {
//   console.log(
//     'wrong request chosse between lastName , firstName , age , profession , friends'
//   );
// }

// studentInformation.location = 'newdelhi';
// studentInformation['linkedin'] = 'narayank9312';
// console.log(studentInformation);
// console.log(
//   `${studentInformation.firstName} has ${studentInformation.friends.length} friends and his best friend called ${studentInformation.friends[0]}`
// );

// // do some more stuff
// const studentInformation = {
//   firstName: 'Navneet',
//   lastName: 'jha',
//   dob: 1999,
//   profession: 'student',
//   friends: ['himanshu', 'paras', 'harshit'],
//   hasDrivingLiscense: true,
//   //   calcAge: function (dob) {
//   //     return 2037 - dob;
//   //   },

//   //   calcAge: function () {
//   //     return 2037 - this.dob;
//   //   },

//   calcAge: function () {
//     this.age = 2037 - this.dob;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.profession
//     }, and he has ${this.hasDrivingLiscense ? 'a' : 'no'} driving liscense`;
//   },
// };

// //effecient way
// console.log(studentInformation.calcAge());
// console.log(studentInformation.age);
// console.log(studentInformation.age);
// console.log(studentInformation.age);
// console.log(studentInformation.age);

// // console.log(studentInformation.calcAge());
// // console.log(studentInformation.calcAge());
// // console.log(studentInformation.calcAge());
// // console.log(studentInformation.calcAge());

// //console.log(studentInformation.calcAge(1990));

// // console.log(studentInformation['calcAge'](1991));

// console.log(studentInformation.getSummary());

// coding challange
