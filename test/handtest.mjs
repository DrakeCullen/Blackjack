import { assert } from 'chai'
import { Hand } from '../hand.mjs';
import { Card } from '../card.mjs';


describe('Hand', function() {
  describe('constructor()', function() {
    it('should have 0 cards', function(){
      let hand = new Hand();
	    assert.equal(hand.length, 0);
    });
  });

  describe('Add a card', function() {
    it('should have 1 card', function(){
      let name = "Five of Spades";
      let value = 5;
      let card = new Card(name, value);
	    let hand = new Hand();
      hand.card = card;
	    assert.equal(hand.length, 1);
    });
  });

  describe('Clear', function() {
    it('should reset hand', function(){
      let name = "Five of Spades";
      let value = 5;
      let card = new Card(name, value);
	    let hand = new Hand();
      hand.card = card;
      hand.clear();
	    assert.equal(hand.length, 0);
    });
  });
});