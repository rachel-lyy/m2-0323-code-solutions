/* exported Account */
// Account assumes that transaction exisits
class Account extends Transaction {
  constructor(number, holder) {
    super();
    this.number = number;
    this.holder = holder;
    this.transactions = [];
  }

  deposit(amount) {
    // checks amount is a postive interger and is a number
    if (amount > 0 && Number.isInteger(amount) === true) {
      const depositAmount = new Transaction('deposit', amount);
      this.transactions.push(depositAmount);
      return true;
    } else {
      return false;
    }
  }

  withdraw(amount) {
    // checks amount is a postive interger and is a number
    if (amount > 0 && Number.isInteger(amount) === true) {
      const withdrawalAmount = new Transaction('withdrawal', amount);
      this.transactions.push(withdrawalAmount);
      return true;
    } else {
      return false;
    }
  }

  getBalance(amount) {
    if (this.transactions.length === 0) {
      return 0;
    } else {
      let balance = 0;
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].type === 'deposit') {
          balance += this.transactions[i].amount;
        } else if (this.transactions[i].type === 'withdrawal') {
          balance -= this.transactions[i].amount;
        }
      }
      return balance;
    }
  }

}
