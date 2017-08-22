var Square = require('./Square.js');

class Food extends Square {
  constructor(width, height, x, y) {
    super(width, height, x, y);
    this.color = '#f00';
  }

  draw(context) {
    super.draw(context)
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }

  collision(xNum, yNum, snake, snakeGame) {
    let head = snake.snakeArray[0];
    // let food = this.food;
    let newX = snakeGame.randX(20, xNum - 40);
    let newY = snakeGame.randY(20, yNum - 40);

    if (head.x < this.x + this.width &&
        head.x + head.width > this.x &&
        head.y < this.y + this.height &&
        head.height + head.y > this.y) {
      snake.appleDetected = true;
      this.move(newX, newY);
    }
  }
}


module.exports = Food;
