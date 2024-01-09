/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

//* Явне перетворення типів
console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

console.log("=================");

//* Неявне перетворення типів (джс не вміє працювати з різними типами, йому завжди треба прийти до одного спільного!)
console.log("5" + 3); // "53"
// "5" + String(3) = "5" + "3" = "53"
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"

//! ==============================

const yearOfBirth = "1995";

const userAge = 2024 - Number(yearOfBirth);

console.log(userAge);

console.log("5" - 3);
console.log("10" * 5);
console.log("15" / 5);
console.log("15" + 5);
