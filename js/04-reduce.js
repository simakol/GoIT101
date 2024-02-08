/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];

//* without reduce
// let total = 0;

// for (const num of numbers) {
//   total += num;
// }

// console.log(total);

//* with reduce

const totalSum = numbers.reduce((total, num) => total + num, 0);

/*
1. numbers.reduce((total = 0, num = 5) => total + num, 0) // 0 + 5
2. numbers.reduce((total = 5, num = 10) => total + num, 0) // 5 + 10 = 15
3. numbers.reduce((total = 15, num = 15) => total + num, 0) // 15 + 15 = 30
4. numbers.reduce((total = 30, num = 20) => total + num, 0) // 30 + 20 = 50
5. numbers.reduce((total = 50, num = 25) => total + num, 0) // 50 + 25 = 75

редьюс завжди повертає в якості результату своєї роботи останнє значення аккумулятору

аккумулятор отримує своє значення в результаті того, що повернула вам колбек фукнція редьюсу на попередній ітерації

аккумулятор - це просто зовнішня змінна, яка існує за межами нашого циклу. Саме тому вона доступна на кожній ітерації

*/

// console.log(totalSum);

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, salary) => total + salary,
  0
);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
  (total, player) => total + player.timePlayed,
  0
);

// якщо ви забуваєте поставити початкове значення для аккумулятора, відбувається дві дії:
// 1. аккумулятором стає перший елемент масиву, в нашому прикладі це обʼєкт ({ id: "player-1", name: "Mango", timePlayed: 310, online: false })
// 2. Ви пропускаєте першу ітерацію і починаєте відразу з 2ї

// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

// const totalAmount = cart.reduce(
//   (total, product) => total + product.price * product.quantity,
//   0
// );

// const productsAmount = cart.reduce(
//   (total, product) => total + product.quantity,
//   0
// );

// console.log(totalAmount);
// console.log(productsAmount);
// console.log("Avr price:", (totalAmount / productsAmount).toFixed(2));

// ======

// let productsAmount = 0;

// const totalAmount = cart.reduce((total, product) => {
//   productsAmount += product.quantity;
//   return total + product.price * product.quantity;
// }, 0);

// console.log(totalAmount);
// console.log(productsAmount);
// console.log("Avr price:", (totalAmount / productsAmount).toFixed(2));

// =====

// const totalAmount = cart.reduce(
//   (total, product) => {
//     total[1] += product.quantity;
//     total[0] += product.price * product.quantity;
//     return total;
//   },
//   [0, 0]
// );

// console.log(totalAmount) // [840, 9], 840 - загальна сума, 9 - кількість товарів

// console.log(totalAmount[0]);
// console.log(totalAmount[1]);
// console.log("Avr price:", (totalAmount[0] / totalAmount[1]).toFixed(2));
