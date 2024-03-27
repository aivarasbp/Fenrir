// const three = 3;

// for (let i = 0; i <= three; i++) {
//   for (let i = 0; i <= 100; i++) {
//     console.log(i);
//   }
// }
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const one = [];
// const two = [];
// const three = [];

// const letters = ['A', 'B', 'C', 'D', 'E'];

// for (let i = 0; i < 200; i++) {
//   one.push(letters[rand(0,3)]);
//   two.push(letters[rand(0,3)]);
//   three.push(letters[rand(0,3)]);
// }

// console.log(one,two,three);

// const grouped = [];

// for (let i = 0; i < 200; i++) {
//   grouped.push(one[i] + ' ' + two[i] + ' ' + three[i]);
// }

// console.log(grouped);

// const unique = [];

// for (let i = 0; i < 200; i++) {
//   if (-1 === unique.indexOf(grouped[i])) {
//     unique.push(grouped[i]);
//   }
// }

// console.log(unique);

// const unique2 = [];

// for (let i = 0; i < unique.length; i++) {
//   const from = grouped.indexOf(unique[i]);
//   if (-1 === grouped.indexOf(unique[i], from + 1)) {
//     unique2.push(unique[i]); // Change grouped[i] to unique[i]
//   }
// }

// console.log(unique2);

// 1.create an array from 1 to 100

const numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i + 1);
}

console.log(numbers);


// 2. do not print numbers that divides by 3 and change them to letter 'C'

const letters = [];

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0) {
    letters.push('C');
  } else {
    letters.push(i + 1);
  }
}

console.log(letters);

// 3. numbers that divide by 7 change it into letter 'B'

const letters2 = [];

for (let i = 0; i < 100; i++) {
  if (i % 7 === 0) {
    letters2.push('B');
  } else {
    letters2.push(i + 1);
  }
}

console.log(letters2);

// 4. multiply all numbers by 5

const numbers3 = [];

for (let i = 0; i < 100; i++) {
  numbers3.push(i * 5);
}

// for (let i = 0; i < 100; i++) {
//   if (typeof(numbers3[i])=='number') {
//     numbers3[i] = numbers3[i] * 5;
//   }

  console.log('numbers3:',numbers3);

// 5. change letters to their index 

for (let i = 0; i < 100; i++) {
  if (typeof(numbers[i]) == 'string') {
    numbers[i] = i;
  }
}

// 6. numbers that divides by 3  but that do not divide from 5 change it to string 'A'

for (let i = 0; i < 100; i++) {
  if (numbers[i] % 3 === 0 && i % 5!== 0) {
    numbers[i] = 'A';
  }
}

console.log(numbers);

// 7. count the number sum

let sum = 0;

for (let i = 0; i < 100; i++) {
  if (typeof(numbers3[i]) == 'number') {
    sum += numbers3[i];
  }
}

console.log(sum);

let A = numbers.indexOf('A');
let B = numbers.indexOf('B');

console.log(B);

console.log(A);

A = numbers.lastIndexOf('A');

console.log(A);

numbers.reverse();

console.log(numbers);




