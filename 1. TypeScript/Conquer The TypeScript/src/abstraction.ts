abstract class Car {
  abstract start(): void;
  abstract stop(): void;
}

class MyCar extends Car {
  start(): void {
    console.log(`Car starting....`);
  }

  stop(): void {
    console.log(`Car stopping...`);
  }
}

const car1 = new MyCar();
car1.start();

// NOTE: Example hote pare ATM Booth. Unwanted ba o-proyojonio details k user theke hide kore rakha.
