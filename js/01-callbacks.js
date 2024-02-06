/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// колбек функція - це просто функція, яка передається в іншу функцію в якості аргументу sum(fnFoo)

// фукнція вищого порядку - це звичайна фукнція, яка очікує іншу фукнцію в якості параметру

// фукнція вищого порядку (база даних телефонів)
// function fnA(message, callback) {
//   console.log(message);

//   callback(50);
// }

// function fnB(number) {
//   console.log("Log during fnB execution ", number);
// }

// function fnC(number) {
//   console.log("fnC function:", number * 2);
// }

// // fnB - колбек фукнція (номер телефону)
// fnA("A message", fnB);
// fnA("A message", fnC);

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b); // sum(a, b) a = 2, b = 3

//   return result;
// }

// function sum(a, b) {
//   return a + b;
// }

// function mult(a, b) {
//   return a * b;
// }

// console.log(calc(2, 3, sum));
// console.log(calc(2, 3, mult));

// console.log(calc(10, 8, mult));

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  /*
  1. створюємо новий масив
  2. запускаємо цикл на перебір нашого масиву
  3. викликаємо колбек фукнцію на кожному елементі масиву (всеердині циклу)
  4. додаємо змінений елемент до нового масиву (результат роботи колбек фукнції)
  5. повертаємо новостворений масив
*/

  const newArr = [];

  for (const value of array) {
    const newValue = callback(value);
    newArr.push(newValue); // newArr.push(callback(value));
  }

  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.round(value);
  })
);
