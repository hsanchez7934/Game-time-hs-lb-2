var Segment = require('./Segment.js');

class SnakeList {
  constructor(context) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    this.context = context;
  }

  add(width, height, x, y, i){
    let segment = new Segment(width, height, x, y, i)

    if(this.length === 0){
      this.head = segment;
      console.log(this.head.x);
      this.tail = segment;
      // console.log(this.tail)
      this.length ++;
    } else {
      // console.log(this.tail);
      this.tail.next = segment;
      segment.previous = this.tail;
      this.tail = segment;
      this.length ++;
    }
  }

  changeOrder() {
    let currentSeg = this.tail;
    let newListLength = this.length;
    let thisCount = 2;

    while (thisCount < newListLength - 1) {
      let headX = this.head.x
      // console.log(this.head.x)
      this.head.next = this.head;
      this.head = currentSeg;
      this.head.x = headX + 20
      // console.log(currentSeg.x)
      this.tail.next = null;
      this.tail = this.tail.previous;
      currentSeg = this.tail;
      thisCount++;
    }
  };

  drawSnake() {
    let currentSegment = this.head;
    let length = this.length;
    let count = 0;

    while (count < length) {
      currentSegment.draw(this.context);
      currentSegment = currentSegment.next;
      count ++;
    }
  }

  moveSnake() {
    let currentSegment = this.head;
    let length = this.length;
    let count = 0;

    while (count < length) {
      this.changeOrder();
      currentSegment.move();
      currentSegment = currentSegment.next;
      count ++;
    }
  }

  changeDirection(event) {
    let keyNum = window.event.keyCode;
    let newDirection;
    let currentSegment = this.head;
    let length = this.length;
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
