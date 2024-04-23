function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const regex = /\d+/gm;

// const obj = {
//   smartAnimal32: 'Fox',
//   funnyAnimal88: 'Racoon',
//   bigAnimal105: 'Wolf'
// }

// for (const a in obj) {
//   const found = a.match(regex);

//   console.log(obj[a], found[0]);
// }

// const i1 = document.querySelector('.i1');

// const button = document.querySelector('button');

// button.addEventListener('click', () => {

//   const v = i1.value;

//   console.log('click', v);
// });

const a1 = document.querySelector('.a1');

const a2 = document.querySelector('.a2');

const btn = document.querySelectorAll('button')[1];

btn.addEventListener('click', () => {

  const v1 = parseFloat(a1.value);
  const v2 = parseFloat(a2.value);

  a1.style.borderColor = 'black';
  a2.style.borderColor = 'black';

  if (isNaN(v1) || isNaN(v2)) {
    console.log('Please enter a number, letters are not allowed');
    if (isNaN(v1)) {
      a1.style.borderColor = 'crimson';
    }
    if (isNaN(v2)) {
      a2.style.borderColor = 'crimson';
    }
  } else {
    const result = v1 + v2;
    console.log(result);
  }


});

// const parent = document.querySelector('.parent');

// parent.addEventListener('click', (event) => {
//   const target = event.target;

//   if (target.classList.contains('parent')) {
//     target.style.backgroundColor = 'crimson';
//   } else if (target.classList.contains('child')) {
//     target.style.backgroundColor = 'skyblue';
//   }
// });

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// parent.addEventListener('click', () => {
//   parent.style.backgroundColor = 'crimson';
// });

// child.addEventListener('click', () => {

//   event.stopPropagation();

//   child.style.backgroundColor = 'skyblue';
// });


let isColorChanged = false;

parent.addEventListener('click', function () {
  if (isColorChanged) {
    parent.style.backgroundColor = 'lightblue';
  } else {
    parent.style.backgroundColor = 'crimson';
  }

  isColorChanged = !isColorChanged;
});

child.addEventListener('click', function () {
  if (isColorChanged) {
    child.style.backgroundColor = 'orange';
  } else {
    child.style.backgroundColor = 'yellow';
  }

  isColorChanged = !isColorChanged;
});

