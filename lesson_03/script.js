'use strict';
{
  const goodsName = 'player';
  const goodsQuantity = 2;
  const goodsCategory = 'tv, audio';
  const goodsPrice = 3099;

  console.log(goodsName);
  console.log(`общая сумма: ${goodsQuantity * goodsPrice}`);
}
{
  const goodsName = 'gaming-chair';
  const goodsQuantity = 1;
  const goodsCategory = 'furniture';
  const goodsPrice = 23056;
}
{
  const getGoodsName = prompt("Наименование товара");
  const getGoodsQuantity = prompt("Количество товара");
  const getGoodsCategory = prompt("Категория товара");
  const getGoodsPrice = prompt("Цена товара");

  console.log(`На складе ${getGoodsQuantity} единицы товара '${getGoodsName}' на сумму ${getGoodsPrice * getGoodsQuantity} деревянных`);
}
