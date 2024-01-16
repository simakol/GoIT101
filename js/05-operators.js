/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

/**
 * --------------------------------
 */

console.log(5 && 4);
console.log(5 && "mango");

/**
 * --------------------------------
 */

console.log(false || 5);
console.log(false || null);

/**
 * --------------------------------
 */

console.log(!5);
console.log(!false);

/**
 * --------------------------------
 */

console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && "kiwi");

console.log(true && 0 && "kiwi");

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);
