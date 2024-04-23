const inputText = document.querySelector('.inputText');
const charCount = document.querySelector('.count');

document.addEventListener('DOMContentLoaded', () => {
  inputText.addEventListener('input', () => {
    charCount.textContent = inputText.value.length;
  });
});
