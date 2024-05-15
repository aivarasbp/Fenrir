class shoppingCart {
  constructor() {
    this.cart = new Map();
  }

  putCandyBar(amount) {
    if (this.cart.has('candy')) {
      this.cart.set('candy', this.cart.get('candy') + amount);
    } else {
      this.cart.set('candy', amount);
    }
  }

  getMilk(amount) {
    if (this.cart.has('milk')) {
      this.cart.set('milk', this.cart.get('milk') + amount);
    } else {
      this.cart.set('milk', amount);
    }
  }

  getBread(amount) {
    if (this.cart.has('bread')) {
      this.cart.set('bread', this.cart.get('bread') + amount);
    } else {
      this.cart.set('bread', amount);
    }
  }

  whatsInTheCart() {
    console.log(this.cart);
  }
}

const k = new shoppingCart();