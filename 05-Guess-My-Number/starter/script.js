// DOM Manipulation
'use strict';

// Developing the application step by step DONE
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // Covering all Scenarios DONE
  if (score > 1) {
    // When there is no input DONE
    if (!guess) {
      displayMessage('No Number!');
      // When Player wins DONE
    } else if (guess === secretNumber) {
      displayMessage('Correct Number!');
      // Win Styling
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      // Implementing Highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // When Player loses DONE
  else {
    score = 0;
    displayMessage(`You lost the game!`);
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = `Fail`;
  }
});

// Implementing the Reset Function DONE
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  // Score reset DONE
  score = 10;
  document.querySelector('.score').textContent = score; //
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
