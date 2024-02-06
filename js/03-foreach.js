/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// for (const value of numbers) {
//   total += value;
// }

// метод форич викликається на масиві і приймає в якості єдиного аргументу колбек функцію. Ця колбек фукнця приймає 3 парметри (поточний елемент, індекс, масив) і ця колбек функція викликається на кожному елементі масиву по черзі

// numbers.forEach((value, i, arr) => (total += value));

// console.log(total);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function logItems(items) {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// const logItems = (items) =>
//   items.forEach((value, i) => console.log(`${i + 1} - ${value}`));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   nameList.forEach((value, i) => console.log(`${value}: ${phoneList[i]}`));
// };

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemis",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// const calculateAverage = (...args) => {
//   let total = 0;

//   args.forEach((arg) => (total += arg));

//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

//* чиста функція
// 1. не звертається до зовнішньої області видимості(працює тільки з локальними данними та параметрами)
// 2. чиста фукнція при ідентичних викликах завжди повинна повертати однаковий результат (side effects)

// приклад не чистої функції
// let b = 8;

// function sum(a) {
//   return a + b;
// }

// console.log(sum(5));

// b = 10;

// console.log(sum(5));

// приклад чистої функції

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 8));
// console.log(sum(5, 8));
// console.log(sum(5, 8));
// console.log(sum(5, 8));
// console.log(sum(5, 8));
// console.log(sum(5, 8));



// const nums = [1,2,3,4,5]

// nums.forEach((el, i, arr) => console.log(arr[i]))
