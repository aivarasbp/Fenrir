function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let one = rand(0, 4);
let two = rand(0, 4);

console.log(one, two);

let result;

if (one > two) {
  result = one / two;
} else if (one == 0 || two == 0) {
  result = 'Cannot be divided by zero';
} else {
  result = two / one;
}

console.log(result);

if (4 > 3) {
  console.log('the number is greater than 3');
} else {
  console.log('the number is less than 3');
}

console.log(Math.PI);

console.log(Math.ceil(45.1));
console.log(Math.floor(45.6));
console.log(Math.min(45, 3, 5, 7, 8));

let str = 'Barsukas';

console.log(str.length);

console.log(str[0] + str[1]);

let fairyTale = 'once upon a time, in a faraway forest';

console.log(fairyTale.includes(''));

console.log(fairyTale.indexOf('once'));

let shortString = 'abc';

console.log(shortString.padEnd(9, 'ourage'));

let shortFairyTale = fairyTale.slice(2);

console.log(shortFairyTale);

console.log('ABC'.charCodeAt(2));

let v;

if (0) {
  v = 'Jo'
} else {
  v = 'Ne'
}

console.log(v);

let vv = 1 ? 'Jo' : 'Ne';

console.log(vv);

let A = 5;
let aRez;

if (A > 0) {
  console.log('Teigiamas')
} else if (A < 0) {
  aRez = 'Neigiamas';
} else {
  aRez = 'Nulis';
}

console.log(aRez);

let aRez2 = (A > 0) ? 'Teigiamas' : (A < 0) ? 'Neigiamas' : 'Nulis';

console.log(aRez2);

let z1 = 5;
let z2 = 8;

let zasys = z1 + 'zasys su ' + z2 + ' zasyciais';

console.log(zasys);