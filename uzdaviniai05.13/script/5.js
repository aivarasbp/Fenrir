class Parent {
  constructor() {
    this.money = '5000';
  }
  whistle() {
    console.log('Whistle');
  }

  scroll() {
    console.log('Scroll Interwebs');
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.expenses = '1000';
  }

  scroll() {
    console.log('Scroll tiktok');
  }

}

const child = new Child;

child.whistle();

child.scroll();

console.log(child);