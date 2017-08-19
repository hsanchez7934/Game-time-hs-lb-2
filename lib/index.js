var style = require('./style.css');
var Square = require('./Square.js');
var Food = require('./Food.js');
var Segment = require('./Segment.js');
var Game = require('./Game.js');
var SnakeList = require('./SnakeList.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

window.addEventListener('load', function() {
  snakeGame = new Game(canvas, context);
})

var restart = document.getElementById('restart-btn');

let snakeGame;

restart.addEventListener('click', instantiateGame);

function instantiateGame() {
  snakeGame.clearCanvas();
  snakeGame.instantiateFood();
  snakeGame.instantiateSnake(3);
  gameLoop();
}

function gameLoop() {
  setTimeout(function() {
    snakeGame.clearCanvas();
    snakeGame.drawFood();
    snakeGame.drawSnake();
    snakeGame.moveSnake();

    // console.log(snakeGame.snakeArray);
    requestAnimationFrame(gameLoop);
  }, 150);


}

function changeDirection(event) {
  snakeGame.changeDirection(event);
}

document.addEventListener('keydown', changeDirection);
