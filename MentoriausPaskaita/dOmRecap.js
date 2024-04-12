// const subtract = document.querySelector('.subtract');

// const count = document.querySelector('.count');

// const reset = document.querySelector('.reset');

// const add = document.querySelector('.add');

// subtract.addEventListener('click', e => {
//   count.textContent--;
//   setColor();
// });

// reset.addEventListener('click', e => {
//   count.textContent = 0;
//   setColor();
// });

// add.addEventListener('click', e => {
//   count.textContent++;
//   setColor();
// });

const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

const setColor = () => {
  if (count.innerHTML > 0) {
    count.style.color = 'yellowgreen';
  } else if (count.innerHTML < 0) {
    count.style.color = 'crimson';
  } else {
    count.style.color = 'white';
  }
};

buttons.addEventListener('click', function (e) {
  if (e.target.classList.contains('add')) {
    count.textContent++;
    setColor();
  } else if (e.target.classList.contains('subtract')) {
    count.textContent--;
    setColor();
  } else if (e.target.classList.contains('reset')) {
    count.textContent = 0;
    setColor();
  }
});