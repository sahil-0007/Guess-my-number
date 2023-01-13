'use strict';
let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

const displaymsg = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guessedval = Number(document.querySelector('.guess').value);
  // console.log(guessedval);
  if (!guessedval) {
    displaymsg('⛔ No Number');
  } else if (guessedval === number) {
    document.querySelector('.number').textContent = number;
    displaymsg('🎉 Correct Number');
    // document.querySelector('.message').textContent = ;
    // document.querySelector('.highscore').value = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guessedval != number) {
    if (score > 1) {
      guessedval > number
        ? displaymsg('📈 Too High !')
        : displaymsg('📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displaymsg('💥 You Lost the game!');
    }
  }
});

//now creating the game reset functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displaymsg('Start guessing... ');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
});
