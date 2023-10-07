import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number' && currency instanceof Currency) {
      this._amount = amount;
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (currency instanceof Currency) {
      this._currency = newCurrency;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
  }
}
