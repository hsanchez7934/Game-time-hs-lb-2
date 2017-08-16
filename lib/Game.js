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

  instantiateSnake() {
    let segment1 = new Segment(50, 50, 20, 20);
    let segment2 = new Segment(segment1.x + 25, 50, 20, 20);
    let segment3 = new Segment(segment2.x + 25, 50, 20, 20);
    this.snake.push(segment1, segment2, segment3);
  }

  drawSnake() {
    this.snake.forEach((segment, i, snake) => {
      segment.draw(this.context);
    });
  }

  moveSnakeRight() {
    this.snake.forEach((segment, i, snake) => {
      segment.moveRight(2);
    });
  }
}





module.exports = Game;
