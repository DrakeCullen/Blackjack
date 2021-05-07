import { Hand } from './hand.mjs'

export class Player {
    constructor() {
        this._score = 0;
        this._playing = true;
        this._hand = new Hand();
    }

    set card(card) {
        this._hand.card = card;
        this._score += card.value;
    }

    set playing(value) { this._playing = false; }

    get score() { return this._score; }

    get playing() { return this._playing; }

    draw(canvas) { this._hand.draw(canvas, 300); }

    clear() {
        this._hand.clear();
        this._score = 0;
        this._playing = true;
    }
}


