'use strict';

const checkQuantity = (total, quantity) => {
  let result;
  if (quantity > 10) {
    result = total - (total * 0.03);
    return result
  } else {
    return total
  }
}

const checkSum = (total) => {
  let result;
  if (total > 30000) {
    result = (total - ((total - 30000) * 0.15));
    return result
  } else {
    return total
  }
}

const checkCode = (total, code) => {
  let result;
  if (code === 'METHED') {
    result = total - (total * 0.1);
    return result
  } else if (code === 'G3H2Z1' && total > 2000) {
    result = total - 500;
    return result
  } else {
    return total
  }
}

const calculate = (total, quantity, code) => {
  let sum = total;
  let resFirstCb = checkQuantity(sum, quantity);
  let resSecondCb = checkSum(resFirstCb);
  let resThirdCb = checkCode(resSecondCb, code)

  return resThirdCb;
}
