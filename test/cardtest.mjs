import { assert } from 'chai'
import { Card } from '../card.mjs';

describe('Card', function() {
  describe('constructor()', function() {
    it('should be the initial values', function(){
	    let name = "Five of Spades";
      let value = 5;
      let card = new Card(name, value);
	    assert.equal(name, card.name);
      assert.equal(value, card.value);
    });
  });

  describe('set coordinates()', function() {
    it('should be the updated values', function(){
	    let name = "Five of Spades";
      let value = 5;
      let x = 520;
      let y = 300;
      let card = new Card(name, value);
      card.x = x;
      card.y = y;
	    assert.equal(x, card.x);
      assert.equal(y, card.y);
    });
  });
});