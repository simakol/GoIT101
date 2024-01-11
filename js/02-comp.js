/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності (суворе і не суворе)
 */

// console.log(5 > 4); // true

// console.log(10 >= "7"); // 10 >= Number("7") -> 10 >= 7 -> true

// console.log("2" > "12");
/*
при порівнянні строки і числа все приведеться до числа, але коли ви порівнюєте строки, то вони порівнюються посимвольно за лексикографічним словником (unicode)
*/

// 50 > 49 -> true
// console.log("2".charCodeAt(0))
// console.log("1".charCodeAt(0))

// console.log("2" < "12"); // 50 < 49 - false

// console.log("4" == 4);
/*
порівняння зі зведенням типів (несуворе порівняння)
"4" == 4 | string == number
Number("4") == 4 -> 4 == 4 -> true
*/

// console.log("6" === 6);
/*
порівняння без зведення типів (суворе порівняння)
суворе порівняння спочатку порінює типи даних значень, а тільки потім самі значення, якщо ж типи даних будуть різні, результатом порівняння будет false, навіть якщо самі значення будуть рівні.

"6" === 6 | string === number -> false
*/

// console.log("false" === false); // false

// console.log(1 == true); // 1 == Number(true) -> 1 == 1 -> true

// console.log(1 === true); // false

// console.log("0" == false); // 0 == 0 -> true

// console.log("0" === false); // false

// console.log("Papaya" < "papaya"); // true

// console.log("Papaya" === "papaya"); // false

console.log(undefined == null); // true
// undefined і null це унікальні значення які ні в що не перетворюються і завжди рівні тільки самі собі

console.log(undefined === null); // false
// тому що це різні типи, а у нас суворе порівняння

console.log(null > 0); // false (1) -> 0 > 0
console.log(null == 0); // false (2)
console.log(null >= 0); // true (3) -> 0 >=0
/*
порівняння >=, >, <, <= і порівняння == працюють по різному 

в прикладі 1 та 3 null конвертується у число, тому ми отримуємо 1. 0 > 0 -> false, 3. 0 >= 0 -> true

в прикладі 2 при використанні несуворого порівняння з null є правило, що коли ви порівнюєте null або undefined через ==, то вони ніколи не будуть ні в що конвертуватись, вони просто рівні самі собі і все.
*/

//! NaN це єдине значення в джс яке не може бути рівним саме собі (для перевірки на нан є функція isNaN)
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

console.log(undefined == undefined); // true
console.log(undefined == null); // true
console.log(null == null); // true
