// const animal1 = 'Duck';
// const animal2 = 200;
// const animal3 = {
//   a: 'Duck',
//   w: 200
// };

// const zoo = document.querySelector('.zoo');

// zoo.dataset.a1 = animal1;
// zoo.dataset.a2 = animal2;
// zoo.dataset.a3 = JSON.stringify(animal3);

// const readAnimal1 = zoo.dataset.a1;
// const readAnimal2 = zoo.dataset.a2;
// const readAnimal3 = zoo.dataset.a3;

// console.log(readAnimal1, typeof readAnimal1);
// console.log(readAnimal2, typeof readAnimal2);
// console.log(JSON.parse(readAnimal3), typeof readAnimal3);

// const h1 = document.querySelector('h1');
// const addInput = document.querySelector('input.add')
// const addButton = document.querySelector('.add-button');
// const delButton = document.querySelector('.delete');

// if (localStorage.getItem('myH1') !== null) {
//   h1.innerText = JSON.parse(localStorage.getItem('myH1'));
// }

// addButton.addEventListener('click', e => {
//   h1.innerText = addInput.value;

//   localStorage.setItem('h1', JSON.stringify(
//     h1.innerText
//   ));

// });

// delButton.addEventListener('click', _ => {
//   localStorage.removeItem('myH1');
//   h1.innerText = '*-*';
// })

const colors = document.querySelector('.color');
const color = localStorage.getItem('color');

if (color) {
  colors.value = color;
}
colors.addEventListener('change', e => {
  localStorage.setItem('color', e.target.value);
});

// const color = document.querySelector('.color');

// if (localStorage.getItem('color') !== null) {
//   color.value = localStorage.getItem('color');
// }
// color.addEventListener('change', _ => {
//   localStorage.setItem('color', color.value);
// })

