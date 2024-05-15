class Trolley {
  static allPassengers = 0;

  static allPassengersSum(passengerNumber) {
    this.allPassengers += passengerNumber;
  }

  constructor() {
    this.passengerNumber = 0;
  }

  getsIn(passengerNumber) {
    this.passengerNumber += passengerNumber;
    Trolley.allPassengersSum(passengerNumber); // Accessing static method correctly
  }

  getsOut(passengerNumber) {
    const left = this.passengerNumber < passengerNumber ? this.passengerNumber : passengerNumber;
    this.passengerNumber -= left;
    Trolley.allPassengersSum(-1 * left); // Accessing static method correctly
  }

  passengerNumberInAllTrolley() {
    console.log(`Passenger Number In All Trolleys: ${Trolley.allPassengers}`); // Accessing static property correctly
  }

  going() {
    console.log(`There are ${this.passengerNumber} passengers in the trolley.`);
  }
}

const trolley1 = new Trolley();
const trolley2 = new Trolley();
const trolley3 = new Trolley();

trolley1.getsIn(10);
trolley2.getsIn(5);
trolley3.getsIn(20);

trolley1.getsOut(5);
trolley2.getsOut(20);
trolley3.getsOut(15);

trolley3.going();
trolley3.passengerNumberInAllTrolley();
