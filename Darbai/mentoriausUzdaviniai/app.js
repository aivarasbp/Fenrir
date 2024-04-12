// 1.
const name = 'Ryan'

const lastName = 'Reynolds'

console.log(name + ' ' + lastName)

// 2.

let birthdayDay = 1976;
let todaysDate = 2024;

let age = todaysDate - birthdayDay;

console.log("My name " + name + " " + lastName + ". I'm " + age + " old.");

// 3.

let last3Letters = name.slice(-3) + ' ' + lastName.slice(-3);

console.log(last3Letters);

// 4.

const  tale = 'Once upon a time in hollywood'

let modifiedTale = '';

const letters = tale.split('');

letters.forEach((letter) => {
  if (letter === 'o') {
    modifiedTale += '*';
  } modifiedTale += letter;
});

console.log(modifiedTale);