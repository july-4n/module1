'use strict';

const rectangle = {
  width: '5см',
  height: '5см',
  set widthParam(val) {
    this.width = val;
  },
  set heightParam(val) {
    this.height = val;
  },
  get perimeter() {
    return 2 * `${parseInt(this.width)}` +
      2 * `${parseInt(this.height)}` + 'см';
  },
  get square() {
    return `${parseInt(this.width)}` * `${parseInt(this.height)}` + 'см2';
  },
};

rectangle.widthParam = 20;
rectangle.heightParam = 10;
console.log(rectangle.perimeter);
console.log(rectangle.square);
