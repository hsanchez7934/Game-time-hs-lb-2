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
    let segment = new Segment(60, 60, 60, 120, 1);

    this.snakeArray.push(segment);
  }

  drawSnake(context, segmentArray) {
    let tail = this.snakeArray[this.snakeArray.length - 1];

    this.snakeArray.forEach((segment) => {
      this.drawSegment(context, tail, segment, segmentArray)
    });
  }

  drawSegment(context, tail, segment, segmentArray) {
    let z;

    if (segment === this.snakeArray[0] && segment.direction === 'left') {
      z = 0;
    } else if (segment === this.snakeArray[0] && segment.direction === 'right') {
      z = 1;
    } else if (segment === this.snakeArray[0] && segment.direction === 'up') {
      z = 2;
    } else if (segment === this.snakeArray[0] && segment.direction === 'down') {
      z = 3;
    } else if (segment === tail && tail.direction === 'left') {
      z = 4;
    } else if (segment === tail && tail.direction === 'right') {
      z = 5;
    } else if (segment === tail && tail.direction === 'up') {
      z = 6;
    } else if (segment === tail && tail.direction === 'down') {
      z = 7;
    } else if (segment.direction === 'up' || segment.direction === 'down') {
      z = 9;
    } else if (segment.direction === 'right' || segment.direction === 'left') {
      z = 8;
    }
    let img = segmentArray[z];

    segment.draw(context, img);
  }

  move() {
    let tail = this.snakeArray[this.snakeArray.length - 1]
    let direction = this.snakeArray[0].direction
    let x = this.snakeArray[0].x;
    let y = this.snakeArray[0].y;
    let size = tail.width;

    this.layoutSegment(direction, tail, x, y, size);
    tail.direction = direction;
    this.tailToHead(tail);
  }

  layoutSegment(direction, tail, x, y, size) {
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
  }

  tailToHead(tail) {
    this.snakeArray.pop();
    this.snakeArray.unshift(tail);
  }

  changeDirection(keyNum) {
    let direction = this.snakeArray[0].direction;

    this.setDirection(keyNum, direction);
  }

  setDirection(keyNum, direction) {

    if (keyNum === 37 && direction !== 'right') {
      this.snakeArray[0].direction = 'left';
    } else if (keyNum === 39 && direction !== 'left') {
      this.snakeArray[0].direction = 'right';
    } else if (keyNum === 38 && direction !== 'down') {
      this.snakeArray[0].direction = 'up';
    } else if (keyNum === 40 && direction !== 'up') {
      this.snakeArray[0].direction = 'down';
    }
  }

  addSegment(snakeGame) {
    let snakeArray = this.snakeArray;
    let length = snakeArray.length;
    let direction = snakeArray[0].direction;
    let head = snakeArray[0];

    if (this.numSegsAdd > this.segAddCount && this.appleDetected === true) {
      this.anotherSeg(direction, head, length, snakeArray, snakeGame);
    } else if (this.numSegsAdd === this.segAddCount && this.appleDetected === true) {
      this.resetCounter();
    }
  }

  anotherSeg(direction, head, length, snakeArray, snakeGame) {
    let anotherSegment = this.newSeg(direction, head, length);

    snakeArray.unshift(anotherSegment);
    this.increaseScore(snakeGame);
  }

  increaseScore(snakeGame) {
    this.segAddCount++;
    this.points++;
    if ((this.points % 25) === 0) {
      snakeGame.lives++;
    }
  }

  resetCounter() {
    this.appleDetected = false;
    this.segAddCount = 0;
  }

  newSeg(direction, head, length) {
    let anotherSegment;

    if (direction === 'right') {
      anotherSegment = new Segment(60, 60, head.x + 60, head.y, length + 1, direction);
    } else if (direction === 'left') {
      anotherSegment = new Segment(60, 60, head.x - 60, head.y, length + 1, direction);
    } else if (direction === 'up') {
      anotherSegment = new Segment(60, 60, head.x, head.y - 60, length + 1, direction);
    } else if (direction === 'down') {
      anotherSegment = new Segment(60, 60, head.x, head.y + 60, length + 1, direction);
    }
    return anotherSegment;
  }

  countPoints() {
    document.getElementById('points').innerText = this.points;
  }

  outOfBounds(snakeGame) {
    let tail = this.snakeArray[this.snakeArray.length - 1];

    if (tail.x < 0 || tail.y < -10 || tail.x > snakeGame.canvas.width || tail.y > snakeGame.canvas.height) {
      snakeGame.youDied(this);
    }
  }

  eatSelf(snakeGame) {
    let head = this.snakeArray[0];

    for (let i = 1; i < this.snakeArray.length; i++) {
      if (this.snakeArray[i].x === head.x && this.snakeArray[i].y === head.y) {
        snakeGame.youDied(this);
      }
    }
  }

}

module.exports = Snake;
