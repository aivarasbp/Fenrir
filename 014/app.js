function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 2.

// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// 3.

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 4.

// let number = 0;

// for (let i = 0; i < 9; i++) {
//   number = number * 10 + 1;
// }

// console.log(number + 3);

// 5.

// for (let i = 1; i <= 100; i++) {

//   if (i % 3 === 0) {
//     console.log('Fizz');

//   } else {
//     console.log(i);
//   }
// }

// 6.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum);

// 7.

// let count = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     count += i;
//   }
// }

// console.log(count);