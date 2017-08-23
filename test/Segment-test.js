const {assert} = require('chai');
const Segment = require('../lib/Segment.js');

describe('Segment', function() {
  let segment;

  beforeEach(() => {
    segment = new Segment(20, 20, 20, 20, 1);
  });

  it('should take a width', () => {
    assert.equal(segment.width, 20);
  });

  it('should take a height', () => {
    assert.equal(segment.height, 20);
  });

  it('should take an x coordinate', () => {
    assert.equal(segment.x, 20);
  });

  it('should take a y coordinate', () => {
    assert.equal(segment.y, 20);
  });

  it('should take data as an argument', () => {
    assert.equal(segment.data, 1);
  });

  it('should start off moving right', () => {
    assert.equal(segment.direction, 'right');
  });

  it('should start off as green in color', () => {
    assert.equal(segment.color, '#0f0')
  });
})
