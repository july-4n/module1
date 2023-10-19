'use strict';

const getLeapYearArr = (n, m) => {
  let startYear = Math.abs(Math.min(n, m));
  let finishYear = Math.abs(Math.max(m, n));

  const leapYearsArr = [];
  for (let i = startYear; i <= finishYear; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYearsArr.push(i);
    }
  }

  return leapYearsArr
}

console.log(getLeapYearArr(1900, 2000))
