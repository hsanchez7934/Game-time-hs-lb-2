const {assert} = require('chai');
const Game = require('../lib/Game.js');
const Food = require('../lib/Food.js');
const Segment = require('../lib/Segment.js');

describe('Game', function() {
  it('should be a function', function() {
    assert.isFunction(Game);
  });

  it('should instantiate a new game', function() {
    var game = new Game();
    assert.isObject(game);
  });

  it('should start off with an empty snake array', function() {
    var game = new Game();
    assert.deepEqual(game.snakeArray, []);
  });

  it('should take canvas as an argument', function() {
    var game = new Game('canvas');
    assert.equal(game.canvas, 'canvas');
  });

  it('should take context as an argument', function() {
    var game = new Game('canvas', 'context');
    assert.equal(game.context, 'context');
  });

  it.skip('should contain a method to clear the canvas', function() {
    var game = new Game();
    assert.isFunction(game.clearCanvas(), true)
  });

  it.skip('should instantiate food', function() {
    var game = new Game();
    var x = Math.random() * (this.canvas.width - 30);
    var y = Math.random() * (this.canvas.height - 30);
    var food = new Food(20, 20, x, y);
    assert.equal(game.instantiateFood(), );
    // initiate food and test for it to move, if it moves it shouldn't equal
    // coordinates
  })

  it.skip('should instantiate a new snake', function(){
    var game = new Game();
    var snake = game.instantiateSnake(3);
    assert.isObject(snake);
  })

  it.skip('should move the snake in different directions', function() {
    // set timeout, give the snake original coordinates, hit right, wait a few millisec's
    // and new coordinates should be expected
  })
})
