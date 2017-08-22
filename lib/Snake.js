var Segment = require('./Segment.js');

class Snake {
  constructor(context) {
    this.snakeArray = []
    this.appleDetected = false;
    this.segAddCount = 0;
    this.numSegsAdd = 1;
    this.startLength = 1;
    this.context = context;
    this.points = 0;
  }

  empty() {
    this.snakeArray = [];
  }

  instantiate() {
    let snakeArray = this.snakeArray;

    for (let i = this.startLength; i > 0; i --) {
      let segment = new Segment(20, 20, i * 20, 60, i);

      snakeArray.push(segment);
    }
  }

  drawSnake() {
    this.snakeArray.forEach((segment) => {
      segment.draw(this.context);
    });
  }

  move() {
    let tail = this.snakeArray[this.snakeArray.length - 1];

    if (tail.direction === 'right') {
      tail.x = this.snakeArray[0].x + tail.width;
      tail.y = this.snakeArray[0].y;
    } else if (tail.direction === 'left') {
      tail.x = this.snakeArray[0].x - tail.width;
      tail.y = this.snakeArray[0].y;
    } else if (tail.direction === 'up') {
      tail.y = this.snakeArray[0].y - tail.height;
      tail.x = this.snakeArray[0].x;
    } else if (tail.direction === 'down') {
      tail.y = this.snakeArray[0].y + tail.height;
      tail.x = this.snakeArray[0].x;
    }
    this.snakeArray.pop();
    this.snakeArray.unshift(tail);
  }

  changeDirection() {
    let keyNum = window.event.keyCode;

    this.snakeArray.forEach(function(segment) {
      switch (keyNum) {

      case 37:
        if (segment.direction !== 'right') {
          segment.direction = 'left';
        }
        break;

      case 39:
        if (segment.direction !== 'left') {
          segment.direction = 'right';
        }
        break;

      case 38:
        if (segment.direction !== 'down') {
          segment.direction = 'up';
        }
        break;

      case 40:
        if (segment.direction !== 'up') {
          segment.direction = 'down';
        }
        break;
      }
    })
  }

  addSegment() {
    let snakeArray = this.snakeArray;
    let length = snakeArray.length;
    let segment;

    if (this.appleDetected === true) {
      if (this.numSegsAdd > this.segAddCount) {
        if (snakeArray[length - 1].direction === 'right') {
          segment = new Segment(20, 20, snakeArray[0].x + 20, snakeArray[0].y, length + 1, snakeArray[0].direction);
        } else if (snakeArray[length - 1].direction === 'left') {
          segment = new Segment(20, 20, snakeArray[0].x - 20, snakeArray[0].y, length + 1, snakeArray[0].direction);
        } else if (snakeArray[length - 1].direction === 'up') {
          segment = new Segment(20, 20, snakeArray[0].x, snakeArray[0].y - 20, length + 1, snakeArray[0].direction);
        } else if (snakeArray[length - 1].direction === 'down') {
          segment = new Segment(20, 20, snakeArray[0].x, snakeArray[0].y + 20, length + 1, snakeArray[0].direction);
        }
        snakeArray.unshift(segment);
        this.segAddCount++;
        this.points++;
      } else if (this.numSegsAdd === this.segAddCount) {
        this.appleDetected = false;
      }
    } else if (this.appleDetected === false) {
      this.segAddCount = 0;
    }
  }

  countPoints() {
    document.getElementById('points').innerText = this.points;
  }


}

module.exports = Snake;
