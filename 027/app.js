window.addEventListener('load', _ => {
  let animals = document.querySelectorAll('.test ul li');

  //innerHTML is expensive on the memory usage, not worth using it

  animals.forEach(a => console.log(a.innerText));

  const newAnimal = document.querySelector('.test ul').innerHTML += '<li>Beaver</li>';

  const lastLi = document.querySelector('.test ul li:last-child');

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML use this not innerHTML,cheaper on the memory usage
  // lastLi.insertAdjacentHTML('afterend', '<li>beaver</li>');

  // newAnimal.innerHTML += '<li>Beaver</li>';


  //cheapest on the memory usage
  // const newAnimal = document.querySelector('.test ul').appendChild(document.createElement('li')).innerText = 'Beaver';

  //we have to select the elements again, because the old ones that have added new ones, wont be valid, so we have to declare them again to work

  const animals2 = document.querySelectorAll('.test ul li');

  animals2.forEach((a, i) => {
    if (i % 2 === 0) {
      a.style.color = 'skyblue';
    } else {
      a.style.fontSize = '20px';
    }
  });

  // add to <li>Racoon</li> ---* and to <li>Fox</li>

  animals2.forEach((a) => {
    if (a.innerText === 'Racoon' || a.innerText === 'Fox') {
      a.innerText += '----*';
    }
  });

  const button = document.querySelector('button');

  button.addEventListener('click', e => {
    alert('you pressed a button');
  });

  button.addEventListener('mouseenter', e => {
    button.style.border = '2px solid skyblue'
  });

  const red = document.querySelector('.red');

  // redDiv.addEventListener('click', e => {
  //   redDiv.style.backgroundColor = 'orange';
  // });

  red.addEventListener('click', _ => {
    if (red.dataset.squareColor == 'blue') {
      red.dataset.squareColor = 'red';
      red.style.backgroundColor = '#dc143c66';
      red.style.borderColor = '#dc143c';
    } else {
      red.dataset.squareColor = 'blue';
      red.style.backgroundColor = '#87ceeb66';
      red.style.borderColor = '#87ceeb';
    }

    // function changeColor(element) {
    //   if (element.style.backgroundColor === 'green') {
    //     element.style.backgroundColor = 'rgba(255, 0, 0, 0.219)';
    //   } else {
    //     element.style.backgroundColor = 'green';
    //   }
    // }

    // redDiv.addEventListener('click', e => {
    //   changeColor(redDiv);

    // every time you press red the number inside thats <span> updates +1

    const span = document.querySelector('span');
    span.innerText = parseInt(span.innerText) + 1;
    console.log(span.innerText);


  });
});