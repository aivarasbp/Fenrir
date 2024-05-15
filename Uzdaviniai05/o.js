class Fox {

  static allAge = 0;
  static allFoxes = 0;

  static addAge(age) {
    this.allAge += age;
  }

  constructor(color) {
    this.color = color;
    this.age = 0;
    Fox.allFoxes++;
  }

  foxAge(age) {
    this.age = age;
    this.constructor.addAge += age;
  }

}

const fox1 = new Fox('Brown');
const fox2 = new Fox('Black');
const fox3 = new Fox('White');

fox1.foxAge(5);
fox2.foxAge(6);
fox3.foxAge(7);

console.log(Fox.allFoxes);

// average age of fox1 and fox2


// console.log(fox1, fox2);

console.log('Average age:', (Fox.allAge) / 2);

