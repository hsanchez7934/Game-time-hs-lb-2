const {assert} = require('chai');
const Food = require('../lib/Food.js');

describe('Food', function() {

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

})
