// function recursion(n) {
//   console.log('Start of recursion n:', n);
//   if (n !== 3) {
//     recursion(n + 1);
//   }
//   console.log('End of recursion n:', n);
// }

// recursion(1);

// multiArray = [
//     [1, [4, 5, 6], 3],
//     [[4, [7, 8, [4, [4, 5], 6]]], 5, 6],
//     [7, 8, [4, [4, 5], 6]]
// ];

// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//           printArray(arr[i]);
//       } else {
//           console.log(arr[i]);
//       }
//   }
// }

// printArray(multiArray);

// What it does: counts (nothing)
// What it returns: accumulator value
const digitsArray = [20, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = digitsArray.reduce((acc, digit) => acc + digit, 0);

const max = digitsArray.reduce((acc, digit) => acc > digit ? acc : digit, digitsArray[0]);

console.log('Max:',max);

console.log('Sum:',sum);

// reverse 
// What it does: reverses the array
// What it returns: the same array just reversed

const colors = ['red', 'green', 'blue', 'yellow', 'black'];

colors.reverse();

console.log('Colors:', colors);

// toReversed
// What it does: nothing
// What it returns: a new array with reversed positions

const animals = ['cat', 'dog','fish','bird','elephant'];

const animalsRev = animals.toReversed();

console.log('Animals:', animals);

console.log('Animals reversed:', animalsRev);

// sort
// What it does: sorts the array
// What it returns: the same array but sorted

const numbers = [1 ,9, 7 ,5 ,4 ,6 ,2 ,3, 8]

numbers.sort((a,b) => a - b);

console.log('Numbers:', numbers);

// toSorted
// What it does: nothing
// what it returns: copied array but sorted

const sortedNumbers = numbers.toSorted();

console.log('Sorted numbers:', sortedNumbers);

// find
// what it does: nothing
// what it returns: finds the first element that validates the task or returns undefined

const names = ['Josh','Bob','Dave','Alice','David'];

const foundName = names.find(name => name[0] === 'D');

console.log('Found name:', foundName);

// some
// what it does : nothing
// what it returns: true/false or at least one element that validates the task

const hasDavid = names.some(name => name === 'David');

console.log('We have David:', hasDavid);

console.clear();

const catsAndOwners = [
  { cat: 'Fluffy', owner: 'David', color: 'white'},
  { cat: 'Garfield', owner: 'Dave', color: 'orange'},
  { cat: 'Loki', owner: 'Sun', color: 'black'},
  { cat: 'Tom', owner: 'Eve', color: 'grey'},
  { cat: 'Jerry', owner: 'Astrid', color: 'grey'},
  { cat: 'Sylvester', owner: 'Freya', color: 'black'},
];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.

catsAndOwners.forEach(catAndOwner => console.log(catAndOwner.owner));

const owners = catsAndOwners.map(cat => cat.owner);

console.log('Owners:', owners);

// 2. 

const greyCats = catsAndOwners.filter(cat => cat.color === 'grey');

console.log('Grey cats:', greyCats);

// 3.



// add to all cat age: from 1 to 18 using rand and map

const allCatsAge = catsAndOwners.map(cat => ({
  ...cat,
  age: rand(1, 18)
}));

console.log('Cats Age:',allCatsAge);

// 4. plus age by 1 year

const allCatsAgePlusOneYear = allCatsAge.map(cat => ({
  ...cat,
  age: cat.age + 1
}));

console.log('Cats Age Plus One Year:',allCatsAgePlusOneYear);

// 5. toSorted all cats by their age from youngest to eldest

const allCatsAgeSorted = allCatsAgePlusOneYear.toSorted((a, b) => a.age - b.age);

console.log('Cats Age Sorted:', allCatsAgeSorted);


