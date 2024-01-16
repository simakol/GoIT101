/**
 * Оператор switch
 */

// const username = "Mango";

// console.log(checkCase(username));

// function checkCase(username) {
//   switch (username) {
//     case "Poly":
//       // console.log("case 1");
//       return "case 1";
//     case "John":
//       // console.log("case 2");
//       return "case 2";
//     case "Mango":
//       // console.log("case 3");
//       return "case 3";
//     default:
//       // console.log("default block");
//       return "default block";
//   }
// }

// if (username === "Poly") {
//   console.log("case 1");
// } else if (username === "John") {
//   console.log("case 2");
// } else if (username === "Mango") {
//   console.log("case 3");
// } else {
//   console.log("default block");
// }

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 1;

// if (daysUntilDeadline === 0) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Overmorrow");
// } else if (daysUntilDeadline >= 3) {
//   console.log("Date in the future");
// } else {
//   console.log("Wrong data!");
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Today");
//     break;
//   case 1:
//     console.log("Tomorrow");
//     break;
//   case 2:
//     console.log("Overmorrow");
//     break;
//   default:
//     console.log("Date in the future");
// }

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається у змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам передзвонить менеджер'
 */

// const option = 3;
// let message = "";

// switch (option) {
//   case 1:
//     message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
//     break;
//   case 2:
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посилка буде відправлена сьогодні";
//     break;
//   default:
//     message = "Вам передзвонить менеджер";
// }

// console.log(message);
