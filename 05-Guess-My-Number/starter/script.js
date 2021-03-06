'use strict';
/*
//get the element
console.log(document.querySelector('.message').textContent);
//Set the element
document.querySelector('.message').textContent = '๐ Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const hiddenNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  //we directly pass to event listener method
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //If there is no inputs
  //if there is no value, then we will log to the console something
  if (!guess) {
    displayMessage('๐ซNo number!');
    // document.querySelector('.message').textContent = '๐ซNo number!';

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '๐ Correct Number!';
    // document.querySelector('.number').textContent = secretNumber;
    displayMessage('๐ Correct Number!');
    hiddenNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? '๐This score is too high'
      //       : '๐This score is too low';
      displayMessage(
        guess > secretNumber
          ? '๐This score is too high'
          : '๐This score is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('๐ฅYou LOST the game!');
      //   document.querySelector('.message').textContent = '๐ฅYou LOST the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //     //When guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         '๐This score is too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '๐ฅYou LOST the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         '๐This score is too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '๐ฅYou LOST the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayMessage('Start guessing...');
    // document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    // document.querySelector('.number').textContent = '?';
    hiddenNumber('?');

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
