import { assert } from 'chai'
import { Deck } from '../deck.mjs';

describe('Deck', function() {
  describe('constructor()', function() {
    it('should have 52 cards', function(){
      let deck = new Deck();
	    assert.equal(deck.length, 52);
    });
  });

  describe('Get top card', function() {
    it('should be a random card', function(){
	    let deck = new Deck();
      deck.pop();
	    assert.equal(deck.length, 51);
    });
  });

  describe('Reset deck', function() {
    it('all cards should be put back into the pile', function(){
	    let deck = new Deck();
      deck.pop();
      deck.reset();
	    assert.equal(deck.length, 52);
    });
  });
});