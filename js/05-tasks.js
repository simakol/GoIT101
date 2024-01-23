/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//     console.log(number);
//   }
// }

// console.log("total:", total);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// displayAllPhonebookInfo(names, phones);

// function displayAllPhonebookInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");

//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//   }
// }

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "Welcome to the future";

// console.log(cutString(string));
// console.log(cutString("Hello everyone! I'm here!"));

// function cutString(string) {
//   //   const stringArr = string.split(" "); // розбиваємо рядок на масив слів з розділенням про пробілу
//   //   const cuttedString = stringArr.slice(1, stringArr.length - 1); // копіюємо частинку масиву без 1 та останнього слова
//   //   const result = cuttedString.join(" ").trim(); // збираємо масив у рядок, вказавши в якості поєднувача між елементами пробіл та прибираємо зайві пробіли на початку і у кінці рядка

//   //   return result;

//   const stringArr = string.split(" ");

//   // чейнінг
//   return stringArr
//     .slice(1, stringArr.length - 1)
//     .join(" ")
//     .trim();
// }

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const values = [2, 17, 94, 1, 23, 37];
// console.log(findMin(values)); // 1

// console.log(findMin([5, 8, 99, 567, 4, 3, 76, 2, 74, -5, 738, 8365, 9]));

// function findMin(arr) {
//   // 1. задаємо в якості мінімального значення перший елемент масиву
//   // 2. запускаємо цикл на перебір масиву починаючи з другого елементу (тому що перший ми вже використали, для того, щоб не робити зайву перевірку яка не має сенсу)
//   // 3. порівняти поточне мінімальне значення з поточним елементом масиву, якщо поточний елемент менший за мінімальний, то він стає новим мінімальним

//   let min = arr[0];

//   for (let i = 1; i < arr.length; i += 1) {
//     // другий крок, якщо поточний елемент масиву менший за мінімальний
//     if (arr[i] < min) {
//       min = arr[i]; // третій крок, то задаємо поточний елемент масиву в якості мінімального
//     }
//   }

//   return min;
// }

//! =================================

// let i = 1;

// console.log(i++); // спочатку повертає поточне значення у консоль, тобто 1, а тільки потім додає до нього одиничку
// console.log(i); // вже одиничка була додана

// let j = 1;

// console.log(++j); // спочатку додає, а тільки потім повертає, тому ми бачимо відразу оновлене значення

//! =================================

// return message.toLowerCase().includes("hello" || "hey") -> return message.toLowerCase().includes("hello")

//! =================================

// const spamWords = ["spam", "sale", "kovbaska", "pespatron"];

// const message = "Hey! My name is Alex. I love JS";

// console.log(isMessageHasSpan(message, spamWords));

// function isMessageHasSpan(message, spamWords) {
//   const msgArr = message.split(" ");
//   console.log(msgArr);
//   console.log(spamWords);

//   for (const word of msgArr) {
//     if (spamWords.includes(word.toLowerCase().trim())) {
//       return true;
//     }
//   }

//   return false;
// }

//! =================================
