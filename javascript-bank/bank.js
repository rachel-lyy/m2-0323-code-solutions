/* exported Bank */
// Bank assumes Account exisits
class Bank extends Account {
  constructor(nextAccountNumber, accounts) {
    super();
    this.nextAccountNumber = 1;
    this.accounts = [];
  }

  openAccount(holder, balance) {
    // checks balance is a postive interger and holder is a string
    if (balance > 0 && Number.isInteger(balance) === true && typeof holder === 'string') {
      const newAccount = new Account(this.nextAccountNumber, holder);
      newAccount.deposit(balance);
      this.accounts.push(newAccount);
      this.nextAccountNumber++;
      return newAccount.number;
    } else {
      return null;
    }
  }

  getAccount(number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (number === this.accounts[i].number) {
        return this.accounts[i];
      }
    }
    return null;
  }

  getTotalAssets() {
    // add all balances
    if (this.accounts.length === 0) {
      return 0;
    } else {
      let totalAssetAmount = 0;
      for (let i = 0; i < this.accounts.length; i++) {
        totalAssetAmount += this.accounts[i].getBalance(this.accounts[i]);
      }
      return totalAssetAmount;
    }
  }

}
