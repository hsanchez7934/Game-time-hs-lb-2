var Square = require('./Square.js');

class Segment extends Square {
  constructor(x, y, width, height) {
    super(...arguments);

    this.color = '#0f0';
  }
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x * this.width, this.y * this.height, this.width, this.height)
    context.strokeStyle = '#000';
    context.strokeRect(this.x * this.width, this.y * this.height, this.width, this.height);
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
