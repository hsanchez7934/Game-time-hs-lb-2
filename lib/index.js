var style = require('./style.css');
var Game = require('./Game.js');
var Snake = require('./Snake.js');



var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

window.addEventListener('load', function() {
  snakeGame = new Game(canvas, context);
  snake = new Snake(context);
})

var restart = document.getElementById('restart-btn');
var easy  = document.getElementById('easy');
var medium  = document.getElementById('medium');
var difficult  = document.getElementById('difficult');

let snakeGame;
let snake;
let frameSpeed;

easy.addEventListener('click', startEasy);
medium.addEventListener('click', startMedium);
difficult.addEventListener('click', startDifficult);


function startEasy() {
  document.getElementById('game-instructions').style.display = 'none';
  frameSpeed = 150;
  instantiateGame();
}

function startMedium() {
  document.getElementById('game-instructions').style.display = 'none';
  frameSpeed = 100;
  snake.numSegsAdd = 3;
  snake.startLength = 3;
  instantiateGame();
}

function startDifficult() {
  document.getElementById('game-instructions').style.display = 'none';
  frameSpeed = 50;
  snake.numSegsAdd = 5;
  snake.startLength = 5;
  instantiateGame();
}

restart.addEventListener('click', displayInstructions);

function displayInstructions() {
  document.getElementById('game-over-boundary').style.display = 'none';
  document.getElementById('game-instructions').style.display = 'flex';
  // snakeGame.gameOver = true;
  snake.empty();
  snakeGame.clearCanvas();
  snakeGame.gameOver = false;
}

function instantiateGame() {
  if (snakeGame.gameOver === false) {
    snakeGame.clearCanvas();
    snakeGame.instantiateFood(canvas.width, canvas.height);
    snake.instantiate();
    gameLoop();
  }
}

function gameLoop() {
  if (snakeGame.gameOver === false) {
    setTimeout(function() {
      snakeGame.clearCanvas();
      snakeGame.drawFood();
      snake.drawSnake();
      snake.move();
      snakeGame.foodCollision(canvas.width, canvas.height, snake);
      snake.addSegment();
      snakeGame.outOfBounds(snake);
      snakeGame.snakeCollision(snake);
      requestAnimationFrame(gameLoop);
    }
    , frameSpeed);
  } else if (snakeGame.gameOver === true) {
    document.getElementById('game-over-boundary').style.display = 'flex';
  }
}

function changeDirection(event) {
  snake.changeDirection(event);
}

document.addEventListener('keydown', changeDirection);
