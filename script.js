const one = document.querySelector('.one');
const two = document.querySelector('.two');
const guess = document.querySelector('.guess');
const btn = document.querySelector('.btn');

// Event Listeners
btn.addEventListener('click', guessNumber);

// Functions
let firstNumber = parseInt(Math.random() * 10);
let secondNumber = parseInt(Math.random() * 10);

one.innerText = firstNumber;
two.innerText = secondNumber;

let sum = firstNumber + secondNumber;

function guessNumber() {
  let guessNumber = +guess.value;
  if (guessNumber === sum) {
    window.alert("You've guessed the number!");
  } else {
    window.alert('Wrong!');
    console.log(guessNumber);
    console.log(sum);
  }
}
