function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// const a = rand(1, 7);

// for (let i = 0; i < a; i++) {
//   console.log(a);
// };

const o = {
  name: 'Aivaras',
  age: 23
}

const a1 = [];

const animals = ['Bunny', 'Fox', 'Racoon', 'Dinosaur', 'Cat'];

const people = [
  { name: 'Bob', age: 21, city: 'New York' },
  { name: 'Alice', age: 22, city: 'New York' },
  { name: 'Josh', age: 27, city: 'New York' },
];

// console.log(animals);

// console.log(animals[1]);

animals.push('Bobcat');

// console.log(animals);

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

for (let i = 0; i < animals.length; i += 2) {
  console.log(animals[i]);
}


// print animal names that are longer than 6 letters

for (let i = 0; i < animals.length; i++) {
  if (animals[i].length > 6) {
    console.log(animals[i]);
  }
}

// print animal names that are longer than 6 letters without if statement

for (let i = 0; i < animals.length; i++) {
  animals[i].length > 6 && console.log(animals[i]);
}

// Create a array with 5 random numbers (using rand) from 1 to 10

const numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(rand(1, 10));
}

console.log(numbers);

//count all the 5 that are generated using the code above

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    count++;
  }
}

console.log('Result:', count);

//create an array that have 5 random numbers from 1 to 10 (using rand function) in which are at least 3 numbers that are 5 use do while loop

// let numbers2 = [];
// let iterations = 0;
// iterations++;

// do {
//   numbers2 = [];
//   count = 0;
//   for (let i = 0; i < 5; i++) {
//     numbers2.push(rand(1, 10));
//     if (numbers2[i] === 5) {
//       count++;
//     }
//     console.log(numbers2[i]);
//   }
// } while (count < 3);

// console.log('Iterations:', iterations);

animals.push('Dear'); // puts in the end of array

animals.unshift('Moose'); //puts it in beginning of array

console.log(animals);

animals.pop(); // removes it from the end of array

console.log(animals);

animals.shift(); // removes it from the beginning of array

console.log(animals);

animals.splice(2, 1); // removes it from the 3rd position 1 value

console.log(animals);

animals.splice(0, 1); // removes it from the 1st position 1 value

console.log(animals);

animals.reverse(); // reverses the array

console.log(animals);

animals.sort(); // sorts the array

console.log(animals);

animals.sort((a, b) => a.length - b.length); // sorts the array by length

console.log(animals);


