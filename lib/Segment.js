var Square = require('./Square.js');

class Segment extends Square {
  constructor(width, height, x, y) {
    super(width, height);
    this.color = '#0f0';
    this.x = x * this.width;
    this.y = y * this.height;
    this.direction = 'down';
    this.previous = null;
    this.next = null;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.strokeStyle = '#000';
    context.strokeRect(this.x, this.y, this.width, this.height);
  }

  move(velocity) {
    let that = this;
    if (that.direction === 'right') {
      that.x += velocity;
    } else if (that.direction === 'left') {
      that.x -= velocity;
    } else if (that.direction === 'up') {
      that.y -= velocity;
    } else if (that.direction === 'down') {
      that.y += velocity;
    }
  }
}


module.exports = Segment;
