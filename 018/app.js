function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const array =  [5, 5 , 5, 5];

const result = array.push(6);

console.log('push:',array, result);

//1. do: add new element to arrays end
//2. return: array length

const result2 = array.splice(2, 1, 77);

//1. do: deletes one element from array thats displayed index
//2. return: deletes elements from array and puts into new array and returns it

console.log('splice:',array, result2);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const result3 = animals.slice(2);

//1. do: nothing changes
//2. return: new array, which is cut from old array from displayed index and length

console.log('slice', result3, animals);

const array1 = ['a', 'b', 'c'];
const array2 = ['d','e','f'];
const array3 = array.concat(array2);

//1. do: nothing changes
//2. return: new array, which is made from two arrays

console.log('concat',array1,array2,array3);

const array4 = [1,2,3,4];

const result4 = array4.fill('A',2);

//result4[1] = 'B';

console.log('fill:',result4, array4);

//1. do: changes all arrays elements to displayed value
//2. return: same array

const elements = ['Fire', 'Air', 'Water'];

const r5 = elements.join('***');

console.log(r5, elements);

//1. do: nothing changes

//2. return: string which is made of array elements separated by displayed value

const r6 =  r5.split('***');

console.log(r5, r6);

const fairyTail = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.';

const r7 = fairyTail.split(' ');

console.log(r7, fairyTail);

const md1 = [
  [1, 2, 3],
  [4, 5,['a','b'], 6],
  [7, 8, 9]
];

console.log(md1);

// console.log(md1[2][2]);

for (let i = 0;  i < md1.length; i++) {
  for (let j = 0; j < md1[i].length; j++) {
    if (Array.isArray(md1[i][j])) {
      for (let k = 0; k < md1[i][j].length; k++) {
        console.log(md1[i][j][k]);
      }
    } else {
      console.log(md1[i][j]);
    }
  }
}

const animals2 = [
  ['ant', 'bison', 'camel'],
  ['duck', 'elephant'],
  ['fish', 'fox', 'giraffe'],
  ['horse','monkey','mouse'],
  ['rabbit', 'rat', 'rhino'],
  ['sheep','snake','squirrel'],
];

//1. print all animals 

// for (let i = 0; i < animals2.length; i++) {
//   for (let j =  0; j < animals2[i].length; j++) {
//     console.log(animals2[i][j]);
//   }
// }

//2. change duck to dog

for (let i = 0; i < animals2.length; i++) {
  for (let j = 0; j < animals2[i].length; j++) {
    if (animals2[i][j] === 'duck') {
      animals2[i][j] = 'was duck but now dog';
    }
    console.log(animals2[i][j]);
  }
}

console.clear();

const newMD = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j <4; j++) {
    row.push(i * 4 + j + 1);
  }
  newMD.push(row);
}

console.log(newMD);

// 3. create new array 5x4 which values are random numbers two numbers only

const newArray = [];

for (let i = 0; i < 5; i++) {
  const row = [];
  for (let j = 0; j < 4; j++) {
    row.push(rand(10, 99));
  }
  newArray.push(row);
}

//4. find the lowest number and print it


// Finding the smallest number in the 2D array
// let smallestNumber = newArray[0][0]; // Initialize with the first element
// for (let i = 0; i < newArray.length; i++) {
//   for (let j = 0; j < newArray[i].length; j++) {
//     if (newArray[i][j] < smallestNumber) {
//       smallestNumber = newArray[i][j];
//     }
//   }
// }

// let min2 = newMD2[0][0];

// for(let i = 0; i < newMD2.length; i++) {
//   for (let j = 0; j < newMD2[i].length; j++ {
//     if (newMD2[i][j]) < min ) {
//       min2 = newMD2[i][j];
//     }
//   }
// }

const r10 = newMD2.flat();

const min = Math.min(...newMD2.flat());

console.log(min);


console.log("smallest number: " + smallestNumber);

// const min = Math.min(...smallestNumber.flat());

// console.log(min);
