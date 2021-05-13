import { Card } from './card.mjs'

export class Deck {
    constructor() {
        this._suit = ["Hearts", "Diamonds", "Spades", "Clubs"];
        this._values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "King", "Queen"];
        this._deck = [];
        this.createDeck();
    }

    createDeck() {
        for (let i = 0; i < this._suit.length; i++)
            for (let j = 0; j < this._values.length; j++)
                this._deck.push(new Card(`${this._values[j]} Of ${this._suit[i]}`, j > 8 ? 10 : j + 1));
        this.shuffle();
    }

    shuffle() {
        for (let i = this._deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this._deck[i];
            this._deck[i] = this._deck[j];
            this._deck[j] = temp;
        }
    }

    pop() { return this._deck.pop(); }

    draw(canvas) {
        let cardImg = new Image();
        cardImg.src = 'imgs/Back.png';
        cardImg.onload = function () {
            canvas.drawImage(cardImg, 400, 178);
        }
    }

    reset() {
        this._deck.splice(0, this._deck.length);
        this.createDeck();
    }

    get length() { return this._deck.length; }
}

