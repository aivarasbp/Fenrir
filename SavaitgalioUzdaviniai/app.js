// A.

const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

// 1. Find the greatest number using array forEach method

let greatestNumber = null;

A.forEach(element => {
  if (element > greatestNumber) {
    greatestNumber = element;
  }
  return element;
});

console.log('The Greatest number is:',greatestNumber);

// 2. Find the smallest number using array forEach method

let smallestNumber = null;

A.forEach(element => {
  if (element < smallestNumber) {
    smallestNumber = element;
  }
  return element;
})

console.log('The Smallest number is:',smallestNumber);

// 3. Find the greatest negative number using array forEach method

let greatestNegativeNumber = null;

A.forEach(number => {
    if (number < 0 && (greatestNegativeNumber === null || number > greatestNegativeNumber)) {
        greatestNegativeNumber = number;
    }
});

console.log("The Greatest Negative number is:", greatestNegativeNumber);

// 4. Find the greatest number thats lower than 50

let greatestNumberBelow50 = null;

A.forEach(number => {
  if (number < 50 && (greatestNumberBelow50 === null || number > greatestNumberBelow50)) {
      greatestNumberBelow50 = number;
  }
});

console.log("The Greatest number Below 50 is:", greatestNumberBelow50);

// 5. Find positive number sum

let positiveSum = 0;

A.forEach(number => {
  if (number > 0) {
    positiveSum += number;
  }
});

console.log("The Positive Sum is:", positiveSum);

// 6. Find the negative number sum and square the result

let negativeSum = 0;

A.forEach(number => {
  if (number < 0) {
    negativeSum += number;
  }
});

const squaredResult = negativeSum * negativeSum;

console.log("The sum of negative numbers squared is:", squaredResult);

// 7. Count how many numbers goes to interval 25-75

let count = 0;

A.forEach(number => {
  if (number >= 25 && number <= 75) {
    count++;
  }
  return number;
});

console.log("The number of numbers between 25 and 75 is:", count);

// 8. Count how many numbers are 0

let count0 = 0;

A.forEach(number => {
  if (number === 0) {
    count0++;
  }
  return number;
});

console.log("The number of 0 is:", count0);


// 9.Count how many numbers divides by 3 without remainder

let count3 = 0;

A.forEach(number => {
  if (number % 3 === 0) {
    count3++;
  }
  return number;
});

console.log("The number of numbers that divide by 3 without remainder is:", count3);

// 10. Count the average of negative numbers

let average = 0;

A.forEach(number => {
  if (number < 0) {
    average += number;
  }
  return number;
}); 

console.log("The average of negative numbers is:", average / A.length);


// B.

const B = [
  'the quick brown fox',
  'jumps over the lazy dog',
  'a bird in the hand',
  'is worth two in the bush',
  'an apple a day',
  'keeps the doctor away',
  'actions speak louder than words',
  'all good things must come to an end',
  'beauty is in the eye of the beholder',
  'better late than never',
  'birds of a feather flock together',
  'cleanliness is next to godliness',
  'dont bite the hand that feeds you',
  'dont count your chickens before they hatch',
  'dont put all your eggs in 1 basket',
  'every cloud has a silver lining',
  'every dog has its day',
  'every rose has its thorn',
  'fortune favors the bold',
  'good things come to those who wait',
  'a watched pot never boils',
  'haste makes waste',
  'history repeats itself',
  'cat got your tongue',
  'home is where the heart is',
  'if the shoe fits, wear it',
  'ignorance is bliss',
  'it takes two to tango',
  'arabs have 100 words for sand',
  'kill two birds with one stone',
  'laughter is the best medicine',
  'love is blind',
  'money doesnt grow on trees',
  'no pain no gain',
  'nothing ventured nothing gained',
  'once bitten twice shy',
  'practice makes perfect',
  'the early bird catches the worm',
  'the grass is always greener on the other side',
  'the pen is mightier than 10 swords',
  'theres no smoke without fire',
  'time heals all wounds',
  '5 second rule',
  'every dog has its day',
  'to err is human to forgive divine',
  '2 wrongs dont make a right',
  'when in Rome do as the Romans do',
  'where theres smoke, theres fire',
  'you cant judge a book by its cover',
  'you cant make an omelette without breaking eggs',
  'you reap what you sow',
  'youre never too old to learn'
];


// 1. Find longest string in B 

let longestString= '';

B.forEach(string => {
  if (string.length > longestString.length) {
    longestString = string;
  }
  return string;
})

console.log('The longest string in B is:', longestString);

// 2. Find the shortest string in B

let shortestString = '';

B.forEach(string => {
  if (string.length < shortestString.length) {
    shortestString = string;
  }
  return string;
})

console.log('The shortest string in B is:', shortestString);

// 3. Find a string that has the most words in it

let mostWords = '';

B.forEach(string => {
  if (string.split(' ').length > mostWords.split(' ').length) {
    mostWords = string;
  }
  return string;
})

console.log('The string with the most words in it is:', mostWords);

// 4. Find a string that starts with a

let startsWithA = '';

B.forEach(string => {
  if (string.startsWith('a')) {
    startsWithA = string;
  }
  return string;
})

console.log('The string that starts with a is:', startsWithA);

//5. Find a string that has the least of words in it

let leastWords = '';

B.forEach(string => {
  if (string.split(' ').length < leastWords.split(' ').length) {
    leastWords = string;
  }
  return string;
})

console.log('The string with the least words in it is:', leastWords);

// 6. Count how many strings have 4 words or more in it

let count4 = 0;

B.forEach(string => {
  if (string.split(' ').length >= 4) {
    count4++;
  }
  return string;
})

console.log('The number of strings that have 4 words or more in it is:', count4);

// 7. Count how many words there are in B

let countWords = 0;

B.forEach(string => {
  countWords += string.split(' ').length;
  return string;
})

console.log('The number of words in B is:', countWords);

// 8. Count all s letters in B 



let countS = 0;

B.forEach(string => {
  if (string.includes('s')) {
    countS++;
  }
  return string;
})

console.log('The number of s letters in B is:', countS);

// 9. Find which are more strings or numbers

let moreStrings = '';

B.forEach(string => {
  if (string.length > moreStrings.length) {
    moreStrings = string;
  }
  return string;
})

console.log('The string with the most characters in it is:', moreStrings);

// 10. Find which are more true or false

let moreTrue = '';

B.forEach(string => {
  if (string === 'true') {
    moreTrue = string;
  }
  return string;
})

console.log('The string with the most true in it is:', moreTrue);

// C.

const C = [94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false', 'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year', 'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76, [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house', 'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73, '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27, 'friend', 'moon', '26', 'science', 74];

// 1.

let largestArray = 0;

C.forEach(number => {
  if (number > largestArray) {
    largestArray = number;
  }
  return number;
});

console.log('The largest number in C is:', largestArray);

// 2.

let shortestStringC = null;

C.forEach(element => {
    if (typeof element === 'string') {
        if (!shortestStringC || element.length < shortestStringC.length) {
            shortestStringC = element;
        }
    }
});

if (shortestStringC) {
    console.log("Shortest string in the array:", shortestStringC);
} else {
    console.log("No string found in the array");
}

// 3.

let zeroNumbers = [];

C.forEach(element => {
  if (typeof element === 'number' && element === 0) {
    zeroNumbers.push(element);
  }
});

console.log('Zeros in the C array are:', zeroNumbers)

// 4.

let positiveNumbers = [];

C.forEach(element => {
  if (typeof element === 'number' && element > 0) {
    positiveNumbers.push(element);
  }
});

console.log('Positive numbers in the C array are:', positiveNumbers)

// 5.

let allStringLength = [];

let totalStringLength = 0;

C.forEach(function(element) {
    if (typeof element === 'string') {
        totalStringLength += element.length;
    }
});

console.log("String length:", totalStringLength);

// 6. 

let averageStringLength = totalStringLength / C.length;

console.log("Average string length:", averageStringLength);

// 7.

// Object to store the count of each type
const typeCount = {};

// Iterate through the array
C.forEach(item => {
    // Get the type of the current item
    const type = typeof item;

    // Increment the count for this type
    if (typeCount[type]) {
        typeCount[type]++;
    } else {
        typeCount[type] = 1;
    }
});

// Output the count of each type
console.log("Count of each type:", typeCount);

// 8.

// Inicializuojame bendrą sumą
let lumpSum = 0;

// Iteruojame per masyvą
C.forEach(item => {
    // Jei elementas yra skaičius, pridedame jį prie bendros sumos
    if (!isNaN(item)) {
        lumpSum += Number(item);
    }
});

// Išvedame bendrą sumą
console.log("Lump Sum:", lumpSum);

// 9.

let skaiciuSkaicius = 0;
let stringuSkaicius = 0;

// Iteruojame per masyvą ir skaičiuojame skaičių ir stringų skaičių
C.forEach(item => {
    if (typeof item === 'number' && !isNaN(item)) {
        skaiciuSkaicius++;
    } else if (typeof item === 'string') {
        stringuSkaicius++;
    }
});

// Išvedame rezultatus
if (skaiciuSkaicius > stringuSkaicius) {
    console.log("Daugiau skaičių nei stringų.");
} else if (stringuSkaicius > skaiciuSkaicius) {
    console.log("Daugiau stringų nei skaičių.");
} else {
    console.log("Lygiai tiek skaičių ir stringų.");
}

// 10.

// Kintamieji true ir false skaičiui saugoti
let trueSkaicius = 0;
let falseSkaicius = 0;

// Iteruojame per masyvą ir skaičiuojame true ir false skaičių
C.forEach(item => {
    if (item === true) {
        trueSkaicius++;
    } else if (item === false) {
        falseSkaicius++;
    }
});

// Išvedame rezultatus
if (trueSkaicius > falseSkaicius) {
    console.log("Daugiau true nei false.");
} else if (falseSkaicius > trueSkaicius) {
    console.log("Daugiau false nei true.");
} else {
    console.log("Lygiai tiek true ir false.");
}


// D.

const D = [[95,78,38],[55,35],[61,0,16],[36,32,16],[64],[94],[80,10,80],[75,80],[41],[91,77],[93,73,77,65],[26,25,17],[19,52,42,11],[35,18,82],[31,1],[3,52,70,84],[98],[90,0],[94,58],[80],[17,0,3],[65],[99,54,33,24],[86,6],[55,47],[63],[41,56],[97,69],[11],[41,53],[19,89],[48,54,54,63],[33,55,60,54],[28,28,74,44],[60],[5,52],[80,92,31,30,22],[24],[95,4,23],[38,7,61],[53,99,22],[23,34]];


// 1.

let largestNumberD = [];

D.forEach(number => {
  if (number.length > largestNumberD) {
    largestNumberD = number;
  }
  return number;
});

console.log('The largest number in D is:', largestNumberD);

// 2.

// let longerThan5 = [];

// D.forEach(element => {
//   if (element.length >= 5) {
//     longerThan5.push(element);
//   }
//   return element;
// });

const longerThan5 = D.filter(element => element.length >= 5);

// 3.



console.log('The longer than 5 is:', longerThan5);
// E. 

const E = [
  ['time', 'love', 'government'],
  ['year'],
  ['time', 'friend', 'child', 'money'],
  ['air'],
  ['world', 'music'],
  ['phone', 'job', 'hope', 'car'],
  ['day'],
  ['house', 'thing', 'future'],
  ['family', 'man', 'life', 'life'],
  ['way', 'moon', 'history', 'tree'],
  ['cat', 'book', 'science', 'internet'],
  ['food', 'people', 'art', 'country'],
  ['internet', 'friend', 'house', 'job'],
  ['money', 'government', 'antiquity', 'time'],
  ['love', 'cat', 'family', 'friend'],
  ['future', 'year', 'time', 'life'],
  ['sun'],
  ['school'],
  ['health', 'mountain'],
  ['city'],
  ['water', 'star'],
  ['flower', 'earth', 'fire'],
  ['star'],
  ['river', 'art', 'fire'],
  ['woman', 'earth', 'flower', 'computer'],
  ['water', 'technology', 'dream']
];


// 1.

