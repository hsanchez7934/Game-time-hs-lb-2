var Food = require('./Food.js');

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.food = {};
    this.gameOver = false;
    this.isRunning = true;
    this.frameSpeed = 200;
    this.level = 'easy';
    this.lives = 5;
    this.deathPenalty = 10;

  }

  drawDesert(context) {
    let desert = document.getElementById('desert');

    context.drawImage(desert, 0, 0, this.canvas.width, this.canvas.height);
  }

  start(snake, instantiateGame) {
    document.getElementById('game-instructions').style.display = 'none';
    this.changeVar(snake);
    instantiateGame();
  }

  changeVar(snake) {
    if (this.level === 'medium') {
      this.frameSpeed = 150;
      snake.numSegsAdd = 3;
      snake.startLength = 3;
      this.deathPenalty = 20;
    } else if (this.level === 'difficult') {
      this.frameSpeed = 100;
      snake.numSegsAdd = 5;
      snake.startLength = 5;
      this.deathPenalty = 50;
    }
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  instantiateFood(xNum, yNum) {
    let x = this.randX(80, xNum - 160);
    let y = this.randY(80, yNum - 160);

    this.food = new Food(80, 80, x, y);
  }

  randX(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 20) * 20;
  }

  randY(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 20) * 20;
  }

  youDied(snake) {
    this.gameOver = true;
    this.lives--;
    snake.points -= this.deathPenalty;
  }

  checkKey(event, snake, gameLoop) {
    let keyNum = event.keyCode;

    if (keyNum === 37 || keyNum === 38 || keyNum === 39 || keyNum === 40) {
      snake.changeDirection(keyNum);
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
    document.getElementById('deaths').innerText = this.lives;
  }

  snakeDied() {
    if (this.lives !== 0) {
      document.getElementById('death-penalty').innerText = this.deathPenalty;
      // document.querySelector('#zero-lives-screen')
      document.getElementById('game-over-boundary').style.display = 'flex';
    } else {
      document.getElementById('zero-lives-screen').style.display = 'flex';
    }
  }

}

module.exports = Game;
