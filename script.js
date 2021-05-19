'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   when there is no number;
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //   when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';

    //   when guess is higher
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';

    //   when guess is lower
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});
