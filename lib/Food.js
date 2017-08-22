var Square = require('./Square.js');

class Food extends Square {
  constructor(width, height, x, y) {
    super(width, height, x, y);
    this.color = '#f00';
  }
  
  draw(context) {
    super.draw(context)
  }
}


module.exports = Food;
