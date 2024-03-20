function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let greeting = rand(0, 4);
// let storage = '';

// for (let i = 0; i < greeting; i++) {
//   storage += 'hello ';
// }

// console.log(storage);

// print a random number from 0 to 4 in console.log

// let number = rand(0, 4);

// let fiveOrSeven = rand(0, 1) ? 5 : 7;
// // console.log(number);

// for (let i = 0; i < fiveOrSeven; i++) {
//   console.log(rand(0, 5));
// }

// let sum7 = 0;

// for (let i = 0; i < 5; i++) {
//   let sk = rand(0, 4);
//   console.log(sk);
//   sum7 += sk;
// }

// console.log('Amount:', sum7);

// let trafficLights = rand(0, 2);

// let color = trafficLights === 0 ? 'red' : trafficLights === 1 ? 'yellow' : 'green';

// console.log('trafficLights:', color);

// if (color === 'red') {
//   console.log('Stop');
// } else if (color === 'yellow') {
//   console.log('Prepare');
// } else {
//   console.log('Go');
// }


// switch (color) {
//   case 'red':
//     console.log('Stop');
//     break;
//   case 'yellow':
//     console.log('Prepare');
//     break;
//   default:
//     console.log('Go');
// }

// let box = rand(1, 4);

// let size;

// if (box === 1) {
//   size = 'S';
// }

// if (box === 2) {
//   size = 'M';
// }

// if (box === 3) {
//   size = 'L';
// }

// if (box === 4) {
//   size = 'XL';
// }

// console.log('Box-size:', size);

// if (size === 'S') {
//   console.log('Checking S');
// }

// if (size === 'M' || size === 'S') {
//   console.log('Checking M');
// }

// if (size === 'L' || size === 'M' || size === 'S') {
//   console.log('Checking L');
// }

// if (size === 'XL' || size === 'L' || size === 'M' || size === 'S') {
//   console.log('Checking XL');
// }

// switch (size) {
//   case 'S':
//     console.log('Checking S');

//   case 'M':
//     console.log('Checking M');

//   case 'L':
//     console.log('Checking L');

//   case 'XL':
//     console.log('Checking XL');
// }

let vidinis;
let kartai = 0;
let kartaiDidelis = 0;
let kartaiMazas = 0;

do {
  kartaiDidelis++;
  vidinis = rand(5, 10);

  if (vidinis === 5) {
    kartai++;
  } else {
    kartai = 0;
  }

  console.log('Vidinis:', vidinis);

  for (let i = 0; i < vidinis; i++) {
    kartaiMazas++;
  }

} while (kartai != 3);

console.log('Kartai didelis:', kartaiDidelis);
console.log('Kartai mazas:', kartaiMazas);
