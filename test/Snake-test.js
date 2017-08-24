const {assert} = require('chai');
const Game = require('../lib/Game.js');
const Segment = require('../lib/Segment.js');
const Snake = require('../lib/Snake.js');
const jsdom = require('jsdom-global');

jsdom()

describe('Snake', () => {
  let snake;

  beforeEach(() => {
    snake = new Snake();
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

    assert.equal(segment.x, 60);
    assert.equal(segment.y, 120);
    snake.move();
    assert.equal(segment.x, 120);
    assert.equal(segment.y, 120);
  });

  it('should be able to move left', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    segment.direction = 'left';
    assert.equal(segment.direction, 'left');

    assert.equal(segment.x, 60);
    assert.equal(segment.y, 120);
    snake.move();
    assert.equal(segment.x, 0);
    assert.equal(segment.y, 120);
  });

  it('should be able to move up', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    segment.direction = 'up';
    assert.equal(segment.direction, 'up');

    assert.equal(segment.x, 60);
    assert.equal(segment.y, 120);
    snake.move();
    assert.equal(segment.x, 60);
    assert.equal(segment.y, 60);
  });

  it('should be able to move down', () => {

    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.isObject(segment);
    segment.direction = 'down';
    assert.equal(segment.direction, 'down');

    assert.equal(segment.x, 60);
    assert.equal(segment.y, 120);
    snake.move();
    assert.equal(segment.x, 60);
    assert.equal(segment.y, 180);

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

  it('should be able to change direction to left', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.equal(segment.direction, 'right');
    segment.direction = 'down';
    assert.equal(segment.direction, 'down');

    let event = {
      keyCode: 37
    }

    let keyNum = event.keyCode;

    snake.changeDirection(keyNum);
    assert.equal(segment.direction, 'left');
  });

  it('should be able to change direction to right', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.equal(segment.direction, 'right');
    segment.direction = 'up';
    assert.equal(segment.direction, 'up');

    let event = {
      keyCode: 39
    }

    let keyNum = event.keyCode;

    snake.changeDirection(keyNum);
    assert.equal(segment.direction, 'right');
  });

  it('should be able to change direction to up', () => {
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

  it('should be able to change direction to down', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let segment = snake.snakeArray[0];

    assert.equal(segment.direction, 'right');

    let event = {
      keyCode: 40
    }

    let keyNum = event.keyCode;

    snake.changeDirection(keyNum);
    assert.equal(segment.direction, 'down');
  });


  it('should add segments to the snakeArray', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    snake.numSegsAdd = 2;
    snake.segAddCount = 1;
    snake.appleDetected = true;

    snake.addSegment();
    assert.equal(snake.snakeArray.length, 2);
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

  it('if snake head direction is right should create new seg to the right of head', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let head = snake.snakeArray[0];
    let length = snake.snakeArray.length;

    let newSeg = snake.newSeg(head.direction, head, length);

    assert.instanceOf(newSeg, Segment);

    assert.equal(newSeg.width, 60);
    assert.equal(newSeg.height, 60);
    assert.equal(newSeg.x, 120);
    assert.equal(newSeg.y, 120);
    assert.equal(newSeg.direction, 'right');

  })

  it('if snake head direction is left should create new seg to the left of head', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let head = snake.snakeArray[0];

    head.direction = 'left';
    assert.equal(head.direction, 'left');

    let length = snake.snakeArray.length;

    let newSeg = snake.newSeg(head.direction, head, length);

    assert.instanceOf(newSeg, Segment);

    assert.equal(newSeg.width, 60);
    assert.equal(newSeg.height, 60);
    assert.equal(newSeg.x, 0);
    assert.equal(newSeg.y, 120);
    assert.equal(newSeg.direction, 'left');

  });

  it('if snake head direction is up should create new seg to the bottom of head', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let head = snake.snakeArray[0];

    head.direction = 'up';
    assert.equal(head.direction, 'up');

    let length = snake.snakeArray.length;

    let newSeg = snake.newSeg(head.direction, head, length);

    assert.instanceOf(newSeg, Segment);

    assert.equal(newSeg.width, 60);
    assert.equal(newSeg.height, 60);
    assert.equal(newSeg.x, 60);
    assert.equal(newSeg.y, 60);
    assert.equal(newSeg.direction, 'up');

  });

  it('if snake head direction is down should create new seg to the top of head', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let head = snake.snakeArray[0];

    head.direction = 'down';
    assert.equal(head.direction, 'down');

    let length = snake.snakeArray.length;

    let newSeg = snake.newSeg(head.direction, head, length);

    assert.instanceOf(newSeg, Segment);

    assert.equal(newSeg.width, 60);
    assert.equal(newSeg.height, 60);
    assert.equal(newSeg.x, 60);
    assert.equal(newSeg.y, 180);
    assert.equal(newSeg.direction, 'down');

  });

  it('should detect if snake is out of bounds', () => {
    snake.instantiate();
    assert.instanceOf(snake.snakeArray[0], Segment);
    assert.equal(snake.snakeArray.length, 1);

    let newSnake = snake.snakeArray[0];

    assert.equal(newSnake.x, 60);
    assert.equal(newSnake.y, 120);

    newSnake.x = -1;
    newSnake.y = -1;

    assert.equal(newSnake.x, -1);
    assert.equal(newSnake.y, -1);


    let canvas = {
      height: 300,
      width: 300
    }

    let context = {};

    let game = new Game(canvas, context);

    assert.instanceOf(game, Game);
    assert.equal(game.canvas.width, 300);
    assert.equal(game.canvas.height, 300);
    assert.equal(game.gameOver, false);
    assert.equal(game.lives, 5);
    assert.equal(game.deathPenalty, 5);

    snake.outOfBounds(game);
    assert.equal(game.gameOver, true);
    assert.equal(game.lives, 4);
    assert.equal(snake.points, -5);
  })

  it('should detect if snake eats itself', () => {
    for (let i = 0; i < 10; i++) {
      snake.instantiate();
      assert.instanceOf(snake.snakeArray[i], Segment);
    }

    assert.equal(snake.snakeArray.length, 10);

    let head = snake.snakeArray[0];
    let snakeSeg = snake.snakeArray[8];

    assert.equal(head.x, 60);
    assert.equal(head.y, 120);
    assert.equal(snakeSeg.x, 60);
    assert.equal(snakeSeg.y, 120);

    head.x = 100;
    head.y = 150;

    snakeSeg.x = 100;
    snakeSeg.y = 150;

    assert.equal(head.x, 100);
    assert.equal(head.y, 150);
    assert.equal(snakeSeg.x, 100);
    assert.equal(snakeSeg.y, 150);

    let canvas = {
      height: 300,
      width: 300
    }

    let context = {};

    let game = new Game(canvas, context);

    assert.instanceOf(game, Game);
    assert.equal(game.canvas.width, 300);
    assert.equal(game.canvas.height, 300);
    assert.equal(game.gameOver, false);
    assert.equal(game.lives, 5);
    assert.equal(game.deathPenalty, 5);

    snake.eatSelf(game);
    assert.equal(game.gameOver, true);
    assert.equal(game.lives, 4);
    assert.equal(snake.points, -5);
  })
});
