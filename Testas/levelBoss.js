function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// // 1.

// function rollDice() {
//   return rand(1, 6);
// }

// function playGame() {

//   let kauliukas1 = rollDice();
//   let kauliukas2 = rollDice();

//   let sum = kauliukas1 + kauliukas2;

//   if (sum > 8) {
//     return "Laimejai! ";
//   } else {
//     return "Pralosiai! ";
//   }
// }

// let gameResult = playGame();
// console.log(gameResult);

// let kauliukas1 = rollDice();
// let kauliukas2 = rollDice();
// console.log("Kauliukas 1: " + kauliukas1 + ", Kauliukas 2: " + kauliukas2);

// // 2.

// let pilkis = rand(3, 6);
// let murklys = rand(3, 6);


// console.log("Pilkis sveria: " + pilkis + " kg");
// console.log("Murklys sveria: " + murklys + " kg");


// if (pilkis < murklys) {
//   console.log("Lengvesnis katinukas yra Pilkis.");
// } else if (murklys < pilkis) {
//   console.log("Lengvesnis katinukas yra Murklys.");
// } else {
//   console.log("Katinukų svoriai vienodi.");
// }

// // 3.

// let katinukuSkaicius = rand(0, 30);
// let karviuSkaicius = rand(0, 30);

// console.log("Katinukų skaičius: " + katinukuSkaicius);
// console.log("Karvių skaičius: " + karviuSkaicius);

// if (katinukuSkaicius <= 15 && karviuSkaicius <= 15) {
//   console.log("Telpa");
// } else {
//   console.log("Netelpa");
// }

// // 4.

// let rezultatas = rand(1, 6);


// if (rezultatas === 1 || rezultatas === 5) {
//   console.log("Pirkti televizorių.");
// } else if (rezultatas === 3 || rezultatas === 4) {
//   console.log("Pirkti skalbimo mašiną.");
// } else if (rezultatas === 2 || rezultatas === 6) {
//   console.log("Pirkti šaldytuvą.");
// }


// 5.

let skaicius1 = rand(1, 7);
let skaicius2 = rand(1, 7);
let skaicius3 = rand(1, 7);

let skaiciai = [skaicius1, skaicius2, skaicius3];
skaiciai.sort(function (a, b) {
  return a - b;
});
console.log('Min, Max:' + skaiciai);


let min = rand(1, 7);
let mid = rand(1, 7);
let max = rand(1, 7);

console.log(min, mid, max);

console.log('' + Math.min(min, mid, max) + (min + mid + max - Math.min(min, mid, max) - Math.max(min, mid, max)) + Math.max(min, mid, max));

// for (let i = 0; i < 3; i++) {
//   let skaicius = rand(1, 7);
//   if (skaicius < min) {
//     min = skaicius;
//     mid = max;
//     max = skaicius;
//   } else if (skaicius > max) {
//     mid = max;
//     max = skaicius;
//   } else {
//     mid = skaicius;
//   }
// }

// console.log('Skaičiai nuo mažiausio iki didžiausio:' + min + ',' + mid + ',' + max);


if (min > mid) {
  let temp = min;
  min = mid;
  mid = temp;
}

if (min > max) {

  let temp = min;
  min = max;
  max = temp;
}

if (mid > max) {

  let temp = mid;
  mid = max;
  max = temp;
}

console.log('Min-Mid-Max:' + min + ',' + mid + ',' + max);

if (mid >= min && mid <= max) {
  console.log(min, mid, max);
} else if (mid <= min && mid >= max) {
  console.log(max, mid, min);
} else if (min >= max && min <= mid) {
  console.log(max, min, mid);
} else if (min <= max && min > - mid) {
  console.log(mid, min, max);
} else if (max >= min && max <= mid) {
  console.log(min, max, mid);
} else if (max <= min && max >= mid) {
  console.log(mid, max, min);
} else {
  console.log('error');
}

