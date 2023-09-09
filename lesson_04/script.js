'use strict';
{
  const getGoodsName = prompt("Наименование товара");
  const getGoodsQuantity = +prompt("Количество товара");
  const getGoodsCategory = prompt("Категория товара");
  const getGoodsPrice = +prompt("Цена товара");

  if (Number.isNaN(getGoodsQuantity) || Number.isNaN(getGoodsPrice) || getGoodsQuantity <= 0 || getGoodsPrice <= 0) {
    console.log(`Вы ввели некорректные данные`);
  } else {
    console.log(`На складе ${getGoodsQuantity} единицы товара '${getGoodsName}' на сумму ${getGoodsPrice * getGoodsQuantity} деревянных`);
  }
}
