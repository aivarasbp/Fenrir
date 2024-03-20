function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// for (let i = 1; i <= 10; i++) {

//   let random = rand(0, 7)

//   console.log('rolling:', i, 'result:', random);

//   if (random === 2) {
//     break;
//   }
// }

// let count = 0;
// let number = 0;

// do {
//   number = rand(0, 7);
//   count++;
//   console.log('rolling:', count, 'result:', number);

// } while (count === 10 || number === 2);
// while (count !== 10 && number !== 2);

// for (let i = 1; i <= 10; i++) {
//   let random = rand(0, 7)

//   console.log('rolling:', i, 'result:', random);

//   if (random !== 2) {
//     continue;
//   }

//   console.log('take');
// }

for (let i = 1; i <= 3; i++) {
  console.log('BIG:', i);

  for (let i = 1; i <= 3; i++) {
    console.log('SMALL:', i);

    if (i === 2) {
      break;
    }
  }
}