var Food = require('./Food.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.food = {};
    this.gameOver = false;
    this.isRunning = true;
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

  foodCollision(xNum, yNum, snake) {
    let head = snake.snakeArray[0];
    let food = this.food;
    let newX = this.randX(20, xNum - 40);
    let newY = this.randY(20, yNum - 40);

    if (head.x < food.x + food.width &&
        head.x + head.width > food.x &&
        head.y < food.y + food.height &&
        head.height + head.y > food.y) {
      snake.appleDetected = true;
      food.x = newX;
      food.y = newY;
    }

  }

  outOfBounds(snake) {
    let tail = snake.snakeArray[snake.snakeArray.length - 1];

    if (tail.x < 0 || tail.y < -10 || tail.x > this.canvas.width || tail.y > this.canvas.height) {
      this.gameOver = true;
    }
  }

  snakeCollision(snake) {
    let snakeArray = snake.snakeArray;
    let head = snakeArray[0];

    for (let i = 1; i < snakeArray.length; i++) {
      if (snakeArray[i].x === head.x && snakeArray[i].y === head.y) {
        this.gameOver = true;
      }

    }

  }

}

module.exports = Game;
