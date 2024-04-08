// function blueSlashes () {
//   for (let i = 0; i < 10; i++) {
//     console.log('%c-', 'color:skyblue; font-size: 20px;');
// }
// }

// blueSlashes();

// function sum(a, b) {
//   const rez = a + b;
//   console.log(rez);
// }

// sum(4, 5);

// function numberPrint (a) {
//   console.log(a * 5);
// };

// numberPrint(8);

// function defaultNumber (x, y = 6) {
//   const rez = x * y;
//   console.log(rez);
// }

// defaultNumber(3);

// function subtraction (x = 5, y) {
//   const rez = x / y;
//   console.log(rez);
// }

// subtraction(10, 2);

// subtraction(100);

// subtraction(8,4,3,2);

//put everything on second not first, the code prints from top to bottom from left to right. default meaning should not bet the first value.


// function megaSum (...all) {
//   rez = 0;
//   for (let i = 0; i < all.length; i++) {
//     rez += all[i];
//   }
//   console.log(rez);
// };

// megaSum(10,20,30); //everything thats left

// const x = () => {
//   return 'String'
// }

// const y = x()
// console.log(y);

// function lastLetter(word) {
//   const size = word.length;
//   const last = word[size - 1];
//   console.log(last);
// }

// lastLetter('Matrix');

// function returnSum(a,b) {
//   const rez= a  +b;
//   return rez;
// }

// const s1 = returnSum(8,5);
// console.log(s1);

// a function that returns a numbers square

// function square(a) {
//   const rez = a * a;
//   console.log(rez);
// }

// square(8);

// write a function that prints text

// function printText(text) {
//   console.log(text);
// }

// printText('Hello');

// write a function with two arguments, first argument prints text, the second one prints how many times it printed it

// function wordIsLonger (word) {
//   if (word.length > 5) {
//     return true;
//   }
//   return false;
// } 


// console.log('mother', wordIsLonger ('Mother'));
// console.log('casual striper', wordIsLonger('casual striper'));

// function multiAndSum(a,b) {
//   const rezMulti = a * b;
//   const rezSum = a + b;
//   return [rezMulti, rezSum];
//   return rez;
// }

// const [a,b] = multiAndSum(4, 5);

// console.log(a,b);

function multiple10(a) {
  return a * 10;
}

const multiple5 = (a) => {
  return a * 5;
}



console.log(multiple10(4));

console.log(multiple5(40));