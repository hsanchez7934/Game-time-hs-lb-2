var style = require('./style.css');
var Square = require('./Square.js');
var Food = require('./Food.js');
var Segment = require('./Segment.js');
var Game = require('./Game.js')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var restart = document.getElementById('restart-btn');

// var snake = [];
// var food;
let snakeGame;

restart.addEventListener('click', instantiateGame);

function instantiateGame() {
  snakeGame = new Game(canvas, context);
  snakeGame.clearCanvas();
  snakeGame.instantiateFood();
  snakeGame.instantiateSnake(3);
  gameLoop();
}

function gameLoop() {
  snakeGame.clearCanvas();
  snakeGame.drawFood();
  snakeGame.moveSnake(0.5, 'down');
  snakeGame.drawSnake();

    // snake.forEach(function(segment, i, snake) {
    //   segment.moveRight(2);
    // });
    // snake.forEach(function(segment, i, snake) {
    //   segment.draw(context);
    // });

  requestAnimationFrame(gameLoop);

}

// function clearCanvas() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
// }
//
// function instantiateSnake() {
//   var segment1 = new Segment(50, 50, 20, 20);
//   var segment2 = new Segment(segment1.x + 25, 50, 20, 20);
//   var segment3 = new Segment(segment2.x + 25, 50, 20, 20);
//   snake.push(segment1, segment2, segment3);
// }
//
// function instantiateFood() {
//   var x = Math.random() * (canvas.width - 30);
//   var y = Math.random() * (canvas.height - 30);
//   food = new Food(x, y, 20, 20);
//   food.draw(context);
// }
