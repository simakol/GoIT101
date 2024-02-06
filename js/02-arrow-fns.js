/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

// стрілочна функція - це синтаксичний цукор функціонального виразу, але з деякими особливостями

// function declaration (оголошення функції)
function add(a, b, c) {
  return a + b + c;
}

// function expression (фукнціональний вираз)
const addExp = function (a, b, c) {
  return a + b + c;
};

// arrow function (стрілочна фукнція)
const addArrow = (a, b, c) => a + b + c;
// const addArrow = (a, b, c) => {
//   return a + b + c;
// };

/*
1. у стрілочних фукнцій немає свого псевдомасиву arguments
2. у стрілочних функцій немає власного this (тому стрілочні фукнції не можуть бути методами обʼєкту)
3. якщо стрілочна фукнція приймає один параметр - можна не писати круглі дужки
4. якщо тіло фукнції складається з однієї інструкції - можна не писати фігурні дужки та слово return, цей підхід називається неявне поверення, тобто, джс під капотом сам зробить повернення результату.

*/

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

/**
 * ---------------------------
 */
function fnA() {
  return {
    a: 5,
  };
}

// console.log(fnA());

const arrowFnA = () => ({ a: 5 }); // обовʼязково при неявному поверненні обʼєкту потрібно огорнути літерал обʼєкту у круглі дужки, інакше - стрілочна фукнція буде сприямати ці фігурні дужки як тіло фукнції, а не як літерал обʼєкту

// const arrowFnA = () => { return { a: 5 } };

// console.log(arrowFnA());

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

const calc = (a, b, callback) => callback(a, b);

// calc(2, 3, function (x, y) {
//   return x + y;
// });

console.log(calc(2, 3, (x, y) => x + y));

// calc(10, 8, function (x, y) {
//   return x - y;
// });

console.log(calc(10, 8, (x, y) => x - y));
