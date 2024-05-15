class Bucket1 {
  constructor() {
    this.rockQuantity = 0;
  }
  addRock() {
    this.rockQuantity++;
  }
  addALotOfRocks(quantity) {
    this.rockQuantity += quantity;
  }

  howMuchGatheredRocks() {
    console.log(`In this bucket: ${this.rockQuantity} rocks.`)
  }

  emptyOutRocks() {
    this.rockQuantity = 0;
    console.log(`Bucket is empty now. ${this.rockQuantity}`)
  }

  transferRocksToOtherBucket(otherBucket) {
    const BucketAmount = this.rockQuantity;

    // this.rockQuantity += otherBucket.rockQuantity;
    // otherBucket.rockQuantity = 0;
    // console.log(`Transfered ${otherBucket.rockQuantity} rocks to ${this.rockQuantity} rocks.`)
    // console.log(otherBucket.rockQuantity);
    // console.log(this.rockQuantity);

  }
}

const k1 = new Bucket1();
const k2 = new Bucket1();
const k3 = new Bucket1();

k1.addRock();
k2.addRock();
k1.addALotOfRocks(5);
k1.addRock();
k2.addALotOfRocks(11);
k3.addALotOfRocks(3);

k1.howMuchGatheredRocks();
k2.howMuchGatheredRocks();

// k1.emptyOutRocks();

k3.transferRocksToOtherBucket(k2);

