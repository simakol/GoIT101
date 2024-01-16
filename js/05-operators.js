/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

/*

True:
-  будь-яке число, крім 0(позитивні, негативні, цілі, нецілі, все буде true)
- будь-який рядок, в якому є хоча б один символ (навіть якщо цей символ буде пробілом " ")
- true


False: 
- 0
- "" - пустий рядок без символів
- null
- undefined
- NaN
- false

*/

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

//  якщо ви бачите логічний оператор і багато значень, треба зрозуміти з яким логічним оператором ви працюєте і памʼятати - що результатом логічних операторів І та АБО може бути тільки одне значення з перечисленних
/**
 * --------------------------------
 */

// Логічне І - повертає перше значення яке в булевому типі може конвертуватись у false, якщо ж такого значення немає - повертається останнє

// console.log(5 && 4); // 4
// console.log(5 && "mango"); // mango

/**
 * --------------------------------
 */

// Логічне АБО - повертає перше значення яке в булевому типі може конвертуватись у true, якщо ж такого значення немає - повертається останнє

// console.log(false || 5); // 5
// console.log(false || null); // null

/**
 * --------------------------------
 */

// Логічне НІ - грубо кажучи інвертор логічного типу (міняє тип на зворотній). Завжди повертає буль. Якщо було тру - стане фолс і навпаки.

// console.log(!5); // !Boolean(5) -> !true -> false
// console.log(!false); // true

// const inputValue = "sdf";
// // !"" -> !false -> true
// if (!inputValue) {
//   console.log("Не балуйся! Введи дані");
// } else {
//   console.log("Дякую!");
// }

/**
 * --------------------------------
 */

console.log(true && 3); // 3

console.log(false && 3); // false

console.log(true && 4 && "kiwi"); // kiwi

console.log(true && 0 && "kiwi"); // 0

console.log(true || 3); // true

console.log(true || 3 || 4); // true

console.log(true || false || 7); // true

console.log(null || 2 || undefined); // 2

console.log((1 && null && 2) > 0); // false
/*
(1 && null && 2) -> null
null > 0 -> 0 > 0 -> false
*/

console.log(null || (2 && 3) || 4); // 3

/*
(2 && 3) -> 3
null || 3 || 4 -> 3

1 !
2 &&
3 || 
*/
