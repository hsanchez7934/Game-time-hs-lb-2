var Square = require('./Square.js');

class Food extends Square {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.color = '#f00';
  }
  draw(context) {
    super.draw(context)
  }
}


module.exports = Food;
