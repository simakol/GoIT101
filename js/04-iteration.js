/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  neutral: 10,
  good: 5,
  bad: 3,
};

// let totalFeedback = 0;

// for (const key in feedback) {
//   // console.log(key);
//   // console.log(feedback[key]);
//   totalFeedback += feedback[key];
//   /*
// totalFeedback = 0 + 3 -> 3
// totalFeedback = 3 + 10 -> 13
// totalFeedback = 13 + 5 -> 18

//   */
// }

// console.log("totalFeedback:", totalFeedback);

/**
 * ---------------------------------
 */
console.log(feedback);
// const keys = Object.keys(feedback); // масив з ключами обʼєкту
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
// }

// console.log("totalFeedback: ", totalFeedback);

// const values = Object.values(feedback); // масив значень обʼєкту
// let totalFeedback = 0;
// console.log(values);

// for (const value of values) {
//   // перебираю масив значень value (3, 5, 10)
//   console.log(value);
//   totalFeedback += value; // накопичую значення
// }

// console.log("totalFeedback:", totalFeedback);
