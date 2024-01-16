/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

// console.log("Before");

/*
умовна конструкція
1 - умова
2 - тіло блоку if
3 - тіло блоку else

якщо умова(1) істинна (true) - ви переходите до тіла блоку if(2) і виконуєте цей код, після чого виходите з всієї конструкції. Якщо ж умова(1) буде хибна (false) - ви переходите до тіла блоку else(3), виконуєте його і виходите з конструкції.

якщо 1, то 2, інакше - 3

if (1){
  2
} else {
  3
}
*/

// if (50 < 3) {
//   console.log("Істинна!");
// } else {
//   console.log("Хиба!");
// }

// console.log("After");

/**
 * -----------------------------
 */
// const points = 5000;

/*


*/

// if (points <= 500) {
//   console.log("Level 1");
// } else if (points > 500) {
//   console.log("Level 2");
// } else if (points > 2500) {
//   console.log("Level 3");
// } else {
//   console.log("Level 4");
// }

/**
 * -----------------------------
 */

const balance = 1000;
let message = balance >= 0 ? "Positive" : "Negative";

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }

console.log(message);
