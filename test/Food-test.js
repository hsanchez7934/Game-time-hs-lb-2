const {assert} = require('chai');
const Food = require('../lib/Food.js');
const Snake = require('../lib/Snake.js');
const Segment = require('../lib/Segment.js');
const Game = require('../lib/Game.js');

describe('Food', () => {

  let food;

  beforeEach(() => {
    food = new Food(20, 20, 20, 20);
  });

  it('should take a height', () => {
    assert.equal(food.height, 20);
  });

  it('should take a width', () => {
    assert.equal(food.width, 20);
  });

  it('should take an x coordinate', () => {
    assert.equal(food.x, 20);
  });

  it('should take a y coordinate', () => {
    assert.equal(food.y, 20);
  });

  it('should contain an array of 7 images', () => {
    assert.isArray(food.imgArray);
    assert.deepEqual(food.imgArray.length, 9);
  });

  it('img property should contain value of imgArry item 1', () => {
    assert.isArray(food.imgArray);
    assert.equal(food.imgArray.length, 8);
    assert.equal(food.img, food.imgArray[0]);
  });

  it('should change x and y values of food', () => {
    assert.equal(food.x, 20);
    assert.equal(food.y, 20);

    food.move(50, 50);

    assert.equal(food.x, 50);
    assert.equal(food.y, 50);
  });

  it('should detect if food has collided with snake', () => {

    food = new Food(60, 60, 60, 120);

    assert.equal(food.x, 60);
    assert.equal(food.y, 120);
    assert.equal(food.width, 60);
    assert.equal(food.height, 60);

    let newSnake = new Snake();

    assert.instanceOf(newSnake, Snake);

    newSnake.instantiate();

    let head = newSnake.snakeArray[0];

    assert.instanceOf(head, Segment);
    assert.equal(newSnake.snakeArray.length, 1);
    assert.equal(head.x, 60);
    assert.equal(head.y, 120);

    let game = new Game();

    assert.instanceOf(game, Game);

    let canvas = {
      height: 300,
      width: 300
    }

    assert.equal(newSnake.appleDetected, false);

    food.collision(canvas.width, canvas.height, newSnake, game);
    assert.equal(newSnake.appleDetected, true);
  });

})
