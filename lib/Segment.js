var Square = require('./Square.js');

class Segment extends Square {
  constructor(width, height, x, y, data) {
    super(width, height);
    this.data = data;
    this.x = x;
    this.y = y;
    this.direction = 'down';
    this.color = '#0f0';
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.strokeStyle = '#000';
    context.strokeRect(this.x, this.y, this.width, this.height);
  }


}


module.exports = Segment;
