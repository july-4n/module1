'use strict';

const generateRandomArr = (length) => {
  const minValue = 1;
  const maxValue = 100;

  return Array.from({length: length}, (value, _) => value = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue)))
}

console.log(generateRandomArr(6))
