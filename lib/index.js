var style = require('./style.css');
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
let numSegs;
let frameSpeed;
let gameOver;
let appleDetected = false;
let segAddCount;

level1.addEventListener('click', startLevel1);
level2.addEventListener('click', startLevel2);
level3.addEventListener('click', startLevel3);


function startLevel1() {
  document.getElementById('game-instructions').style.display = 'none';
  numSegs = 1;
  frameSpeed = 150;
  gameOver = false;
  segAddCount = 0;
  instantiateGame();
}

function startLevel2() {
  document.getElementById('game-instructions').style.display = 'none';
  numSegs = 3;
  frameSpeed = 100;
  gameOver = false;
  segAddCount = 0;
  instantiateGame();
}

function startLevel3() {
  document.getElementById('game-instructions').style.display = 'none';
  numSegs = 5;
  frameSpeed = 50;
  gameOver = false;
  segAddCount = 0;
  instantiateGame();
}

restart.addEventListener('click', displayInstructions);

function displayInstructions() {
  document.getElementById('game-instructions').style.display = 'flex';
  gameOver = true;
  snakeGame.emptySnake();
  snakeGame.clearCanvas();
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
      snakeGame.foodCollision(appleDetected);
      if (snakeGame.appleDetected === true) {
        appleDetected = true;
      }
      snakeGame.outOfBounds();
      snakeGame.snakeCollision();
      requestAnimationFrame(gameLoop);
      if (appleDetected === true) {
        snakeGame.addSegment(numSegs, appleDetected, segAddCount);
        segAddCount++;
        if (segAddCount === numSegs) {
          snakeGame.appleDetected = false;
          segAddCount = 0;
          appleDetected = false;
        }
      }
    }, frameSpeed);

  }
}

function changeDirection(event) {
  snakeGame.changeDirection(event);
}

document.addEventListener('keydown', changeDirection);
