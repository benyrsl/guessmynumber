'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '😇';
*/

let secnumber = Math.trunc(Math.random() * 20) + 1;
console.log(Number(secnumber));
let winNum = Number(document.querySelector('.score').textContent);
let High = Number(document.querySelector('.highscore').textContent);
let oldHigh = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if ((guess > 0 && guess < 21) || !guess) {
    if (!guess && guess != 0) {
      //when there is no input
      document.querySelector('.message').textContent = 'NO NUMBER ⛔️';
    } else if (guess === secnumber) {
      High = winNum;
      if (High > oldHigh) {
        oldHigh = High;
        document.querySelector('.highscore').textContent = oldHigh;
        document.querySelector('.number').textContent = secnumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '25rem';
      }

      document.querySelector('.number').textContent = secnumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '25rem';

      //when players win
      document.querySelector('.message').textContent = 'CORRECT NUMBER 😂';

      // when guess is wrong
    } else if (guess < secnumber) {
      //guess is too high
      if (winNum < 1) {
        document.querySelector('.message').textContent =
          'You lost baby girl ⛔️';
      } else {
        winNum--;
        document.querySelector('.message').textContent =
          'Secret number is bigger  ⛔️';
        document.querySelector('.score').textContent = winNum;
      }
    }
    if (guess > secnumber) {
      if (winNum < 1) {
        document.querySelector('.message').textContent =
          'You lost baby girl ⛔️';
      } else {
        winNum--;
        document.querySelector('.message').textContent =
          'Secret number is smaller ⛔️';
        document.querySelector('.score').textContent = winNum;
      }
    }
  } else {
    document.querySelector('.message').textContent =
      'Please put correct number in ⛔️';
    return false;
  }

  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Guess My Number!';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    winNum = 20;
    document.querySelector('.score').textContent = winNum;
    secnumber = Math.trunc(Math.random() * 20) + 1;
  });
});
