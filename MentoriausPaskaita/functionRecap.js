const naming = () => {
  console.log('Name');
}

naming();

function add(a, b) {
  return a + b;
}

console.log(add(4, 5));

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(5));

const name = 'Aivaras';

function greeting(name) {
  return console.log(`Hello, ${name}!`);
}

greeting(name);

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(5));

function getMaxNumber(numbersFromArr) {
  return Math.max(...numbersFromArr);
}

console.log(getMaxNumber([1, 2, 3, 4, 5]));

function getUnique(array) {
  return [...new Set(array)]
}
const unique = getUnique([1, 1, 1, 2, 2, 30, 2, 15, 1, 14, 14, 20]);
console.log(unique);

const arr = [1, 1, 1, 2, 2, 30, 2, 15, 1, 14, 14, 20];

function squareValues(arr) {
  return arr.map(value => value * value);
}

console.log(squareValues(arr));

function sumAllElements() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let result = sumAllElements(1, 15, 4);

console.log(result);

const string = 'hello';

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
};