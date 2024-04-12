window.addEventListener('load', _ => {
  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const body = document.querySelector('body');

  // let whatToShow;

  // if (rand(0, 1) === 0) {
  //   whatToShow = `<h1>DOM 2</h1>`;
  // } else {
  //   whatToShow = `<h1>Sub DOM 2</h1>`;
  // }

  // body.innerHTML = whatToShow;

  // body.innerHTML += rand(0, 1) ? `<p>Valio</p>` : `<p>Alio</p>`;

  // if (document.querySelector('h1')) {
  //   document.querySelector('h1').innerHTML = `<span>Valio</span>`
  // } if (document.querySelector('h2')) {
  //   document.querySelector('h2').innerHTML = `<span>Alio</span>`
  // }

  // print all animals in div with the class=animals span elements

  const animals = document.querySelectorAll('.animals span');

  animals.forEach(a => console.log(a.innerText));

  const animalArray = [...animals];

  console.log(animalArray);

  animals.forEach(a => a.innerText === 'Rabbit' && (a.innerText = 'Bunny'));

  // animals.forEach(a => {
  //   if (a.innerText === 'Rabbit') {
  //     a.innerText = 'Bunny';
  //   }
  // })

  animals.forEach(a => console.log(a.innerText));

  const h1 = document.querySelector('.animals');

  h1.style.color = 'skyblue';
  h1.style.fontSize = '25px';

  // setInterval(_ = {
  //   h1.style.color = h1.style.color == 'skyblue' ? 'crimson' : 'skyblue'
  // }, 1000)

  const blueRed = _ => {
    if (h1.style.color == 'skyblue') {
      h1.style.color = 'crimson';
    } else {
      h1.style.color = 'skyblue';
    }
  }
  setInterval(blueRed, 1000);

  const bin = document.querySelector('.bin');

  let divs = '';

  for (let i = 0; i < 100; i++) {
    divs += `<div></div>`;
  }

  bin.innerHTML = divs;

  const balls = document.querySelectorAll('.bin div');

  const ballGo = _ => {
    balls.forEach(b => {
      b.style.top = rand(0, 450) + 'px';
      b.style.left = rand(0, 450) + 'px';
    });
  }

  setInterval(ballGo, 1000);
});