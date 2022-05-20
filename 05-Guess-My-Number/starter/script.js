// DOM Manipulation
'use strict';

// Developing the application step by step TODO

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Covering all Scenarios DONE
  // Guess Answers
  if (score > 1) {
    // When there is no input DONE
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';

      //   When Player wins DONE
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = `Correct Number!`;
      // Win Styling
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }

    // When guess is too high DONE
    else if (guess > secretNumber) {
      document.querySelector('.message').textContent = `Too high!`;
      score--;
      document.querySelector('.score').textContent = score;
    }

    // When guess is too low DONE
    else if (guess < secretNumber) {
      document.querySelector('.message').textContent = `Too low!`;
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  // When Player loses DONE
  else {
    document.querySelector('.message').textContent = `You lost the game!`;
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = `Fail`;
  }
});

// Implementing the Reset Function DONE
document.querySelector('.again').addEventListener('click', function () {
  // Score reset DONE
  score = 10;
  document.querySelector('.score').textContent = score; //
  document.querySelector('.message').textContent = 'Start guessing...';
  // Returning to initial background color DONE
  document.querySelector('body').style.backgroundColor = '#222';
  // Clearing Input value DONE
  document.querySelector('.guess').value = '';
  // Changing Box Width DONE
  document.querySelector('.number').style.width = '15rem';
  // Changing the secret Number DONE
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = `?`;
});
