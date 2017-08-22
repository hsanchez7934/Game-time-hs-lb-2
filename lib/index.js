var style = require('./style.css');
var Game = require('./Game.js');
var Snake = require('./Snake.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var restart = document.getElementById('restart-btn');
var easy  = document.getElementById('easy');
var medium  = document.getElementById('medium');
var difficult  = document.getElementById('difficult');

let snakeGame;
let snake;
let frameSpeed;
let level;


window.addEventListener('load', function() {
  snakeGame = new Game(canvas, context);
  snake = new Snake(context);
})
easy.addEventListener('click', () => {
  snakeGame.start(level, snake, frameSpeed, instantiateGame)
});
medium.addEventListener('click', () => {
  level = 'medium';
  snakeGame.start(level, snake, frameSpeed, instantiateGame)
});
difficult.addEventListener('click', () => {
  level = 'difficult';
  snakeGame.start(level, snake, frameSpeed, instantiateGame)
});
restart.addEventListener('click', displayInstructions);
document.addEventListener('keydown', () => {
  snakeGame.checkKey(event, snake, gameLoop)
});

function displayInstructions() {
  document.getElementById('game-over-boundary').style.display = 'none';
  document.getElementById('game-instructions').style.display = 'flex';
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
  if (snakeGame.gameOver === false && snakeGame.isRunning === true) {
    setTimeout(function() {
      snakeGame.clearCanvas();
      snakeGame.food.draw(context);
      snake.drawSnake();
      snake.move();
      snakeGame.foodCollision(canvas.width, canvas.height, snake);
      snake.addSegment();
      snakeGame.outOfBounds(snake);
      snakeGame.snakeCollision(snake);
      requestAnimationFrame(gameLoop);
    }
    , snakeGame.frameSpeed);
  } else if (snakeGame.gameOver === true) {
    document.getElementById('game-over-boundary').style.display = 'flex';
  }
}
