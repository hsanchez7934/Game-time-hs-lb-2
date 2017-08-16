var Square = require('./Square.js');

class Food extends Square {
  constructor(width, height, x, y) {
    super(...arguments);
    this.color = '#f00';
  }
  draw(context) {
    super.draw(context)
  }
}


module.exports = Food;
