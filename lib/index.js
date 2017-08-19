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
let gameOver;

level1.addEventListener('click', startLevel1);
level2.addEventListener('click', startLevel2);
level3.addEventListener('click', startLevel3);


function startLevel1() {
  document.getElementById('game-instructions').style.display = 'none';
  snakeGrow = 3;
  frameSpeed = 150;
  gameOver = false;
  instantiateGame();
}

function startLevel2() {
  document.getElementById('game-instructions').style.display = 'none';
  snakeGrow = 5;
  frameSpeed = 100;
  gameOver = false;
  instantiateGame();
}

function startLevel3() {
  document.getElementById('game-instructions').style.display = 'none';
  snakeGrow = 10;
  frameSpeed = 50;
  gameOver = false;
  instantiateGame();
}

restart.addEventListener('click', displayInstructions);

function displayInstructions() {
  document.getElementById('game-instructions').style.display = 'flex';
  gameOver = true;

}

function instantiateGame() {
  if (gameOver === false) {
    snakeGame.clearCanvas();
    snakeGame.instantiateFood();
    snakeGame.instantiateSnake(1);
    gameLoop();
  }
}

function gameLoop() {
  if (gameOver === false) {
    setTimeout(function() {
      snakeGame.clearCanvas();
      snakeGame.drawFood();
      snakeGame.drawSnake();
      snakeGame.moveSnake();
      requestAnimationFrame(gameLoop);
    }, frameSpeed);

  }
}

function changeDirection(event) {
  snakeGame.changeDirection(event);
}

document.addEventListener('keydown', changeDirection);
