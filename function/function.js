// function logger(params) {
//   console.log('my name is navneet');
// }

// //calling // running // invoking function

// logger();
// logger();
// logger();

// function fruitProcessor(apples, banana) {
//   console.log(apples, banana);
//   const juice = `juice with ${apples} apples and ${banana} banana`;
//   return juice;
// }

// console.log(fruitProcessor(4, 5));

// function declaration

// function calcAge1(BOY) {
//   return 2037 - BOY;
// }

// const age1 = calcAge1(2019);

// //function expression
// const calcAge2 = function (BOY) {
//   return 2037 - BOY;
// };

// const age2 = calcAge2(2019);

// console.log(age1, age2);

//Arrow Function

// const calcAge3 = (BOY) => {
//   return 2037 - BOY;
// };

// const calcAge4 = (BOY) => 2037 - BOY;
// const age3 = calcAge3(1997);
// const age4 = calcAge4(1997);
// console.log(age3, age4);

const yearOfRetirement = (BOY, name) => {
  const age = 2037 - BOY;
  const retire = 65 - age;
  console.log(`this person having name ${name} retire in ${retire} years`);
};

yearOfRetirement(2017, 'manish');
