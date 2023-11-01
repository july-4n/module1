'use strict';

const func = (arr) => {
  const MIN_NUMBER = 0;
  const MAX_NUMBER = 10;
  const randomNumber =
    Math.floor(MIN_NUMBER + Math.random() * (MAX_NUMBER + 1 - MIN_NUMBER));
  arr.push(randomNumber);

  const newArr = [...arr];

  const sum = newArr.reduce((sum, item) => sum + item, 0);

  if (sum > 50) {
    return newArr;
  }
  return func(arr);
};

console.log(func([1, 2, 3, 10]));
