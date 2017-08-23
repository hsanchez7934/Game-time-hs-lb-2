const {assert} = require('chai');
const Game = require('../lib/Game.js');
const Food = require('../lib/Food.js');
const Segment = require('../lib/Segment.js');
const Snake = require('../lib/Snake.js');
const jsdom = require('jsdom');

jsdom()

const dom = new JSDOM('')

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

  it('should start of with property points as 0', () => {
    assert.equal(snake.points, 0);
  })

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

    assert.equal(segment.x, 20);
    assert.equal(segment.y, 60);
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

    assert.equal(segment.x, 20);
    assert.equal(segment.y, 60);
    snake.move();
    assert.equal(segment.x, 0);
    assert.equal(segment.y, 60);
  });

  it('should be able to move up', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    segment.direction = 'up';
    assert.equal(segment.direction, 'up');

    assert.equal(segment.x, 20);
    assert.equal(segment.y, 60);
    snake.move();
    assert.equal(segment.x, 20);
    assert.equal(segment.y, 40);
  });

  it('should be able to move down', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    segment.direction = 'down';
    assert.equal(segment.direction, 'down');

    assert.equal(segment.x, 20);
    assert.equal(segment.y, 60);
    snake.move();
    assert.equal(snake.snakeArray[0].x, 20);
    assert.equal(snake.snakeArray[0].y, 80);

  });

  it('should move last item from snake array and move it to the front', () => {
    snake.instantiate();
    snake.instantiate();
    snake.instantiate();

    for (var i = 0; i < snake.snakeArray.length; i++) {
      assert.instanceOf(snake.snakeArray[i], Segment);
    }

    assert.equal(snake.snakeArray.length, 3);

    let snakeSegment1 = snake.snakeArray[0];
    let snakeSegment2 = snake.snakeArray[1];
    let snakeSegment3 = snake.snakeArray[2];

    snakeSegment2.data = 2;
    snakeSegment3.data = 3;

    assert.equal(snakeSegment1.data, 1);
    assert.equal(snakeSegment2.data, 2);
    assert.equal(snakeSegment3.data, 3);

    snake.tailToHead(snakeSegment3);

    snakeSegment1 = snake.snakeArray[0];
    snakeSegment2 = snake.snakeArray[1];
    snakeSegment3 = snake.snakeArray[2];

    assert.equal(snakeSegment1.data, 3);
    assert.equal(snakeSegment2.data, 1);
    assert.equal(snakeSegment3.data, 2);
  })

  it('should be able to change direction', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.equal(segment.direction, 'right');

    let event = {
      keyCode: 38
    }

    let keyNum = event.keyCode;

    snake.changeDirection(keyNum);
    assert.equal(segment.direction, 'up');
  });

  it.skip('should add segments to the snakeArray', () => {

  });

  it('should increase points and segAddCount by 1', () => {
    assert.equal(snake.segAddCount, 0);
    assert.equal(snake.points, 0)

    snake.increaseScore();
    snake.increaseScore();
    snake.increaseScore();

    assert.equal(snake.segAddCount, 3);
    assert.equal(snake.points, 3);
  });

  it('should reset segAddCount to 0 and appleDetected to false', () => {
    assert.equal(snake.segAddCount, 0);
    assert.equal(snake.appleDetected, false);

    snake.segAddCount = 5;
    snake.appleDetected = true;

    assert.equal(snake.segAddCount, 5);
    assert.equal(snake.appleDetected, true);

    snake.resetCounter();

    assert.equal(snake.segAddCount, 0);
    assert.equal(snake.appleDetected, false);
  });

});
