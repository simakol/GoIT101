/**
 * Змінні та типи даних
 *
 * - Оголошення змінних з let и const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булі, null, undefined
 * - Оператор typeof
 */

let a = 5; // ініціалізація змінної (створення та надання значення)

console.log(a);

a = 10; // перевизначення змінної (перезапис вже існуючої змінної з новим значенням)

console.log(a);

const b = 3; // ініціалізував константу (константи повинні бути ініціалізовані значенням. Ні в якому разі не можна перезаписати або перевизначити константу, це призведе до помилки)

console.log(b);

// b = 33; //! ця дія є помилковою, ви намагаєтесь перезаписати значення константи, а вони так не вміють

console.log(b);

//* Типи даних (примітивні)

//? number - числа (5, 105, -8, 9.569, Infinity)
//? string - рядки, будь-яке значення, яке ви записуєте у лапках ("", '', ``)
//? boolean(bool) - логічний тип (true, false)
//? undefined - невизначеність, наприклад, коли є змінна, але у неї немає значення
//? null - пустота, відсутність, наприклад, коли немає посилання на щось

const userAge = 15;
const userName = "Dima";
const isUserAdmin = false;

// typeof - оператор, за допомогою якого можна перевірити тип даних якогось значення або змінної

console.log(typeof userAge); // "number"
console.log(typeof userName); // "string"
console.log(typeof isUserAdmin); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof NaN); // not a number | typeof === number
