'use strict';

const generateRandomArr3 = (length, n, m, option) => {
  const minValue = Math.ceil(Math.min(n, m));
  const maxValue = Math.floor(Math.max(n, m));
  const arr = [];

  for(let i = 0; i < length; i++) {
    let num = Math.floor(minValue + Math.random() * (maxValue + 1 - minValue));
    if (option === 'even' && num % 2 === 0) {
      arr.push(num)
    }  else if (option === 'odd' && num % 2 !== 0) {
      arr.push(num)
    } else {
      i--;
    }
  }
  return arr
}

console.log(generateRandomArr3(6, 2, 50, 'even'))
