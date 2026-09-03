// BAD CODE
// class BankAccount {
//     constructor(balance) {
//         this.balance = balance
//     }
// }

// const account = new BankAccount(1000)
// account.balance = -700
// console.log(account.balance)

// GOOD CODE
class BankAccount {
  #balance  // private — only accessible inside this class

  constructor(balance) {
    this.#balance = balance
  }

  deposit(amount) {
    if (amount <= 0) throw new Error('Amount must be positive')
    this.#balance += amount
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error('Insufficient funds')
    this.#balance -= amount
  }

  get balance() {
    return this.#balance
  }
}

const account = new BankAccount(1000)
account.deposit(500)
account.withdraw(200)
console.log(account.balance)  // 1300 — enforced correctly
account.balance = -99999  //→ SyntaxError: private field