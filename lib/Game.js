var Food = require('./Food.js');
var Segment = require('./Segment.js');



class Game {
  constructor(canvas, context) {
  this.snake = [];
  this.canvas = canvas;
  this.context = context;
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  instantiateFood() {
    let x = Math.random() * (this.canvas.width - 30);
    let y = Math.random() * (this.canvas.height - 30);
    this.food = new Food(x, y, 20, 20);
  }

  drawFood() {
    this.food.draw(this.context);
  }

  instantiateSnake(length) {
    for(let i = length; i >= 1; i--) {
      let segment = new Segment(.5, i, 20, 20);
      this.snake.push(segment);
    }
  }

  drawSnake() {
    this.snake.forEach((segment, i, snake) => {
      segment.draw(this.context);
    });
  }

  moveSnakeDown() {
    this.snake.forEach((segment, i, snake) => {
      segment.moveDown(.02);
    });
  }
}





module.exports = Game;
