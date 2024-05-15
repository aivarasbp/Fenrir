class Mushroom {
  constructor() {
    this.edible = Math.random() < 0.5; // Assuming equal probability for edible and non-edible mushrooms
    this.weight = this.rand(5, 45);
  }

  rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
  }
}

class Bag {
  constructor() {
    this.bagSize = 500;
    this.filled = 0;
  }

  addMushroom(mushroom) {
    if (mushroom.edible) {
      if (this.filled + mushroom.weight <= this.bagSize) {
        this.filled += mushroom.weight;
        return true; // Mushroom added successfully
      } else {
        return false; // Bag is full
      }
    } else {
      return true; // Non-edible mushroom ignored
    }
  }
}

const bag = new Bag();

while (bag.addMushroom(new Mushroom())) { }

console.log(bag);
