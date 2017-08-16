var style = require('./style.css');
var Square = require('./Square.js');
var Food = require('./Food.js');
var Segment = require('./Segment.js');
var Game = require('./Game.js')

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var restart = document.getElementById('restart-btn');

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
  requestAnimationFrame(gameLoop);

}
