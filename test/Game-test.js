const {assert} = require('chai');
const Game = require('../lib/Game.js');
const Food = require('../lib/Food.js');
const Snake = require('../lib/Snake.js');

describe('Game', () => {

  let game;
  let canvas;
  let snake;

  beforeEach(() => {
    canvas = {
      width: 500,
      height: 500
    }

    game = new Game(canvas, context);

    snake = new Snake();

  });

  it('should be a function', () => {
    assert.isFunction(Game);
  });

  it('should instantiate a new game', () => {
    assert.isObject(game);
  });

  it('should start off with an empty food object', () => {
    assert.deepEqual(game.food, {});
  });

  it('should start off with gameover as false', () => {
    assert.equal(game.gameOver, false)
  });

  it('should start off with isRunning as true', () => {
    assert.equal(game.isRunning, true);
  });

  it('should start off with frameSpeed as 200', () => {
    assert.equal(game.frameSpeed, 200);
  });

  it('should start of as level easy', () => {
    assert.equal(game.level, 'easy');
  });

  it('should start off with 5 lives', () => {
    assert.equal(game.lives, 5);
  });

  it('should start off with deathPenalty as 10', () => {
    assert.equal(game.deathPenalty, 10);
  });

  it('should change snake properties when level is medium', () => {

    assert.equal(game.frameSpeed, 200);
    assert.equal(game.deathPenalty, 10);
    assert.equal(game.level, 'easy');

    assert.equal(snake.numSegsAdd, 1);
    assert.equal(snake.startLength, 1);

    game.level = 'medium';

    assert.equal(game.level, 'medium');

    game.changeVar(snake);
    assert.equal(game.frameSpeed, 150);
    assert.equal(game.deathPenalty, 20);

    assert.equal(snake.numSegsAdd, 3);
    assert.equal(snake.startLength, 3);
  })

  it('should change snake properties when level is difficult', () => {

    assert.equal(game.frameSpeed, 200);
    assert.equal(game.deathPenalty, 10);
    assert.equal(game.level, 'easy');

    assert.equal(snake.numSegsAdd, 1);
    assert.equal(snake.startLength, 1);

    game.level = 'difficult';

    assert.equal(game.level, 'difficult');

    game.changeVar(snake);
    assert.equal(game.frameSpeed, 100);
    assert.equal(game.deathPenalty, 50);

    assert.equal(snake.numSegsAdd, 5);
    assert.equal(snake.startLength, 5);
  })

  it('should instantiate a new food', () => {
    game.instantiateFood(300, 300);
    assert.instanceOf(game.food, Food);
  });

  it('should return a random number for x value', () => {
    let ranNum = game.randX();

    assert.isNumber(ranNum);
  })

  it('should return a random number for y value', () => {
    let ranNum = game.randY();

    assert.isNumber(ranNum);
  });

  it('should change game gameOver and lives properties', () => {
    // let snake = new Snake();

    assert.equal(game.gameOver, false);
    assert.equal(game.lives, 5);
    assert.equal(snake.points, 0);

    game.youDied(snake);

    assert.equal(game.gameOver, true);
    assert.equal(game.lives, 4);
    assert.equal(snake.points, -10);
  });

  it('should pause game', () => {

    let event = {
      keyCode: 32
    }

    let gameLoop = function() {};

    assert.equal(game.isRunning, true);
    game.isRunning = false;
    assert.equal(game.isRunning, false);

    game.checkKey(event, snake, gameLoop);

    assert.equal(game.isRunning, true);
  });

})
