animals = ['cat', 'dog', 'elephant', 'bee', 'ant', 'whale', 'lion', 'tiger', 'bear', 'snake', 'shark', 'penguin', 'parrot', 'pigeon', 'eagle', 'sparrow', 'owl', 'seagull', 'woodpecker', 'flamingo', 'peacock', 'swan', 'duck', 'goose', 'pelican', 'stork', 'crane', 'heron', 'robin', 'nightingale', 'crow', 'raven', 'magpie', 'chickadee'];

// Do : For each goes through every element
// Returns: nothing

animals.forEach(animal => {
  console.log(animal)
});

// map ([m]ap and [M]ap are different categories)
// Do: goes trough every array element
// Returns: a new array with changed elements

console.clear();

// const newAnimals = animals.map(animal => animal.toUpperCase());

// console.log(newAnimals);

// const person = {
//   name: 'Aivaras',
//   age: 25,
//   occupation: 'Software Engineer'
// }

// const sing = () => console.log('la la la');

// person.hobbies = sing;

// person.hobbies();

// console.log(person);

// 1. 

// const smallAnimals = animals.map(animal => animal.length > 5 ? 'big' : animal);

// const smallAnimals = animals.map(animal => {
//   if (animal.length > 5) {
//     return 'BIG';
//   }
//   return animal;
// });

// console.log(smallAnimals);

// 2.

const bigAnimals = animals.map(animal => {
  if (animal.length == 3) {
    return animal + '******'
  }
  return animal;
})

console.log(bigAnimals);

const filteredAnimals = animals.filter(animal => true);

console.log(filteredAnimals);

// leave only animals that start with letter s

const startsWithS = animals.filter(animal => animal.startsWith('s'));

console.log(startsWithS);

// 3.

const TigerOut = animals.filter(animal => animal !=='tiger');

console.log(TigerOut);

const withNumbers = animals.map((animal, i) => `${i + 1}. ${animal}`);

console.log(withNumbers);

console.clear();

const animalsWithOddIndex = withNumbers.filter((_, i) => i % 2 == 1);

console.log(animalsWithOddIndex);

// sort
// what it does: sorts arrays elements
// what it returns: it returns the same array thats sorted

animals.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
})

console.log(animals);

console.clear();

const digits = [1,5,7,2,9,2,4,6,8];

digits.sort((a,b) => b - a );

console.log(digits);

// 5.

animals.sort((a, b) => b.length - a.length);

console.log(animals);

console.clear();

// sort  the animals name in alphabetical order by their second letter

animals.sort((a,b) => a[1].localeCompare(b[1]));
// animals.sort((a, b) => {
//   if (a[1] > b[1]) {
//     return 1;
//   }
//   if (a[1] < b[1]) {
//     return -1;
//   }
//   return 0;
// });

console.log(animals);


