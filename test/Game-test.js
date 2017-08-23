const {assert} = require('chai');
const Game = require('../lib/Game.js');
const Food = require('../lib/Food.js');
const Segment = require('../lib/Segment.js');



describe('Game', () => {

  let game;
  let canvas;

  beforeEach(() => {
    canvas = {
      width: 500,
      height: 500
    }

    game = new Game(canvas, context);
  });

  it('should be a function', () => {
    assert.isFunction(Game);
  });

  it('should instantiate a new game', () => {
    assert.isObject(game);
  });

  it('should start off with an empty food object', () => {
    assert.deepEqual(game.food, {});
  });

  it('should start off with gameover as false', () => {
    assert.equal(game.gameOver, false)
  });

  it('should start off with isRunning as true', () => {
    assert.equal(game.isRunning, true);
  });

  it('should start off with frameSpeed as 150', () => {
    assert.equal(game.frameSpeed, 150);
  });

  it('should start of as level easy', () => {
    assert.equal(game.level, 'easy');
  });

  it('should start off with deathCount as 0', () => {
    assert.equal(game.deathCount, 0);
  });

  it('should start off with deathPenalty as 10', () => {
    assert.equal(game.deathPenalty, 10);
  });

// test to make sure it grows whenever it eats food

})
