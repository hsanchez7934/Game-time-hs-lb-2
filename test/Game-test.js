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
  })

  it('should start off with appleDetected property as false', () => {
    var game = new Game();

    assert.equal(game.appleDetected, false)
  })

  it('should start off with gameOver property as false', () => {
    var game = new Game();

    assert.equal(game.gameOver, false);
  })

  it('should instantiate a new snake when passed in a length', () => {
    let game = new Game();

    game.instantiateSnake(3);

    for (var i = 0; i < game.snakeArray.length; i++) {
      assert.instanceOf(game.snakeArray[i], Segment);
    }

    assert.equal(game.snakeArray.length, 3);
  })

  it('should move the snake in different directions', function() {
    // set timeout, give the snake original coordinates, hit right, wait a few millisec's
    // and new coordinates should be expected
    var game = new Game();

    game.instantiateSnake(3);
    for (var i = 0; i < game.snakeArray.length; i++) {
      assert.equal(game.snakeArray[i].direction, 'down');
    }

    assert.equal(game.snakeArray.length, 3);

    if (game.snakeArray[0].direction === 'right') {

    }
  })

// test to make sure it grows whenever it eats food

})
