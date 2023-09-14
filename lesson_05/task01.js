'use strict';

const euro = '1.2 $';
const dollar = '64 рубля';

const convertCurrency = (priceEuro) => {
  return parseFloat(euro)*parseFloat(dollar)*parseFloat(priceEuro);
}
