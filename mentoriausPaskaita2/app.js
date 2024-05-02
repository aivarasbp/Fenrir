const inputText = document.querySelector('.inputText');
const charCount = document.querySelector('.count');
const checkBtn = document.querySelector('.check');

function countVowel() {
  let count = 0;
  let wordVal = word.ariaValueMAx.toLowerCase();
  let regex = /^[aeiou]$/i
  for (let i = 0; i < wordVal.length; i++) {
    if (regex.test(wordVal[i])) {
      count++;
    }
    charCount.textContent = count;
    checkBtn.addEventListener('click', () => {
      charCount.textContent = inputText.value.length;
    }
    )
  };

}

