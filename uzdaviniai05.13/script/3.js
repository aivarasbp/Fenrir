class glass {
  constructor(amount) {
    this.amount = 0;
    this.quantity = amount;
  }

  fill(amount) {
    this.amount = Math.min(this.quantity, amount + this.amount);
    return this;
  }

  empty() {
    const all = this.amount;
    this.amount = 0;
    return this;
  }

  inTheGlassThereIs() {
    console.log(`in the glass there is ${this.amount} in theGlass there is ${this.quantity} `)
  }
}

g1 = new glass(200);
g2 = new glass(150);
g3 = new glass(100);

g1.fill(500).empty();

g3.empty(g2.empty(g1.empty(500).empty()).empty());

g1.inTheGlassThereIs();
g2.inTheGlassThereIs();
g3.inTheGlassThereIs();