'use strict';

const generateRandomArr2 = (length, n, m) => {
  const minValue = Math.ceil(Math.min(n, m));
  const maxValue = Math.floor(Math.max(n, m));

  return Array.from({length: length}, (value, _) => value = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue)))
}

console.log(generateRandomArr2(6, 20, -50));
