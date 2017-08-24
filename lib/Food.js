const Square = require('./Square.js');

class Food extends Square {
  constructor(width, height, x, y) {
    super(width, height, x, y);
    this.imgArray = [
      document.getElementById('apple'),
      document.getElementById('cake'),
      document.getElementById('pizza'),
      document.getElementById('hotdog'),
      document.getElementById('broccoli'),
      document.getElementById('popcorn'),
      document.getElementById('icecream')];
    this.img = this.imgArray[0];
    this.eatCount = 0;
  }

  draw(context) {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move(newX, newY) {
    let max = this.imgArray.length - 1;
    let min = 0;
    let randImg = Math.floor(Math.random() * (max - min + 1)) + min;

    this.img = this.imgArray[randImg]
    this.x = newX;
    this.y = newY;
    this.eatCount++;
  }

  countMeals() {
    document.getElementById('eat-count').innerText = this.eatCount;
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
