var Square = require('./Square.js');

class Segment extends Square {
  constructor(width, height, x, y, data) {
    super(width, height);
    this.data = data;
    this.x = x;
    this.y = y;
    this.direction = 'right'
    this.next = null;
    this.previous = null;
    this.color = '#0f0';
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.strokeStyle = '#000';
    context.strokeRect(this.x, this.y, this.width, this.height);
  }

  move() {
    let that = this;
    if (that.direction === 'right') {
      that.x += 1;
    } else if (that.direction === 'left') {
      that.x -= 1;
    } else if (that.direction === 'up') {
      that.y -= 1;
    } else if (that.direction === 'down') {
      that.y += 1;
    }
  }
}


module.exports = Segment;
