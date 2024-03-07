import Currency from "./3-currency";

class Princing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    /**
     * @param {Number} amount
     */
    set amount(amount) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a string');
        }
        this._amount = amount;
    }

    get amount() {
        return this._amount;
    }

    /**
     * @param {Currency} currency
     */
     set currency(currency) {
        if (currency instanceof Currency) {
            this._currency = currency;
        } else {
            throw new TypeError('Currency must be an instance of Currency');
        }
    }

    get currency() {
        return this._currency;
    }

    dispkayFullCurrency() {
        return `${this.amount} ${this.currency.dispkayFullCurrency()}`;
    }

    /**
     * @param {Number} amount
     * @param {Number} conversionRate
     */
    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }

        if (typeof conversionRate !== 'number') {
            throw new TypeError('conversionRate must be a number');
        }

        return amount * conversionRate;
    }
}

export default Princing;
