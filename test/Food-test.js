const {assert} = require('chai');
const Food = require('../lib/Food.js');

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

  it('should start off as red in color', () => {
    assert.equal(food.color, '#f00');
  });

  it('should change x and y values of food', () => {
    assert.equal(food.x, 20);
    assert.equal(food.y, 20);

    food.move(50, 50);

    assert.equal(food.x, 50);
    assert.equal(food.y, 50);
  });

})
