/*
 * Напиши скрипт перевірки підписки користувача придоступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "vip";
// const canAccess = sub === "pro" || sub === "vip"
// // false || false -> false
// // false || true -> true

// console.log(canAccess)

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = false;

/* ми можемо відкрити чат тільки коли друг:
- онлайн (isOnline = true)
- він наш друг (isFriend = true)
- коли у нього вимкнений режим не турбувати (isDnd = false)

true && true && !false -> true
*/
const canOpenChat = isOnline && isFriend && !isDnd;
console.log("Можна відкрити чат? ", canOpenChat);

// const value = 0;

// if (value === 0) {
//   console.log("===");
// }

// // !Boolean(0) -> !false -> true
// if (!value) {
//   console.log("!");
// }
