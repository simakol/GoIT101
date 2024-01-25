/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems() {
//   for (let i = 0; i < arguments.length; i += 1) {
//     console.log(`${i + 1} - ${arguments[i]}`);
//   }
// }

// logItems("Mango", "Poly", "Ajax");
// logItems("🍎", "🍇", "🍑", "🍌", "🍋");

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");

//   console.log(namesArr);
//   if (namesArr.length !== phonesArr.length) {
//     console.log("Неможливо вивести в консоль, бо недостаньо інформації");
//     return;
//   }

//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(i);
//     console.log(`${namesArr[i].trim()} - ${phonesArr[i].trim()}`);
//   }
// }

// printInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//   /*
//   1. вираховуємо скільки годин в хвилинах (ділимо хвилини на 60)
//   2. вираховуємо залишок хвилин, для цього отримуємо остачу від ділення хвилин на % 60
//   3. додати нулик до результату, якщо довжина (кількість символів) години або хвилини менша за 2
//   4. сформувати рядок з часом
//   */

//   if (totalMinutes < 0) {
//     return "Неможливо вирахувати час!";
//   }

//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   // сам метод padStart(maxLength, value) - заповнює рядок символом value до тих пір, поки довжина рядка не буде рівна параметру maxLength

//   const displayHours = String(hours).padStart(2, 0); // переводимо години до рядка і викликаємо метод, який додасть до годин нулик, якщо довжина рядка буде менша за 2.
//   const displayMinutes = String(minutes).padStart(2, 0);

//   // const displayHours = hours < 10 ? "0" + hours : hours;
//   // const displayMinutes = minutes < 10 ? "0" + minutes : minutes;

//   return `${displayHours}:${displayMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(1440)); // "24:00"
// console.log(formatTime(2764)); // "46:04"
// console.log(formatTime(-100));
