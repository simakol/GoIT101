/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(5 ** 3);

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;
const total = apples + grapes
console.log(total);
const diff = grapes - apples
console.log(diff);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
// students = students + 50;
students += 50
console.log(students);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

const result = 108 + 223 - 2 * 5;
console.log(result);
