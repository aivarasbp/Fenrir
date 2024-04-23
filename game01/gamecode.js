// Variables
let timer;
let seconds = 0;
let isRunning = false;
let currentNumber = 1;
const gridSize = 5;
const grid1 = document.getElementById('grid1');
const grid2 = document.getElementById('grid2');
const messageBox = document.getElementById('message');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

// Add event listeners for Start and Reset buttons
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);

// Initialize the game
function initializeGame() {
  clearGrid(grid1);
  clearGrid(grid2);
  generateNumbers();
  currentNumber = 1;
  seconds = 0;
  isRunning = false;
  updateTimer();
}

// Generate numbers in grid1
function generateNumbers() {
  let numbers = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1);
  numbers = shuffleArray(numbers);

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let number = numbers[i * gridSize + j];
      let div = document.createElement('div');
      div.textContent = number;
      grid1.appendChild(div);
      div.addEventListener('click', moveNumber);
    }
  }
}

// Shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Move the selected number from grid1 to grid2
function moveNumber(event) {
  if (!isRunning) {
    showMessage("Start the game by clicking the 'Start' button.");
    return;
  }

  let selectedNumber = parseInt(event.target.textContent);

  if (selectedNumber === currentNumber) {
    event.target.style.backgroundColor = 'green';
    currentNumber++;

    // Move the clicked number to grid2
    grid2.appendChild(event.target);

    if (currentNumber > gridSize * gridSize) {
      endGame();
    }
  } else {
    event.target.style.backgroundColor = 'red';
    setTimeout(() => {
      event.target.style.backgroundColor = '';
    }, 1000);
    showMessage("Wrong number selected.");
  }
}

// End the game
function endGame() {
  clearInterval(timer);
  isRunning = false;
  showMessage("Game over! Time: " + seconds + " s.");
}

// Update the timer display
function updateTimer() {
  document.getElementById('timer').textContent = seconds + ' s.';
}

// Show message to the user
function showMessage(text) {
  messageBox.textContent = text;
  setTimeout(function () {
    messageBox.textContent = "";
  }, 2000);
}

// Start the timer
function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      updateTimer();
    }, 1000);
    isRunning = true;
  }
}

// Clear the grid
function clearGrid(grid) {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}

// Start the game
function startGame() {
  initializeGame();
  startTimer();
}

// Reset the game to initial state
function resetGame() {
  clearInterval(timer);
  initializeGame();
}

// Initialize the game
initializeGame();
