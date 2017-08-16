var Square = require('./Square.js');

class Segment extends Square {
  constructor(width, height, x, y) {
    super(width, height);
    this.color = '#0f0';
    this.x = x * this.width;
    this.y = y * this.height;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.strokeStyle = '#000';
    context.strokeRect(this.x, this.y, this.width, this.height);
  }

  // moveRight(velocity) {
  //   this.x += velocity;
  // }
  //
  // moveLeft(velocity) {
  //   this.x -= velocity;
  // }
  //
  // moveUp(velocity) {
  //   this.y -= velocity;
  // }
  //
  // moveDown(velocity) {
  //   this.y += velocity;
  // }

  move(velocity, direction) {
    let that = this;
    if (direction === 'right') {
      that.x += velocity;
    } else if (direction === 'left') {
      that.x -= velocity;
    } else if (direction === 'up') {
      that.y -= velocity;
    } else if (direction === 'down') {
      that.y += velocity;
    }
  }
}


module.exports = Segment;
