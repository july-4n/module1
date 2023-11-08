'use strict';
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

console.log(`Наибольший общий делитель 100 и 6550 равен ${gcd(100, 6550)}`);
console.log(`Наибольший общий делитель 244 и 158 равен ${gcd(244, 158)}`);
