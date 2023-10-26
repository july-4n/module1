'use strict';

function guessNumberGame() {
  const minValue = 1;
  const maxValue = 100;
  let randomNumber = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
  let number;

  while (number !== randomNumber) {
    number = +prompt('Введите число');
    if (Number.isNaN(number)) {
      alert("Введите число!");
    } else if (number == '') {
      break;
    } else if (number < randomNumber) {
      alert('Больше!');
    } else if (number > randomNumber) {
      alert('Меньше!');
    } else {
      alert('Правильно!');
    }
  }
}

guessNumberGame()
