'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(name, price, quantity = 1) {
    const item = {
      name,
      price,
      quantity,
    };
    this.items.push(item)
    this.increaseCount(quantity);
    return this.items
  },
  increaseCount(amount) {
    return this.count + amount
  },
  calculateItemPrice() {
    return this.items.reduce(
      function(sum, item) {
        sum += (item.price * item.quantity);
        return sum
      },
    0)
  },
  clear() {
    this.items = [],
    this.totalPrice = 0
  },
  print() {
    console.log(`${JSON.stringify(cart.items)}\nОбщая стоимость ${cart.totalPrice}`)
  },
};

cart.add('phone', 10000, 3);
cart.add('refrigerator', 103000);
cart.add('projector', 50000, 2);

console.log(cart.print())
