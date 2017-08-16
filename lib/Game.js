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
    this.food = new Food(20, 20, x, y);
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

  moveSnake(velocity, direction) {
    this.snake.forEach((segment, i, snake) => {
      segment.move(velocity, direction);
    });
  }
}


module.exports = Game;
