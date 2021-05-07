import { Dealer } from './dealer.mjs';
import { Deck } from './deck.mjs'
import { Player } from './player.mjs'

class Game {
    constructor() {
        this._mouse = {
            x: null,
            y: null,
        }
        const me = this;
        this._deck = new Deck();
        this._player = new Player();
        this._dealer = new Dealer();
        this._playerTurn = true;
        this._end = false;
        this.createCanvas();
        this.initializeGame(me);
        this.clickDetect(me);
    }

    createCanvas() {
        this._canvas = document.getElementById('canvas');
        this._ctx = canvas.getContext('2d');
        this._canvas.width = 800;
        this._canvas.height = 500;
        this._ctx.fillStyle = 'RGB(21,88,67)';
        this._ctx.fillRect(0, 0, canvas.width, canvas.height);
        this._canvas.style = "position:absolute;  top:0;bottom:0;right:0;left:0; margin:auto";
        this._canvasPosition = this._canvas.getBoundingClientRect();
    }

    createButtons(me) {
        this._hitX = 270;
        this._hitY = 196;
        this._stayX = 500;
        this._hit = new Image();
        this._hit.src = 'imgs/button_hit.png';
        this._stay = new Image();
        this._stay.src = 'imgs/button_stay.png'
        this._hit.onload = function () {
            me._ctx.drawImage(me._hit, me._hitX, me._hitY, me._hit.width / 1.5, me._hit.height / 1.5);
        }
        this._stay.onload = function () {
            me._ctx.drawImage(me._stay, me._stayX, me._hitY, me._stay.width / 1.5, me._stay.height / 1.5);
        }
    }

    hitDetect(me) { return (me._mouse.x >= me._hitX && me._mouse.x <= me._hitX + me._hit.width / 1.5 && me._mouse.y >= me._hitY && me._mouse.y <= me._hitY + me._hit.height / 1.5) }

    stayDetect(me) { return (me._mouse.x >= me._stayX && me._mouse.x <= me._stayX + me._stay.width / 1.5 && me._mouse.y >= me._hitY && me._mouse.y <= me._hitY + me._stay.height / 1.5) }

    resetDetect(me) { return (me._mouse.x >= me._restartX && me._mouse.x <= me._restartX + me._restart.width / 1.5 && me._mouse.y >= me._restartY && me._mouse.y <= me._restartY + me._restart.height / 1.5) }

    drawText(me, title) {
        me._ctx.font = '30px Georgia';
        me._ctx.fillStyle = 'rgba(255,255,255)';
        me._ctx.fillText(title, 320, 30);
        me._ctx.font = '20px Georgia';
        me._ctx.fillText("Dealer's Cards = " + (me._end ? me._dealer.score : "?"), 10, 30);
        me._ctx.fillText("Your Cards = " + me._player.score, 20, 280);
    }

    drawCards(me) {
        me._dealer.draw(me._ctx, me._end);
        me._player.draw(me._ctx);
        me._deck.draw(me._ctx);
    }

    redraw(me) {
        this._ctx.fillStyle = 'RGB(21,88,67)';
        this._ctx.fillRect(0, 0, canvas.width, canvas.height);
        let title = "Drake's BlackJack";
        if (this._end)
            if (me._player.score > me._dealer.score && me._player.score <= 21 || me._dealer.score > 21)
                title = "You win!";
            else if (me._dealer.score > me._player.score && me._dealer.score <= 21 || me._player.score > 21)
                title = "Dealer wins!";
            else if (me._dealer.score == me._player.score)
                title = "Draw!";
        me.drawCards(me);
        me.drawText(me, title);
        if (!me._end)
            me.createButtons(me);
        else {
            me._restartX = 600;
            me._restartY = 30;
            me._restart = new Image();
            me._restart.src = 'imgs/button_play.png';
            me._restart.onload = function () {
                me._ctx.drawImage(me._restart, me._restartX, me._restartY, me._restart.width / 1.5, me._restart.height / 1.5);
            }
        }
    }

    initializeGame(me) {
        for (let i = 0; i < 2; i++) {
            me._dealer.card = me._deck.pop();
            me._player.card = me._deck.pop();
        }
        me.redraw(me);
    }

    clickDetect(me) {
        me._canvas.addEventListener('mousedown', function (e) {
            me._mouse.x = e.x - me._canvasPosition.left;
            me._mouse.y = e.y - me._canvasPosition.top;
            if (!me._end && me._playerTurn && me.hitDetect(me) ) {
                me._player.card = me._deck.pop();
                me._playerTurn = false;
                me.gameOver(me);
            }
            else if (me.stayDetect(me) && me._playerTurn) {
                me._playerTurn = false;
                me._player.playing = false;
                me.gameOver(me);
            }
            else if (me._end && me.resetDetect(me)) {
                me._dealer.clear();
                me._player.clear();
                me._deck.reset();
                me._playerTurn = true;
                me._end = false;
                me.initializeGame(me);
            }
        });
    }

    gameOver(me) {
        if ((me._player.playing || me._dealer.playing) && me._player.score <= 21 && me._dealer.score <= 21) {
            if (!me._playerTurn) {
                if (me._dealer.playing)
                    me._dealer.play(me._player.playing, me._player.score, me._deck);
                if (me._player.playing)
                    me._playerTurn = true;
                else if (me._dealer.playing)
                    me.gameOver(me);
                if (!((me._player.playing || me._dealer.playing) && me._player.score <= 21 && me._dealer.score <= 21))
                    me._end = true;
            }
        } else me._end = true;
        me.redraw(me);
    }
}

const game = new Game();

