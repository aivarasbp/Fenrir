function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

console.log(a, b, c);

let arGaunasi = a + b > c && a + c > b && b + c > a;

console.log(arGaunasi ? 'Gaunasi' : 'Nesigauna');

let arGaunasi2 = (a + b + c) / Math.max(a, b, c) > 2;

console.log(arGaunasi2 ? 'Gaunasi' : 'Nesigauna');

let A = rand(0, 2);

let B = rand(0, 2);

let C = rand(0, 2);

let D = rand(0, 2);

console.log(A, B, C, D);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

if (A === 0) {
  dvejetai++;
}

if (B === 0) {
  dvejetai++;
}

if (C === 0) {
  dvejetai++;
}

if (D === 0) {
  dvejetai++;
}

let suma = A + B + C + D;

vienetai = suma - dvejetai * 2;

nuliai = 4 - vienetai - dvejetai;

console.log('Nuliu', nuliai);
console.log('Vienetai', vienetai);
console.log('Dvejetai', dvejetai);