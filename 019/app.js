// const m1 = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// const m2 = m1; // same array just different name

// console.log('m1 === m2', m1 === m2);

// m2[0][0] = 1000;

// const m3 = [...m1]; // shallow copy

// console.log('m1 === m3', m1 === m3);

// m3[0][1] = 2000;

// m4 = structuredClone(m1); //deep copy

// console.log('m1 === m4', m1 === m4);

// m4[0][2] = 3000;

// console.table(m1);

// console.clear();

//1.

// const person = {
//   name: 'John',
//   sureName: 'Doe',
//   age: 27
// }

// console.log(person);

//2.

// person.age += 5;

// console.log(person);

//3.
// const person1 = {
// name: 'Briedis',
// surname: 'Miškinius',
// age: 15
// };

// const person2 = {
// name: 'Vilkas',
// surname: 'Miškinius',
// age: 53
// };

// const person3 = {
// name: 'Lapė',
// surname: 'Miškinius',
// age: 34
// };

// const people = [person1, person2, person3];

// for (let i = 0; i < people.length; i++) {
//   people[i].age += 5;
// }

// console.table(people);

// count the age average and print it in console

// let average = 0;

// for (let i = 0; i < people.length; i++) {
//   average += people[i].age;
// }

// average = average / people.length;

// console.log('Average age: ' + average);


function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//5.

  // const letters = ['A', 'B'];
  // console.log(letters[rand(0,1)]);

  //6.

// let number = rand(0,4)

// if (number > 2) {
//   console.log('Greater than 2:', number);
// } else {
//   console.log('Less than 2:', number);
// }


// 7.

  // let oldestPerson = people[0];
  
  // for (let i = 0; i < people.length; i++) {
  //   if (people[i].age > oldestPerson.age) {
  //     oldestPerson = people[i];
  //   }
  // }
  // console.log('Old fart:', oldestPerson.name);

  // 8.

  // const person4 = {
  //   name: 'John',
  //   sureName: 'Doe',
  //   age: 27
  // }
  
  // people.unshift(person4);
  
  // console.log(people);


  const colors = ['crimson', 'gold', 'pink', 'purple', 'skyblue', 'orange'];

  // make an array eggs with 10 elements which are random colors
  const eggs = [];
  
  for (let i = 0; i < 10; i++) {
    eggs.push(colors[rand(0, colors.length - 1)]);
  }
  
  console.table(eggs);
