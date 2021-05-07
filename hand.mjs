import { Card } from './card.mjs'

export class Hand {
    constructor() { this._cards = []; }

    set card(card) { this._cards.push(card); }

    draw(canvas, y, player = true) {
        let i = 0;
        for (let j = 0; j < this._cards.length; j++) {
            let cardImg = new Image();
            cardImg.src = (player || j == 0) ? `imgs/${this._cards[j].name}.png` : 'imgs/Back.png';
            cardImg.onload = function () {
                canvas.drawImage(cardImg, i, y);
                i += 100;
            }
        }
    }

    collision(mouseX, mouseY) {
        for (let card of this._cards) {
            if (card.collision(mouseX, mouseY)) {
                console.log(card.name)
                return true;
            }
        }
        return false;
    }

    clear() { this._cards.splice(0, this._cards.length); }
}
