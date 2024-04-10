window.addEventListener('load', _ => {
  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // const div1 = document.querySelector('.hello');

  // document.body.innerHTML = 'Good bye';

  // console.log(typeof div1);

  const h2 = document.querySelector('h2 + h2');

  const liTag = document.querySelector('span i + i');

  console.log(h2);

  console.log(liTag);

  let textInside = liTag.innerText;

  console.log(textInside);

  textInside += '----------*';

  liTag.innerText = textInside;

  // change H2 text 'select me' to changed

  h2.innerText = 'changed';

  console.log(h2.innerText);

  const h3Tag1 = document.querySelector('h3').innerText = 'One';

  const h3Tag = document.querySelector('h3 + h3').innerText = 'Two';

  const valio = document.querySelector('.valio');

  console.log(valio);

  valio.innerHTML += '<b>888</b>';

  const ul = document.querySelector('ul');

  ul.innerHTML = '<li>1<li>2</li></li>';

  const ol = document.querySelector('ol');

  for (let i = 1; i <= 10; i++) {
    ol.innerHTML += `<li>` + `Cat` + `</li>`;
  }


  const random = document.querySelector('.random');

  for (let i = 1; i <= 10; i++) {
    random.innerHTML += `<li>` + `${rand(1, 19)}` + `</li>`;
  }

});
