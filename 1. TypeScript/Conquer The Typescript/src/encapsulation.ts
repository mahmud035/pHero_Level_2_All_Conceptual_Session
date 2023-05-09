class MyBank {
  constructor(
    public name: string,
    private accountNumber: number,
    private amount: number,
    public branch: string
  ) {}
}

const bank = new MyBank('Mahmud', 457931128, 30000, 'Khulna');
// bank.accountNumber // Error Here
console.log(bank);
