/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const TRANSACTIONS = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    // {id: 1, amount: 100, type: "deposit"}
    return {
      amount, // amount: amount
      type,
      id: this.transactions.length + 1, // завʼязуємо айді на довжину масиву транзакцій, тому що вона завжди буде збільшуватись і з масиву ніколи нічого не видаляється
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    amount = Number(amount);

    if (isNaN(amount)) {
      console.error("❌ Ваша сума не є числовим значенням!");
      return; // виходимо з функції, щоб не виконувати її далі
    }

    if (amount <= 0) {
      console.error("❌ Неможливо зачислити суму меншу або рівну нулю!");
      return; // виходимо з функції, щоб не виконувати її далі
    }

    this.balance += amount; // додаємо гроші до балансу

    console.log(
      `✅️ Баланс успішно поповнено на ${amount} грн. Поточний баланс: ${this.balance} грн.`
    );

    const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT); // створюємо обʼєкт транзакції

    this.transactions.push(transaction); // додаємо транзакцію в історію транзакцій
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    amount = Number(amount);

    if (isNaN(amount)) {
      console.error("❌ Ваша сума не є числовим значенням!");
      return; // виходимо з функції, щоб не виконувати її далі
    }

    if (amount <= 0) {
      console.error("❌ Неможливо зняти суму меншу або рівну нулю!");
      return; // виходимо з функції, щоб не виконувати її далі
    }

    if (amount > this.balance) {
      console.error(
        `❌ Недостатньо коштів на рахунку! Поточний баланс: ${this.balance}`
      );
      return;
    }

    this.balance -= amount; // знімаємо гроші

    console.log(
      `✅️ Успішно знято ${amount} грн. Поточний баланс: ${this.balance} грн.`
    );

    const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW); // створюємо обʼєкт транзакції

    this.transactions.push(transaction); // додаємо транзакцію в історію транзакцій
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }

    // return this.transactions[id - 1];
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(100);
account.deposit(500);
account.deposit(-100);
account.deposit("hello");
account.deposit(2600)
account.deposit(100)

account.withdraw("world!");
account.withdraw(-700);
account.withdraw(1000);
account.withdraw(0);
account.withdraw(0.5);
account.withdraw(250);
account.withdraw(700.5);

console.log(account.getBalance());

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(1));

console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));
console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));
console.log(account);
