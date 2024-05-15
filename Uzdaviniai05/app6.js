class Wallet {
  constructor() {
    this.paperMoney = [];
    this.coins = [];
  }

  insert(amount) {
    if (amount <= 2) {
      this.coins.push(amount);
    } else {
      this.paperMoney.push(amount);
    }
  }

  coins() {
    const amount = this.coins.length;
    const sum = this.coins.reduce((sum, m) => sum + m, 0);
    return `Coins: ${amount}, Amount:${sum}`;
  }

  count() {
    console.log(`In Wallet there is: Bills = ${this.paperMoney()}, coins = ${this.coins()}`);
    console.log(this);
  }
}

const p1 = new Wallet();