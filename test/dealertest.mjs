import { assert } from 'chai'
import { Card } from '../card.mjs';
import { Dealer } from '../dealer.mjs';

describe('Dealer', function() {
  describe('constructor()', function() {
    it('should be playing with a score of 0', function(){
      let dealer = new Dealer();
	    assert.equal(dealer.score, 0);
      assert.equal(dealer.playing, true);
    });
  });

  describe('change playing state', function() {
    it('should not be playing', function(){
      let dealer = new Dealer();
      dealer.playing = false;
	    assert.equal(dealer.playing, false);
    });
  });

  describe('give the dealer a card', function() {
    it('should affect their score', function(){
      let name = "Five of Spades";
      let value = 5;
      let card = new Card(name, value);
      let dealer = new Dealer();
      dealer.card = card;
	    assert.equal(dealer.score, 5);
    });
  });
});