const animals = ['cat','dog' , 'elephant', 'horse', 'rabbit'];

// 1. make a function that counts how many elements are in array

// function count(animals) {
//   return animals.length;
// };

const count = animals => animals.length;

const result1 = count(animals);

console.log('Elements in array:',result1);

// 2. Write a function that returns first element

const firstAnimal = animals => animals[0];

const result2 = firstAnimal(animals);

console.log('First element:',result2);

// 3. Write a function that returns the last element

const lastAnimal = animals => animals[animals.length - 1];

const result3 = lastAnimal(animals);

console.log('Last element:',result3);

// 4. Write a function that returns the middle element

const middleAnimal = animals => animals[Math.floor(animals.length / 2)];

const result4 = middleAnimal(animals);

console.log('Middle element:',result4);

// 5. Write a function that takes a string and returns  string length

const str = 'racoon';

const stringLength = str => str.length;

const result5 = stringLength(str);

console.log('String length:',result5);

// 6. Write a function that takes an array and counts how many letters there is in the array

const countLetters = animals => {
  let count = 0;
  for (let i = 0; i < animals.length; i++) {
    count += animals[i].length;
  }
  return count;
};

const result6 = countLetters(animals);

console.log('Number of letters:',result6);

console.clear();

// for (let i = 0; i <animals.length; i++) {
//   console.log(animals[i]);
// }

// for off is easier to read 

for (const animal of animals) {
  console.log(animal);
}

console.clear();


// for in is good for when the objects are not aligned neatly 

for (const index in animals) {
  console.log(animals[index]);
}

console.clear();

const houses = {
  house1: 'red',
  bigHouse: 'blue',
  house2: 'green'
};

for (const house in houses) {
  console.log('Houses:',houses[house]);
}

console.clear();

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const niceCalck = (action, a, b) => {
    const r = action(a, b)
    console.log('%c' + r, 'color: skyblue; font-size: 25px; background-color: crimson; padding: 10px; border-radius: 10px;');
}

// niceCalck(mult, 5, 3);

animals.forEach((text, i) => console.log(i, text));

// 7. print first animals letters using forEach method
  animals.forEach(animal => console.log(animal[0]));

  // 8. Using forEach method count all the letters in animals

  let count1 = 0;
  animals.forEach(animal => {
    count1 += animal.length;
  });
  console.log('Number of letters:',count1);

  // 9. Print animals which letter length is greater than 4 using forEach method

  animals.forEach(animal => {
    if (animal.length > 4) {
      console.log(animal);
    }
  });



