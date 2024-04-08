const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1.

bitGirls.unshift('Nausėdą');

// 2. 

function getRandomWeight() {
  let randomNum = rand(0, 1);
  return randomNum === 0 ? 'normalus' : 'storas';
}

let bitCats = [
{name: 'Murka', weight: getRandomWeight() },
{name: 'Rainius', weight: getRandomWeight() },
{name: 'Meilutė', weight: getRandomWeight() },
{name: 'Bosas', weight: getRandomWeight() },
{name: 'Dičkis', weight: getRandomWeight() },
];

// 3.

let fatCats = 0;
let normalCats = 0;

for (let i = 0; i < bitCats.length; i++) {
  if (bitCats[i].weight === 'normalus') {
    normalCats++;
  } else {
    fatCats++;
  }
}

console.log('Fat cats:',fatCats,'Normal cats:', normalCats);
// 4.

bitCats.sort((cat1, cat2) => {
  let secondLetter1 = cat1.name[1].toLowerCase();
  let secondLetter2 = cat2.name[1].toLowerCase();

  if (secondLetter1 < secondLetter2) {
    return -1;
  }
  if (secondLetter1 > secondLetter2) {
    return 1;
  }
  return 0;
});

// 5.

const racoon = 'Racoon';

let happyCats = [];

for (let i = 0; i < bitGirls.length; i++) {
  if (bitGirls[i] === 'Nausėdą') {
    happyCats.push(bitGirls[i] + ': ' + racoon);
  } else {
    happyCats.push(bitGirls[i] + ': ' + cats[i - 1]);
  }
}







