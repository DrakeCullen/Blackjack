export class Card {
    constructor(name, value) {
        this._name = name;
        this._value = value;
        this._x = null;
        this._y = null;
    }

    get value() { return this._value; }

    get name() { return this._name; }

    set x(x) { this._x = x; }

    set y(y) { this._y = y; }

    get x() { return this._x; }

    get y() { return this._y; }
}


