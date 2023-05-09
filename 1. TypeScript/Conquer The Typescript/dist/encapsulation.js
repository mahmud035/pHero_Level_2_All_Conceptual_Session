"use strict";
class MyBank {
    constructor(name, accountNumber, amount, branch) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.branch = branch;
    }
}
const bank = new MyBank('Mahmud', 457931128, 30000, 'Khulna');
// bank.accountNumber // Error Here
console.log(bank);
