'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
  add(name, price, quantity = 1) {
    const item = {
      name,
      price,
      quantity,
    };
    this.items.push(item);
    this.increaseCount(quantity);
    return this.items;
  },
  increaseCount(amount) {
    return this.count + amount;
  },
  calculateItemPrice() {
    return this.items.reduce(
      (sum, item) => {
        sum += ((item.price * item.quantity) -
        (item.price * this.discount / 100 * item.quantity));
        return sum;
      },
      0);
  },
  clear() {
    this.items = [],
    this.totalPrice = 0;
  },
  print() {
    console.log(
      `${JSON.stringify(cart.items)}\nОбщая стоимость ${cart.totalPrice}`);
  },
};

cart.setDiscount = 'METHED';
cart.add('phone', 10000, 3);
cart.add('refrigerator', 103000);
cart.add('projector', 50000, 2);

console.log(cart.print());
