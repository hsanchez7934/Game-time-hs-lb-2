var Food = require('./Food.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.food = {};
    this.gameOver = false;
    this.isRunning = true;
    this.frameSpeed = 150;

    this.level = 'easy';
    this.deathCount = 0;
    this.deathPenalty = 10;

  }

  start(snake, instantiateGame) {
    document.getElementById('game-instructions').style.display = 'none';
    this.changeVar(snake);
    instantiateGame();
  }

  changeVar(snake) {
    if (this.level === 'medium') {
      this.frameSpeed = 100;
      snake.numSegsAdd = 3;
      snake.startLength = 3;
      this.deathPenalty = 20;
    } else if (this.level === 'difficult') {
      this.frameSpeed = 50;
      snake.numSegsAdd = 5;
      snake.startLength = 5;
      this.deathPenalty = 50;
    }
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  instantiateFood(xNum, yNum) {
    let x = this.randX(20, xNum - 40);
    let y = this.randY(20, yNum - 40);

    this.food = new Food(20, 20, x, y);
  }

  randX(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 20) * 20;
  }

  randY(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 20) * 20;
  }

  youDied(snake) {
    this.gameOver = true;
    this.deathCount++;
    snake.points -= this.deathPenalty;
  }

  checkKey(event, snake, gameLoop) {
    let keyNum = window.event.keyCode;

    if (keyNum === 37 || keyNum === 38 || keyNum === 39 || keyNum === 40) {
      snake.changeDirection(event);
    } else if (keyNum === 32) {
      if (this.isRunning === false) {
        this.isRunning = true;
        gameLoop();
      } else {
        this.isRunning = false;
      }
    }
  }

  countDeath() {
    document.getElementById('deaths').innerText = this.deathCount;
  }

  snakeDied() {
    document.getElementById('death-penalty').innerText = this.deathPenalty;
    document.getElementById('game-over-boundary').style.display = 'flex';
  }

}

module.exports = Game;
