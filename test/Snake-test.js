const {assert} = require('chai');
const Game = require('../lib/Game.js');
const Food = require('../lib/Food.js');
const Segment = require('../lib/Segment.js');
const Snake = require('../lib/Snake.js');
const jsdom = require('jsdom-global');

jsdom()

describe('Snake', () => {
    let snake;

  beforeEach(() => {
    snake = new Snake(context);
  })

  it('should be a function', () => {
    assert.isFunction(Snake);
  });

  it('should start off with an empty snake array', () => {
    assert.deepEqual(snake.snakeArray, []);
  });

  it('should start off with appleDetected as false', () => {
    assert.equal(snake.appleDetected, false);
  });

  it('should start off with segAddCount as 0', () => {
    assert.equal(snake.segAddCount, 0);
  });

  it('should start off with numSegsAdd as 1', () => {
    assert.equal(snake.numSegsAdd, 1);
  });

  it('should start off with a startLength of 1', () => {
    assert.equal(snake.startLength, 1);
  });

  it('should be able to pass in context as a property', () => {
    assert.equal(snake.context, context);
  });

  it('should contain method to clear the snake array and reset to empty', () => {
    snake.instantiate();
    assert.equal(snake.snakeArray.length, 1);
    snake.empty();
    assert.equal(snake.snakeArray.length, 0);
  });

  it('should contain method to instantiate a snake', () => {
    snake.instantiate();
    for (var i = 0; i < snake.snakeArray.length; i++) {
      assert.instanceOf(snake.snakeArray[i], Segment);
    }
    assert.equal(snake.snakeArray.length, 1);
  });

  it('should be able to move right', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    assert.equal(segment.direction, 'right');

    snake.move();
    assert.equal(segment.x, 40);
    assert.equal(segment.y, 60);
  });

  it('should be able to move left', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    segment.direction = 'left';
    assert.equal(segment.direction, 'left');

    snake.move();
    assert.equal(snake.snakeArray[0].x, 0);
    assert.equal(snake.snakeArray[0].y, 60);
  });

  it('should be able to move up', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    segment.direction = 'up';
    assert.equal(segment.direction, 'up');

    snake.move();
    assert.equal(snake.snakeArray[0].x, 20);
    assert.equal(snake.snakeArray[0].y, 40);
  });

  it('should be able to move down', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    segment.direction = 'down';
    assert.equal(segment.direction, 'down');

    snake.move();
    assert.equal(snake.snakeArray[0].x, 20);
    assert.equal(snake.snakeArray[0].y, 80);

  });

  it('should be able to change direction', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];
    assert.equal(segment.direction, 'right');

    snake.changeDirection();
    assert.equal(segment.direction, 'left');
  });

  it('should add segments to the snakeArray', () => {
    
  })
});
