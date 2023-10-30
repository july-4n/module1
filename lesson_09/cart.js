'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice
  },
  add(name, price, quantity = 1) {
    const item = {
      name,
      price,
      quantity,
    };
    this.items.push(item)
    this.increaseCount(quantity);
    this.calculateItemPrice();
    return this.items
  },
  increaseCount(amount) {
    return this.count + amount
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce(
      function(sum, item) {
        return sum + (item.price * item.quantity)
      },
    0)
  },
  clear() {
    this.items = [],
    this.totalPrice = 0
  },
  print() {
    console.log(`${JSON.stringify(cart.items)}\nОбщая стоимость ${cart.getTotalPrice()}`)
  },
};

cart.add('phone', 10000, 3);
cart.add('refrigerator', 103000);
cart.add('projector', 50000, 2);

console.log(cart.print())
