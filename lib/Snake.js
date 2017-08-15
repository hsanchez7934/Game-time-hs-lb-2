var Square = require('./Square.js');

class Snake extends Square {
  constructor(x, y, width, height, color) {
    super(...arguments);
  }
  draw(context) {
    super.draw(context);
  }
  extend() {
    
  }
}


module.exports = Snake;
