/**
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// function declaration - оголошення фукнції
// () - список параметрів
// {} - тіло функції

// function displayMsg() {
//   console.log("Hello World!!!");
// }

// // виклик фукнції
// displayMsg();
// console.log("aaa");
// displayMsg();
// displayMsg();
// displayMsg();

// (username) - це параметр, це звичайна змінна, яка доступна тільки всередині функції, її значення завжди буде приходити під час виклику фукнції зі списку аргументів
// function greeting(username) {
//   console.log(`Hello, ${username}!`);
// }

//("Dima") - це аргумент, це значення для параметру функції
// greeting("Dima");
// greeting("Alice");
// greeting("John");

// sum(8, 99); // це особливість function declaration, вони доступні в будь-якому місці програми, в не залежності від того, де функція була оголошена, ця технологія називається hoisting

// кожна функція в джс повинна щось повертати, за замовчуванням усі фукнції повертають значення undefined
// function sum(a, b) {
//   const result = a + b;
//   console.log(`${a} + ${b} = ${result}`);
//   /* оператор return:
//   1. зупиняє виконання фукнції і виходить з неї
//   2. повернення результату роботи функції в місці її виклику
//   */

//   return result;
// }
// // повернення - це результат роботи фукнції, який можна використовувати у зовнішньому коді після розрахунків

// console.log(sum(5, 9) + 5);

// function convertToInt(string) {
//   const number = Number.parseFloat(string);
//   const result = Math.round(number);

//   return result; // для отримання значення(результату розрахунків всередині функції) у зовнішній код на місце її виклику
// }

// convertToInt("25.7px"); // 26
// convertToInt("100.5px"); // 101
// convertToInt("3.01px"); // 3

// const newFigHeight = convertToInt("25.7px") + 5;
// // undefined + 5 = NaN

// console.log(newFigHeight);

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  /*
    1. замінити кому на крапку (наприклад через метод replace)
    2. перетворюємо строку в число (наприклад методом Number або parseFloat())
    3. рахуємо індекс маси тіла та округлюємо до однієї цифри після коми
    */

  // перший крок
  weight = weight.replace(",", ".");
  height = height.replace(",", ".");

  // другий крок
  weight = Number(weight);
  height = Number(height);

  // третій крок
  const result = weight / (height * height);
  // 88.3 / 1.75^2

  return Number(result.toFixed(1));
  //   .toFixed - округлює число до первної кількості цифр після коми, але цей метод повертає рядок
}

const bmi = calcBMI("88,3", "1,75");
console.log(bmi); // 28.8

// console.log(Number("5"))
// console.log(Number("5.906"))
// console.log(Number("hello"))