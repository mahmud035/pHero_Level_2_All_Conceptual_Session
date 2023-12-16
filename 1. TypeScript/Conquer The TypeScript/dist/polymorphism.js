"use strict";
class Father {
    showInfo() {
        console.log(`Father`);
    }
}
class Son1 extends Father {
    showInfo() {
        console.log(`Son1`);
    }
}
class Son2 extends Father {
    showInfo() {
        console.log(`Son2`);
    }
}
function show(param) {
    param.showInfo();
}
const x = new Father();
const y = new Son1();
const z = new Son2();
show(x);
show(y);
show(z);
