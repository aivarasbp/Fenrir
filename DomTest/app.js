const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 1.

const firstH2 = document.querySelector('h2');
const secondH2 = document.querySelectorAll('h2')[1];
const button = document.querySelector('button');

button.addEventListener('click', e => {
  firstH2.innerText = rand(1, 6);
  secondH2.innerText = rand(1, 6);
  if (firstH2.innerText === secondH2.innerText) {
    firstH2.style.color = 'red';
    secondH2.style.color = 'red';
  } else {
    firstH2.style.color = '';
    secondH2.style.color = '';
  }
});

// 2.

let emptyArray = [];

const elementH3 = document.querySelector('h3');

const button2 = document.querySelectorAll('button')[1];

button2.addEventListener('click', e => {
  const randomNumber = rand(1, 10);
  console.log(randomNumber);
  emptyArray.push(randomNumber);
  elementH3.innerText = emptyArray;
});

// 3.

const ul = document.querySelector('ul');

africa.forEach(animal => {
  if (animal.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = animal;
    ul.appendChild(li);
  }
});

document.body.appendChild(ul);

// 4.

const result = document.querySelector('h5');
const input1 = document.querySelector('input');
const input2 = document.querySelectorAll('input')[1];
const button3 = document.querySelectorAll('button')[2];
const button4 = document.querySelectorAll('button')[3];

button3.addEventListener('click', e => {

  const sum = Number(input1.value) + Number(input2.value);

  result.innerText = sum;
});

button4.addEventListener('click', e => {

  const difference = Number(input1.value) - Number(input2.value);

  result.innerText = difference;
});


// 5.

const ul2 = document.querySelectorAll('ul')[1];
let listHTML = '';

australia.forEach(animal => {
  if (animal === 'Dingo') {
    listHTML += `<li style="background-color: blue;">${animal}</li>`;
  } else {
    listHTML += `<li>${animal}</li>`;
  }
});

ul2.innerHTML = listHTML;


