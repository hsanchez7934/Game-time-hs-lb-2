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
let numSegs;
let frameSpeed;
let segAddCount;

easy.addEventListener('click', startEasy);
medium.addEventListener('click', startMedium);
difficult.addEventListener('click', startDifficult);


function startEasy() {
  document.getElementById('game-instructions').style.display = 'none';
  numSegs = 1;
  frameSpeed = 150;
  segAddCount = 0;
  instantiateGame();
}

function startMedium() {
  document.getElementById('game-instructions').style.display = 'none';
  numSegs = 3;
  frameSpeed = 100;
  segAddCount = 0;

  instantiateGame();
}

function startDifficult() {
  document.getElementById('game-instructions').style.display = 'none';
  numSegs = 5;
  frameSpeed = 50;
  segAddCount = 0;

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
    snakeGame.instantiateFood();
    snakeGame.instantiateSnake(1);
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
      snakeGame.foodCollision();
      snakeGame.outOfBounds();
      snakeGame.snakeCollision();
      requestAnimationFrame(gameLoop);
      if (snakeGame.appleDetected === true) {
        snakeGame.addSegment(numSegs, segAddCount);
        segAddCount++;
      } else if (segAddCount === numSegs) {
        segAddCount = 0;
        snakeGame.appleDetected = false;
      }
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
