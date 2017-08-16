var style = require('./style.css');
var Square = require('./Square.js');
var Food = require('./Food.js');
var Segment = require('./Segment.js');
var Game = require('./Game.js');
var SnakeList = require('./SnakeList.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

window.addEventListener('load' , function() {
  snakeGame = new Game(canvas, context);
})

var restart = document.getElementById('restart-btn');

let snakeGame;
let snakeList;

restart.addEventListener('click', instantiateGame);

function instantiateGame() {
  snakeGame.clearCanvas();
  snakeGame.instantiateFood();
  snakeGame.instantiateSnake(3);
  gameLoop();
}

function gameLoop() {
  snakeGame.clearCanvas();
  snakeGame.drawFood();
  snakeGame.snakeList.moveSnake(0.5);
  snakeGame.snakeList.drawSnake();
  requestAnimationFrame(gameLoop);

}

function changeDirection(event) {
  snakeGame.snakeList.changeDirection(event);
}

document.addEventListener('keydown', changeDirection);
