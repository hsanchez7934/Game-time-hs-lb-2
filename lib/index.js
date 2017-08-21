var style = require('./style.css');
var Game = require('./Game.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

window.addEventListener('load', function() {
  snakeGame = new Game(canvas, context);
})

var restart = document.getElementById('restart-btn');
var easy  = document.getElementById('easy');
var medium  = document.getElementById('medium');
var difficult  = document.getElementById('difficult');

let snakeGame;

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
  snakeGame.numSegsAdd = 3;
  snakeGame.startLength = 3;
  instantiateGame();
}

function startDifficult() {
  document.getElementById('game-instructions').style.display = 'none';
  frameSpeed = 50;
  snakeGame.numSegsAdd = 5;
  snakeGame.startLength = 5;
  instantiateGame();
}

restart.addEventListener('click', displayInstructions);

function displayInstructions() {
  document.getElementById('game-over-boundary').style.display = 'none';
  document.getElementById('game-instructions').style.display = 'flex';
  // snakeGame.gameOver = true;
  snakeGame.emptySnake();
  snakeGame.clearCanvas();
  snakeGame.gameOver = false;
}

function instantiateGame() {
  if (snakeGame.gameOver === false) {
    snakeGame.clearCanvas();
    snakeGame.instantiateFood(canvas.width, canvas.height);
    snakeGame.instantiateSnake();
    gameLoop();
  }
}

function gameLoop() {
  if (snakeGame.gameOver === false) {
    setTimeout(function() {
      snakeGame.clearCanvas();
      snakeGame.drawFood();
      snakeGame.drawSnake();
      snakeGame.moveSnake();
      snakeGame.foodCollision(canvas.width, canvas.height);
      snakeGame.addSegment();
      snakeGame.outOfBounds();
      snakeGame.snakeCollision();
      requestAnimationFrame(gameLoop);
    }
    , frameSpeed);
  } else if (snakeGame.gameOver === true) {
    document.getElementById('game-over-boundary').style.display = 'flex';
  }
}

function changeDirection(event) {
  snakeGame.changeDirection(event);
}

document.addEventListener('keydown', changeDirection);
