/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth: ", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("elementHeight: ", elementHeight);

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.5;
console.log(Math.floor(value)); // округлює завжди вниз
console.log(Math.ceil(value)); // округлює завжди вгору
console.log(Math.round(value)); // округлює в залежності від дробової частини, якщо >= 0.5 то округлення йде вгору, якщо < 0.5, то округлення йде вниз

console.log(Math.max(1, 6, 4, 3, 5, 99, 45, 3))
console.log(Math.min(1, 6, 4, -6, 3, 5, 99, 45, 3))
console.log(Math.sqrt(36)) // квадратний корінь числа
console.log(Math.pow(5, 8)) // 5 у степені 8 -> 5 ** 8
