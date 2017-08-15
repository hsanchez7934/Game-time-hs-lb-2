var Square = require('./Square.js');

class Segment extends Square {
  constructor(x, y, width, height) {
    super(...arguments);

    this.color = '#0f0';
  }
  draw(context) {
    super.draw(context);
  }

  moveRight(velocity) {
    this.x += velocity;
  }

  moveLeft(velocity) {
    this.x -= velocity;
  }

  moveUp(velocity) {
    this.y -= velocity;
  }

  moveDown(velocity) {
    this.y += velocity;
  }
}


module.exports = Segment;
