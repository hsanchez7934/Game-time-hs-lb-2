var Square = require('./Square.js');

class Segment extends Square {
  constructor(width, height, x, y, data, direction = 'right') {
    super(width, height);
    this.data = data;
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  draw(context, img) {
    context.drawImage(img, this.x, this.y, this.width, this.height)
  }

}


module.exports = Segment;
