var Segment = require('./Segment.js');

class SnakeList {
  constructor(context) {
    this._length = 0;
    this.head = null;
    this.tail = null;
    this.context = context;
  }

  add(width, height, x, y) {
    let segment = new Segment(width, height, x, y);
    if (this._length > 0) {
        this.tail.next = segment;
        segment.previous = this.tail;
        this.tail = segment;
    } else {
        this.head = segment;
        this.tail = segment;
    };
    this._length++;
    return segment;
  }

  drawSnake() {
    let currentSegment = this.head;
    let length = this._length;
    let count = 0;

    while (count < length) {
      currentSegment.draw(this.context);
      currentSegment = currentSegment.next;
      count ++;
    }
  }

  moveSnake(velocity) {
    let currentSegment = this.head;
    let length = this._length;
    let count = 0;

    while (count < length) {
      currentSegment.move(velocity);
      currentSegment = currentSegment.next;
      count ++;
    }
  }

  changeDirection(event) {
    let keyNum = window.event.keyCode;
    let newDirection;
    let currentSegment = this.head;
    let length = this._length;
    let count = 0;

      switch (keyNum) {

      case 37:
      newDirection = 'left';
          break;

      case 39:
      newDirection = 'right'
          break;

      case 38:
      newDirection = 'up'
          break;

      case 40:
      newDirection = 'down'
          break;
      };

      while (count < length) {
        currentSegment.direction = newDirection;
        currentSegment = currentSegment.next;
        count ++;
      };
    }
}



module.exports = SnakeList;
