const {assert} = require('chai');
const Food = require('../lib/Food.js');

describe('Food', function() {

  it('should take a height', function() {
    var food = new Food(20, 20, 20, 20);

    assert.equal(food.height, 20);
  })

  it('should take a width', function() {
    var food = new Food(20, 20, 20, 20);

    assert.equal(food.width, 20);
  })

  it('should take an x coordinate', function() {
    var food = new Food(20, 20, 20, 20);

    assert.equal(food.x, 20);
  })

  it('should take a y coordinate', function() {
    var food = new Food(20, 20, 20, 20);

    assert.equal(food.y, 20);
  })

  it('should start off as red in color', function() {
    var food = new Food(20, 20, 20, 20);

    assert.equal(food.color, '#f00');
  })

})
