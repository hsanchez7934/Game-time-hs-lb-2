const {assert} = require('chai');
const Segment = require('../lib/Segment.js');

describe('Segment', function() {
  let segment;

  beforeEach(() => {
    segment = new Segment(20, 20, 20, 20, 1);
  });

  it('should take a width', function() {
    assert.equal(segment.width, 20);
  });

  it('should take a height', function() {
    assert.equal(segment.height, 20);
  });

  it('should take an x coordinate', function() {
    assert.equal(segment.x, 20);
  });

  it('should take a y coordinate', function() {
    assert.equal(segment.y, 20);
  });

  it('should take data as an argument', () => {
    assert.equal(segment.data, 1);
  });

  it('should start off moving right', function() {
    assert.equal(segment.direction, 'right');
  });

  it('should start off as green in color', function() {
    assert.equal(segment.color, '#0f0')
  });
})
