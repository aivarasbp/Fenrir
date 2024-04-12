function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//1.

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

//2.

// let totalSpeed = 0;

// for (let i = 9; i >= 0; i--) {
//     let speed = rand(120, 220);
//     console.log('Loop ' + (i + 1) + ': Car speed is ' + speed + ' km/h');
//     totalSpeed += speed;
// }

// let averageSpeed = totalSpeed / 10;
// console.log('Average speed: ' + averageSpeed + ' km/h');

//3.

// let fuelRemaining = 44;
// let lapsToGo = 10;
// let fuelConsumptionPerLap;

// for (let lap = 1; lap <= 10; lap++) {
//     fuelConsumptionPerLap = rand(3, 6);
//     console.log('Lap ' + lap + ': Fuel consumption is ' + fuelConsumptionPerLap + ' liters');

//     fuelRemaining -= fuelConsumptionPerLap;
//     lapsToGo--;

//     if (fuelRemaining <= 0) {
//         console.log("Out of fuel! Race terminated.");
//         break;
//     }
// }

// if (lapsToGo === 0) {
//     console.log('The car completed all 10 laps with fuel to spare.');
// } else {
//     console.log("The car couldn't complete all 10 laps due to insufficient fuel.");
// }

//4.

// let minSpeed = Infinity;

// for (let lap = 1; lap <= 10; lap++) {
//     console.log('Lap ' + lap + ':');
//     for (let turn = 1; turn <= 5; turn++) {
//         let speed = rand(20, 120);
//         console.log('Turn ' + turn + ': Speed is ' + speed + ' km/h');
//         if (speed < minSpeed) {
//             minSpeed = speed;
//         }
//     }
// }

// console.log('The minimum speed in any turn is: ' + minSpeed + ' km/h');


//5. 


// let kilometers = 0;
// let kangarooJump;
// let driverTurn;
// let brake;

// do {
//     kangarooJump = rand(0, 1);
//     driverTurn = rand(0, 1);
//     brake = rand(0, 1);

//     if (kangarooJump === 1 && driverTurn === 0 && brake === 0) {
//         console.log("Accident occurred at " + (kilometers + 1) + " km.");
//         break;
//     }

//     kilometers++;
// } while (kilometers < 100);

// console.log("The car traveled " + kilometers + " km without an accident.");


let km = 0;
let kangaroo;
let steering;
let brakes;

do {
    kangaroo = !!rand(0, 1);
    steering = !!rand(0, 1);
    brakes = !!rand(0, 1);
    console.log(kangaroo, steering, brakes);
    km++;
} while (!kangaroo || steering || brakes);