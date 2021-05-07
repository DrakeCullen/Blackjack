import { Player } from './player.mjs'

export class Dealer extends Player {
    constructor() {
        super();
    }

    draw(canvas, end) { this._hand.draw(canvas, 50, end);   }

    play(otherPlaying, otherScore, deck) {
        if (!otherPlaying && this._score >= otherScore)
            this._playing = false;
        else if (!otherPlaying && this._score < otherScore)
            this.card = deck.pop();
        else if (this._score < 17 || this._score < otherScore)
            this.card = deck.pop();
        else
            this._playing = false;
    }
}


