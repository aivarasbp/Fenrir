class Wallet {
  constructor() {
    this.paperMoney = 0;
    this.coins = 0;
  }

  insert(amount) {
    if (amount <= 2) {
      this.coins = + amount;
    } else {
      this.paperMoney = + amount;
    }
  }

  count() {
    console.log(`In Wallet there is: Bills = ${this.paperMoney}, coins = ${this.coins}`);
  }
}

const p1 = new Wallet();

p1.insert(1);

p1.insert(2);

p1.insert(3);

p1.insert(4);

p1.insert(5);

p1.insert(6);

p1.insert(7);

p1.count();