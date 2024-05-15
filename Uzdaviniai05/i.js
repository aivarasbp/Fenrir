const arr = [];

arr.push('blabla');
arr.push('rabbit');
arr.push('racoon');

console.log(arr);

const map = new Map();

map.set('b', 'blabla');

map.set('rabb', 'rabbit');

map.set(101, 'racoon');

// map.delete('rabb');

console.log(map, map.get(101), map.has('b'), map.size);

map.forEach((v, i) => console.log(v, i));

const arrFromMap = [...map];

console.log(arrFromMap);

const map2 = new Map(arrFromMap);

console.log(map2);

const set = new Set();

set.add('blabla');
set.add('rabbit');
set.add('racoon');

set.add('rabbit');

set.has('rabbit');

console.log(set, set.has('rabbit'));