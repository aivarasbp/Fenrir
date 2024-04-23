function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const animals = [
  { animal: 'Racoon', color: 'skyblue' },
  { animal: 'Fox', color: 'orange' },
  { animal: 'Wolf', color: 'gray' },
  { animal: 'Rabbit', color: 'pink' }
];

// let html = '</ul>';
// animals.forEach(a => html += '<li>' + a.animal + '</li>');

// html += '</ul>';

// const test2 = document.querySelector('.test');

// test2.innerHTML = html;

const test = document.querySelector('.test');
const ul = document.createElement('ul');
const li = document.createElement('li');
const topSelector = document.querySelector('.top');
const top2Selector = document.querySelector('.top2');
const h1 = document.createElement('h1');
const text = document.createTextNode('Hello');

test.appendChild(ul);

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i].animal;
  const color = animals[i].color;
  const li = document.createElement('li');
  li.textContent = animal;
  li.style.color = color;
  ul.appendChild(li);
}

test.classList.add('back');

h1.appendChild(text);

topSelector.appendChild(h1);

const ul2 = document.createElement('ul');

animals.forEach(a => {
  const li = document.createElement('li');
  const text = document.createTextNode(a.animal);
  li.appendChild(text);
  ul2.appendChild(li);
  test.appendChild(ul2);
  li.style.color = a.color;

})

