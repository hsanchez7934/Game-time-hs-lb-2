var style = require('./style.css');
var Square = require('./Square.js');
var Food = require('./Food.js');
var Segment = require('./Segment.js');
var Game = require('./Game.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

window.addEventListener('load', function() {
  snakeGame = new Game(canvas, context);
})

var restart = document.getElementById('restart-btn');
var level1  = document.getElementById('level1');
var level2  = document.getElementById('level2');
var level3  = document.getElementById('level3');



let snakeGame;
let snakeGrow;
let frameSpeed;

restart.addEventListener('click', instantiateGame);

function instantiateGame() {
  snakeGame.clearCanvas();
  snakeGame.instantiateFood();
  snakeGame.instantiateSnake();
  gameLoop();
}

function gameLoop() {
  setTimeout(function() {
    snakeGame.clearCanvas();
    snakeGame.drawFood();
    snakeGame.drawSnake();
    snakeGame.moveSnake();
    requestAnimationFrame(gameLoop);
  }, 150);


}

function changeDirection(event) {
  snakeGame.changeDirection(event);
}

document.addEventListener('keydown', changeDirection);
