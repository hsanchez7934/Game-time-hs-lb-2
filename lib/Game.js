var Food = require('./Food.js');
var Segment = require('./Segment.js');



class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.snakeArray = [];
    this.food = {};
    this.appleDetected = false;
    this.gameOver = false;
    this.segAddCount = 0;
    this.numSegsAdd = 1;
    this.startLength = 1;
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  emptySnake() {
    this.snakeArray = [];
  }

  instantiateFood(xNum, yNum) {
    let x = this.randX(20, xNum - 40);
    let y = this.randY(20, yNum - 40);

    this.food = new Food(20, 20, x, y);
  }

  randX(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 20) * 20;
  }

  randY(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 20) * 20;
  }


  drawFood() {
    this.food.draw(this.context);
  }

  instantiateSnake() {
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

  moveSnake() {
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
      } else if (this.numSegsAdd === this.segAddCount) {
        this.appleDetected = false;
      }
    } else if (this.appleDetected === false) {
      this.segAddCount = 0;
    }
  }

  foodCollision(xNum, yNum) {
    let head = this.snakeArray[0];
    let food = this.food;
    let newX = this.randX(20, xNum - 40);
    let newY = this.randY(20, yNum - 40);

    if (head.x < food.x + food.width &&
        head.x + head.width > food.x &&
        head.y < food.y + food.height &&
        head.height + head.y > food.y) {
      this.appleDetected = true;
      food.x = newX;
      food.y = newY;
    }

  }


  outOfBounds() {
    let tail = this.snakeArray[this.snakeArray.length - 1];

    if (tail.x < 0 || tail.y < -10 || tail.x > this.canvas.width || tail.y > this.canvas.height) {
      this.gameOver = true;
    }
  }

  snakeCollision() {
    let snake = this.snakeArray;
    let head = snake[0];

    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        this.gameOver = true;
      }

    }

  }

}

module.exports = Game;
