/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// for (let i = 0; i < friends.length; i += 1) {
//   friends[i] += `-${i}`;
//   console.log(friends[i], i)
// }

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);
// }

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = "10 7";

// console.log(calculateArea(values));

// function calculateArea(values) {
//   const valuesArr = values.split(" ");

//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);

//   return width * height;
// }

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }
