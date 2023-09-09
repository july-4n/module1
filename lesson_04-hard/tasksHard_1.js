'use strict';
{
  const getIncomeValue = +prompt('Введите ваш доход');

  if (getIncomeValue < 15000) {
    console.log(`ваш налог составит ${getIncomeValue * 0.13}`)
  }
  if (getIncomeValue >= 15000 && getIncomeValue <= 50000) {
    console.log(`ваш налог составит ${getIncomeValue * 0.2}`)
  }
  if (getIncomeValue > 50000) {
    console.log(`ваш налог составит ${getIncomeValue * 0.3}`)
  }
}
