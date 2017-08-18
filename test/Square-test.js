const {assert} = require('chai');
const Square = require('../lib/Square.js');

describe('Square', function() {
  it('should take a height', function() {
    var square = new Square(20, 20, 20, 20, 'blue');

    assert.equal(square.height, 20);
  })

  it('should take a width', function() {
    var square = new Square(20, 20, 20, 20, 'blue');

    assert.equal(square.width, 20);
  })

  it('should take an x coordinate', function() {
    var square = new Square(20, 20, 20, 20, 'blue');

    assert.equal(square.x, 20);
  })

  it('should take a y coordinate', function() {
    var square = new Square(20, 20, 20, 20, 'blue');

    assert.equal(square.y, 20);
  })

})
