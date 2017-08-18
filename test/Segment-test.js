const {assert} = require('chai');
const Segment = require('../lib/Segment.js');

describe('Segment', function() {
  it('should take a width', function() {
    var segment = new Segment(20, 20, 20, 20);

    assert.equal(segment.width, 20);
  })

  it('should take a height', function() {
    var segment = new Segment(20, 20, 20, 20);

    assert.equal(segment.height, 20);
  })

  it('should take an x coordinate', function() {
    var segment = new Segment(20, 20, 20, 20);

    assert.equal(segment.x, 400);
  })

  it('should take a y coordinate', function() {
    var segment = new Segment(20, 20, 20, 20);

    assert.equal(segment.y, 400);
  })

  it('should start off moving right', function() {
    var segment = new Segment(20, 20, 20, 20);

    assert.equal(segment.direction, 'right');
  })

  it('should start off with previous and next as null', function() {
    var segment = new Segment(20, 20, 20, 20);

    assert.equal(segment.previous, null);
    assert.equal(segment.next, null);
  })

  it('should start off as green in color', function() {
    var segment = new Segment(20, 20, 20, 20);

    assert.equal(segment.color, '#0f0')
  })
})
