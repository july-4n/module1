'use strict';
{
  const rain = Math.round(Math.random());

  if (rain == 1) {
    'Пошёл дождь. Возьмите зонт!'
  };
  if (rain == 0) {
    'Дождя нет!'
  };
}

{
  const getMathMarks = +prompt("Введите кол-во баллов по математике");
  const getLanguageMarks = +prompt("Введите кол-во баллов по русскому языку");
  const getComputerScienceMarks = +prompt("Введите кол-во баллов по информатике");

  if ((getMathMarks + getLanguageMarks + getComputerScienceMarks) >= 265) {
    alert("Поздравляю, вы поступили на бюджет!");
  }
}
