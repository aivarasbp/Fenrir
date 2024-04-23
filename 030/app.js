// const vz = document.querySelector('a');

// vz.addEventListener('click', e => {

//   e.preventDefault();

//   console.log('valio');
// });

const obj = {
  smartAnimal32: 'Fox',
  funnyAnimal88: 'Racoon',
  bigAnimal105: 'Wolf'
}

const colors = ['skyblue', 'orange', 'crimson', 'gray'];

document.querySelector('button.select').addEventListener('click', _ => {
  const value = document.querySelector('select').value;
  console.log(value);
});

document.querySelector('button.cb').addEventListener('click', _ => {

  document.querySelectorAll('[type="checkbox"]')
    .forEach(c => {
      if (c.checked) {
        console.log(c.value);
      }
    })
});

document.querySelector('button.ra').addEventListener('click', _ => {

  document.querySelectorAll('[type="radio"]')
    .forEach(c => {
      if (c.checked) {
        console.log(c.value);
      }
    })
});

document.querySelector('button.color').addEventListener('click', _ => {
  const value = document.querySelector('[type="color"]').value;
  document.querySelector('.box.color').style.backgroundColor = value;
  console.log(value);
});

// make a color selector the select has a class of color-selector and use the variable colors and put them inside the selector and when picking the color change the background color

let selectHtml = '<select>';

colors.forEach(c => {
  selectHtml +=
    `<option value="${c}">${c}</option>`
});

selectHtml += '</select>';

document.querySelector('.my-colors').innerHTML = selectHtml;

const colorButton = document.querySelector('button.coloringButton');

colorButton.addEventListener('click', _ => {
  const value = document.querySelector('.my-colors select').value;
  document.querySelector('button.coloringButton').style.backgroundColor = value;
  console.log(value);
});


const addButton = document.querySelector('button.add');
const sum = document.querySelector('h3.sum');

addButton.addEventListener('click', _ => {
  document.querySelectorAll('.digits [type="radio"]:checked')
    .forEach(c => {
      sum += parseInt(c.value);
    });
});



