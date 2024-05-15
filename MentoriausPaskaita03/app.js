const button = document.querySelector('button');
const paragraph = document.querySelector('p');
const url = "https://api.chucknorris.io/jokes/random"

button.addEventListener('click', e => {
  fetch(url).then(res => res.json().then(data => paragraph.innerHTML = data.value));
});
