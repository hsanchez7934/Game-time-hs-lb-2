var Food = require('./Food.js');
var Segment = require('./Segment.js');
var SnakeList = require('./SnakeList.js');



class Game {
  constructor(canvas, context) {
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

  instantiateSnake(length) {
    let that = this;
    this.snakeList = new SnakeList(this.context);
    for (let i = length; i >= 1; i--) {
      this.snakeList.add(20, 20, i, 0.5)
    }
  }

}

module.exports = Game;
