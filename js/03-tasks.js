/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 0;
// let timestring = minutes > 0 ? `${hours} h. ${minutes} m.` : `${hours} h.`;

// if (minutes > 0) {
//   timestring = `${hours} h. ${minutes} m.`;
// } else {
//   timestring = `${hours} h.`;
// }

// console.log(timestring);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("Overmorrow");
} else if (daysUntilDeadline >= 3) {
  console.log("Date in the future");
} else {
  console.log("Wrong data!");
}
