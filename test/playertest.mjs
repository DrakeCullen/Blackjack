import { assert } from 'chai'
import { Card } from '../card.mjs';
import { Player } from '../player.mjs';

describe('Player', function() {
  describe('constructor()', function() {
    it('should be playing with a score of 0', function(){
      let player = new Player();
	    assert.equal(player.score, 0);
      assert.equal(player.playing, true);
    });
  });

  describe('change playing state', function() {
    it('should not be playing', function(){
      let player = new Player();
      player.playing = false;
	    assert.equal(player.playing, false);
    });
  });

  describe('give the player a card', function() {
    it('should affect their score', function(){
      let name = "Five of Spades";
      let value = 5;
      let card = new Card(name, value);
      let player = new Player();
      player.card = card;
	    assert.equal(player.score, 5);
    });
  });
});