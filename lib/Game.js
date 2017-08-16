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

  instantiateSnake(length) {
    let that = this;
    for (let i = length; i >= 1; i--) {
      let segment = new Segment(20, 20, 0.5, i);
      that.snake.push(segment);
    }
  }

  drawSnake() {
    this.snake.forEach((segment, i, snake) => {
      segment.draw(this.context);
    });
  }

  moveSnake(velocity) {
    this.snake.forEach((segment, i, snake) => {
      segment.move(velocity);
    });
  }

  changeDirection(event) {
    let keyNum = window.event.keyCode;
    let newDirection;

      switch (keyNum) {

      case 37:
      newDirection = 'left';
          break;

      case 39:
      newDirection = 'right'
          break;

      case 38:
      newDirection = 'up'
          break;

      case 40:
      newDirection = 'down'
          break;
      };

      this.snake.forEach((segment, i, snake) => {
        segment.direction = newDirection;
      });
  }
}




// document.onkeydown = function (event) {
//
//         keyCode = window.event.keyCode;
//         keyCode = event.keyCode;
//
//         switch (keyCode) {
//
//         case 37:
//             if (direction != 'right') {
//                 direction = 'left';
//             }
//             console.log('left');
//             break;
//
//         case 39:
//             if (direction != 'left') {
//                 direction = 'right';
//                 console.log('right');
//             }
//             break;
//
//         case 38:
//             if (direction != 'down') {
//                 direction = 'up';
//                 console.log('up');
//             }
//             break;
//
//         case 40:
//             if (direction != 'up') {
//                 direction = 'down';
//                 console.log('down');
//             }
//             break;
//         }
//     }
// })(window, document);



module.exports = Game;
