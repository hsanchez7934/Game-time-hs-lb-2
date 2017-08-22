var Segment = require('./Segment.js');

class Snake {
  constructor() {
    this.snakeArray = []
    this.appleDetected = false;
    this.segAddCount = 0;
    this.numSegsAdd = 1;
    this.startLength = 1;
    this.points = 0;
  }

  empty() {
    this.snakeArray = [];
  }

  instantiate() {
    for (let i = this.startLength; i > 0; i --) {
      let segment = new Segment(20, 20, i * 20, 60, i);

      this.snakeArray.push(segment);
    }
  }

  drawSnake(context) {
    this.snakeArray.forEach((Segment) => {
      Segment.draw(context);
    });
  }

  move() {
    let tail = this.snakeArray[this.snakeArray.length - 1]
    let direction = tail.direction
    let x = this.snakeArray[0].x;
    let y = this.snakeArray[0].y;
    let size = tail.width;

    if (direction === 'right') {
      tail.x = x + size;
      tail.y = y;
    } else if (direction === 'left') {
      tail.x = x - size;
      tail.y = y;
    } else if (direction === 'up') {
      tail.y = y - size;
      tail.x = x;
    } else if (direction === 'down') {
      tail.y = y + size;
      tail.x = x;
    }
    this.tailToHead(tail);
  }

  tailToHead(tail) {
    this.snakeArray.pop();
    this.snakeArray.unshift(tail);
  }

  changeDirection() {
    let keyNum = window.event.keyCode;

    this.snakeArray.forEach((segment) => {
      this.setDirection(keyNum, segment);
    })
  }

  setDirection(keyNum, segment) {
    if (keyNum === 37 && segment.direction !== 'right') {
      segment.direction = 'left';
    } else if (keyNum === 39 && segment.direction !== 'left') {
      segment.direction = 'right';
    } else if (keyNum === 38 && segment.direction !== 'down') {
      segment.direction = 'up';
    } else if (keyNum === 40 && segment.direction !== 'up') {
      segment.direction = 'down';
    }
  }

  addSegment() {
    let snakeArray = this.snakeArray;
    let length = snakeArray.length;
    let direction = snakeArray[length - 1].direction;
    let head = snakeArray[0];

    if (this.numSegsAdd > this.segAddCount && this.appleDetected === true) {
      let anotherSegment = this.newSeg(direction, head, length);

      snakeArray.unshift(anotherSegment);
      this.increaseScore();
    } else if (this.numSegsAdd === this.segAddCount && this.appleDetected === true) {
      this.resetCounter();
    }
  }

  increaseScore() {
    this.segAddCount++;
    this.points++;
  }

  resetCounter() {
    this.appleDetected = false;
    this.segAddCount = 0;
  }

  newSeg(direction, head, length) {
    let anotherSegment;

    if (direction === 'right') {
      anotherSegment = new Segment(20, 20, head.x + 20, head.y, length + 1, direction);
    } else if (direction === 'left') {
      anotherSegment = new Segment(20, 20, head.x - 20, head.y, length + 1, direction);
    } else if (direction === 'up') {
      anotherSegment = new Segment(20, 20, head.x, head.y - 20, length + 1, direction);
    } else if (direction === 'down') {
      anotherSegment = new Segment(20, 20, head.x, head.y + 20, length + 1, direction);
    }
    return anotherSegment;
  }

  countPoints() {
    document.getElementById('points').innerText = this.points;
  }


}

module.exports = Snake;
