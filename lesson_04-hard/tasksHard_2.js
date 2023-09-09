'use strict';
{
  const getIncomeValue = +prompt('Введите ваш доход');
  const minAmount = 15000;
  const maxAmount = 50000;
  const minRate = 0.13;
  const middleRate = 0.2;
  const maxRate = 0.3;

  if (getIncomeValue <= minAmount) {
    console.log(`ваш налог составит ${getIncomeValue * minRate}`)
  }
  if (getIncomeValue > minAmount && getIncomeValue <= maxAmount) {
    console.log(`ваш налог составит ${((getIncomeValue - minAmount) * middleRate) + minAmount * minRate}`)
  }
  if (getIncomeValue > maxAmount) {
    console.log(`ваш налог составит ${((getIncomeValue - minAmount) * maxRate) + minAmount * minRate}`)
  }
}
