'use strict';

const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = (arr) => {
  let quantity = 0;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    quantity += arr[i][0];
    total += arr[i][1];
  }

  return Math.round(total / quantity)
}

console.log(getAveragePriceGoods(allСashbox));
