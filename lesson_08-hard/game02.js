'use strict';

function guessNumberGame2() {
  let numberOne = +prompt('Введите первое число');
  let numberTwo = +prompt('Введите второе число');
  let randomNumber = Math.floor(numberOne + Math.random() * (numberTwo + 1 - numberOne));
  const numbersArr = [];
  const guessNumberArr = [];
  let number;
  let count = 0;
  console.log(randomNumber);

  for (let i = numberOne; i <= numberTwo; i++) {
    numbersArr.push(i)
  }

  let attempt = Math.floor(numbersArr.length * 0.3);
  console.log(numbersArr);
  console.log(attempt);

  while (number !== randomNumber) {
    number = +prompt(`Введите число из диапазона от ${numberOne} до ${numberTwo}`);

    if (!guessNumberArr.includes(number) && !Number.isNaN(number)) {
      guessNumberArr.push(number);
      ++count;
      if (count >= attempt && number !== randomNumber) {
        alert("Не правильно! Попытки закончились! Игра окончена!");
        break;
      }
    } else if (guessNumberArr.includes(number)) {
      alert('Это число вы уже вводили');
    }

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

guessNumberGame2()
