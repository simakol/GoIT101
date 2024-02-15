/**
 * Напиши клас Storage який створює об'єкти для керування складом товарів.
 * При виклику отримуватиме один аргумент - початковий масив товарів і
 * записуватиме його властивість items.
 *
 * Додай методи класу:
 * - getItems() - повертає масив товарів.
 * - addItem(item) - отримує новий товар і додає його до поточних.
 * - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const deleteIndex = this.items.indexOf(item);

    if (deleteIndex !== -1) {
      this.items.splice(deleteIndex, 1);
    } else {
      console.log("Такого товару не існує!");
    }
  }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");

storage.removeItem("🍇");
console.table(storage.items); // [ '🍎', '🍑', '🍌' ]
