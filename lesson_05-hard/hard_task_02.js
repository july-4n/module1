'use strict';

const getMinNumber = () => {
  const numberOne = +prompt('Введите число');
  const numberTwo = +prompt('Введите число');

  const diff = numberOne - numberTwo;
  return diff > 0 ? numberTwo : numberOne;
};

console.log(`Минимальное значение равно ${getMinNumber()}`);
