const {assert} = require('chai');
const Square = require('../lib/Square.js');

describe('Square', () => {

  let square;

  beforeEach(() => {
    square = new Square(20, 20, 20, 20, '#000');
  });

  it('should take a height', () => {
    assert.equal(square.height, 20);
  });

  it('should take a width', () => {
    assert.equal(square.width, 20);
  });

  it('should take an x coordinate', () => {
    assert.equal(square.x, 20);
  });

  it('should take a y coordinate', () => {
    assert.equal(square.y, 20);
  });

})
