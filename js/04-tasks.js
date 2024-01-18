/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

const a = 100;
const b = 20;

// for (let i = b; i <= a; i += 5) {
//   console.log(i);
// }

// for (let i = b; i <= a; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// ======

// for (let i = 1; i <= 10; i += 1) {
//   if (i === 5) {
//     break; // код циклу далі не йде, цикл зупиняє свою роботу
//   }
//   console.log(i);
// }

// console.log("====");

// for (let i = 1; i <= 10; i += 1) {
//   if (i === 5) {
//     continue; // ви моментально перескакуєте на наступну ітерацію, оператор пропуску ітерації
//   }
//   console.log(i);
// }

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

const min = 5;
const max = 15;
let total = 0;

for (let i = min; i <= max; i += 1) {
  // debugger - оператор, який почне процес дебагінгу коду, в консолі розробника ви зможете рухатись покроково по кожній дії вашого коду паралельно дивлячись на стан змінних, перевірок і тд
  if (i % 2 === 0 && i !== 0) {
    console.log("Even: ", i);
    total += i;
  }
}

/*
total = 0
 6 8 10 12 14
total += 6 -> 6
total += 8 -> 6 + 8 -> 14
total += 10 -> 14 + 10 -> 24
total += 12 -> 24 + 12 -> 36
total += 14 -> 36 + 14 -> 50

*/

console.log(`TOTAL: ${total}`);

// function foo() {
//   // console.log("a")
//   return "a";
// }

// console.log(foo());
// console.log(foo());
// console.log(foo());

// let url = "https://hello.com";

// url += "/";
// // url = url + "/"

// console.log(url);

// console.log("a" + "b");

// console.log("a" + "b")
// console.log("a".concat("b"))
