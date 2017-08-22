var Square = require('./Square.js');

class Food extends Square {
  constructor(width, height, x, y) {
    super(width, height, x, y);
    this.color = '#f00';
  }

  draw(context) {
    super.draw(context)
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}


module.exports = Food;
