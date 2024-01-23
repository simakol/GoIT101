/**
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

const a = [1, 2, 3];
const b = a;
// const b = a.slice(0);
// const b = Array.from(a);
// const b = a.concat();

console.log("a", a);
console.log("b", b);

a[0] = 500;
b[1] = 1000;

console.log("a", a);
console.log("b", b);

console.log(a === b);

// console.log([] === []);
// console.log([1, 2, 3] === [1, 2, 3]);
