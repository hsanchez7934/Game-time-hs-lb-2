var style = require('./style.css');
var Game = require('./Game.js');
var Snake = require('./Snake.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var restart = document.getElementById('restart-btn');
var refresh = document.getElementById('refresh-btn');
var easy  = document.getElementById('easy');
var medium  = document.getElementById('medium');
var difficult  = document.getElementById('difficult');

let snakeGame;
let snake;


window.addEventListener('load', function() {
  snakeGame = new Game(canvas, context);
  snake = new Snake(context);
  snakeGame.drawDesert(context);
})
easy.addEventListener('click', () => {
  snakeGame.start(snake, instantiateGame)
});
medium.addEventListener('click', () => {
  snakeGame.level = 'medium';
  snakeGame.start(snake, instantiateGame)
});
difficult.addEventListener('click', () => {
  snakeGame.level = 'difficult';
  snakeGame.start(snake, instantiateGame)
});
restart.addEventListener('click', displayInstructions);
refresh.addEventListener('click', () => {
  location.reload();
});
document.addEventListener('keydown', (event) => {
  event.preventDefault();
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
    snake.instantiate();
    snakeGame.instantiateFood(canvas.width, canvas.height);
    gameLoop();
  }
}

function gameLoop() {
  if (snakeGame.gameOver === false && snakeGame.isRunning === true) {
    setTimeout(function() {
      snakeGame.clearCanvas();
      snakeGame.drawDesert(context);
      snakeGame.food.draw(context);
      snake.drawSnake(context);
      snake.move();
      snakeGame.food.collision(canvas.width, canvas.height, snake, snakeGame);
      snake.addSegment();
      snake.outOfBounds(snakeGame);
      snake.eatSelf(snakeGame);
      snake.countPoints();
      snakeGame.countDeath();
      requestAnimationFrame(gameLoop);
    }
    , snakeGame.frameSpeed);
  } else if (snakeGame.gameOver === true) {
    snakeGame.snakeDied();
  }
}
