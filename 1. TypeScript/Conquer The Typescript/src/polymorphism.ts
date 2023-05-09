class Father {
  showInfo(): void {
    console.log(`Father`);
  }
}

class Son1 extends Father {
  showInfo(): void {
    console.log(`Son1`);
  }
}

class Son2 extends Father {
  showInfo(): void {
    console.log(`Son2`);
  }
}

function show(param: Father) {
  param.showInfo();
}

const x = new Father();
const y = new Son1();
const z = new Son2();

show(x);
show(y);
show(z);
