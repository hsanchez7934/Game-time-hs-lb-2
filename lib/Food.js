var Square = require('./Square.js');

class Food extends Square {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);
  }
  draw(context) {
    super.draw(context)
  }
}


module.exports = Food;
