'use strict';

const minValue = 1;
const maxValue = 100;
const randomNumber =
  Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
console.log('randomNumber: ' + randomNumber);

const guessNumberGame = () => {
  const number = prompt('Введите число');
  if (number === null) {
    alert('Вы вышли из игры');
    return;
  } else if (isNaN(parseInt(number)) || !isFinite(number)) {
    alert('Введите число!');
    return guessNumberGame();
  } else if (Number.parseInt(number) < randomNumber) {
    alert('Больше!');
    return guessNumberGame();
  } else if (Number.parseInt(number) > randomNumber) {
    alert('Меньше!');
    return guessNumberGame();
  } else {
    alert('Правильно!');
  }
};

guessNumberGame();
